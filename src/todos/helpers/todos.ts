import { Todo } from "@prisma/client";


//Aquí pondré varias acciones con los Todos

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const bodyCompleted = {
        complete: complete,
    }

    const dbTodo = await fetch(`http://localhost:3000/api/${id}`,  //`http://localhost:3000/api/${id}`
        {
            method: 'PUT',
            body: JSON.stringify(bodyCompleted),
            headers: { 'content-Type': 'application/json' }

        }).then(res => res.json());

    // console.log(dbTodo)

    return dbTodo
};


export const createTodo = async (description: string): Promise<Todo> => {

    const bodyDescription = { description }

    const dbTodo = await fetch(`http://localhost:3000/api/todos`,
        {
            method: 'POST',
            body: JSON.stringify(bodyDescription),
            headers: { 'content-Type': 'application/json' }

        }).then(res => res.json());

    // console.log(dbTodo)

    return dbTodo
};


export const deleteCompleted = async (): Promise<Todo> => {

    const dbTodo = await fetch(`http://localhost:3000/api/todos`,
        {
            method: 'DELETE',
            headers: { 'content-Type': 'application/json' }

        }).then(res => res.json());

    // console.log(dbTodo)

    return dbTodo
};