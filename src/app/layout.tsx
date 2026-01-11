import "@/css/globals.css";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body antialiased selection:text-white selection:bg-primary">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "UtilityPay - One Platform, All Utilities",
  description: `
    Join 50,000+ Nigerians managing electricity, cable TV,
    and data subscriptions in one ultra-secure
    dashboard. Instant delivery, zero stress.
  `,
};