export const validarCPF = (cpf: string): boolean => {
    const numeros = cpf.replace(/\D/g, "");

    if (numeros.length !== 11) return false;

    // Rejeita CPFs com todos os números iguais
    if (/^(\d)\1{10}$/.test(numeros)) return false;

    const calcularDigito = (quantidade: number) => {
        let soma = 0;

        for (let i = 0; i < quantidade; i++) {
            soma += Number(numeros[i]) * (quantidade + 1 - i);
        }

        const resto = (soma * 10) % 11;

        return resto === 10 ? 0 : resto;
    };

    const primeiroDigito = calcularDigito(9);
    const segundoDigito = calcularDigito(10);

    return (
        primeiroDigito === Number(numeros[9]) &&
        segundoDigito === Number(numeros[10])
    );
};