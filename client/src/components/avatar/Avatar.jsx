import React from "react";
import './avatar.css'

const Avatar = ({rounded, src, alt}) => {
  return (
    <div className="avatar">
      <img
        src={src}
        alt={alt}
        className={`w-100 h-100 object-fit-cover ${rounded ? 'rounded-circle' : ''} `}
      />
    </div>
  );
};

export default Avatar;
