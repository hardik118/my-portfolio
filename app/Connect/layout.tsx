'use client';
import { Footer } from "../component/footer";
import { Navbar } from "../component/Navbar";

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
        <Navbar></Navbar>
      <main className="flex-1 p-5">{children}</main> {/* This renders the current project page */}
      <Footer></Footer>
    </div>
  );
}
