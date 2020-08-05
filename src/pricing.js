import React from "react";
import { CustMod } from "./mods";
import Cards from "./price_card";
import Footer from "./footer";

export default function Pricing() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F8F8F8 -0.31%, #FFFFFF 52.09%)",
        mixBlendMode: "normal",
      }}
    >
      <Headings />
      <Cards />
      <div className="price-cust-pos">
        <CustMod />
      </div>
      <br />
      <div className="price-footer-pos">
        <Footer />
      </div>
    </div>
  );
}

export function Headings() {
  return (
    <div>
      <br />

      <div className="text-center small-text">Packages</div>
      <br />

      <center>
        <span className="heading">Choose kalpkriti packages that’s</span>
        <br />
        <span className="heading">right for your business</span>

        <br />
      </center>
    </div>
  );
}
