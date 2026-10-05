import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/* const onlyDigits = (value: string) => value.replace(/\D/g, "") */

export const cepFormSchema = z.object({
    cep: z
        .string()
        .trim()
        .min(1, "CEP é obrigatório")
        .regex(/^\d{5}-?\d{3}$/, "CEP inválido. Use 12345678 ou 12345-678"),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CEPFormData>({
        resolver: zodResolver(cepFormSchema),
        mode: "onBlur",
        defaultValues: {
            cep: "",
        },
    });

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
    };
};
