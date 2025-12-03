"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Speak with confidence",
  "Write with clarity",
  "Think in English",
  "Express yourself freely",
  "Master grammar naturally",
];

export default function TypingAnimation() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1));
          setDelta(150 - Math.random() * 50);
        } else {
          // Pause at end before deleting
          setDelta(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1));
          setDelta(75);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDelta(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delta]);

  return (
    <div className="text-2xl md:text-3xl font-serif text-sage h-full flex items-center">
      <span>{text}</span>
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
}
