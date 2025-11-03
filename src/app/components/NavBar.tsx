"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props { }

function NavBar() {
    const router = useRouter();
    const userLoggedIn = false;
    const handleRedirect = () => {
        if(userLoggedIn){
            router.push('/about');
        }else{
            router.push('/')
        }
    }

    return <nav className='flex justify-center'>
        <ul className='flex justify-between w-1/2'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/posts'}>Posts</Link></li>
            <li><button onClick={handleRedirect}>About</button></li>
        </ul>
    </nav>
}

export default NavBar
