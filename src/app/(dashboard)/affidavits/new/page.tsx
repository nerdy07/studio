import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { affidavitTypes } from "@/lib/data";

export default function NewAffidavitPage() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-5xl space-y-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold font-headline text-primary mb-2">
            Create a New Affidavit
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg">
            Select the type of affidavit you want to apply for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {affidavitTypes.map((category) => (
            <Card
              key={category.category}
              className="hover:shadow-lg transition-shadow border border-gray-200 rounded-xl"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="w-10 h-10 text-primary" />
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.types.map((type) => (
                    <li key={type.id}>
                      <Link
                        href={`/affidavits/new/${type.id}`}
                        className="flex items-center justify-between p-3 -m-3 rounded-lg hover:bg-accent/30 transition-colors"
                      >
                        <span className="font-medium text-base">
                          {type.name}
                        </span>
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
    </div>
  );
}
