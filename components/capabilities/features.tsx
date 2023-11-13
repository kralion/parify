import {
  Blocks,
  BrainCircuit,
  Fingerprint,
  ScissorsSquare,
  SearchCheck,
  Users2,
} from "lucide-react";
import { Inter } from "next/font/google";
import FeatureCard from "./feature-card";
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});
export function Features() {
  return (
    <section className={` w-full py-12 `}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-10">
              <span
                className={`" ${inter.className} shadow-lg shadow-violet-300 text-black bg-purple-200 py-5 px-10  rounded-xl font-black text-4xl`}
              >
                Discover Our Unique Features
              </span>
              <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-zinc-100 mx-auto">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <FeatureCard
                  title="Smart Inbox"
                  description=" Our Smart Inbox feature helps you manage your emails
                    efficiently by prioritizing important emails."
                >
                  <BrainCircuit color="#FFFFFF" size={25} />
                </FeatureCard>
                <FeatureCard
                  title="Seamless Integration"
                  description=" Seamless Integration allows you to connect with your
                    favorite apps and services without leaving your inbox."
                >
                  <Blocks color="#FFFFFF" size={25} />
                </FeatureCard>

                <FeatureCard
                  title="Advanced Customization"
                  description=" With Advanced Customization, you can personalize your
                    email client to suit your preferences and work style."
                >
                  <ScissorsSquare color="#FFFFFF" size={25} />
                </FeatureCard>
                <FeatureCard
                  title="Powerful Search"
                  description=" Our Powerful Search feature allows you to find any
                    email, contact, or file in seconds."
                >
                  <SearchCheck color="#FFFFFF" size={25} />
                </FeatureCard>
                <FeatureCard
                  title="Reliable Security"
                  description=" With Reliable Security, your data is always safe and
                    protected."
                >
                  <Fingerprint color="#FFFFFF" size={25} />
                </FeatureCard>

                <FeatureCard
                  title="Easy Collaboration"
                  description=" Easy Collaboration allows you to share and edit documents
                    with your team in real time."
                >
                  <Users2 color="#FFFFFF" size={25} />
                </FeatureCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
