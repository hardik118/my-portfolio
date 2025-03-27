"use client";
import { useEffect, useState } from "react";
import HelloAnimation from "./component/FirstIntro";
import './/globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenHelloAnimation");

    if (!hasSeenAnimation) {
      setShowAnimation(true);
      sessionStorage.setItem("hasSeenHelloAnimation", "true");

      setTimeout(() => {
        setShowAnimation(false);
      }, 3000); // Match HelloAnimation duration
    }
  }, []);

  return (
    <html lang="en">
      <body className="relative">
        {showAnimation && <HelloAnimation />}
        <main className={showAnimation ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
          {children}
        </main>
      </body>
    </html>
  );
}
