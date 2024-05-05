import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './css/PopupPost.css';
import './css/Exchange.css';
import TextField from "@mui/material/TextField";
import { Avatar, Stack } from "@mui/material";

export default function CommentPopup(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            maxWidth={'md'}
        >
            <DialogTitle>
                <div className='title-post-comment'>Bình luận</div>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={5}>
                    <Stack direction="row" spacing={2} alignItems={'center'}>
                        <Avatar>H</Avatar>
                        <Stack>
                            <div>Name 1</div>
                            <div>Comment 1</div>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems={'center'}>
                        <Avatar>T</Avatar>
                        <Stack>
                            <div>Name 2</div>
                            <div>Comment 2</div>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems={'center'}>
                        <Avatar>Q</Avatar>
                        <Stack>
                            <div>Name 3</div>
                            <div>Comment 3</div>
                        </Stack>
                    </Stack>
                </Stack>


                <TextField className="outlined-basic" variant="outlined" fullWidth/>

            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button type="submit">Post</Button>
            </DialogActions>
        </Dialog>
    );
}