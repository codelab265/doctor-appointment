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
import { Button } from "./ui/button";

function DiagnosisTable({ Diagnoses, user, title }) {
    return (
        <Table>
            <TableCaption>{title}</TableCaption>
            <TableHeader>
                <TableRow>
                    {user.role == "doctor" ? (
                        <TableHead>Member</TableHead>
                    ) : (
                        <TableHead>Doctor</TableHead>
                    )}
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Diagnoses.map((diagnosis) => (
                    <TableRow key={diagnosis.id}>
                        <TableCell>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-lime-100">
                                        {user.role == "doctor"
                                            ? diagnosis.user.name.charAt(0)
                                            : diagnosis.doctor.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">
                                        {user.role == "doctor"
                                            ? diagnosis.user.name
                                            : diagnosis.doctor.name}
                                    </div>
                                    <div className="text-sm opacity-50">
                                        {user.role == "doctor"
                                            ? diagnosis.user.name
                                            : diagnosis.doctor.name}
                                    </div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>{diagnosis.diagnosis}</TableCell>
                        <TableCell>{diagnosis.diagnosis_date}</TableCell>

                        <TableCell>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button className="rounded-full">
                                        More Details
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Diagnosis Details
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="flex flex-col gap-2">
                                            <div className="p-4 border rounded-md">
                                                <div className="font-bold">
                                                    Description
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {diagnosis.diagnosis}
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-md">
                                                <div className="font-bold">
                                                    Treatment
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {diagnosis.treatment}
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-md">
                                                <div className="font-bold">
                                                    Prescription
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {diagnosis.prescription}
                                                </div>
                                            </div>

                                            <div className="p-4 border rounded-md">
                                                <div className="font-bold">
                                                    Diagnosis Date
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {diagnosis.diagnosis_date}
                                                </div>
                                            </div>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DiagnosisTable;
