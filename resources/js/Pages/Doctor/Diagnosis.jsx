import CreateDiagnosis from "@/Components/CreateDiagnosis";
import DiagnosisTable from "@/Components/DiagnosisTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Diagnosis({ auth, Diagnosis, Users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between w-full">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Diagnosis
                    </h2>
                    <div className="">
                        <CreateDiagnosis Users={Users} />
                    </div>
                </div>
            }
        >
            <Head title="Diagnosis" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-8">
                            <div className="">
                                <DiagnosisTable
                                    Diagnoses={Diagnosis}
                                    user={auth.user}
                                    title={"Diagnosis"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Diagnosis;
