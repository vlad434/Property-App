import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

//set global title, descr, keywords which affects all pages
export const metadata = {
  title: "Property App",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
