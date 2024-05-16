'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ChooseChain = ({ chain }: any) => {
  const [style, setStyle] = useState('');
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`bg-[#CFE3E2] rounded-[8px] px-[7px] grid w-[70px] h-[70px] mb-2 hover:border-b-[4px] hover:border-t-[4px] border-[1px] border-solid border-[#2f2f2f] ${style}`}
      onClick={() => {
        if (!clicked) {
          setStyle('border-b-[4px] border-[2px] bg-[#dddddd]');
          setClicked(true);
        } else if (clicked) {
          setStyle('');
          setClicked(false);
        }
      }}
    >
      <Image
        src={`/chooseChain/${chain}.png`}
        height={40}
        width={40}
        alt="eth"
        className="self-center place-self-center"
      />
    </div>
  );
};

export default ChooseChain;
