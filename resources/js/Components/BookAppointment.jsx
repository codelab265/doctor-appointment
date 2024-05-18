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
import { Button } from "./ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

function BookAppointment() {
    const [date, setDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState("");
    console.log(selectedSlot);

    const getTime = () => {
        const TimeList = [];

        for (let i = 10; i <= 12; i++) {
            TimeList.push({
                time: i.toString().padStart(2, "0") + ":00 AM",
            });

            TimeList.push({
                time: i.toString().padStart(2, "0") + ":30 AM",
            });
        }

        for (let i = 1; i <= 6; i++) {
            TimeList.push({
                time: i.toString().padStart(2, "0") + ":00 PM",
            });

            TimeList.push({
                time: i.toString().padStart(2, "0") + ":30 PM",
            });
        }
        return TimeList;
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="rounded-full">Book Appointment</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Book Appointment</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="flex flex-col gap-3 items-base">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="text-primary w-5 h-5" />
                                        Select Date
                                    </div>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="text-primary w-5 h-5" />
                                        Select time slot
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                                        {getTime().map((slot, index) => (
                                            <h2
                                                className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-lime-100 rounded-full ${
                                                    selectedSlot === slot.time
                                                        ? "bg-primary text-lime-100"
                                                        : ""
                                                }`}
                                                key={index}
                                                onClick={() =>
                                                    setSelectedSlot(slot.time)
                                                }
                                            >
                                                {slot.time}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default BookAppointment;
