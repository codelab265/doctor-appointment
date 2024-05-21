import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import BookingTable from "@/Components/BookingTable";

export default function Dashboard({ auth, recentBookings, bookingsCount }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-5">
                            <div className="flex flex-col p-8  rounded-lg border gap-2 bg-yellow-100">
                                <div className="text-3xl font-bold">
                                    {bookingsCount}
                                </div>
                                <div className="text-gray-500">
                                    Pending Bookings
                                </div>
                            </div>
                            <div className="flex flex-col p-8  rounded-lg border gap-2 bg-green-100">
                                <div className="text-3xl font-bold">
                                    {bookingsCount}
                                </div>
                                <div className="text-gray-500">Accepted</div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="">Recent Bookings</div>
                            <div className="">
                                <BookingTable
                                    Bookings={recentBookings}
                                    title={"Recent Bookings"}
                                    user={auth.user}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
