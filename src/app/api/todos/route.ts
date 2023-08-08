import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)

    const take = Number(searchParams.get('take')) ?? '10'
    if (isNaN(+take)) {
        return NextResponse.json({ message: 'Take parameter must be a number' }, { status: 400 })
    }

    const skip = Number(searchParams.get('skip')) ?? '0'
    if (isNaN(+skip)) {
        return NextResponse.json({ message: 'skip parameter must be a number' }, { status: 400 })
    }



    const todos = await prisma.todo.findMany(
        {
            take: +take,
            skip: +skip
        }
    );


    return NextResponse.json(todos)
};

// METHODS POST

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false), //mostrar mas
});

export async function POST(request: Request) {

    const body = await request.json(); //paso sin validaciones

    try {
        const bodyValided = await postSchema.validate(body); //validamos el body que nos llega en la ruta

        const newTodo = await prisma.todo.create({ data: bodyValided });

        return NextResponse.json(newTodo)

    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }


}


// METHODS DELETE

export async function DELETE(request: Request) {



    try {

        const deleteCompleted = await prisma.todo.deleteMany({
            where: { complete: true },
        })

        return NextResponse.json(deleteCompleted)

    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
};



