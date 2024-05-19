import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Star } from "lucide-react";
import React from "react";

function Reviews({ reviews, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Reviews
                </h2>
            }
        >
            <Head title="Reviews" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <div className="p-5">
                                            <div className="flex items-center space-x-2">
                                                <a href="#">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        {review.user.name}
                                                    </h5>
                                                </a>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <Star
                                                                key={star}
                                                                className={`w-4 h-4 ${
                                                                    star <=
                                                                    review.rating
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-500"
                                                                }`}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {review.comment}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Reviews;
