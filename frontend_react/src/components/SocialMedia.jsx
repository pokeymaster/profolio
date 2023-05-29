import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin,BsGithub} from'react-icons/bs';
import {FaFacebook} from'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://twitter.com/YudongChen57174'>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/yudongchen8006/'>
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href='https://www.facebook.com/profile.php?id=100088561743929'>
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/yudong-chen-15a58b238/'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href='https://github.com/pokeymaster'>
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia