import React from "react";
import { Button } from "./ui/button";

function DoctorList({ Doctors }) {
    return (
        <div className="my-10">
            <div className="font-bold text-xl">Popular Doctor</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-5">
                {Doctors.map((doctor, index) => (
                    <div className="rounded-lg p-4 border" key={doctor.id}>
                        <div className="w-full h-[250px] ">
                            <img
                                src={`/storage/${doctor.doctor_detail.image}`}
                                alt={doctor.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2 items-baseline ">
                            <div className="py-1 px-2 bg-lime-100 text-primary text-[10px] font-medium rounded-full mt-5">
                                {doctor.doctor_detail.category.name}
                            </div>
                            <div className="font-extrabold text-base">
                                {doctor.name}
                            </div>
                            <div className="text-primary text-sm">
                                {doctor.doctor_detail.experience} years
                            </div>
                            <div className="text-gray-500 text-sm">
                                {doctor.doctor_detail.address} years
                            </div>
                            <Button className="rounded-full w-full bg-primary text-lime-100">
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorList;
