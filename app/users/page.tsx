import React from 'react'
import type { Metadata } from "next";
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Users'
}

export default async function Users() {
    const UsersData: Promise<User[]> = getAllUsers()
    const users = await UsersData

    console.log('Hello');
    

    const content = (
        <section>
            <h2>
                <Link href='/'></Link>
            </h2>
            <br/>
            {users.map((user)=> {
                return (
                    <>
                    <br/>
                      <p key={user.id}></p>
                      <Link href={`/users/${user.id}`}>{user.name}</Link>
                      <br/>
                    </>
                )

            })}
        </section>
    )
  return (
    <section>
        <div>Users</div>
        <br/>
        {content}

    </section>
    
  )
}
