import React from 'react';
import { Button, Heading } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div>
      <Heading as='h1'>Issues - Page</Heading>
      <Button>
        <Link href='/issues/new'>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
