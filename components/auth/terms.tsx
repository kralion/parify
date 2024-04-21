import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

export default function TermsAndPolicy({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms And Policy</AlertDialogTitle>
          <AlertDialogDescription>
            The privacy policy is a legal statement that explains how a company
            collects, stores, and shares personal data provided by its users.
            <strong>Parify</strong> is a solid privacy-focused alternative to
            other platforms. It is a privacy-focused platform where sellers can
            sell their products without worrying about their data being misused.
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore dignissimos maxime accusantium in dolor? Eos
                  doloremque facere quia tenetur a?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What about the privacy?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore dignissimos maxime accusantium in dolor? Eos
                  doloremque facere quia tenetur a?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Where goes my data?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore dignissimos maxime accusantium in dolor? Eos
                  doloremque facere quia tenetur a?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How strong is the security?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore dignissimos maxime accusantium in dolor? Eos
                  doloremque facere quia tenetur a?
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
