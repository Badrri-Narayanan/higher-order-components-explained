import React from 'react';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
  </div>
);

export default UserProfile;
