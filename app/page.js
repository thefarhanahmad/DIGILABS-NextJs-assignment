import Screen from "@/components/Screen";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // screen
  return (
    <div className="bg-slate-700  w-full h-full overflow-hidden">
      <Screen />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "white",
              border: "1px solid #DF522B",
            },
            iconTheme: {
              primary: "#DF522B",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
    </div>
  );
}
