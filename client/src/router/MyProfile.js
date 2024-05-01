import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/MyProfile.css';
import ava from './pictures/tfboys.jpg';

function Setting_Profile() {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user', {
          params: {
            username: 'Le Phuong Thao',
            useremail:'21522608@gm.uit.edu.vn',
            userphone:'0335739591',
            usercareer:'Student',
            usergender:'Female',
            usercountry:'Viet nam',
            usercity:'Binh Dinh Province',
            userareacode:'0256',
            userpassword: '123',
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Gửi dữ liệu mới lên server để cập nhật vào cơ sở dữ liệu
      await axios.post('http://localhost:3001/updateuser', userData);
      // Sau khi cập nhật thành công, tắt chế độ chỉnh sửa
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  return (
    <div className='my_profile'>
      <div className='my_profile_theme'>
        <span>My Profile</span>
      </div>
      {userData && (
        <div className='my_profile_name'>
          <div className='my_profile_avatar'>
            <img src={ava} alt='Avatar' />
          </div>
          <div className='main_information'>
            <span>Iammia</span>
              <input
              type="text"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              style={{ color: 'gray', background: 'none', outline: 'none' }}
            />
            <span style={{ color: 'gray' }}>university</span>
          </div>
        </div>
      )}
      {userData && (
        <div className='my_profile_infomation'>
          <div className='personal_information'>
            <span>Personal Information</span>
          </div>
          <div className='table_infor'>
            <table className='table_personal_infor'>
              <tbody>
                <tr className='row_child' style={{ color: 'gray' }}>
                  <td className='column_1'>Email</td>
                  <td className='column_1'>Phone number</td>
                </tr>
                <tr className='row_child'>
              <td className='column'>
                <input
                  type="text"
                  value={userData.useremail}
                  onChange={(e) => setUserData({ ...userData, useremail: e.target.value })}
                  style={{ color: 'gray', background: 'none', outline: 'none' }}
                />
              </td>
              <td className='column'>
                <input
                  type="text"
                  value={userData.userphone}
                  onChange={(e) => setUserData({ ...userData, userphone: e.target.value })}
                  style={{ color: 'gray', background: 'none', outline: 'none' }}
                />
              </td>
              </tr>

                <tr className='row_child' style={{ color: 'gray' }}>
                  <td className='column_1'>Career</td>
                  <td className='column_1'>Gender</td>
                </tr>
                <tr className='row_child'>
                <td className='column'>
                  <input
                    type="text"
                    value={userData.usercareer}
                    onChange={(e) => setUserData({ ...userData, usercareer: e.target.value })}
                    style={{ color: 'gray', background: 'none', outline: 'none' }}
                  />
                </td>
                <td className='column'>
                  <input
                    type="text"
                    value={userData.usergender}
                    onChange={(e) => setUserData({ ...userData, usergender: e.target.value })}
                    style={{ color: 'gray', background: 'none', outline: 'none' }}
                  />
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      )}
      {userData && (
        <div className='my_profile_infomation'>
          <div className='personal_information'>
            <span>Address</span>
          </div>
          <div className='table_infor'>
            <table className='table_personal_infor'>
              <tbody>
                <tr className='row_child' style={{ color: 'gray' }}>
                  <td className='column_1'>Country</td>
                  <td className='column_1'>City</td>
                </tr>
                <tr className='row_child'>
              <td className='column'>
                <input
                  type="text"
                  value={userData.usercountry}
                  onChange={(e) => setUserData({ ...userData, usercountry: e.target.value })}
                  style={{ color: 'gray', background: 'none', outline: 'none' }}
                />
              </td>
              <td className='column'>
                <input
                  type="text"
                  value={userData.usercity}
                  onChange={(e) => setUserData({ ...userData, usercity: e.target.value })}
                  style={{ color: 'gray', background: 'none', outline: 'none' }}
                />
              </td>
            </tr>

                <tr className='row_child' style={{ color: 'gray' }}>
                  <td className='column_1'>Area code</td>
                  <td className='column_1'></td>
                </tr>
                <tr className='row_child'>
                <td className='column'>
                    <input
                      type="text"
                      value={userData.userareacode}
                      onChange={(e) => setUserData({ ...userData, userareacode: e.target.value })}
                      style={{ color: 'gray', background: 'none', outline: 'none' }}
                    />
                  </td>
                  <td className='column'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className='my_profile_btn_edit'>
        {editing ? (
          <button onClick={handleSaveClick}>SAVE</button>
        ) : (
          <button onClick={handleEditClick}>EDIT</button>
        )}
      </div>
    </div>
  );
}

export default Setting_Profile;
