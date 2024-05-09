import CategoryList from "@/Components/CategoryList";
import DoctorList from "@/Components/DoctorList";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Search({ Categories, Category, Doctors, auth }) {
    return (
        <MainLayout auth={auth}>
            <Head title={`${Category.name}`} />

            <div className="grid grid-cols-4">
                <div className="hidden md:block">
                    <CategoryList
                        Categories={Categories}
                        CategoryID={Category.id}
                    />
                </div>
                <div className="col-span-4 md:col-span-3 md:px-4">
                    <DoctorList
                        Doctors={Doctors}
                        heading={Category.name}
                        lg_class="lg:grid-cols-3"
                    />
                </div>
            </div>
        </MainLayout>
    );
}

export default Search;
