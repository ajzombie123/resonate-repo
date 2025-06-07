import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AppProvider } from '@toolpad/core/AppProvider';
import ContactsIcon from '@mui/icons-material/Contacts';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { extendTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import PageContent from './PageContent';
import UnselectedContent from './UnselectedContent';


const theme = extendTheme({
  colorSchemes: {
    light: true,
    dark: false,
  }
});

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="h6">Contacts</Typography>
    </Stack>
  );
}

function DashboardLayoutSlots(props) {

  const [users, setUsers] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState([]);
  

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const sortedJson = json.sort((a, b) => a.name.localeCompare(b.name));
        setUserInfo(sortedJson)
        const userContacts = sortedJson.map(element => {
          return {
            segment: `${element.id}`,
            title: `${element.name}`,
            icon: <PersonIcon />,
          };
        });
        setUsers(userContacts);
      })
  }, []);
  
  const contacts = [
    {
      kind: 'header',
      title: 'My Contacts List',
    },
    {
      segment: 'Contacts',
      title: 'Contacts',
      icon: <ContactsIcon />,
      children: users 
    },
  ];

  const router = useDemoRouter('/dashboard');

  return (
    <DemoProvider>
      <AppProvider
        navigation={contacts}
        router={router}
        theme={theme}
      >
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
          }} 
        >
          {router.pathname !== "/dashboard" ? (
            <PageContent userInfo={userInfo} pathname={router.pathname}/> 
            ) : (<UnselectedContent/>)
          }
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

export default DashboardLayoutSlots;