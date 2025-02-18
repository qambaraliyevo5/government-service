import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Davlat xizmatlari navbat tizimi",
  description: "Insonlarni qo'llab-quvvatlash davlat korxonasi uchun navbat boshqarish tizimi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        <header className="bg-blue-800 text-white p-4">
          <h1 className="text-2xl font-bold text-center">Davlat xizmatlari navbat tizimi</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 p-4 text-center text-sm">
          <p>&copy; 2023 Insonlarni qo'llab-quvvatlash davlat korxonasi</p>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'