import React from "react";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/Components/ui/command";
import { Link } from "@inertiajs/react";

function CategoryList({ Categories, CategoryID }) {
    return (
        <div className="flex flex-col my-10">
            <h2 className="text-primary font-bold mb-2 text-lg">Categories</h2>
            {Categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/search/${category.id}`}
                    className={`p-2 my-1 hover:text-primary hover:bg-gray-100 transition-all ease-in-out ${
                        category.id === CategoryID
                            ? "text-primary bg-gray-100"
                            : ""
                    }`}
                >
                    <div className="">{category.name}</div>
                </Link>
            ))}
        </div>
    );
}

export default CategoryList;
