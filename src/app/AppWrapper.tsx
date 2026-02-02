"use client";
import Navbar from "../components/ui/Navbar/Navbar";

type AppWrapperProps = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-content">{children}</main>
    </div>
  );
}
