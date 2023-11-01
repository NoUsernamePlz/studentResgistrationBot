import React from 'react';
import avatarImage from './avatar1.jpg';

const Avatar = () => {
  return (
    <div className='avatar'>
      <img src={avatarImage} alt='avatar' width="full" height='60px' />
    </div>
  );
};

export default Avatar;
