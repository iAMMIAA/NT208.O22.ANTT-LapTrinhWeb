import React, { useState } from 'react';
import './css/MyProfile.css' 
import ava from './pictures/tfboys.jpg';
import axios from 'axios';

function Setting_Profile(infoUser) {
  const [openStateEdit, setOpenStateEdit] =useState(true);
  const { data1, data2} = infoUser;
  // alert(`${data1}`);
  // alert('pw:', data1);
  const [updateFormProfile, setUpdateFormProfile] = useState({
    userName: data1,
    password: data2,
    fullName: '',
    school: '',
    email: '',
    phoneNumber: '',
    career: '',
    gender: '',
    country: '',
    city: '',
    areaCode: ''
  });

  const handleOpenStateEdit = () =>{
    setOpenStateEdit(true);
  }
  const changeFormProfile = (event) => {
    const { name, value } = event.target;
    setUpdateFormProfile({
      ...updateFormProfile,
      [name]: value,
    });
  };

  const sendFormUpdatedProfile = (event) => {
    event.preventDefault();
    console.log(FormData);

    axios.post('http://localhost:3001/update_profile', updateFormProfile)
        .then(Response => {
          console.log('Response: ', Response.data);
          setOpenStateEdit(false);
        })
        .catch(error => {
          console.error('Loi cmnr: ', error);
          alert('Cập nhật thông tin thất bại!');
        })
  }

  return (    
    <div className='my_profile'>
      {openStateEdit ? (
        <div className='test'>
          <div className='my_profile_theme'>
            <span>My Profile</span>
          </div>
          <form onSubmit={sendFormUpdatedProfile}>
            <div className='my_profile_name'>
              <div className='my_profile_avatar'>
                <img src={ava}></img>
              </div>
              <div className='main_information'>
                <span>iAMMIA</span>
                <span style={{color: 'gray'}}><input placeholder='Họ và tên' type='text' name='fullName' value={updateFormProfile.fullName} onChange={changeFormProfile}></input></span>
                <span style={{color: 'gray'}}><input placeholder='Trường học' type='text' name='school' value={updateFormProfile.school} onChange={changeFormProfile}></input></span>
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
                        <td className='column'><input placeholder='Thông tin email' name='email' value={updateFormProfile.email} onChange={changeFormProfile}></input></td>
                        <td className='column'><input placeholder='Số điện thoại' name='phoneNumber' value={updateFormProfile.phoneNumber} onChange={changeFormProfile}></input></td>
                      </tr>
                      <tr className='row_child' style={{color: 'gray'}}>
                        <td className='column_1'>Career</td>
                        <td className='column_1'>Gender</td>
                      </tr>
                      <tr className='row_child'>
                        <td className='column'><input placeholder='Nghề nghiệp' name='career' value={updateFormProfile.career} onChange={changeFormProfile}></input></td>
                        <td className='column'><input placeholder='Giới tính' name='gender' value={updateFormProfile.gender} onChange={changeFormProfile}></input></td>
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
                      <td className='column'><input placeholder='Đất nước' name='country' value={updateFormProfile.country} onChange={changeFormProfile}></input></td>
                        <td className='column'><input placeholder='Thành phố' name='city' value={updateFormProfile.city} onChange={changeFormProfile}></input></td>
                      </tr>
                      <tr className='row_child' style={{color: 'gray'}}>
                        <td className='column_1'>Area code</td>
                        <td className='column_1'></td>
                      </tr>
                      <tr className='row_child'>
                        <td className='column'><input placeholder='Mã khu vực' name='areaCode' value={updateFormProfile.areaCode} onChange={changeFormProfile}></input></td>
                        <td className='column'></td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form>
          <div className='my_profile_btn_edit'>
            <button onClick={sendFormUpdatedProfile}>SAVE</button>
          </div>
        </div>
      ) : (
        <div className='test'>
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
            <button onClick={handleOpenStateEdit}>EDIT</button>
          </div>
        </div>
      )}
      
    </div>
    

  )
}

export default Setting_Profile;