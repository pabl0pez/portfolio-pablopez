import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: {
                      400: '#4300FF',
                      500: '#00CAFF',
                    }
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body className="bg-black text-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}