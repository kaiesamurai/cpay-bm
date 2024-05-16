import Image from 'next/image';
import React from 'react';

const ChainSubtotal = ({ chain, fund = 0 }: any) => {
  return (
    <div className="w-[366px] border-[1px] border-solid border-[#000000] grid grid-flow-col rounded-[8px]">
      <div className="w-[220px] px-4 py-[4px] grid grid-flow-col gap-[10px]">
        <Image
          src={`/chainSubtotal/${chain}.png`}
          height={30}
          width={30}
          alt="optimism chain"
          className="place-self-start self-center"
        />
        <h4 className="text-[18px] capitalize">{chain}</h4>
      </div>
      <h4 className="w-[146px] bg-[#000000] px-[10px] py-[4px] text-center text-[#ffffff] text-[18px] rounded-r-[8px]">
        ${fund}
      </h4>
    </div>
  );
};

export default ChainSubtotal;
