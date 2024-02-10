import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="w-full bg-white pb-20 h-[calc(100vh-64px)] px-4">
      <div className="relative isolate h-full">
        <img
          src={"/mesh.svg"}
          alt="hero background"
          className="w-full hidden lg:flex h-full absolute inset-0 -z-10 mt-6"
        />
        <div className="max-w-7xl mx-auto flex justify-center items-center h-full">
          <div>
            <h3
              className={`text-5xl sm:text-7xl font-bold tracking-tight md:text-9xl text-center text-[#FF7D1F] font-manrope ${michroma.className}`}
            >
              CheckOut
            </h3>
            <h3 className="mt-8 text-sm max-w-5xl mx-auto text-center font-manrope text-[#5A6475]">
              We have Developer SDK for every type of payment product - mobile
              wallets, browser wallets, payment gateways, PoS machines, onramps,
              offramps, bridges etc. to enable payment requests.{" "}
            </h3>
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <a
                href="https://calendly.com/ray-fetcch/fetcch-demo"
                target="_blank"
                className="mt-8 inline-block max-w-fit rounded-full border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
              >
                Book Demo
              </a>
              <a
                href="https://t.me/ray_fetcch"
                target="_blank"
                className="mt-8 inline-block max-w-fit rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-black hover:bg-primary/90 hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
