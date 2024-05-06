import React, { useEffect, useState } from 'react';
import './css/MyProfile.css' 
import ava from './pictures/tfboys.jpg';
import axios from 'axios';

function Setting_Profile() {
  const [openStateEdit, setOpenStateEdit] =useState(false);
  const [updateFormProfile, setUpdateFormProfile] = useState({
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
  
  useEffect(() => {
    axios.get(`http://localhost:3001/user/${localStorage.getItem('idUser')}`)
        .then(response => {
          const infoUser = response.data;
          setUpdateFormProfile({
            fullName: infoUser.fullName,
            school: infoUser.school,
            email: infoUser.useremail,
            phoneNumber: infoUser.phoneNumber,
            career: infoUser.career,
            gender: infoUser.gender,
            country: infoUser.country,
            city: infoUser.city,
            areaCode: infoUser.areaCode
          })
        })
        .catch(error => {
          console.error('error: ', error);
          alert('loi cmnr');
        })
  }, []);

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
  const cancelEditProfile = () => {
    setOpenStateEdit(false);
  }
  const sendFormUpdatedProfile = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3001/update_profile/${localStorage.getItem('idUser')}`, updateFormProfile)
        .then(Response => {
          console.log('Response: ', Response.data);
          setOpenStateEdit(false);
        })
        .catch(error => {
          console.error('Loi cmnr: ', error);
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
            <button onClick={cancelEditProfile}>CANCEL</button>
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
              <span style={{color: 'gray'}}>{updateFormProfile.fullName}</span>
              <span style={{color: 'gray'}}>{updateFormProfile.school}</span>
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
                      <td className='column'>{updateFormProfile.email}</td>
                      <td className='column'>{updateFormProfile.phoneNumber}</td>
                    </tr>
                    <tr className='row_child' style={{color: 'gray'}}>
                      <td className='column_1'>Career</td>
                      <td className='column_1'>Gender</td>
                    </tr>
                    <tr className='row_child'>
                      <td className='column'>{updateFormProfile.career}</td>
                      <td className='column'>{updateFormProfile.gender}</td>
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
                      <td className='column'>{updateFormProfile.country}</td>
                      <td className='column'>{updateFormProfile.city}</td>
                    </tr>
                    <tr className='row_child' style={{color: 'gray'}}>
                      <td className='column_1'>Area code</td>
                      <td className='column_1'></td>
                    </tr>
                    <tr className='row_child'>
                      <td className='column'>{updateFormProfile.areaCode}</td>
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