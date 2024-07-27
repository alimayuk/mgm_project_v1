import Navbar from "@/components/bars/workplace/WorkPlaceHeader";

export default function WorkPlaceLayout({ children }) {
  return (
    <>
      <Navbar>
      {children}
      </Navbar>
    </>
  );
}
