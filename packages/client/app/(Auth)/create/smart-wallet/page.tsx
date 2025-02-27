'use client';
import AuthNavbar from '@/app/_components/Navbar/LoginNavbar';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const OtpPage = () => {
  const router = useRouter();
  const createWallet = () => {
    toast.loading('Creating wallet..', {
      id: 'createWallet'
    });
    setTimeout(() => {}, 5000);

    toast.dismiss('createWallet');
    router.push('/dashboard');
  };
  return (
    <>
      <AuthNavbar />

      <main className="w-[100vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
        <div className="md:w-[600px] w-[510px] py-4 flex flex-col justify-center items-center gap-4 px-[64px] place-self-center">
          <h1 className="text-[39px] pb-8 font-normal">Create Smart Wallet</h1>

          <button
            onClick={createWallet}
            className="w-[100%] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
          >
            <Image
              src={'/wallet.svg'}
              alt="blender"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Create</h3>
          </button>
        </div>
        <div className="w-[100%] h-[100%]">
          <Image
            src={'/landing2.png'}
            width={1024}
            height={1024}
            alt="mixers"
            className="min-h-[96%]"
          />
          <div className="grid bg-[#f1f1f133] backdrop-blur-[25px] mt-[-147px] rounded-ee-[32px] p-4">
            {/* LOGO NAME */}
            <div className="flex flex-row justify-center gap-6 self-center">
              <Image
                className="place-self-center self-center"
                src={'/logo.svg'}
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-8xl self-center">BridgePay</h1>
            </div>
            {/* Caption */}
            <h3 className="self-center place-self-center text-[32px]">
              Start transfering CrossChain
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default OtpPage;
