import NavBar from '@/app/layouts/NavBar'
import './globals.css'

export const metadata = {
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground w-full">
        <main >
          <NavBar>
            {children}
          </NavBar>
        </main>
      </body>
    </html>
  )
}
