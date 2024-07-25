import Navbar from "@/components/bars/Navbar/Navbar";
import BreadCrumbComp from "@/components/BreadCrumbComp";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";

export default function DashboardLayout({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          },
          components: {
            Menu: {
              itemBg: "transparent",
              horizontalItemSelectedColor: "inherit",
              horizontalLineHeight: 0,
            },
            Breadcrumb:{
            fontSize: "15px",
            }
          },
        }}
      >
        <Navbar />
        <BreadCrumbComp />

        {children}
        <Footer />
      </ConfigProvider>
    </>
  );
}
