import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './css/PopupPost.css';
import './css/Exchange.css';
import ava1 from './pictures/ava1.jpg';

export default function PostPopup(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      
    >
      <DialogTitle>
        <div className='title-post'>Tạo bài viết </div>
      </DialogTitle>
      <DialogContent>
        <div className='post-user'>
          <div className='post-user-avatar' >
            <img src={ava1} className='img'></img>
          </div>
          <div className='post-user-info'>
            <div className='post-user-name'>Thanh Trúc</div>
          </div>
        </div>

        <div className='post-content'>
          <textarea name='content'/>
        </div>       
        
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button type="submit">Post</Button>
      </DialogActions>
    </Dialog>
  );
}