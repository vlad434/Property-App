import "@/assets/styles/globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
