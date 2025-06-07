"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

interface dataProps {
  data: { maxHP: number };
}

const ProgressHP = ({ data }: dataProps) => {
  const { maxHP } = data;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
    
  }, []);

  const scale: number = (maxHP/3300) * 100;

  return (
    <>
      <div className="flex w-full max-w-xl items-center justify-center">
        <FaHeart
          color="red"
          size={40}
          className="bg-red-100  border p-2 rounded-full overflow-visible  -mr-2 z-10 "
        />
        <Progress
          style={{width: `${scale}%`}}
          value={progress}
          className="w-[60%] h-4 bg-gray-200 [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-out [&>div]:bg-red-500 mr-2"
        />
        <p className="text-sm font-medium text-red-600">
          {maxHP.toLocaleString()} HP
        </p>
      </div>
    </>
  );
};

export default ProgressHP;
