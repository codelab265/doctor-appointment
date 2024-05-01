import CategorySearch from "@/Components/CategorySearch";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <CategorySearch />
        </MainLayout>
    );
}

export default Home;
