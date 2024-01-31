import React, { useState } from 'react';

const AvatarUsers = ({ setState }) => {
  const avatars = [
    {
      id: 1,
      img: '/static/images/iconUser1.svg',
    },
    {
      id: 2,
      img: '/static/images/iconUser2.svg',
    },
    {
      id: 3,
      img: '/static/images/iconUser3.svg',
    },
    {
      id: 4,
      img: '/static/images/iconUser4.svg',
    },
    {
      id: 5,
      img: '/static/images/iconUser5.svg',
    },
    {
      id: 6,
      img: '/static/images/iconUser6.svg',
    },
  ];

  return (
    <div className='avatarImages'>
      {avatars.map((avatar) => {

        return <img
          className='avatar'
          src={avatar.img}
          alt='error'
          key={avatar.id}
          onClick={() => setState('avatar', avatar.id)}
        />;
      })}
    </div>
  );
};

export default AvatarUsers;
