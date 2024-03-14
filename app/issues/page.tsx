import React from 'react';
import { Button, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import { ImageLoader } from 'next/image';
import Link from 'next/link';

const imageLoader = new ImageLoader()

const IssuesPage = () => {
  return (
    <div>
      <Heading as='h1'>Issues - Page</Heading>
      <div className="wrapper">
        <div className="card">
          <div className="avatar">
            <Image
               width={64}
               height={64}
               src={"https://placehold.co/64x64"}
               alt={"avatar"} 
              /> 
          </div>
          <div className="cardTitle">
            John McClane
          </div>
          <div className="cardDescription">
            He had a bad day...
          </div>
        </div>
      </div>
      <Button>
        <Link href='/issues/new'>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
