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
import InputLabel from "./InputLabel";
import { Button } from "./ui/button";
import { useForm } from "@inertiajs/react";
import InputError from "./InputError";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { Calendar } from "./ui/calendar";
import { isPast } from "date-fns";
import { ScrollArea } from "@/Components/ui/scroll-area";

function CreateDiagnosis({ Users }) {
    const { data, setData, errors, post, processing, reset } = useForm({
        user_id: "",
        diagnosis: "",
        treatment: "",
        prescription: "",
    });

    const handleSubmit = () => {
        post(route("doctor.diagnosis.store"), {
            onError: (error) => {
                console.log(error);
            },
            onSuccess: () => {
                reset();
                toast("Diagnosis created successfully");
            },
        });
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="rounded-full bg-yellow-500 text-yellow-100">
                        Make a diagnosis
                    </Button>
                </AlertDialogTrigger>
                <form method="post">
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Make a diagnosis
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <ScrollArea className="h-[420px] w-full rounded-md border p-4">
                                    <div className="space-y-2">
                                        <InputLabel>Rating</InputLabel>
                                        <Select
                                            defaultValue={data.user_id}
                                            onValueChange={(e) =>
                                                setData("user_id", e)
                                            }
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Patient" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Users?.map((user) => (
                                                    <SelectItem
                                                        key={user.id}
                                                        value={user.id}
                                                    >
                                                        {user.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.user_id && (
                                            <InputError
                                                message={errors.user_id}
                                            />
                                        )}
                                    </div>

                                    <div className="space-y-2 mt-5">
                                        <InputLabel>Description</InputLabel>
                                        <Textarea
                                            value={data.diagnosis}
                                            onChange={(e) =>
                                                setData(
                                                    "diagnosis",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.diagnosis && (
                                            <InputError
                                                message={errors.diagnosis}
                                            />
                                        )}
                                    </div>

                                    <div className="space-y-2 mt-5">
                                        <InputLabel>Treatment</InputLabel>
                                        <Textarea
                                            value={data.treatment}
                                            onChange={(e) =>
                                                setData(
                                                    "treatment",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.treatment && (
                                            <InputError
                                                message={errors.treatment}
                                            />
                                        )}

                                        <InputLabel>Prescription</InputLabel>
                                        <Textarea
                                            value={data.prescription}
                                            onChange={(e) =>
                                                setData(
                                                    "prescription",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.prescription && (
                                            <InputError
                                                message={errors.prescription}
                                            />
                                        )}
                                    </div>
                                </ScrollArea>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <Button
                                onClick={handleSubmit}
                                disabled={processing}
                            >
                                Submit
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </form>
            </AlertDialog>

            <Toaster />
        </>
    );
}

export default CreateDiagnosis;
