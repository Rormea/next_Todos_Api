// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components/sidebar';


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}

            <Sidebar />

            {/*TODO: Fin del <Sidebar /> */}


            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

                {/* TODO: src/components <TopMenu /> */}
                <TopMenu />


                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6 bg-slate-100 p-2 m-2 rounded-md pb-5">


                    {/* TODO: dashboard/page.tsx  */}
                    {/* Este contenido va dentro de page.tsx */}
                    {children}

                </div>
            </div>
        </>
    );
}