import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";

export default function MainLayout({ children }) {
    return (
        <div className="">
            <Header />

            <main className="container">{children}</main>
        </div>
    );
}
