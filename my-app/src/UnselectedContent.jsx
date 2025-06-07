import {Box, Paper, Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

function UnselectedContent({ userInfo, pathname }) {

  return (
    <div className= 'bg-slate-100 h-screen flex items-center justify-center flex-col'>
      <Paper elevation={3} className='w-5/6 h-5/6 p-5 min-h-[170px]'>
        <div className= ' h-full flex items-center justify-center flex-col'>
         
          <ImportContactsIcon sx={{ fontSize: 150 }} />
          <Typography variant='h3'>
            Your Contacts
          </Typography>
          <Typography variant='h6'> Select a contact to display.</Typography>
        </div>
      </Paper>
    </div>
    
      
    
  );
}

export default UnselectedContent