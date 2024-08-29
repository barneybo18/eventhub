"use client"
import AdminHeader from "@/components/shared/AdminHeader";
import Footer from "@/components/shared/Footer";
import { Protect } from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Protect
    permission ='org:create:permission'
    fallback={<p>You do not have access to this page. <a href="/" className="underline text-primary-500">Go Home</a></p>}
  >
    <div className="flex h-screen flex-col">
      <AdminHeader />
      <main  className="flex-1">{children}</main>
      <Footer />
    </div>
    </Protect>
  );
}