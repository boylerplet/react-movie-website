import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: contain;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    border-radius: 15px;
    animation: animateThumb 0.4s;
    display: inline-block;

    ${({inInfo}) => inInfo ? '' : `:hover {
        transform: scale(1.02);
        opacity: 0.92;
    }`}

    @keyframes animateThumb {
        from {
            opacity: 0.2;
        }
        to {
            opacity: 1;
        }
    }
`;