import React from "react"

export default function Demo() {
  return (
    <section className="flex min-h-[440px] w-full items-center bg-white">
      <div className="relative mx-auto min-h-[310px] w-full max-w-[1220px] bg-[#263238] lg:rounded-2xl">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block xl:w-fit">
          <img src="/demo.svg" className="w-full h-full"/>
        </div>
        <div className="flex min-h-[310px] flex-col justify-center pl-8">
          <h3 className="mb-4 uppercase text-white">Get Started</h3>
          <h2 className="max-w-xl text-2xl font-semibold text-white xl:text-4xl">
            Book a demo with Fetcch today and add payment request button
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://calendly.com/ray-fetcch/fetcch-demo"
              target="_blank"
              className="mt-8 inline-block max-w-fit rounded-full border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Book Demo
            </a>
            <a
              href="https://docs.fetcch.xyz/"
              target="_blank"
              className="mt-8 inline-block max-w-fit rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              Integrate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
