import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Link } from "@inertiajs/react";

export default function MainLayout({ children, auth }) {
    return (
        <div className="">
            <Header user={auth.user} />

            <main className="container">{children}</main>

            <Footer />
        </div>
    );
}
