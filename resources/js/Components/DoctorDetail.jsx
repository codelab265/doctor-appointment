import { GraduationCap, MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function DoctorDetail({ Doctor }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 p-5 mt-5 border-[1px] rounded-lg">
                <div className="">
                    <div className="w-full h-[250px] rounded-lg overflow-hidden">
                        <img
                            src={`/storage/${Doctor.image}`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="col-span-2 flex flex-col gap-3 items-baseline mt-5 md:px-5">
                    <h2 className="font-bold text-2xl">{Doctor.doctor.name}</h2>
                    <div className="flex items-center text-gray-500 gap-2">
                        <GraduationCap />
                        <span>{Doctor.experience} years of experience</span>
                    </div>
                    <div className="flex items-center text-gray-500 gap-2">
                        <MapPin />
                        <span>{Doctor.address}</span>
                    </div>
                    <div className="text-[10px] bg-lime-100 px-2 py-1 text-primary rounded-full">
                        {Doctor.category.name}
                    </div>
                    <Button className="rounded-full">Book Appointment</Button>
                </div>
            </div>
            <div className="mt-5 p-5 rounded-lg border">
                <h2 className="font-bold text-[20px]">About Me</h2>
                <p className="text-gray-500 tracking-wide mt-2">
                    {Doctor.about}
                </p>
            </div>
        </>
    );
}

export default DoctorDetail;
