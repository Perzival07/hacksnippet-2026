import React from 'react';

const VideoBackground = ({ src, className = '', poster = '', overlay = null }) => {
  const containerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  const overlayStyle = overlay
    ? {
        position: 'absolute',
        inset: 0,
        background: overlay,
        pointerEvents: 'none',
        zIndex: 1
      }
    : null;

  return (
    <div style={containerStyle} className={className} aria-hidden="true">
      <video
        src={src}
        style={videoStyle}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      />
      {overlay && <div style={overlayStyle} />}
    </div>
  );
};

export default VideoBackground;
