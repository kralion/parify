import {
  Blocks,
  BrainCircuit,
  Fingerprint,
  ScissorsSquare,
  SearchCheck,
  Users2,
} from "lucide-react";
import { Inter } from "next/font/google";
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
            <div className="space-y-2">
              <h1
                className={`" ${inter.className} text-3xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-gray-100"`}
              >
                Discover Our Unique Features
              </h1>
              <p className="max-w-[600px] text-gray-900 md:text-xl dark:text-zinc-100 mx-auto">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex  hover:bg-purple-300 group duration-200 hover:shadow-md flex-col items-center space-y-2  p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
                    <BrainCircuit color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Smart Inbox
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    Our Smart Inbox feature helps you manage your emails
                    efficiently by prioritizing important emails.
                  </p>
                </div>
                <div className="flex flex-col group hover:bg-purple-300 duration-200 hover:shadow-md  items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100  bg-opacity-50 rounded-full">
                    <Blocks color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Seamless Integration
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    Seamless Integration allows you to connect with your
                    favorite apps and services without leaving your inbox.
                  </p>
                </div>
                <div className="flex group hover:bg-purple-300 duration-200 hover:shadow-md  flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
                    <ScissorsSquare color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Advanced Customization
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    With Advanced Customization, you can personalize your email
                    client to suit your preferences and work style.
                  </p>
                </div>
                <div className="flex group hover:bg-purple-300 duration-200 hover:shadow-md  flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
                    <SearchCheck color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Powerful Search
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    Our Powerful Search feature allows you to find any email,
                    contact, or file in seconds.
                  </p>
                </div>
                <div className="flex group hover:bg-purple-300 duration-200 hover:shadow-md  flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
                    <Fingerprint color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Reliable Security
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    With Reliable Security, your data is always safe and
                    protected.
                  </p>
                </div>
                <div className="flex group hover:bg-purple-300 duration-200 hover:shadow-md  flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <div className="p-2 bg-gray-800 duration-200 group-hover:bg-opacity-100 bg-opacity-50 rounded-full">
                    <Users2 color="#FFFFFF" size={25} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Easy Collaboration
                  </h2>
                  <p className="text-gray-600 dark:text-zinc-100">
                    Easy Collaboration allows you to share and edit documents
                    with your team in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
