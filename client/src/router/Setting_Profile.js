import React, { useEffect, useState } from 'react';
import './css/Setting_Profile.css';
import { Link, Route, Routes } from 'react-router-dom';
import MyProfile from './MyProfile';
import Setting from './Setting';

function Setting_Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply initial mode
    document.body.classList.toggle('dark-mode', isDarkMode);
    // document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`setting_profile ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`left_setting_profile ${isDarkMode ? 'dark-mode' : ''}`}>
        <Link className='render_profile' to='/setting_profile'>
          <span>Thông tin cá nhân</span>
        </Link>
        <Link className='render_setting' to='/setting_profile/setting'>
          <span>Cài đặt</span>
        </Link>
      </div>

      <div className={`right_setting_profile ${isDarkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path='' element={<MyProfile isDarkMode={isDarkMode} />} />
          <Route 
            path='/setting' 
            element={<Setting isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default Setting_Profile;