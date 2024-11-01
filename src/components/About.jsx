import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <>
      {/* Section with About Content */}
      <WordAnimation />
    </>
  );
};

const WordAnimation = () => {
  const words = ["Biryani", "Soft Drinks", "Pizza", "Burgers", "Pasta", "Ice Cream", "Fries", "Juices"];
  const [activeWords, setActiveWords] = useState([]);

  useEffect(() => {
    const addWord = () => {
      const newWord = words[Math.floor(Math.random() * words.length)];
      const id = Math.random().toString(36).substr(2, 9); // Generate random ID

      const newActiveWord = {
        id,
        word: newWord,
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%"
      };

      setActiveWords((prev) => [...prev, newActiveWord]);

      setTimeout(() => {
        setActiveWords((prev) => prev.filter((word) => word.id !== id));
      }, Math.random() * 1500 + 1500); // 1.5 to 3 seconds
    };

    const interval = setInterval(addWord, 200); // Add a new word every 800ms
    return () => clearInterval(interval); // Clean up
  }, [words]);

  return (
    <div className=" relative w-full h-[500px]  overflow-hidden">
      {activeWords.map(({ id, word, top, left }) => (
        
        <span
          key={id}
          className="absolute text-gray-700 text-3xl font-bold  animate-fade"
          style={{ top, left }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default About;
