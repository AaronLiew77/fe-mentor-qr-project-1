import Image from "next/image";
import QRBg from "../../public/QRImage.png";
import QR from "../../public/QR.png";

export default function Home() {
  return (
    // Wrapper
    <main className='min-h-screen flex justify-center items-center'>
      {/* Container */}
      <div className='flex flex-col bg-white w-[320px] h-fit p-4 rounded-xl items-center'>
        {/* Card media */}
        <div className='relative'>
          <Image
            src={QRBg.src}
            width={288}
            height={288}
            alt='QR code background'
            className='rounded-xl'
          />
          <Image
            src={QR.src}
            width={160}
            height={160}
            alt='QR code'
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
        </div>
        <div className='flex flex-col pt-4 text-center py-4 px-2 w-full space-y-4'>
          <p className='text-preset-1 text-slate-900'>
            Improve your front-end skills by building projects
          </p>
          <p className='text-preset-2 text-slate-500'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
