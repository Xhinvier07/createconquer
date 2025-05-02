import { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="countdown-timer">
        <div className="countdown-expired">
          Registration has closed!
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-timer">
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        
        <div className="countdown-separator">:</div>
        
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;