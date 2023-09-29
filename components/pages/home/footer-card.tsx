import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
type FooterCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImageSrc: string;
};

export default function FooterCard({
  cardTitle,
  cardDescription,
  cardImageSrc,
}: FooterCardProps) {
  return (
    <Card className="hover:bg-zinc-100 group cursor-pointer duration-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image src={cardImageSrc} width={50} height={50} alt="cardImageSrc" />
          <div className="">
            <CardTitle className="flex gap-1">
              {cardTitle}
              <ChevronRight
                className="group-hover:ml-3 duration-200 group-hover:opacity-100 opacity-0"
                size={20}
              />
            </CardTitle>
            <CardDescription>{cardDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
