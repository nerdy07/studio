import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { affidavitTypes } from '@/lib/data';

export default function NewAffidavitPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Create a New Affidavit</h1>
        <p className="text-muted-foreground">Select the type of affidavit you want to apply for.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {affidavitTypes.map((category) => (
          <Card key={category.category}>
            <CardHeader className="flex flex-row items-center gap-4">
              <category.icon className="w-8 h-8 text-primary" />
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.types.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`/affidavits/new/${type.id}`}
                      className="flex items-center justify-between p-3 -m-3 rounded-lg hover:bg-accent/20 transition-colors"
                    >
                      <span className="font-medium">{type.name}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
