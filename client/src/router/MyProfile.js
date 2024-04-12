import React from 'react';
import './css/MyProfile.css' 
import ava from './pictures/tfboys.jpg';

function Setting_Profile() {
  return (        
    <div className='my_profile'>
      <div className='my_profile_theme'>
        <span>My Profile</span>
      </div>
      <div className='my_profile_name'>
        <div className='my_profile_avatar'>
          <img src={ava}></img>
        </div>
        <div className='main_information'>
          <span>iAMMIA</span>
          <span style={{color: 'gray'}}>Lê Phương Thảo</span>
          <span style={{color: 'gray'}}>University of Information Technology</span>
        </div>
      </div>
      <div className='my_profile_infomation'>
        <div className='personal_information'><span>Personal Information</span></div>
        <div className='table_infor'>
          <table className='table_personal_infor'>
            <tbody>
                <tr className='row_child' style={{color: 'gray'}}>
                  <td className='column_1'>Email</td>
                  <td className='column_1'>Phone number</td>
                </tr>
                <tr className='row_child'>
                  <td className='column'>21522608@gm.uit.edu.vn</td>
                  <td className='column'>0335739591</td>
                </tr>
                <tr className='row_child' style={{color: 'gray'}}>
                  <td className='column_1'>Career</td>
                  <td className='column_1'>Gender</td>
                </tr>
                <tr className='row_child'>
                  <td className='column'>Student</td>
                  <td className='column'>Female</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='my_profile_infomation'>
        <div className='personal_information'><span>Address</span></div>
        <div className='table_infor'>
          <table className='table_personal_infor'>
            <tbody>
                <tr className='row_child' style={{color: 'gray'}}>
                  <td className='column_1'>Country</td>
                  <td className='column_1'>City</td>
                </tr>
                <tr className='row_child'>
                  <td className='column'>Viet Nam</td>
                  <td className='column'>Binh Dinh Province</td>
                </tr>
                <tr className='row_child' style={{color: 'gray'}}>
                  <td className='column_1'>Area code</td>
                  <td className='column_1'></td>
                </tr>
                <tr className='row_child'>
                  <td className='column'>0256</td>
                  <td className='column'></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='my_profile_btn_edit'>
        <button>EDIT</button>
      </div>
    </div>

  )
}

export default Setting_Profile;