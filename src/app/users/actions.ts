'use server'

import { signOut } from "@/auth";
import prisma from "../../../lib/prisma";

export async function deslogar()
{
    await signOut();
}



export async function addNewTime(/* formData: FormData */userId: string)
{
    /* const userId = formData.get('userId') as string
 */
    try
    {
        const newTimeEntry = await prisma.timeList.create({
            data: { userId: userId }
        });
        return null; // Sucesso, nenhum erro
    } catch (error)
    {
        console.error('Erro ao tentar adicionar novo tempo:', error);
        return 'Erro ao tentar adicionar novo tempo'; // Retorne a mensagem de erro
    }
}


