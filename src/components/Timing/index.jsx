import React from 'react';
import s from './index.module.scss';

export const Timing = () => {
  const [showDelayedText, setShowDelayedText] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setShowDelayedText(true);
    }, 1000);
  };
  return (
    <>
      {showDelayedText && (
        <div className="body">
            <p className={s.text}>This text appears after a delay.</p>
        </div>
      )}
    </>
  );
};
