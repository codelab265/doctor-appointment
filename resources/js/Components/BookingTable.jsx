import React from "react";
import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

import { useForm } from "@inertiajs/react";
import InputLabel from "./InputLabel";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

function BookingTable({ Bookings, title, user }) {
    const { data, setData, post, processing, errors } = useForm({
        status: "",
        booking_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("doctor.booking.update"), {
            onSuccess: () => {
                toast("Updated successfully");
            },
        });
    };
    return (
        <>
            <Table>
                <TableCaption>{title}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            {user.role == "doctor" ? "Member" : "Doctor"}
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        {user.role == "doctor" && <TableHead>Action</TableHead>}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-lime-100">
                                            {user.role == "doctor"
                                                ? booking.user.name.charAt(0)
                                                : booking.doctor.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user.role == "doctor"
                                                ? booking.user.name
                                                : booking.doctor.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {user.role == "doctor"
                                                ? booking.user.name
                                                : booking.doctor.name}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{booking.requested_date}</TableCell>
                            <TableCell>{booking.requested_time}</TableCell>
                            <TableCell>
                                {booking.status == 0 ? (
                                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-yellow-600 rounded-full">
                                        Pending
                                    </span>
                                ) : booking.status == 1 ? (
                                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-full">
                                        Accepted
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-full">
                                        Rejected
                                    </span>
                                )}
                            </TableCell>
                            {user.role == "doctor" && (
                                <TableCell>
                                    <AlertDialog>
                                        <AlertDialogTrigger
                                            asChild
                                            onClick={() =>
                                                setData(
                                                    "booking_id",
                                                    booking.id
                                                )
                                            }
                                        >
                                            <Button className="rounded-full">
                                                Change Status
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Change Status
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <Select
                                                        defaultValue={
                                                            data.status
                                                        }
                                                        onValueChange={(e) =>
                                                            setData("status", e)
                                                        }
                                                    >
                                                        <SelectTrigger className="w-full my-3">
                                                            <SelectValue placeholder="Select Status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">
                                                                Accept
                                                            </SelectItem>
                                                            <SelectItem value="2">
                                                                Reject
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {errors.rating && (
                                                        <InputError
                                                            message={
                                                                errors.rating
                                                            }
                                                        />
                                                    )}
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Cancel
                                                </AlertDialogCancel>
                                                <Button
                                                    disabled={processing}
                                                    onClick={handleSubmit}
                                                >
                                                    Submit
                                                </Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Toaster />
        </>
    );
}

export default BookingTable;
