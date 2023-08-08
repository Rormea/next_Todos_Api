'use client'

import { Todo } from '@prisma/client';
import React from 'react'
import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';



interface Props {
    todo: Todo;
    //TODOD: Acciones que quiero llanar
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}>
            <div className='flex sm:flex:row justify-start items-center gap-4' >

                <div
                    onClick={() => toggleTodo(todo.id, !todo.complete)}
                    className={`
                    flex p-2 rounded-md cursor-pointer
                    hover: bg-opacity-60
                    ${todo.complete ? 'bg-blue-300' : 'bg-red-300'}
                `} >
                    {
                        todo.complete
                            ? <IoCheckboxOutline size={20} />
                            : <IoSquareOutline size={20} />
                    }
                </div>
                <div className='text-center sm:text-left ' >
                    {todo.description}
                </div>

            </div>
        </div>
    )
}
