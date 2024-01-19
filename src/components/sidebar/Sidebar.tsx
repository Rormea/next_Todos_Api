import Image from 'next/image'
import Link from 'next/link'
import { IoBasketOutline, IoBatteryFull, IoCalendarOutline, IoCheckboxOutline, IoCodeWorking, IoListOutline, IoOptionsSharp, IoPersonOutline, } from 'react-icons/io5'
import { SidebarItem } from './SidebarItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import LogearButton from './LogearButton'
// import { MenuItems } from './MenuItems'

const menuItems = [
    {
        path: '/dashboard',
        icon: <IoCalendarOutline size={40} />,
        title: 'Dashboard',
    },
    {
        path: '/dashboard/rest-todos',
        icon: <IoCheckboxOutline size={40} />,
        title: 'REST - TODOS',
    },
    {
        path: '/dashboard/server-todos',
        icon: <IoListOutline size={40} />,
        title: 'Server Actions',
    },
    {
        path: '/dashboard/cookies',
        icon: <IoCodeWorking size={40} />,
        title: 'Cookies',
    },

    {
        path: '/dashboard/products',
        icon: <IoBasketOutline size={40} />,
        title: 'Products',
    },

    {
        path: '/dashboard/profile',
        icon: <IoPersonOutline size={40} />,
        title: 'User Profile',
    },


]


export const Sidebar = async () => {


    const session = await getServerSession(authOptions);

    const userAvatar = (session?.user?.image) ? session.user.image : "/images/mama.jpg";
    //"https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"

    const userName = session?.user?.name ? session.user.name : 'No Name'
    const userRoles = session?.user?.roles ?? ['client']

    return (
        <div className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r
         bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">

            <div>
                <div className="-mx-6 px-6 py-4">
                    {/* TODO: Next/Link hacia dashboard */}
                    <Link href="#" title="home">
                        <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" alt="tailus logo" className="w-32" width={30} height={30} />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    {/* Next/Image */}
                    <Image
                        src={userAvatar}
                        alt="lindis"
                        width={150}
                        height={150}
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />

                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
                    <span className="hidden text-gray-400 lg:block">{userRoles.join(' ')}</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {/* TODO: src/components <SidebarItem /> */}
                    {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
                    {
                        menuItems && menuItems.map(el => (
                            <SidebarItem key={el.path} {...el} />
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogearButton />
            </div>

        </div>
    )
}
