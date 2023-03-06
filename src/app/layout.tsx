export const metadata = {
  title: "BrushBids auctions",
  description: "Bid on curated artwork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
