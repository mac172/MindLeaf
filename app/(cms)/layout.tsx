export default function RootLayout({children}) {
    return (
        <html lang="en" className="dark">
            <body>
                {children}
            </body>
        </html>
    )
}