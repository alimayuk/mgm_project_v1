import Navbar from "@/components/bars/WorkPlaceHeader";
import WorkPlaceSideBar from "@/components/bars/WorkPlaceSideBar";

export default function WorkPlaceLayout({ children }) {
  return (
    <section>
      <Navbar>
      {children}
      </Navbar>
    </section>
  );
}
