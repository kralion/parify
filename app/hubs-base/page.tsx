import AppLayout from "@/components/global/app-layout";
import { HubCard } from "@/components/hub/hub-card";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";
export default function Page() {
  return (
    <AppLayout>
      <HubCard
        title="Classic RTO-488/LL"
        price={1200}
        rate={4}
        srcImage="https://img.freepik.com/free-photo/creating_1048-1600.jpg?size=626&ext=jpg"
      />
      <HubCard
        title="Roboto Silver 323-22-CKXL"
        price={1800}
        rate={3}
        srcImage="https://img.freepik.com/free-photo/printing-abstract-form_1048-1585.jpg?size=626&ext=jpg"
      />
      <HubCard
        title="Golden KIT-JUMBO-288"
        price={2200}
        rate={4}
        srcImage="https://img.freepik.com/free-photo/printing-blue-human-heart_1048-1976.jpg?size=626&ext=jpg"
      />
      <HubCard
        title="BLACK-Agressive 323-22-CKXL"
        price={5000}
        rate={5}
        srcImage="https://img.freepik.com/free-photo/printing-human-heart_1048-1975.jpg?size=626&ext=jpg"
      />

      <button className="rounded-full m-5 shadow-lg shadow-purple-300 bg-purple-400 text-white p-3  fixed bottom-0 right-0">
        <ShoppingCartIcon size={25} />
      </button>
    </AppLayout>
  );
}
