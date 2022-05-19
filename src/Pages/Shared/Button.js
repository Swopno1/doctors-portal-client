import React from 'react';

const Button = ({ btnBg, btnText }) => {
  return (
    <button
      className={`btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ${btnBg}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
