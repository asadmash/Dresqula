'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import {Image} from "next/image"; //for display user avater

export default function AuthButton(){
    //destructure data from userSession hook
    const {data: session, status} = useSession();

    if(status === 'loading'){
        return <p>Loading...</p>
    }
    if(status === 'authenticated'){
        return (
            <div className="flex items-center gap-2.5">
                <Image src={session.user.image} alt={session.user.name} width={32} height={32} className='rounded-full'/>
                <span>
                    {session.user.name}
                </span>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }

    return <button onClick={() => signIn('google')}>Sign in with Google</button>
}