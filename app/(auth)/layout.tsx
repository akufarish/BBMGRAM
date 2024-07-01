import "../globals.css";

export const metadata = {
  title: "BBMGRAM",
  description: "Auth page for BBMGRAM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="grid place-items-center min-h-screen">{children}</div>
      </body>
    </html>
  );
}
