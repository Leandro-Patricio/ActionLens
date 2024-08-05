'use server'
import { emailSchema } from "@/lib/zod";

type FormError = {

    stats?: boolean,
    name?: { _errors: string[] },
    email?: { _errors: string[] },
    message?: { _errors: string[] }

};

export async function sendEmail(currentState: Object, formData: FormData): Promise<FormError>
{
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    const result = emailSchema.safeParse(data);
    console.log('result', result,)

    if (!result.success)
    {
        // Formate os erros de validação
        const formattedErrors = result.error.format();
        console.log('formattedErrors', formattedErrors)
        return formattedErrors
    }
    try
    {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/contact"
        console.log(url)
        const response: any = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200)
        {
            return { stats: true }
        }
    } catch (error)
    {

        console.error('Erro ao enviar email:', error);

    }
    return { stats: false }
}

