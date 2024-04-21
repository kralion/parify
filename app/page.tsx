import { FAQs } from "@/components/home/faqs";
import FooterCard from "@/components/home/footer-card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-16">
      <div>
        <div
          className="flex justify-center items-center pl-7"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?size=626&ext=jpg')",
          }}
        >
          <div className="space-y-7">
            <h3 className=" text-6xl">
              Discover the joy of <br />
              <span className="bg-purple-300 px-2 rounded-xl">
                effortles
              </span>{" "}
              industrial part sourcing
              <span className="bg-purple-300 px-2 rounded-xl">with Parify</span>
            </h3>
            <h5 className="text-zinc-400">
              Parify&apos;s 3D printing service is now avaible and ready <br />
              to revolutionize the way you think about production and
              manufacturing
            </h5>
          </div>

          <Image
            src="https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2149014845.jpg?size=626&ext=jpg"
            className="hidden lg:flex"
            width={1200}
            height={2000}
            alt="Hero Image"
          />
        </div>
        <section className="flex flex-col lg:flex-row lg:justify-between bg-zinc-300">
          <Link
            href="/sign-in"
            className=" border-2 flex w-full lg:p-0 p-5 justify-center items-center bg-white rounded-lg lg:w-64"
          >
            <Button className="rounded-full lg:w-fit  w-full uppercase px-5 group">
              Get Started
              <MoveRight
                size={15}
                className="group-hover:translate-x-2 ml-2 duration-200 ease-linear "
              />
            </Button>
          </Link>
          <FooterCard
            cardTitle="A world of posibilities"
            cardDescription="Discover our advanced manufacturing materials and technologies"
            cardImageSrc="https://img.icons8.com/?size=2x&id=ybVKrPU0Ehti&format=png"
          />
          <FooterCard
            cardTitle="Quality that your company can trust"
            cardDescription="Explore our industrial-grade parts and advanced specification options"
            cardImageSrc="https://img.icons8.com/?size=2x&id=9bYF4MhakOfC&format=png"
          />
          <FooterCard
            cardTitle="Get yout parts faster"
            cardDescription="Industrial-grade parts, fast delivery: 6 bussiness days max"
            cardImageSrc="https://img.icons8.com/?size=2x&id=24589&format=png"
          />
        </section>
      </div>
      <FAQs />
    </main>
  );
}
