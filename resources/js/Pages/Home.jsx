import CategorySearch from "@/Components/CategorySearch";
import DoctorList from "@/Components/DoctorList";
import Hero from "@/Components/Hero";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home({ Categories, Doctors }) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <CategorySearch Categories={Categories} />
            <DoctorList Doctors={Doctors} />
        </MainLayout>
    );
}

export default Home;
