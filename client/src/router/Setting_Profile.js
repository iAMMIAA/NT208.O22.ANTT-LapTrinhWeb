import React from 'react';
import './css/Setting_Profile.css' 
import { Link, Route, Routes } from 'react-router-dom';
import MyProfile from './MyProfile';
import Setting from './Setting';

function Setting_Profile({data}) {
  // const { data1, data2 } = data;
  alert(`${data}`);

  return (
      <div className='setting_profile'>
          <div className='left_setting_profile'>
            <Link className='render_profile' to='/setting_profile'>
              <span>My Profile</span>
            </Link>
            <Link className='render_setting' to='/setting_profile/setting'>
              <span>Setting</span>
            </Link>
          </div>

          <div className='right_setting_profile'>
            <Routes>
              <Route path='' element={<MyProfile/>}></Route>
              <Route path='/setting' element={<Setting/>}></Route>
            </Routes>
          </div>
      </div>
  )
}

export default Setting_Profile;