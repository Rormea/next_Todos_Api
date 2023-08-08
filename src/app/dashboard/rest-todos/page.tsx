import { NewTodo } from "@/components/NewTodo";
import prisma from "@/lib/prisma";
import { TodoGrid } from "@/todos";




export const metadata = {
    title: 'Listado de Todos',
    description: 'SEO Title',
};


export default async function RestTodosPage() {


    const todos =
        await prisma.todo.findMany({ orderBy: { description: 'asc' } });

    return (
        <div>

            <div className="w-full px-4 mb-4 ml-6">
                <NewTodo />
            </div>

            <TodoGrid todos={todos} />
        </div>
    );
}