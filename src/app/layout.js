import Navbar from '@/Components/Navbar/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* Navbar Section */}
        <nav>
          <Navbar />
        </nav>
        {/* Header Section */}
        <header></header>
        {/* Main Section */}
        <main>{children}</main>
        {/* Footer Section */}
        <footer></footer>
      </body>
    </html>
  );
}
