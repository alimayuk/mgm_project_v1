import Navbar from "@/components/bars/Navbar/Navbar";
import Footer from "@/components/Footer";
import { ConfigProvider } from "antd";

export default function DashboardLayout({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
          },
          components: {
            Menu: {
              itemBg: "transparent",
              horizontalItemSelectedColor: "inherit",
              horizontalLineHeight: 0,
            },
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
