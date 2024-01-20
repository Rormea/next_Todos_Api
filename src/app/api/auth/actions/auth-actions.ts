import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";


export const signInEmailPassword = async (email: string, password: string) => {

    if (!email || !password) return null;

    const user = await prisma.user.findUnique(
        {
            where: { email }
        }
    );

    if (!user) {
        // si no existe hay que crear el usurio
        const dbUser = await createUser(email, password)
        return dbUser
    };

    if (!bcrypt.compareSync(password, user.password ?? "")) {
        return null;
    };

    return user
};


//funcion crear usuario
const createUser = async (email: string, password: string) => {

    const user = await prisma.user.create(
        {
            data: {
                email: email,
                password: bcrypt.hashSync(password),
                name: email.split('@')[0],
            }
        }
    );
    return user;
};