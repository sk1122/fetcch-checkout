import { ITestimonial } from "../Testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: ITestimonial;
}) {
  return (
    <div className="p-4 bg-[#FBFDFB] border border-[#D4D4D4] rounded-xl w-full md:w-[600px] h-auto md:h-[270px] flex flex-col justify-between">
      <div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5126 7.19995C8.44442 13.0785 5.59998 19.3362 5.59998 24.9303C5.59998 29.4814 9.01331 32.8 12.4266 32.8C15.4607 32.8 17.9259 30.3348 17.9259 27.3007C17.9259 23.4133 15.0815 21.4222 10.9096 21.4222C10.9096 16.7762 12.3318 14.0266 16.7881 9.47551L14.5126 7.19995ZM30.3466 7.19995C24.2785 13.0785 21.434 19.3362 21.434 24.9303C21.434 29.4814 24.8474 32.8 28.2607 32.8C31.2948 32.8 33.76 30.3348 33.76 27.3007C33.76 23.4133 30.9155 21.4222 26.7437 21.4222C26.7437 16.7762 28.1659 14.0266 32.6222 9.47551L30.3466 7.19995Z"
            fill="#3461FF"
          />
        </svg>
        <p className="font-medium text-sm mt-3 text-center px-8">
          {testimonial.testimonial}
        </p>
        <div className="w-full flex justify-end">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4873 32.8C31.5555 26.9215 34.3999 20.6638 34.3999 15.0697C34.3999 10.5186 30.9866 7.20005 27.5732 7.20005C24.5392 7.20005 22.074 9.66524 22.074 12.6993C22.074 16.5867 24.9184 18.5778 29.0903 18.5778C29.0903 23.2238 27.668 25.9734 23.2118 30.5245L25.4873 32.8ZM9.65324 32.8001C15.7214 26.9215 18.5658 20.6638 18.5658 15.0697C18.5658 10.5186 15.1525 7.20005 11.7392 7.20005C8.70509 7.20005 6.2399 9.66524 6.2399 12.6993C6.2399 16.5867 9.08435 18.5778 13.2562 18.5778C13.2562 23.2238 11.834 25.9734 7.37768 30.5245L9.65324 32.8001Z"
              fill="#3461FF"
            />
          </svg>
        </div>
      </div>
      {testimonial?.byCompany ? (
        <div className="flex justify-center items-center mt-8">
          <img src={testimonial?.image} alt="" className="h-8" />
        </div>
      ) : (
        <div className="flex items-center justify-between mt-8 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <img
              src={testimonial?.user?.img}
              alt={testimonial?.user?.name}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h6 className="font-medium">{testimonial?.user?.name}</h6>
              <p className="font-medium text-xs text-[#4D5C75]">
                {testimonial?.user?.role}
              </p>
            </div>
          </div>
          <img
            src={testimonial?.image}
            alt={testimonial?.name}
            className="h-8 mix-blend-multiply"
          />
        </div>
      )}
    </div>
  );
}
