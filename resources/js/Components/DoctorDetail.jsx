import { GraduationCap, MapPin, Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import BookAppointment from "./BookAppointment";
import WriteReview from "./WriteReview";

function DoctorDetail({ Doctor, Reviews, AverageRating }) {
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

                    <div className="flex flex-col lg:flex-row gap-2">
                        <BookAppointment />
                        <WriteReview Doctor={Doctor} />
                    </div>
                </div>
            </div>
            <div className="mt-5 p-5 rounded-lg border">
                <h2 className="font-bold text-[20px]">About Me</h2>
                <p className="text-gray-500 tracking-wide mt-2">
                    {Doctor.about}
                </p>

                <div className="flex items-center justify-between mt-10">
                    <h2 className="font-bold text-[20px]">Reviews</h2>

                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <Star
                                key={index}
                                className={`w-4 h-4 ${
                                    item <= parseInt(AverageRating)
                                        ? "text-yellow-500"
                                        : "text-gray-500"
                                }`}
                            />
                        ))}
                        ({Reviews.length})
                    </div>
                </div>

                <div className="">
                    {Reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 mt-5 border-b pb-5"
                        >
                            <div className="flex items-center justify-center bg-primary w-[50px] h-[50px] rounded-full overflow-hidden">
                                <span className="text-lime-100 text-3xl">
                                    {review.user.name.charAt(0)}
                                </span>
                            </div>
                            <div className="flex flex-grow flex-col">
                                <div className="flex items-center gap-2">
                                    <h2 className="font-bold text-lg">
                                        {review.user.name}
                                    </h2>
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((item, index) => (
                                            <Star
                                                key={index}
                                                className={`w-4 h-4 ${
                                                    item <= review.rating
                                                        ? "text-yellow-500"
                                                        : "text-gray-500"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-500">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DoctorDetail;
