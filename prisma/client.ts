// https://65bce3fab51f9b29e9328118.mockapi.io/api/dash/users
// https://65bce3fab51f9b29e9328118.mockapi.io/api/dash/articles
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

/*  You can extend Prisma Client using a Prisma Client extension by appending 
    the $extends client method when instantiating Prisma Client as follows: */

/* import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    result: {
      user: {
        fullName: {
          needs: { firstName: true, lastName: true },
          compute(user) {
            return `${user.firstName} ${user.lastName}`
          },
        },
      },
    },
  })
} */

/* After creating this file, you can now import the extended PrismaClient instance 
anywhere in your Next.js pages as follows: */

// e.g. in `pages/index.tsx`
/* import prisma from './db'

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany()
  return { props: { posts } }
} */
