import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Footer from "@/components/footer/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Automaton',
    description: 'Automaton',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Footer />
            </body>
        </html>
    )
}
