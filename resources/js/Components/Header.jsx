import { Link } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";

function Header() {
    const MenuItems = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Explore",
            path: "/",
        },
        {
            id: 3,
            name: "Contact us",
            path: "/",
        },
    ];
    return (
        <div className="py-4 shadow-md">
            <div className="container flex items-center justify-between ">
                <div className="flex items-center gap-10">
                    <img src="/assets/logo.svg" width={180} height={80} />
                    <ul className="hidden md:flex gap-8">
                        {MenuItems.map((item) => (
                            <li
                                key={item.id}
                                className="hover:text-primary hover:scale-105 transition-all ease-in-out"
                            >
                                <Link href={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button>Get Started</Button>
            </div>
        </div>
    );
}

export default Header;
