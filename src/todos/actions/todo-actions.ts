"use server"
import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";



export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) {
        throw `Todo with ${id} not found`
    }

    const updateTodo = await prisma.todo.update({
        where: { id },
        data: { complete: complete }
    })

    revalidatePath('/dashboard/server-todos')

    return updateTodo
};


export const addTodo = async (description: string) => {
    try {
        // const { description, complete, ...rest } = await putSchema.validate(await request.json())

        const todoAdd = await prisma.todo.create({ data: { description } });

        revalidatePath('/dashboard/server-todos')

        return todoAdd

    } catch (error) {
        return {
            message: 'Error creating'
        }
    }
};

export const deleteCompleted = async (): Promise<void> => {

    try {
        await prisma.todo.deleteMany({
            where: { complete: true }
        })
        revalidatePath('/dashboard/server-todos')

    } catch (error) {
        console.error('Ocurrió un error al intentar eliminar las tareas completadas:', error);
    }
};

