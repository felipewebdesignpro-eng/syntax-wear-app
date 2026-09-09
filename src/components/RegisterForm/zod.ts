import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { validarCPF } from "../../utils/cpf-validator";

const validarData = (data: string): boolean => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;

    const [ano, mes, dia] = data.split("-").map(Number);

    const date = new Date(Date.UTC(ano, mes - 1, dia));

    return (
        date.getUTCFullYear() === ano &&
        date.getUTCMonth() === mes - 1 &&
        date.getUTCDate() === dia
    );
};

export const registerUserFormSchema = z
    .object({
        email: z
            .email("Email inválido").nonempty("Email é obrigatório"),

        password: z
            .string()
            .min(8, "A senha deve ter no mínimo 8 caracteres"),

        confirmPassword: z
            .string()
            .nonempty("Confirmação de senha é obrigatória"),

        cpf: z
            .string()
            .min(11, "CPF é obrigatório")
            .refine(validarCPF, {
                message: "CPF inválido",
            }),

        birthDate: z
            .string()
            .min(1, "Data de nascimento é obrigatória")
            .refine(validarData, {
                message: "Data de nascimento inválida",
            }),

        firstName: z
            .string()
            .trim()
            .min(1, "Primeiro nome é obrigatório"),

        lastName: z
            .string()
            .trim()
            .min(1, "Último nome é obrigatório"),

        cellPhone: z.string().min(1, "Celular é obrigatório"),

    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",

        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            cpf: "",
            birthDate: "",
            firstName: "",
            lastName: "",
        },

        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
    }
} 