import React from 'react';
import styled from 'styled-components';
import Question from './Question';

const Faq = () => {
    return (
        <QuestionsBox>
            <H1>FAQ</H1>
            <Question question="How many team members can I invite?" answer="You can invite up to 5 team members to collaborate on your projects." />
            <Question question="What is the maximum file upload size?" answer="No more than 2GB. All files in your account 
must fit your allotted storage space."/>
            <Question question="How do I reset my password?" answer='To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your registered email to reset your password.' />
            <Question question="Can I cancel my subscription?" answer="Yes, you can cancel your subscription at any time by going to your account settings and selecting the cancellation option. Please note any applicable terms or conditions." />
            <Question question="Do you provide additional support?" answer="We offer comprehensive customer support to assist you with any questions or issues you may have. Contact our support team through email or live chat for prompt assistance." />
        </QuestionsBox>
    );
};
const H1 = styled.h1`
    font-weight: 700;
    color: #1E1F36;
    font-size: 3.2rem;
    line-height: 3.2rem;
    align-self: center;
    margin-bottom: 40px;

`
const QuestionsBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export default Faq;