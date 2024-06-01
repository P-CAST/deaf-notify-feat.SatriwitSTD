import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProps } from "next/app";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

function MyApp({ Component, pageProps}: AppProps) {

  const [isSession, setIsSession] = useState<boolean>(false)

  const getSessionFunc = async () => {
    const session = await fetch(`/api/getSession`, {})
    if (await session.json()) setIsSession(true)
  }

  getSessionFunc()

  return (
      <div>
        <header>
        <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/inperson">In person</Link></li>
              <li><Link href="/notification">Notification</Link></li>
              <li><Link href="/auth">{isSession ? 'Log out' : 'Log in'}</Link></li>
            </ul>
          </nav>
        </header>
          <Component {...pageProps} />
      </div>
  )
}

export default MyApp