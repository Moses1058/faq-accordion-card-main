import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import downArrow from './assets/icon-arrow-down.svg';

const Question = ({ question, answer }) => {
    const [clicked, setClicked] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    return (
        <>
            <Main>
                <H2>{question}</H2>
                <Image onClick={() => {
                    setClicked(!clicked);
                    setIsRotated(!isRotated);
                }} src={downArrow} alt="downArrow" />
            </Main >
            {clicked && (<Answer>{answer}</Answer>)}
            <Hr />
        </>
    );
};
const Image = styled.img(
    () => css`
        transform: rotate(180deg);
        transition: transform 0.3s ease-in;
        cursor: pointer;
    `
);

const Answer = styled.p`
    font-weight: 400;
    font-size: 1.23rem;
    line-height: 1.8rem;
    width: 100%;
    color: #787887;
    margin-top: 12px;
`;
const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #E8E8EA;
    margin: 18px 0;
`;
const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const H2 = styled.h2(
    (props) => css`
    font-weight: ${400};
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: ${'#4B4C5F'};
    `
);

export default Question;