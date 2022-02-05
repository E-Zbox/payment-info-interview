import React, { useState } from "react";
// components
import Form from "./Form";
// data
import { paymentData } from "../utils/data";
// styles
import { Main, Container, List, Card } from "./Styles/Utils.Styles.js";

const SectionOne = () => {
    const [state, setState] = useState(
        paymentData.method.map((item, index) => ({
            ...item,
            selected: index === 0 ? true : false,
        }))
    );

    const handleClick = (id) => {
        const newState = state.map((item, index) =>
            id === index
                ? { ...item, selected: true }
                : { ...item, selected: false }
        );
        setState(newState);
    };
    return (
        <Main className="top-border">
            <header>
                <div id="title">
                    <h3>Payment Information</h3>
                    <p>Choose your method of payment.</p>
                </div>
                <div id="payment-method">
                    <ul>
                        {state.map((item, index) => (
                            <List
                                onClick={() => handleClick(index)}
                                selected={item.selected}
                                key={index}
                            >
                                <img alt={item.name} src={item.source} />
                            </List>
                        ))}
                    </ul>
                </div>
            </header>
            <Container>
                <Card src="mastercard.png" />
                <Form />
            </Container>
        </Main>
    );
};

export default SectionOne;
