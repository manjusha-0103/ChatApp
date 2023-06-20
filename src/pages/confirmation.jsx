import React from 'react';

const Confirmation = ({ name, age }) => {
  return (
    <div>
      <h2>Your name {name} aged {age} has been added to student system.</h2>
      <p>You may now exit.</p>
    </div>
  );
};

export default Confirmation;