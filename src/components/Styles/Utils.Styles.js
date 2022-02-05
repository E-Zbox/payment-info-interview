import styled from "styled-components";

export const Main = styled.main`
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: calc(var(--ten-px)*7);
    padding: calc(var(--ten-px)*3) 0px 0px;
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        div#title {
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3 {
                color: color: ${({
                    theme: {
                        colors: { dark01 },
                    },
                }) => dark01};
                font-size: 1.65rem;
            }
            p {
                color: ${({
                    theme: {
                        colors: { dark04 },
                    },
                }) => dark04};
                font-size: 1.12rem;
            }
        }
        div#payment-method {
            ul {
                display: flex;
                align-items: center;
            }
        }
    }
`;

export const Main2 = styled.main`
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: calc(var(--three-px) * 2) 0px calc(var(--ten-px) * 3.5);
    padding: calc(var(--ten-px) * 3) 0px 0px;
`;

export const Container = styled.div`
    padding: calc(var(--ten-px) * 4) 0px calc(var(--ten-px) * 2);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    form {
        width: 48%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        p,
        div#checkbox {
            margin-bottom: calc(var(--ten-px) * 3);
        }
        p {
            width: 50%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-weight: 500;
            padding: 0px var(--seven-px);
            color: ${({
                theme: {
                    colors: { dark02 },
                },
            }) => dark02};
            label {
                font-family: "Calibri Light";
                font-size: 1.1rem;
                font-weight: 600;
            }
            input {
                height: 48px;
                width: 100%;
                border-radius: 3px;
                font-size: 1.1rem;
                color: ${({
                    theme: {
                        colors: { dark01 },
                    },
                }) => dark01};
                padding: 0px var(--seven-px);
                border: 2px solid
                    ${({
                        theme: {
                            colors: { dark04 },
                        },
                    }) => dark04};
                background-color: #f3f3f3;
                &:focus {
                    outline: 2px solid #ddd;
                }
            }
        }
        div#checkbox {
            width: 100%;
            padding-left: calc(var(--ten-px) * 3.5);
            input[type="checkbox"] {
                display: none;
            }
            label {
                color: #303030;
                font-family: "Calibri Light";
                font-size: 1.1rem;
                font-weight: 600;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: -25px;
                    width: 16px;
                    height: 16px;
                    transform: translateY(-50%);
                    border-radius: 30px;

                    border: 2px solid
                        ${({
                            theme: {
                                colors: { blue02 },
                            },
                        }) => blue02};
                }
                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: -25px;
                    width: 8px;
                    height: 8px;
                    transform: translate(78%, -50%);
                    border-radius: 20px;
                }
            }
            input[type="checkbox"]:checked + label {
                &::before {
                    background-color: ${({
                        theme: {
                            colors: { blue01 },
                        },
                    }) => blue01};
                }
                &::after {
                    background-color: #eee;
                }
            }
        }
        div#button {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export const Container2 = styled.div`
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding-bottom: calc(var(--ten-px) * 6);
`;

export const Div = styled.div`
    flex: 0.25;
    display: flex;
    justify-content: right;
    align-items: center;
    h3 {
        letter-spacing: 0px;
        font-size: 1.43rem;
        font-weight: 900;
        font-family: Verdana;
        letter-spacing: -2px;
    }
`;

export const List = styled.li`
    position: relative;
    list-style: none;
    padding: 0px calc(var(--ten-px) * 2.5);
    padding-left: ${({ selected }) =>
        selected ? "calc(var(--ten-px)*3.5)" : "initial"};
    &::before {
        --size: ${({ selected }) => (selected ? "20px" : "1px")};
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);
        opacity: 0.1;
        background-color: ${({
            theme: {
                colors: { blue02 },
            },
        }) => blue02};
    }
    img {
        width: 60px;
    }
`;

export const Card = styled.img`
    width: 450px;
    height: 300px;
`;

export const Button = styled.button`
    width: 100%;
    border: 0px;
    border-radius: 3px;
    font-size: 1.45rem;
    background-color: ${({
        setBgColor,
        theme: {
            colors: { blue02 },
        },
    }) => setBgColor || blue02};
    color: ${({ setColor }) => setColor || "white"};
    transform: scale(0.96);
    padding: calc(var(--ten-px) * 2) 0px;
    transition: 100ms cubic-bezier(0.6, 0.28, 0.335, -0.045);
    &:hover {
        transform: scale(1);
        background-color: ${({
            setBgColor,
            theme: {
                colors: { blue01 },
            },
        }) => setBgColor || blue01};
    }
`;

export const PriceTag = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(var(--ten-px) * 2);
    h3 {
        color: ${({
            theme: {
                colors: { dark01 },
            },
        }) => dark01};
        font-size: 1.42rem;
    }
`;
