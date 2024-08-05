'use server'

import { subscribeSchema } from "@/lib/zod";
import prisma from "../../../../lib/prisma";

type FormError = {
    stats?: boolean,
    subscribe?: { _errors: string[] }
};



export async function subscribing(currentState: Object, formData: FormData): Promise<FormError>
{
    const data = {
        subscribe: formData.get('subscribe') as string,
    };

    const result = subscribeSchema.safeParse(data);

    if (!result.success)
    {
        // Formate os erros de validação
        const formattedErrors = result.error.format();
        console.log('formattedErrors', formattedErrors)
        return formattedErrors
    }
    try
    {
        const checkIfEmailIsOnDb = await prisma?.subscriber.findFirst({
            where: {
                email: data.subscribe,
            }
        });

        if (checkIfEmailIsOnDb) return { stats: true }

        const addingEmailOnDb = await prisma?.subscriber.create({
            data: {
                email: data.subscribe,

            }
        });
        return { stats: true }

    } catch (error)
    {

        console.error('Erro ao enviar email:', error);

    }
    return { stats: false }
}