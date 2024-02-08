import React from "react";

export default function TestimonialCard() {
  return (
    <div className="p-4 bg-[#F3F5F7] border border-[#D4D4D4] rounded-xl w-96">
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
      <p className="font-medium text-xs mt-3">
        I use your site, Random.org, on a regular basis for my modern dance
        choreography. I apply the randomly generated numbers to assigned
        variable constraints, such as time, space and movement order.
      </p>
      <div className="flex items-center mt-8 gap-3">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-11 h-11 rounded-full"
        />
        <div>
          <h6 className="font-medium">The Meowman</h6>
          <p className="font-medium text-xs text-[#4D5C75]">
            CEO and Co-Founder at XYZ
          </p>
        </div>
      </div>
    </div>
  );
}
