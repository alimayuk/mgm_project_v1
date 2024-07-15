import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
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
