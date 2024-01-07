export const dynamic = 'force-dynamic'
export const revalidate = 0;

import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodoGrid } from "@/todos";




export const metadata = {
    title: 'Listado de Todos',
    description: 'SEO Title',
};


export default async function ServerTodosPage() {


    const todos =
        await prisma.todo.findMany({ orderBy: { description: 'asc' } });

    return (
        <>
            <span className="text-3xl mb-10" >Server Actions</span>

            <div>

                <div className="w-full px-4 mb-4 ml-6">
                    <NewTodo />
                </div>

                <TodoGrid todos={todos} />
            </div>
        </>
    );
}