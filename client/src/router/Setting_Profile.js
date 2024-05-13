import React, { useEffect } from 'react';
import './css/Setting_Profile.css' 
import { Link, Route, Routes } from 'react-router-dom';
import MyProfile from './MyProfile';
import Setting from './Setting';

function Setting_Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
      <div className='setting_profile'>
          <div className='left_setting_profile'>
            <Link className='render_profile' to='/setting_profile'>
              <span>Thông tin cá nhân</span>
            </Link>
            <Link className='render_setting' to='/setting_profile/setting'>
              <span>Cài đặt</span>
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