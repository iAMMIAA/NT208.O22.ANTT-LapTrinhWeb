import React, { useEffect, useState } from 'react';
import './css/Setting.css' 
import ava from './pictures/tfboys.jpg';
import axios from 'axios';
import { faCircleHalfStroke, faLanguage, faHistory, faDashboard} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Setting() {

  return (    
    <div className='setting'>
      <div className='setting_theme'>
        <span>Cài đặt trang web</span>
      </div>
      <div className='setting_container'>
        <div>
          <p><FontAwesomeIcon icon={faCircleHalfStroke}/> Giao diện</p>
        </div>
        <div>
          <p><FontAwesomeIcon icon={faLanguage}/> Chuyển đổi ngôn ngữ</p>
        </div>
        <p><FontAwesomeIcon icon={faHistory}/> Xem các bài viết hỏi đáp</p>
        <p style={{color: 'red'}}>Xóa tài khoản</p>
      </div>
      <div className='my_profile_btn_edit'>
        <button>Lưu</button>
      </div>   
    </div>
    

  )
}

export default Setting;