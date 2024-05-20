import logo from '@/../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-green-500 px-12 py-4">
      <div>
        <Image src={logo} height={70} alt='Migo logo'/>
      </div>

      <div className='flex gap-5 text-white font-semibold text-lg'>
        <Link href="#">Inicío</Link>
        <Link href="#">Planos</Link>
        <Link href="#">Contato</Link>
        <Link href="#">Ajuda</Link>
      </div>
    </header>
  );
}
