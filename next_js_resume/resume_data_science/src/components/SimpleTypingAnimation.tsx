import React, { useEffect, useState } from 'react';

interface SimpleTypingAnimationProps {
  text: string;
  onComplete?: () => void;
}

const SimpleTypingAnimation: React.FC<SimpleTypingAnimationProps> = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  }, [index, text, displayedText, onComplete]);

  return <span>{displayedText}</span>;
};

export default SimpleTypingAnimation;