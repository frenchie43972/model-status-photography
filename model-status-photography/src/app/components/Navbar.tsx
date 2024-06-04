'use client';

import { useState } from "react";
import Link from "next/link";

const genres = [
  {name: 'Family', path: '/genres/family'},
  {name: 'Fitness & Sports', path: '/genres/fitness-and-sports'},
  {name: 'Maternity', path: '/genres/maternity'},
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl md:flex md:items-center '>
          <Link className='mr-16' href='/'>Home</Link>
          <ul>
            <li>
              <i className='fab fa-instagram'>Instagram Icon</i>
            </li>
            <li>
              <i className='fab fa-twitter'>Twitter Icon</i>
            </li>
            <li>
              <i className='fab fa-facebook'>Facebook Icon</i>
            </li>
          </ul>
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          <i className={isOpen ? 'fa fa-times' : 'fa fa-bars'}>icon</i>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li className="relative group md:mx-4 my-2 md:my-0">
            <a href='#'>Categories</a>
            <ul className='absolute hidden group-hover:block mt-2'>
              {genres.map((genre) => (
                <li key={genre.name} className='px-4 py-2'>
                  <Link href={genre.path}>{genre.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;