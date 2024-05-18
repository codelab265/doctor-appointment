import DoctorDetail from "@/Components/DoctorDetail";
import DoctorSuggestionList from "@/Components/DoctorSuggestionList";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function DoctorDetails({ auth, Doctor, Suggestions, Reviews, AverageRating }) {
    return (
        <MainLayout auth={auth}>
            <Head title={Doctor.doctor.name} />
            <div className="my-5">
                <h1 className="text-[22px] font-bold">
                    Doctor {Doctor.doctor.name}'s Details
                </h1>

                <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
                    <div className="col-span-3">
                        <DoctorDetail
                            Doctor={Doctor}
                            Reviews={Reviews}
                            AverageRating={AverageRating}
                        />
                    </div>
                    <div className="">
                        <DoctorSuggestionList Suggestions={Suggestions} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DoctorDetails;
