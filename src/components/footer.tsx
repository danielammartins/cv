import {styled} from "@linaria/react";
import {LINKEDIN_URL} from "../utils/constants.ts";
import {BREAKPOINTS} from "../utils/breakpoints.ts";

const Footer = () => {
	return (
		<FooterContainer>
			<FlexContainer gap={"32px"}>
				<Link href={LINKEDIN_URL} target={"_blank"}>Linkedin</Link>
			</FlexContainer>
			<FlexContainer gap={"8px"}>
				<RedBall>
				</RedBall>
				<Text>
					updated July 2026
				</Text>
			</FlexContainer>
		</FooterContainer>
	)
}

export default Footer;

const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;

    @media only screen and (max-width: ${BREAKPOINTS.S.MAX}) {
        flex-direction: column;
        gap: 12px;
		align-items: center;
    }
`;

const FlexContainer = styled.div<{gap: string}>`
	display: flex;
	align-items: center;
	gap: ${({ gap }) => gap};

    @media only screen and (max-width: ${BREAKPOINTS.S.MAX}) {
       flex-direction: column;
		gap: 16px;
    }
`;

const Link = styled.a`
	font-weight: 400;
	color: #221F1C80;
	text-transform: uppercase;
	font-size: 10px;
	letter-spacing: 2px;
	cursor: pointer;
	text-decoration: none;
`;

const Text = styled.p`
    font-weight: 400;
    color: #221F1C80;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
`;

const RedBall = styled.div`
	width: 6px;
	height: 6px;
	background-color: red;
	border-radius: 50%;

    @media only screen and (max-width: ${BREAKPOINTS.S.MAX}) {
        display: none;
    }
;`