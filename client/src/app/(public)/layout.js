import Navbar from "@/components/bars/Navbar/Navbar";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";

export default function DashboardLayout({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
          },
          components: {
            Menu: {
              itemBg: "transparent",
              horizontalItemSelectedColor: "inherit",
              horizontalLineHeight: 0,
            }
          },
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </ConfigProvider>
    </>
  );
}
