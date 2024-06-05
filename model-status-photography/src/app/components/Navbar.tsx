'use client';

import { useState, useRef } from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { ImFlickr3 } from "react-icons/im";
import { useRouter } from "next/navigation";

const genres = [
  {name: 'Family', path: '/genres/family'},
  {name: 'Fitness & Sports', path: '/genres/fitness-and-sports'},
  {name: 'Maternity', path: '/genres/maternity'},
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (): void => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (): void => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000)
  };

  const handleRouteClick = (path: string): void => {
    setIsDropdownOpen(false);
    router.push(path);
  };

  return (
    <nav className=' p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl flex items-center'>
          <Link className='mx-auto' href='/'>Home</Link>
        </div>
        <div className='text-2xl flex items-center'>
          <ul className='mx-auto flex items-center space-x-[150px]'>
              <li>
                <Link 
                  href='https://www.instagram.com/model_status_photos/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link 
                  href='https://www.flickr.com/photos/planetjyro/with/6911298534'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImFlickr3 />
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.facebook.com/modelstausphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                </Link>
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
          <li 
            className="relative group md:mx-4 my-2 md:my-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href='#' role="menu">Categories</a>
            <ul 
              className={`absolute mt-2 ${isDropdownOpen ? 'block' : 'hidden'}`}
              role="menuItem"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {genres.map((genre) => (
                <li key={genre.name} className='px-4 py-2'>
                  <Link href={genre.path} onClick={() => handleRouteClick(genre.path)}>
                    {genre.name}
                  </Link>
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