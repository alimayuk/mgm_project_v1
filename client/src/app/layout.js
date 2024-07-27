import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./css/globals.css";
import "./css/responsive.css";
import "./css/antDesingCustom.css";
import StoreProvider from "./StoreProvider";
export const metadata = {
  title: "MGM",
  description: "MGM ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreProvider>
        <AntdRegistry>{children}</AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
