"use client"

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem';

import * as todosApi from '@/todos/helpers/todos'
// import { updateTodo } from '../helpers/todos';
import { useRouter } from 'next/navigation';



interface Props {
    todos?: Todo[];
}


export const TodoGrid = ({ todos = [] }: Props) => {


    const router = useRouter();

    const toggleComplete = async (id: string, complete: boolean) => {

        const updatedTodo = await todosApi.updateTodo(id, complete)
        console.log(updatedTodo);
        router.refresh();
    };

    return (
        // <div>TodoGrid</div>

        <div className='grid grid-cols-1 sm:grid-cols-3  gap-2' >
            {
                todos && todos.map(el => (
                    <TodoItem key={el.id} todo={el} toggleTodo={toggleComplete} />
                ))
            }
        </div>
    )
}
