"use client"
import NavBar from '@/layouts/NavBar';
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="bg-background text-foreground w-full">
        <main >
          <QueryClientProvider client={queryClient}>
            <NavBar>
              {children}
            </NavBar>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  )
}


