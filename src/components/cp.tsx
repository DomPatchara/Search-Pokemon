"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import mystic from "../../assets/mystic.png"
import { Progress } from "@/components/ui/progress";

interface dataProps {
    data: {maxCP : number}
}

const ProgressCP = ({data}: dataProps) => {

    const { maxCP } = data;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  const scale: number = (maxCP/3300) * 100;

  return (
    <>
      <div className="flex w-full max-w-xl  items-center justify-center">
        <Image
          src={mystic}
          width={40}
          height={40}
          alt="CP"
          className="-mr-2 z-10"
        />
        <Progress
          style={{width: `${scale}%`}}
          value={progress}
          className="h-4 bg-gray-200 [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-out [&>div]:bg-blue-500 mr-2"
        />
        <p className="text-sm font-medium text-blue-600">
          {maxCP.toLocaleString()} CP
        </p>
      </div>
    </>
  );
}

export default ProgressCP;
