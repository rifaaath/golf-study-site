import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/fau.png"
      alt="FAU Erlangen-Nürnberg logo"
      width={120}
      height={42}
      className="h-8 w-auto"
    />
  );
}
