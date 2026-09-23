import {styled} from "@linaria/react";
import {BREAKPOINTS} from "../../utils/breakpoints.ts";

export const Item = styled.div`
   display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 64px;
`;

export const ItemTitle = styled.p`
    font-weight: 500;
	font-size: 20px;
`;

export const ItemDates = styled.p`
    font-family: var(--mono), monospace;
	font-size: 11px;
    color: var(--color-light-gray); 
	text-transform: uppercase;
`;

export const ItemDetail = styled.p`
    color: var(--color-light-gray); 
    font-size: 14px;
	font-style: italic;
`;

export const ItemDescription = styled.p`
	font-size: 15px;
	line-height: 24px;
`;

export const SectionHeader = styled.div`
    display: flex;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        flex-direction: column;
        gap: 8px;
    }
`;

export const SectionContent = styled.div`
    padding-left: 212px;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        padding-left: 0;
        margin-top: 16px;
    }
`;

export const Separator = styled.div`
    border-top: 1px solid #221F1C1A;
    height: 24px;
    flex: 1;
    width: 100%;
`;

export const Title = styled.p`
    text-transform: uppercase;
    color: #221F1C80;
    font-family: var(--mono), monospace;
    letter-spacing: 2px;
    font-size: 10px;
`;

export const SectionTitle = styled(Title)`
    width: 212px;
    flex: 0 0 212px auto;
`;

export const SectionFlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

    @media only screen and (max-width: ${BREAKPOINTS.S.MAX}) {
		flex-direction: column;
		align-items: flex-start;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`;
