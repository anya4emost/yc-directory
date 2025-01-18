import React from 'react'
import { STARTUP_BY_ID_QUERY } from '../../../../sanity/lib/queries';
import { client } from '../../../../sanity/lib/client';
import { notFound } from 'next/navigation';

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    console.log('id', id);

    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

    if (!post) return notFound();
  return (
    <div>
          page {id}
          <h1>{post.title}</h1>
    </div>
  )
}

export default page
