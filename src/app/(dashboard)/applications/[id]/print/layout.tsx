import React from 'react';

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* We can inject styles directly into the head of the main document */}
        <style>{`
            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    background-color: #fff !important;
                }
                .no-print {
                    display: none !important;
                }
                main {
                  background-color: #f3f4f6 !important; /* bg-gray-100 for print preview */
                }
            }
        `}</style>
      </head>
      {/* The root layout already provides the body tag */}
      <main className="bg-gray-100 print:bg-white">
        {children}
      </main>
    </>
  );
}
