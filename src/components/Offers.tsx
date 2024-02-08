import React from "react";
import API from "./cards/API";
import Crosschain from "./cards/Crosschain";
import Checkouts from "./cards/Checkouts";
import Dashboard from "./cards/Dashboard";
import Custodial from "./cards/Custodial";

export default function Offers() {
  return (
    <div className="py-20 bg-[#F5F5F5] px-4">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-4xl font-bold text-center">What we offer</h4>
        <p className="text-center text-[#5A6475] max-w-4xl mx-auto mt-4">
          We have Developer SDK for every type of payment product - mobile
          wallets, browser wallets, payment gateways, PoS machines, onramps,
          offramps, bridges etc. to enable payment requests.
        </p>
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row items-center gap-2 mb-2">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Crosschain />
              <Checkouts />
            </div>
            <Custodial />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <API />
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
