import * as React from 'react'; 
import './css/PopupPost.css';
import './css/Exchange.css';
import ava1 from './pictures/ava1.jpg';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, DialogContentText } from '@mui/material';

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