import React from 'react';

const VideoDetail = ({  desc }) => {
 
  return (
    <div className="text-left w-80 mr-10">
    
      <h2 className="text-lg font-bold  ">{desc && desc.title}</h2>
      <p className="text-sm">{desc && desc.description}</p>
    </div>
  );
};

export default VideoDetail;
