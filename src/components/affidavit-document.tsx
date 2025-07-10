import type { Application } from '@/lib/data';
import Image from 'next/image';

interface AffidavitDocumentProps {
  application: Application;
  user: {
    fullName: string;
    details: {
      passportPhotoUrl: string;
      signatureUrl: string;
      address: string;
      occupation: string;
    }
  };
}

const CourtSeal = () => (
    <div className="relative w-32 h-32" data-ai-hint="court seal">
        <div className="absolute inset-0 border-4 border-double border-primary rounded-full"></div>
        <div className="absolute inset-2 border-2 border-primary rounded-full"></div>
        <div className="flex flex-col items-center justify-center h-full text-center text-primary font-bold">
            <span className="text-xs">GOMBE STATE</span>
            <span className="text-xs">JUDICIARY</span>
            <div className="w-8 h-px bg-primary my-1"></div>
            <span className="text-[10px]">OF NIGERIA</span>
        </div>
    </div>
)

export function AffidavitDocument({ application, user }: AffidavitDocumentProps) {
  return (
    <div className="bg-white shadow-2xl A4-size mx-auto p-16 relative overflow-hidden font-serif text-black">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
          <CourtSeal />
          <p className="text-[120px] font-black text-blue-100/50 -rotate-45 tracking-widest select-none opacity-50">
            AUTHENTIC
          </p>
      </div>

      <div className="relative z-10">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wider">IN THE HIGH COURT OF JUSTICE</h1>
          <h2 className="text-2xl font-bold">GOMBE STATE OF NIGERIA</h2>
          <h3 className="text-xl font-semibold mt-4">IN THE GOMBE JUDICIAL DIVISION</h3>
          <h4 className="text-2xl font-bold mt-6 underline uppercase">{application.affidavitType}</h4>
        </header>

        <main className="text-lg leading-relaxed space-y-6 text-justify">
          <p>
            I, <span className="font-bold">{user.fullName}</span>, {user.details.gender || 'Male'}
            , {user.details.religion || 'Christian'}, a citizen of the Federal Republic of Nigeria, residing at {' '}
            <span className="font-bold">{user.details.address || '123 Main Street, Gombe'}</span>, do hereby make oath and state as follows:
          </p>

          {/* Dynamic content based on affidavit type */}
          <ol className="list-decimal list-inside space-y-4">
            <li>That I am the deponent herein and by virtue of which I am conversant with the facts of this affidavit.</li>
            {application.id === 'APP202407-001' && (
                 <li>That my name was formerly <span className="font-bold">OLD NAME EXAMPLE</span> and I now wish to be known as <span className="font-bold">{user.fullName}</span>.</li>
            )}
            <li>That all my documents bearing my former name remain valid.</li>
            <li>That I make this solemn declaration conscientiously believing the same to be true and correct and by virtue of the Oaths Act.</li>
          </ol>
        </main>
        
        <footer className="mt-16">
            <div className="flex justify-between items-end">
                <div className="w-1/3">
                    <div className="relative w-28 h-28 border border-gray-400 flex items-center justify-center">
                        <Image src={user.details.passportPhotoUrl} alt="Passport Photo" layout="fill" objectFit="cover" data-ai-hint="person face" />
                        <span className="absolute -bottom-6 text-sm">Deponent&apos;s Passport</span>
                    </div>
                </div>

                <div className="w-1/3 text-center">
                    <div className="relative w-40 h-16 mx-auto">
                        <Image src={user.details.signatureUrl} alt="Signature" layout="fill" objectFit="contain" data-ai-hint="signature" />
                    </div>
                    <div className="border-t border-black mt-2 pt-1">
                        <p className="text-lg font-semibold">DEPONENT</p>
                    </div>
                </div>

                 <div className="w-1/3 text-center">
                    <p>Sworn to at the High Court Registry, Gombe</p>
                    <p>this <span className="font-bold">__{new Date().getDate()}__</span> day of <span className="font-bold">__{new Date().toLocaleString('default', { month: 'long' })}__</span>, <span className="font-bold">__{new Date().getFullYear()}__</span></p>
                </div>
            </div>

            <div className="mt-24 text-center">
                <div className="border-t border-black w-1/3 mx-auto pt-1">
                    <p className="text-lg font-semibold">COMMISSIONER FOR OATHS</p>
                </div>
            </div>
            
            <div className="absolute bottom-8 right-8">
                <CourtSeal />
            </div>
             <div className="absolute bottom-8 left-8 text-xs text-gray-400">
                Ref: {application.id}
            </div>
        </footer>
      </div>
      <style jsx>{`
        .A4-size {
          width: 21cm;
          min-height: 29.7cm;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
