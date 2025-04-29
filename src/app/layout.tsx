import './globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="fr">
            <body className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow container mx-auto p-4">{children}</main>
                <Footer />
            </body>
        </html>
    )
}