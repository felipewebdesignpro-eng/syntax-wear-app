export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col gap-4">
            <label htmlFor="newsletter" className="text-x1 font-medium">Inscreva-se em nosso e-mail</label>
            <input type="email" id="newsletter" name="newsletter" placeholder="Digite seu e-mail" className="bg-white rounded-[30px] placeholder-[#aaaaaa] py-3 px-5" />
        </form>
    );
}