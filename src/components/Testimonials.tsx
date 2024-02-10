import React from "react";
import TestimonialCard from "./cards/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export type User = {
  name: string;
  role: string;
  img: string;
};

export interface ITestimonial {
  byCompany: boolean;
  testimonial: string;
  name: string;
  image: string;
  user?: User;
}

const TESTIMONIALS: ITestimonial[] = [
  {
    byCompany: true,
    testimonial:
      "We have utilized payment solutions provided by Fetcch for our various products. The team has been exceptionally quick in rolling out new features and has provided outstanding support throughout our integration process.",
    name: "KanaLabs",
    image: "/kanalabs.svg",
  },
  {
    byCompany: true,
    testimonial:
      "The checkout system by Fetcch is excellent for our deposit funds function, eliminating barriers for users concerning chain and token. Now, they can make payments in any token on any chain, which stands out as a remarkable feature.",
    name: "NexG",
    image: "/nexg.svg",
  },
  {
    byCompany: false,
    testimonial:
      "Using Payments powred by fetcch for sometime now, team has been very quick in integration support and have enabled paying in any token to our customers",
    name: "AirChains",
    image: "/airchains.svg",
    user: {
      name: "Deepak Gupta",
      role: "Global Vice-President at airchains",
      img: "https://s3-alpha-sig.figma.com/img/c2e7/3af2/7453ccb9ed2061f08f21aeec45fe6bd9?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgpxdjzM9uhv80Aufc8wy6JXb2eDFGJHsdqGw9h7xya8WR4fgpMCE0v8DEr7njGKMOYAaUdFW0CL6hVYhMmxBRNZHYOc1KnFDWkxMlPvcL0gZQeRqEBy9U5j4U1rEnjRHpmhBc61ySqx6NcIvO-GHONztIF8~IvhxCicoq0wpjFagf9rKZF8FqqPCtdVMz12Uw2XP7MkQYmsxWjCakazsNq~dBUc5iF21V09jlZr4kbQJvBLsi0h~7PRMLKwAwbr5XMN8g~tbJYcKWxU7nwYQlOl6FzieIEuIjLvL1tS~ot09rcNpLK~lkt3joZa9o7YwMtAno5JxSLIWSnySbUDog__",
    },
  },
  {
    byCompany: false,
    testimonial:
      "Since using Request bot for fetcch, Sending and receiving crypto has become easy and seamless",
    name: "Levitate Labs",
    image: "/levitatelabs.svg",
    user: {
      name: "Pratik M",
      role: "General Partner at Levitate Labs",
      img: "https://s3-alpha-sig.figma.com/img/fb61/5288/ba6aded71da4056a46b7d795887e3da7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiO7DaUB6v5b66yaDjHKGSZIsD0EpxxQMxwvLFGCOWhb9plBWN0sl3xBO8X3abyXQf1olu5TmSSKzW1S5w~XqZBHj~MMBHR-cdAsgwtNbTNXKf1VH13z-yu5nKCQzEIAloz60T18HGmPk0mD1ocu5x6MjptPlmZ0MchQYJeeLOlqWmuXZn42h~KDV4d72sYoLZFbttYXF4rkKn1KQ7mlTYg9K271NEIRmPvwedIPEvpzUH3EwtDOi4G5KKJmb-N2mDh~KKMvRL7VSEVPWYgH3CIhVtAs7wUHCivCFow9Ran2PxErZKokptqm0rzHrgpO6U79-4CgZqeY3nKb1sEd4Q__",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="px-8">
      <h4 className="text-4xl font-bold text-center my-20">Testimonials</h4>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        centeredSlides={true}
        speed={1200}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1500: {
            slidesPerView: 2.3,
          },
          1600: {
            slidesPerView: 3,
          },
        }}
        className="mx-auto justify-center items-center"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
