import { Copyright } from "../Copyright";
import { SubscriptionForm } from "../SubscriptionForm";
import { SocialLinks } from "../SocialLinks";
import { MenuItems } from "../MenuItems";

export const Footer = () => {
    return (
        <footer className="bg-footer-bg">
            <div className="container">
                <div className="flex flex-col px-2  md:flex-row justify-between gap-8 py-10 lg:px-0">
                    <div className="flex flex-col gap-8 min-w-[344px]">
                        <SubscriptionForm />
                        <SocialLinks />
                    </div>
                    <MenuItems />
                </div>
                <Copyright />
            </div>
        </footer >
    );
};