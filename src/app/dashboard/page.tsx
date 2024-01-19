import { WidgetItem } from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";



export default async function DashboarPage() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">

            <WidgetItem title={"Usuario Conectado desde Server-Side"}>
                <div className=" flex flex-col mx-2">
                    <span>{session.user?.name}</span>
                    <span>{session.user?.email}</span>
                    <span>{session.user?.image}</span>
                </div>

                <div>
                    {
                        JSON.stringify(session)
                    }
                </div>
            </WidgetItem>


        </div>
    );
}