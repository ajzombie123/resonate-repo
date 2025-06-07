import {Box, Paper, Typography, Avatar} from '@mui/material';
import { useState, useEffect } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import './App.css';

function PageContent({ userInfo, pathname }) {

  const [user, setUser] = useState(null)
  const userId = parseInt(pathname.replace('/Contacts/', ''));

  useEffect(() => {
    const foundUser = userInfo.find(user => user.id === userId);
    setUser(foundUser);
    console.log(foundUser)
  }, [userInfo, userId]); 

  console.log(user)

  if (!user) {
    return <></>;
  }

  return (
  <div className='bg-slate-100 h-screen overflow-y-auto flex justify-center pt-8'>
    <div className='bg-slate-100 w-full min-h-full p-5 rounded-lg'>

      <div className='min-h-full flex flex-col'>
        <Paper sx={{ flexShrink: 0 }} elevation={3} className='max-[650px]:h-[350px] w-full h-[250px] flex justify-center items-center flex-col rounded-lg gap-1 mb-3 p-4'>
          <Avatar sx={{ width: 70, height: 70, marginBottom: "5px", backgroundColor: "#1565c0"}}>{user.name.charAt(0)}</Avatar>
          <Typography variant='h4'>
            {user.name}
          </Typography>
          <div className='flex flex-row gap-1'>
            <PersonOutlineIcon></PersonOutlineIcon>
            <Typography>@{user.username}</Typography>
          </div>
          <div className='gap-2 flex max-[650px]:flex-col'>

            <div className='flex flex-row gap-1'>
              <EmailIcon></EmailIcon>
              <div className='text-sm'>{user.email}</div>
            </div>

            <div className='flex flex-row gap-1'>
              <LocalPhoneIcon></LocalPhoneIcon>
              <div className='text-sm'>{user.phone}</div>
            </div>

            <div className='flex flex-row gap-1'>
              <LanguageIcon></LanguageIcon>
              <div className='text-sm'>{user.website}</div>
            </div>

          </div>

        </Paper>

        <div className='flex flex-row w-full gap-3 max-[650px]:flex-col'>
          <Paper sx={{ flexShrink: 0 }} elevation={3} className='p-4 flex-1 h-[320px] rounded-lg'>

            <div className='flex items-center gap-3 mb-4'>
              <div className='p-2 bg-blue-100 rounded-lg'>
                <LocationOnIcon sx={{color: '#667eea', fontSize: 24}} />
              </div>
              <Typography variant='h6' className='font-semibold text-gray-800'>
                Address
              </Typography>
            </div>

            <div className='text-gray-500'>CITY</div>
            <div className='mb-3' >{user.address.city}</div>

            <div className='text-gray-500'>COORDINATES</div>
            <div className='mb-3'>{user.address.geo.lat}, {user.address.geo.lng}</div>

            <div className='text-gray-500'>STREET ADDRESS</div>
            <div className='mb-3'>{user.address.street}, {user.address.suite}</div>

            <div className='text-gray-500'>ZIPCODE</div>
            <div className='mb-3'>{user.address.zipcode}</div>
          </Paper>

          <Paper sx={{ flexShrink: 0 }} elevation={3} className='p-4 flex-1 h-[auto] rounded-lg'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='p-2 bg-blue-100 rounded-lg'>
                <BusinessIcon sx={{color: '#667eea', fontSize: 24}} />
              </div>
              <Typography variant='h6' className='font-semibold text-gray-800'>
                Company
              </Typography>
            </div>

            <div className='text-gray-500'>COMPANY NAME</div>
            <div className='mb-3'>{user.company.name}</div>

            <div className='text-gray-500'>CATCHPHRASE</div>
            <i><div className='mb-3'>'{user.company.catchPhrase}'</div></i>

            <div className='text-gray-500'>BUSINESS</div>
            <div className='mb-3'>{user.company.bs}</div>

          </Paper>

        </div>
      </div>
    </div>
  </div>
      
    
  );
}

export default PageContent