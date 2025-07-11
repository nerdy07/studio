
import type { Application } from '@/lib/data';
import Image from 'next/image';
import { cn } from '@/lib/utils';


interface AffidavitDocumentProps {
  application: Application;
  user: {
    fullName: string;
    details: {
      passportPhotoUrl: string;
      signatureUrl: string;
      address: string;
      occupation: string;
      religion: string;
      gender: string;
    }
  };
  isPrintMode: boolean;
}


export function AffidavitDocument({ application, user, isPrintMode }: AffidavitDocumentProps) {
  const swornDate = new Date(application.date + 'T00:00:00'); // Ensure consistent time
  const day = swornDate.getDate();
  const month = swornDate.toLocaleString('default', { month: 'long' });
  const year = swornDate.getFullYear();

  return (
    <div className={cn(
      "bg-white font-serif text-black relative overflow-hidden",
      isPrintMode ? "shadow-lg A4-size mx-auto p-8 sm:p-12" : "p-4 sm:p-8"
    )}>
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
          <p className="text-[100px] sm:text-[150px] font-black text-gray-200 -rotate-45 tracking-widest select-none transform-gpu">
            VERIFIED
          </p>
      </div>

      <div className="relative z-10">
        <header className="text-center mb-8">
            <div className="flex justify-between items-center mb-4">
                 <Image src="https://placehold.co/100x100.png" alt="Zamfara State High Court Logo" width={80} height={80} data-ai-hint="court seal"/>
                 <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">ZAMFARA STATE</h1>
                 </div>
                 <Image src="https://placehold.co/100x100.png" alt="Nigerian Coat of Arms" width={80} height={80} data-ai-hint="coat of arms" />
            </div>
            <div className="bg-primary text-primary-foreground py-2 mb-4">
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider">Affidavit</h2>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mt-6 underline uppercase">{application.affidavitType}</h3>
            <p className="text-sm mt-2 font-mono">REF NO. : {application.id}</p>
        </header>

        <main className="text-base sm:text-lg leading-relaxed space-y-6 text-justify relative">
          <div className="absolute right-0 top-0 w-24 h-28 sm:w-28 sm:h-32 border-2 border-primary p-1 bg-white">
              <Image src={user.details.passportPhotoUrl} alt="Deponent Passport" layout="fill" objectFit="cover" data-ai-hint="person face" />
          </div>
          <p>
            I, <span className="font-bold uppercase">{user.fullName}</span>, {user.details.gender || 'MALE'}, {user.details.occupation || 'NIGERIAN CITIZEN'}, {user.details.religion || 'MUSLIM'}, citizen of <span className="font-bold">{user.details.address || 'NIGERIA'}</span>, do hereby make an oath and declare as follows:
          </p>
          <ol className="list-decimal list-inside space-y-4 pt-4">
            <li>That I am the deponent and the information contained herein is true and correct to the best of my knowledge and belief, and that the photograph is attached herein.</li>
             {application.affidavitType === 'Affidavit of Age Declaration' && (
                <>
                <li>That according to the information I received from my parents, which I verily believe to be true and correct, I was born on the 23rd of June, 1996 in Suleja, Niger state of Nigeria.</li>
                <li>That at the time of my birth, my birth was registered and a certificate obtained which later got lost.</li>
                </>
             )}
             {application.affidavitType !== 'Affidavit of Age Declaration' && (
                <li>That my name was formerly <span className="font-bold">OLD NAME EXAMPLE</span> and I now wish to be known as <span className="font-bold uppercase">{user.fullName}</span>.</li>
             )}

            <li>That this sworn Declaration is now required for official and record purposes.</li>
            <li>That I make this solemn Declaration conscientiously believing the content to be true and correct and in accordance with the Oaths Act of 2004 (as amended).</li>
          </ol>
        </main>
        
        <footer className="mt-16">
            <div className="flex justify-between items-end">
                 <div className="w-1/3 text-center">
                     {/* Intentionally left blank */}
                </div>

                <div className="w-1/3 text-center">
                    <div className="relative w-40 h-16 mx-auto">
                        <Image src={user.details.signatureUrl} alt="Signature" layout="fill" objectFit="contain" data-ai-hint="signature" />
                    </div>
                    <div className="border-t border-black mt-2 pt-1">
                        <p className="text-lg font-semibold">DEPONENT</p>
                    </div>
                </div>

                 <div className="w-1/3 text-center text-sm">
                    <p>Sworn to at the High Court Registry, Zamfara</p>
                    <p>this <span className="font-bold">__{day}__</span> day of <span className="font-bold">__{month}__</span>, <span className="font-bold">__{year}__</span></p>
                </div>
            </div>

            <div className="mt-24 text-center">
                <div className="border-t border-black w-1/3 mx-auto pt-1">
                    <p className="text-lg font-semibold">COMMISSIONER FOR OATHS</p>
                </div>
            </div>
        </footer>
      </div>
      <style jsx>{`
        .A4-size {
          width: 21cm;
          min-height: 29.7cm;
          box-sizing: border-box;
        }
        @media print {
            body {
                background-color: white !important;
            }
        }
      `}</style>
    </div>
  );
}
