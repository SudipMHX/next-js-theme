import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-gray-200 dark:bg-cyan-950 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='py-96'></div>
      <div className='py-96'></div>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <h1 className='text-6xl font-bold text-black dark:text-white'>
          With Tailwind Color Class
        </h1>
        <h1 className='text-6xl font-bold'>Without Any Color Class</h1>
        <div className='py-96'></div>
        <div className='py-96'></div>
        <div className='py-96'></div>
        <div className='py-96'></div>
      </main>
    </div>
  );
}
