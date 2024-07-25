import Navbar from "@/components/bars/WorkPlaceHeader";

export default function WorkPlaceLayout({ children }) {
  return (
    <>
      <Navbar>
      {children}
      </Navbar>
    </>
  );
}
