import { useId, useState } from "react";
import { useCEPForm } from "./cep-form.schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../utils/format-Currency";

const SHIPPING_BY_REGION: Record<string, number> = {
    "Norte": 20.00,
    "Nordeste": 15.00,
    "Centro-Oeste": 12.00,
    "Sul": 10.00,
    "Sudeste": 8.00,

};

export const CEPForm = () => {
    const cepId = useId();
    const errorId = `${cepId}-error`;
    const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
    const [address, setAddress] = useState<Address | null>(null);
    const [addressError, setAddressError] = useState<string | null>(null);

    const onSubmit = async ({ cep }: { cep: string }) => {

        setAddressError(null); // Reset any previous error

        try {

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            console.log("data.erro", data.erro);

            if (data.erro) {
                setAddress(null);
                setAddressError("CEP não encontrado. Por favor, verifique o CEP e tente novamente.");
                return;
            }

            const shippingCost = SHIPPING_BY_REGION[data.regiao];
            if (!shippingCost) {
                setAddress(null);
                setAddressError("Não foi possível calcular o custo de envio para a região do CEP informado.");
                return;
            }

            console.log(data.regiao);
            console.log(shippingCost);

            setAddress({ ...data, shippingCost: shippingCost });
        } catch {
            setAddressError("Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.");
        }
    };

    return (
        <>
            <form className="flex items-start gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* O cálculo do frete será implementado aqui após a validação. */}
                <div>
                    <label htmlFor={cepId} className="sr-only">CEP</label>
                    <input
                        {...register("cep")}
                        id={cepId}
                        type="text"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        placeholder="Insira seu CEP"
                        aria-invalid={!!errors.cep}
                        aria-describedby={errors.cep ? errorId : undefined}
                        className={`border rounded-md p-3 ${errors.cep ? "border-red-500" : "border-[#c0c0c0]"}`}
                    />
                    {errors.cep && (
                        <p id={errorId} role="alert" className="text-xs text-red-600 mt-1">
                            {errors.cep.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "Calculando..." : "Calcular"}
                </button>
            </form >

            {addressError && (
                <div className="mt-4">
                    <p role="alert" className="text-sm text-red-600">
                        {addressError}
                    </p>
                </div>
            )}

            {address && (
                <div className="mt-4">
                    <p>Endereço: {address.logradouro}, {address.bairro}, {address.localidade} - {address.uf}</p>
                    <p>Custo de envio: R$ {formatCurrency(address.shippingCost)}</p>
                </div>
            )}
        </>
    )
};
