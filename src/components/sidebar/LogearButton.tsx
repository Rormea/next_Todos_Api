'use client'
import { IoBatteryDeadSharp, IoBatteryFull, IoReload } from 'react-icons/io5'
import { useSession, signIn, signOut } from "next-auth/react"


const LogearButton = () => {

    const { data: session, status } = useSession();

    console.log(status)

    if (status === 'loading') {

        return (
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <IoReload />
                <span className="group-hover:text-gray-700">Cargando</span>
            </button>
        )
    }

    if (status === 'unauthenticated') {
        return (
            <button
                onClick={() => signIn()}
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <IoBatteryDeadSharp />
                <span className="group-hover:text-gray-700">Login</span>
            </button>
        )
    }

    return (

        <button
            onClick={() => signOut()}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoBatteryFull />
            <span className="group-hover:text-gray-700">Logout</span>
        </button>
    )
}

export default LogearButton