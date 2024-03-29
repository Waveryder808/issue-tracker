import { NextRequest, NextResponse } from 'next/server';
import { z as zed }  from 'zod';
import prisma from '@/prisma/client';

const date = new Date();

const createIssueSchema = zed.object({

  title: zed.string().min(1).max(255),
  description: zed.string().min(1),
});

export async function POST(request: NextRequest) {

  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
