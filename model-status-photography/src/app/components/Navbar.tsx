'use client';

import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className='p-4'>
      <div className='container mx-auto max-w-full flex justify-between items-center'>
        <div className='text-2xl flex items-center'>
          <Link className='mr-4' href='/'>Home</Link>
        </div>
        <div className='flex items-center space-x-4'>
          <ul className='flex text-2xl items-center space-x-4 md:space-x-20'>
            <li>
              <Link 
                href='https://www.instagram.com/model_status_photos/'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link 
                href='https://www.flickr.com/photos/planetjyro/with/6911298534'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flickr"
              >
                <ImFlickr3 />
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.facebook.com/modelstausphotography"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <BsFacebook />
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden relative'>
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
          <ul className={`absolute left-0 mt-2 w-full rounded-md z-50 ${isOpen ? 'block' : 'hidden'}`}>
            {genres.map((genre) => (
              <li key={genre.name} className='px-4 py-2'>
                <Link href={genre.path} onClick={() => handleRouteClick(genre.path)}>
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className={`hidden md:flex md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 w-full md:w-auto`}>
          <li className="relative group md:mx-4 my-2 md:my-0">
            <a
              href='#'
              role="menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >
              Photo Galleries
            </a>
            <ul
              className={`absolute mt-2 rounded-md z-50 ${isDropdownOpen ? 'block' : 'hidden'}`}
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