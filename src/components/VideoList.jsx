import React from 'react';
import { Link } from 'react-router-dom';
import { VideoDetail, Video} from './';

const VideoList = ({ videos }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-row-3 lg:grid-cols-3 lg:grid-rows-3 gap-4 w-full mt-10">
      {videos.map((video, index) => (
        <div key={video.id.videoId} className="video-row">
          {console.log(video.id.videoId)}
          <div>
            <Link to={`/video/${video.id.videoId}`}>
              <div className="flex flex-col items-center lg:mr-96 pl-0 mb-4">
               
                <Video videoId={video.id.videoId} snippet={video.snippet} />
                <div className="text-left ml-0">
                <VideoDetail  desc={video.snippet} />
                  
                </div>
              </div>
            </Link>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default VideoList;
