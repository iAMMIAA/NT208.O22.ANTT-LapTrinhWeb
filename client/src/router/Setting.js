import React from 'react';
import './css/Setting.css' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faUser, faGlobe,faLock, faCircleQuestion, faCircleInfo, faChevronRight} from '@fortawesome/free-solid-svg-icons';


function Setting() {
  return (
    <div className='settings'>
        <div className="set">
          <h1 className='title'> Setting</h1>
            <div className='function'>
              <FontAwesomeIcon className="imgset" icon={faCircleHalfStroke} />
              <h3 className='text'> Dark Mode</h3>
              <FontAwesomeIcon className="imgset1" icon={faChevronRight} />
            </div>
            <div className='function'>
              <FontAwesomeIcon className="imgset" icon={faGlobe} />
              <h3 className='text'> Change Language</h3>
              <FontAwesomeIcon className="imgset1" icon={faChevronRight} />
            </div>

            <div className='function'>
              <FontAwesomeIcon className="imgset" icon={faLock} />
              <h3 className='text'> Change Password</h3>
              <FontAwesomeIcon className="imgset1" icon={faChevronRight} />
            </div>

            <div className='function'>
              <FontAwesomeIcon className="imgset" icon={faCircleQuestion} />
              <h3 className='text'> Feedback</h3>
              <FontAwesomeIcon className="imgset1" icon={faChevronRight} />
            </div>

            <div className='function'>
              <FontAwesomeIcon className="imgset" icon={faCircleInfo} />
              <h3 className='text'> About</h3>
              <FontAwesomeIcon className="imgset1" icon={faChevronRight} />
            </div>

        </div>
    </div>
  )
}

export default Setting;