"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}


export const SidebarItem = ({ path, icon, title }: Props) => {

    const pathName = usePathname();


    return (
        <li>
            <Link
                href={path}
                className={`
                    px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
                    hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
                    ${path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
                `}
            >
                <div>{icon}</div>
                <span className="group-hover:text-white-700">{title}</span>

            </Link>
        </li>
    )
}
