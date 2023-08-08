'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState, ChangeEvent } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from '@/todos/helpers/todos';


export const NewTodo = () => {


    const [description, setdescription] = useState('')

    const router = useRouter();

    const handlerSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (description.trim().length === 0) return

        await todosApi.createTodo(description);

        console.log('se envio submit', description,)
        router.refresh();
        setdescription('');
    };

    const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setdescription(value)
    };

    const handlerDelete = async () => {

        await todosApi.deleteCompleted();
        router.refresh();
    };




    return (
        <form onSubmit={handlerSubmit} className='flex w-full'>
            <input type="text"
                className="w-full md:w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?"
                value={description}
                onChange={handlerOnChange}

            />

            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
                Crear
            </button>

            <span className='flex flex-1'></span>

            <button
                //TODO: onClick={ () => deleteCompleted() }
                type='button'
                onClick={handlerDelete}
                className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
                <IoTrashOutline />
                Borrar Completados
            </button>


        </form>
    )
}