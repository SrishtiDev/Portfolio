import React from 'react';

const NetworkLine = ({ height = "70px" }) => {
  return (
    <div className="relative flex items-center justify-center p-0" style={{ height }}>
      <div 
        className="h-full w-[1px] p-0 animate-[gradientAnimation_2s_linear_infinite]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #404040 0%, #aaa 5%, #404040 10%)',
          backgroundSize: '100% 200%'
        }}
      ></div>
    </div>
  );
};

export default NetworkLine;
