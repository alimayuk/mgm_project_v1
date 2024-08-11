import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./css/globals.css";
import "./css/responsive.css";
import "./css/antDesingCustom.css";
import "suneditor/dist/css/suneditor.min.css";
import StoreProvider from "./StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
export const metadata = {
  title: "MGM",
  description: "MGM ",
};

export default async function LocaleLayout({ children }) {
  const locale = await getLocale();

// Providing all messages to the client
// side is the easiest way to get started
const messages = await getMessages();
  return (
    <html lang={locale} >
      <body suppressHydrationWarning={true}>
      <NextIntlClientProvider messages={messages}>
      <StoreProvider>
        <AntdRegistry>{children}</AntdRegistry>
        </StoreProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
