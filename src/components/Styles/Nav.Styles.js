import styled from "styled-components";

export const NavStyle = styled.nav`
    width: 100%;
    padding: calc(var(--ten-px) * 3);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const ListStyle = styled.li`
    text-transform: uppercase;
    list-style: "";
    color: ${({
        selected,
        theme: {
            menu: { color },
        },
    }) => (selected ? color.hover : color.default)};
    margin: 0px calc(var(--ten-px));
    padding: var(--three-px);
    cursor: pointer;
    font-weight: ${({ selected }) => (selected ? 900 : 600)};
    font-size: 1.55rem;
    border-bottom: 2px solid transparent;
    border-bottom-color: ${({
        selected,
        theme: {
            menu: { color },
        },
    }) => (selected ? color.hover : "")};
    /**transition */
    transition: border-bottom 1200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        color: ${({
            theme: {
                menu: { color },
            },
        }) => color.hover};
    }
`;

export const ContainerULStyle = styled.ul`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: var(--seven-px) calc(var(--ten-px) * 1.8);
`;

export const Img = styled.img`
    width: ${({
        theme: {
            image: { size },
        },
    }) => size};
    height: ${({
        theme: {
            image: { size },
        },
    }) => size};
    border-radius: ${({
        theme: {
            image: { size },
        },
    }) => size};
    margin-left: calc(var(--ten-px) * 3);
`;
