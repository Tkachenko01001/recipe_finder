import { Header } from '@/components/layout/header'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
