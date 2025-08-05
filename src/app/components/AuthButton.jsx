'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import {Image} from "next/image"; //for display user avater

export default function AuthButton(){
    //destructure data from userSession hook
    const {data: session, status} = useSession();

    if(status === 'loading'){
        return <p className="bg-accent text-black hover:bg-blackfish hover:text-white px-4 py-2 rounded-4xl font-medium">Loading...</p>
    }
    if(status === 'authenticated'){
        return (
            <div className="flex items-center gap-2.5 bg-accent">
                <Image src={session.user.image} alt={session.user.name} width={32} height={32} className='rounded-full'/>
                <span>
                    {session.user.name}
                </span>
                <button onClick={() => signOut()} className="bg-accent text-black hover:bg-blackfish hover:text-white px-4 py-2 rounded-4xl font-medium transition-all delay-100">
                    Sign Out
                </button>
            </div>
        )
    }

    return <button onClick={() => signIn('google')} className="bg-blackfish text-white hover:bg-accent hover:text-black px-4 py-2 rounded-4xl font-medium transition-all delay-100">Sign in with Google</button>
}