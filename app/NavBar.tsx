'use client';
/**
 * @prettier
 */

import React from 'react';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import classnames from 'classnames';
import { DiCodeigniter } from 'react-icons/di';
import { HiRefresh } from 'react-icons/hi';
import { DiMysql } from "react-icons/di";
import { HiCode } from "react-icons/hi";
import { HiPuzzle } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";

const NavBar = () => {
  const currentPath = usePathname();

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
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}>
            {link.label}
          </Link>
        ))}
        
        
      </ul>
      <Link href='/'>
        <HiSearch height={32}/>
      </Link>
      <Link href='/'>
        <HiStar />
      </Link>
      <Link href='/'>
        <HiCode />
      </Link>
      <Link href='/'>
        <HiPuzzle />
      </Link>
      <Link href='/'>
        <MdEditNote />
      </Link>
      <Link href='/'>
        <DiMysql />
      </Link>
    </nav>
  );
};

export default NavBar;
