import { object, string, z } from "zod"

export const signInSchema = object({
    usernameOrEmail: string({ required_error: "User is required" })
        .min(3, "User is required").or(z.string().email('Insira um e-mail válido')),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(3, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})


export const loginSchema = z.object({
    usernameOrEmail: z.string().min(3, "Usuário deve ter no mínimo 3 caracteres").or(z.string().email('Insira um e-mail válido')),
    password: z.string().min(3, "Sua senha deve ter no mínimo 3 digítos"),
});

export const registerSchema = z.object({
    username: z.string().min(3, "Usuário deve ter no mínimo 3 caracteres"),
    password: z.string().min(3, "Sua senha deve ter no mínimo 3 digítos"),
    email: z.string().email('Email inválido')
});

export const emailSchema = z.object({
    name: z.string().min(4, "Por favor, coloque pelo menos o primeiro nome como você quer chamado(a)."),
    message: z.string().min(10, "Fale um pouco pra gente. Suas palavras são muito imporantes pra gente."),
    email: z.string().email('Email inválido.')
});

export const subscribeSchema = z.object({
    subscribe: z.string().email('Email inválido.')
});
