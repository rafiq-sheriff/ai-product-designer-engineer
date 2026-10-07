import React, { useState, useEffect } from 'react';

export const Clock: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12; // convert 0 to 12
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      setTimeStr(`${hours}:${formattedMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      fontSize: '0.85rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      color: '#a1a1aa',
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {timeStr || '12:11 PM'}
    </div>
  );
};
