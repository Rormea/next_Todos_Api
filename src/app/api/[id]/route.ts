import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Segments {
    params: { id: string; }
}

export async function GET(request: Request, { params }: Segments) {

    const { id } = params
    // console.log(segments)
    // { params: { id: '5c7bdc3c-361e-40b2-b15d-9ada2a9b9f57' } }

    const todo = await prisma.todo.findUnique({
        where: {
            id: id,
        }
    })

    if (!todo) return NextResponse.json({ message: `Todo con id => ${id} no se encuntra en DB` }, { status: 404 })


    return NextResponse.json(todo)
}

// METHODS PUT


const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: Segments) {

    const { id } = params
    // console.log(segments)
    // { params: { id: '5c7bdc3c-361e-40b2-b15d-9ada2a9b9f57' } }

    const todo = await prisma.todo.findUnique({
        where: {
            id: id,
        }
    })

    if (!todo) return NextResponse.json({ message: `Todo con id => ${id} no se encuntra en DB` }, { status: 404 })

    try {
        const { description, complete, ...rest } = await putSchema.validate(await request.json())

        const todoUpdate = await prisma.todo.update({
            where: { id },
            data: { description, complete },
        });

        return NextResponse.json(todoUpdate)

    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }



}