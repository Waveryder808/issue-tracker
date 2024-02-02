import React from 'react';
import Link from 'next/link';
import { DiCodeigniter } from 'react-icons/di';
import { HiRefresh } from 'react-icons/hi';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'>
        <DiCodeigniter />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            className='text-zinc-500 hover:text-zinc-800'
            href={link.href}>
            {link.label}
          </Link>
        ))}

        <HiRefresh />
      </ul>
    </nav>
  );
};

export default NavBar;
