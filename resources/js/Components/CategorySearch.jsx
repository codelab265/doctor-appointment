import React from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function CategorySearch() {
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
        </div>
    );
}

export default CategorySearch;
