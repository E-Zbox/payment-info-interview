import React from "react";
import { Main2, PriceTag } from "./Styles/Utils.Styles";

const SectionTwo = () => (
    <Main2 className="top-border">
        <PriceTag>
            <h3>Subtotal</h3>
            <h3>
                <span>₦</span>2,497.00
            </h3>
        </PriceTag>
        <PriceTag>
            <h3>Estimated TAX</h3>
            <h3>
                <span>₦</span>119.64
            </h3>
        </PriceTag>
        <PriceTag>
            <h3>
                Promotional Code:{" "}
                <span style={{ color: "#ccc" }}>Z4KXLM9A</span>
            </h3>
            <h3>
                <span>₦</span>-60.00
            </h3>
        </PriceTag>
    </Main2>
);

export default SectionTwo;
