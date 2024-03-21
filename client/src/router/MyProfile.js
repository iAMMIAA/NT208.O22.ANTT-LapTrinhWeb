import React from 'react';
import './css/MyProfile.css' 
import tfboys from './pictures/tfboys.jpg'

function MyProfile() {
  return (
    <div className='profile'>
        <div className='pro'>
            <h1 className='title'> My Profile </h1>
            <div className="underline"></div>
            <div className='username'>

                <img src={tfboys} alt=""/> 
                <div className='infousername'>
                  <div className='uname'>iAMMIA </div>
                  <div className='realname'>Lê Phương Thảo</div>
                  <div className='workplace'>University Information Technology</div>
                </div>
                
            </div>
            <div className="underline"> </div>
            
            <h2 className='title2'>Pesonal Info</h2>
            <div className='pesonalinfo'> 
                
                <div className='emailgender'>
                <div className='email'>
                  <div className='pesonalinfo1'> Email </div>
                  <div className='pesonalinfo2'> abc@gmail.com</div>
                </div>
                <div className='gender'>
                  <div className='pesonalinfo1'> Gender </div>
                  <div className='pesonalinfo2'> Female </div>
                </div>
                </div>

                <div className='phonecareer'>
                <div className='phone'>
                  <div className='pesonalinfo1'> Phone Number </div>
                  <div className='pesonalinfo2'> 0123456789 </div>
                </div>

                <div className='career'>
                  <div className='pesonalinfo1'> Career </div>
                  <div className='pesonalinfo2'> Student</div>
                </div>

                </div>       
            </div>
           
            <div className="underline"> </div>
            <h2 className='title2'>Address</h2>
            
            <div className='address'>
              <div className='countryareacode'>
                <div className='country'>
                  <div className='pesonalinfo1'> Country </div>
                  <div className='pesonalinfo2'> Việt Nam</div>
                </div>

                <div className='areacode'>
                  <div className='pesonalinfo1'> Area code </div>
                  <div className='pesonalinfo2'> 0256</div>
                </div>

              </div>
            
              <div className='city'>
                <div className='pesonalinfo1'> City </div>
                <div className='pesonalinfo2'> Binh Dinh Province </div>
              </div>
            </div>

            <div className='edit'> Edit </div>
            


        </div>
    </div>

  )
}

export default MyProfile;