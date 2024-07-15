import Navbar from "@/components/bars/Navbar/Navbar";

export default function DashboardLayout({
  children}) {
  return (
    <>
    <Navbar />
    {children}
    </>
  );
}
