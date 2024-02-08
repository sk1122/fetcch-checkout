import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-white border border-[#E8E8E8] p-7 rounded-xl w-full md:w-1/2">
      <img src="/dashboard.svg" alt="" className="mx-auto md:h-40" />
      <div className="mt-6">
        <h6 className="text-lg font-medium">Simplified dashboard</h6>
        <p className="text-[#4D5C75] text-sm font-medium max-w-96">
          View and export detailed transaction reports, payment and purchase
          data for easy accounting.
        </p>
      </div>
    </div>
  );
}
