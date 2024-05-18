import React from "react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { Star } from "lucide-react";

function DoctorList({
    Doctors,
    heading = "Popular Doctor",
    lg_class = "lg:grid-cols-4",
}) {
    return (
        <div className="my-10">
            <div className="font-bold text-xl">{heading}</div>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 ${lg_class} gap-7 mt-5`}
            >
                {Doctors.map((doctor, index) => (
                    <div className="rounded-lg p-4 border" key={doctor.id}>
                        <div className="w-full h-[250px] relative">
                            <img
                                src={`/storage/${doctor.image}`}
                                alt={doctor.doctor.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="flex items-center absolute bottom-1 left-2">
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Star
                                        key={index}
                                        className={`w-4 h-4 ${
                                            item <=
                                            parseInt(doctor.averageRating)
                                                ? "text-yellow-500"
                                                : "text-gray-500"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-baseline ">
                            <div className="py-1 px-2 bg-lime-100 text-primary text-[10px] font-medium rounded-full mt-5">
                                {doctor.category.name}
                            </div>
                            <div className="font-extrabold text-base">
                                {doctor.doctor.name}
                            </div>
                            <div className="text-primary text-sm">
                                {doctor.experience} years
                            </div>
                            <div className="text-gray-500 text-sm">
                                {doctor.address} years
                            </div>
                            <Link
                                className="w-full"
                                href={route("doctor.details", doctor.user_id)}
                            >
                                <Button className="rounded-full w-full bg-primary text-lime-100">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorList;
