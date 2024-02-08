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
          </div>
        </div>
      </div>
    </section>
  );
}
