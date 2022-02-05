import React from "react";
import { useForm } from "../hooks";
// styles
import { Button } from "./Styles/Utils.Styles";

const Form = () => {
    const [formValue, setFormValue] = useForm({
        credit_card: "",
        expiration_date: "",
        security_code: "",
        postal_code: "",
    });

    const numberCharArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const inputTypeOneValidator = (e, max) => {
        const {
            target: { value },
        } = e;
        if (value.length <= max) {
            setFormValue(e);
        }
    };

    const inputTypeTwoValidator = (e, max, separator, subStringCount) => {
        const {
            target: { value },
        } = e;
        let textArray = [];
        value.split(separator).forEach((item) => textArray.push(...item));

        let originalString = "";
        textArray.forEach((text) =>
            numberCharArray.indexOf(Number(text)) > -1
                ? (originalString += text)
                : ""
        );
        let numOfIterations = Math.floor(
            originalString.length / subStringCount
        );
        let newString = "";

        if (numOfIterations > 0) {
            for (var count = 1; count <= numOfIterations; count++) {
                numOfIterations >= count
                    ? (newString += `${originalString.substring(
                          (count - 1) * subStringCount,
                          count * subStringCount
                      )}${separator}`)
                    : (newString += originalString.substring(
                          (count - 1) * subStringCount
                      ));
                if (count === numOfIterations) {
                    newString += originalString.substring(
                        count * subStringCount
                    );
                }
            }

            newString =
                newString[newString.length - 1] === separator
                    ? newString.substring(0, newString.length - 1)
                    : newString;
        } else {
            newString += originalString;
        }

        e.target.value = newString;
        inputTypeOneValidator(e, max);
    };

    return (
        <form>
            <p>
                <label htmlFor="_credit_card">Credit card number</label>
                <input
                    value={formValue.credit_card}
                    onChange={(e) => inputTypeTwoValidator(e, 19, " ", 4)}
                    type="text"
                    name="credit_card"
                    id="_credit_card"
                    maxLength={19}
                    required
                />
            </p>
            <p>
                <label htmlFor="_expiration_date">Expiration date</label>
                <input
                    value={formValue.expiration_date}
                    onChange={(e) => inputTypeTwoValidator(e, 5, "/", 2)}
                    type="text"
                    name="expiration_date"
                    id="_expiration_date"
                    maxLength={5}
                    required
                />
            </p>
            <p>
                <label htmlFor="_security_code">Security code</label>
                <input
                    value={formValue.security_code}
                    onChange={(e) => inputTypeOneValidator(e, 3)}
                    type="number"
                    name="security_code"
                    id="_security_code"
                    maxLength={3}
                    required
                />
            </p>
            <p>
                <label htmlFor="_postal_code">Postal Code</label>
                <input
                    value={formValue.postal_code}
                    onChange={(e) => inputTypeOneValidator(e, 5)}
                    type="number"
                    name="postal_code"
                    id="_postal_code"
                    maxLength="5"
                    required
                />
            </p>
            <div id="checkbox">
                <input type="checkbox" name="use-card" id="_use-card" />
                <label htmlFor="_use-card">
                    Use this card for next time purchase
                </label>
            </div>
            <div id="button">
                <Button type="submit">Add card</Button>
            </div>
        </form>
    );
};

export default Form;
