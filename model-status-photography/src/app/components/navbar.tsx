'use client'
import Link from "next/link";

// Defines the two types for the Navbar Links
type NavLink = {
  title: string;
  href: string;
};

// An array of links that will hold all the routes in one place
// making the component cleaner and easier to maintain and update
const navLinks: NavLink[] = [
  {title: 'Modelesque', href: '/modelesque'},
  {title: 'Family', href: '/family'},
  {title: 'Sport & Fitness', href: '/sport-fitness'},
  {title: 'Maternity Shoot', href: '/maternity'},
];

const Navbar: React.FC = () => {
  const renderNavLink = (link: NavLink) => (
    <Link 
      key={link.title} 
      href={`/pages/${link.href}`}
      className="hover:underline underline-offset-8"
    >
      {link.title}
    </Link>
  );

  return (
    <header className="absolute top-0 right-0 z-10 mt-1 mr-4 p-1">
      <Link className="flex flex-col hover:underline underline-offset-8 items-end mb-5 -mt-2" href={`/`} rel="home">
        <span>
          Welcome
        </span>
      </Link>
      <nav className="flex flex-col items-end space-y-1.5">
        {navLinks.map(renderNavLink)}
      </nav>
    </header>
  );
}

export default Navbar;