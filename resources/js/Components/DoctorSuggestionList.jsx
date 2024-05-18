import { Link } from "@inertiajs/react";
import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

function DoctorSuggestionList({ Suggestions }) {
    return (
        <div className="p-5 my-5 border rounded-lg">
            <h2 className="font-bold text-[20px] ">Suggestions</h2>
            <div className="w-full flex flex-col mt-5">
                {Suggestions.map((doctor) => (
                    <Link
                        className="flex rounded-lg p-3 hover:bg-lime-100 gap-x-2"
                        key={doctor.id}
                        href={route("doctor.details", doctor.user_id)}
                    >
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-lime-100">
                            <img
                                src={`/storage/${doctor.image}`}
                                alt={doctor.doctor.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 items-baseline ">
                            <div className="py-1 px-2 bg-lime-100 text-primary text-[10px] font-medium rounded-full">
                                {doctor.category.name}
                            </div>
                            <div className="font-extrabold text-base">
                                {doctor.doctor.name}
                            </div>
                            <div className="flex items-center">
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
                            <div className="text-primary text-sm">
                                {doctor.experience} years
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DoctorSuggestionList;
