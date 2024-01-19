'use client'

import { SessionProvider } from "next-auth/react";

//Este componente será un hight order component que recibirá un children

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children, ...rest }: Props) => {

    return (
        <SessionProvider>
            {
                children
            }
        </SessionProvider>
    )
}
