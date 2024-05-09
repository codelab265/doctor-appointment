import React from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Link } from "@inertiajs/react";

function CategorySearch({ Categories }) {
    return (
        <div className="flex flex-col items-center gap-4 mb-10">
            <h2 className="font-bold text-4xl tracking-wide">
                Search <span className="text-primary">Doctors</span>
            </h2>
            <h2 className="text-gray-500 text-lg">
                Book search your doctor and book appointment with one click
            </h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
                {Categories.map(
                    (category, index) =>
                        index < 6 && (
                            <Link
                                key={category.id}
                                href={`/search/${category.id}`}
                                className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg 
                                border-2 border-gray-100 hover:scale-110 hover:text-primary bg-lime-50
                                transition-all ease-in-out
                                "
                            >
                                <div className="rounded-full w-16 h-16 bg-primary flex items-center justify-center text-3xl font-bold text-green-100">
                                    {category.name.charAt(0)}
                                </div>
                                <p className="text-base font-medium text-primary">
                                    {category.name}
                                </p>
                            </Link>
                        )
                )}
            </div>
        </div>
    );
}

export default CategorySearch;
