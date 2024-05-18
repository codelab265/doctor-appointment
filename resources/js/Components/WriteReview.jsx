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

function WriteReview({ Doctor, user }) {
    const { data, setData, errors, post, processing, reset } = useForm({
        rating: "",
        comment: "",
        doctor_id: Doctor?.user_id,
        user_id: user?.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("doctor.review.store"), {
            onSuccess: () => {
                reset();
                toast("Submitted successfully");
            },
        });
    };
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="rounded-full bg-yellow-500 text-yellow-100">
                        Write Review
                    </Button>
                </AlertDialogTrigger>
                <form method="post">
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Write Review</AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="space-y-2">
                                    <InputLabel>Rating</InputLabel>
                                    <Select
                                        defaultValue={data.rating}
                                        onValueChange={(e) =>
                                            setData("rating", e)
                                        }
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Rating" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                            <SelectItem value="4">4</SelectItem>
                                            <SelectItem value="5">5</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.rating && (
                                        <InputError message={errors.rating} />
                                    )}
                                </div>

                                <div className="space-y-2 mt-5">
                                    <InputLabel>Review</InputLabel>
                                    <Textarea
                                        value={data.comment}
                                        onChange={(e) =>
                                            setData("comment", e.target.value)
                                        }
                                    />
                                    {errors.comment && (
                                        <InputError message={errors.comment} />
                                    )}
                                </div>
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

export default WriteReview;
