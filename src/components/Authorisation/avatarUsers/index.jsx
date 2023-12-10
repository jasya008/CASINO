import React, { useState } from 'react';

const AvatarUsers = ({ setState }) => {
  const avatars = [
    {
      id: 1,
      img: '/static/iconUser1.svg',
    },
    {
      id: 2,
      img: '/static/iconUser2.svg',
    },
    {
      id: 3,
      img: '/static/iconUser3.svg',
    },
    {
      id: 4,
      img: '/static/iconUser4.svg',
    },
    {
      id: 5,
      img: '/static/iconUser5.svg',
    },
    {
      id: 6,
      img: '/static/iconUser6.svg',
    },
  ];

  return (
    <div className='avatarImages'>
      {avatars.map((avatar) => (
        <img
          className='avatar'
          src={avatar.img}
          alt=''
          onClick={() => setState('avatar', avatar.id)}
        />
      ))}
    </div>
  );
};

export default AvatarUsers;
