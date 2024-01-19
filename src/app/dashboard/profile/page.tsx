'use client'

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { WidgetItem } from "@/components/sidebar";




export default function ProfilePage() {

    const { data: session } = useSession();


    // useEffect(() => {
    //     console.log('client side');
    // }, [])




    return (

        <div className=" flex flex-col mx-2">
            <span>{session?.user?.name ?? 'no Name'}</span>
            <span>{session?.user?.email ?? 'no email'}</span>
            <span>{session?.user?.image ?? 'no image'}</span>
            <span>{session?.user?.id ?? 'no id'}</span>
            <span>{session?.user?.roles?.join(',') ?? 'no roles'}</span>
        </div>
    )
};