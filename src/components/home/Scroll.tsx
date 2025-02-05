"use client";
import React, { useEffect, useState } from "react";

const Scroll = () => {
  const [fade, setFade] = useState<number>(0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;
    const opacity = Math.min(scroll / height, 1);
    setFade(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="arrow" style={{ opacity: 1 - fade }}>
      <i className={"fa-solid fa-arrow-down"} />
    </div>
  );
};

export default Scroll;
