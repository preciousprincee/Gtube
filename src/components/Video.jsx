import React, { useState } from 'react';
import { VideoDetail } from './';

const Video = ({ videoId, snippet }) => {
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const onThumbnailLoad = () => {
    setThumbnailLoaded(true);
  };

  return (
    <div className="relative lg:pr-4  lg:pl-0">
      {!thumbnailLoaded && (
        <div className="bg-gray-300 h-48 w-80 absolute top-0 left-0">
          <img
            src={snippet && snippet.thumbnails && snippet.thumbnails.medium.url}
            alt={snippet && snippet.title}
            className="lg:w-full  w-40 h-48 object-cover rounded-md mb-2"
            onLoad={onThumbnailLoad}
          />
        </div>
      )}
      <iframe
        title={`YouTube Video ${videoId}`}
        width="367"
        height="190"
        src={videoUrl}
        className='lg:p-40 lg:w-96'
      ></iframe>
      <VideoDetail />
    </div>
  );
};

export default Video;
