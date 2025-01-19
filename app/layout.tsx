import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Digicookbook',
    description: 'Your digital cookbook',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header className="flex flex-row">
                    <Image
                        className="dark:invert"
                        src="/hamburger.svg"
                        alt="digicook hamburger"
                        width={24}
                        height={24}
                        priority
                    />
                    <h1 className="text-3xl font-bold underline">DigiCook</h1>
                    <Image
                        className="dark:invert"
                        src="/account.svg"
                        alt="digicook account"
                        width={24}
                        height={24}
                        priority
                    />
                </header>
                <section className="border-white border px-8 py-10 rounded-md">
                    {children}
                </section>
                <footer className="flex flex-row">
                    <p>Test Footer</p>
                </footer>
            </body>
        </html>
    )
}
