import { styled } from "@linaria/react";
import {BREAKPOINTS} from "../utils/breakpoints.ts";

const Name = () => {
    return (
    <Container>
        <JobRole>Full Stack Software Developer</JobRole>
        <FullName>
            Daniela Martins
        </FullName>
    </Container>
    )
}

const Container = styled.div`
    display: flex;    
    flex-direction: column;
    margin-bottom: 128px;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        margin-bottom: 64px;
    }
`;

const FullName = styled.h1`
  margin: 0;
  font-style: italic;
  font-size: 8vw;
  line-height: 100%;

    @media screen and (min-width: 1200px) {
            font-size: 120px;
        }
`;

const JobRole = styled.p`
    text-transform: uppercase;
    font-size: 11px;
    color: #C9501D;
    letter-spacing: 1px;
    font-family: 'JetBrains Mono',monospace;
    margin-bottom: 16px;
`;

export default Name;
