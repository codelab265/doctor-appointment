import { Link } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";

function Header({ user }) {
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
                {user ? (
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {user.name}

                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                ) : (
                    <Link href={route("login")}>
                        <Button>Get Started</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
