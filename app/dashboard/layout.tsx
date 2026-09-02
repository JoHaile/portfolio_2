import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { Toaster } from "@/components/ui/sonner"
import "../globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Admin Dashboard — Portfolio",
  description: "Manage your portfolio content",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="flex min-h-screen">
          <DashboardSidebar />
          <main className="flex-1 pl-64">
            <div className="p-8">{children}</div>
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
