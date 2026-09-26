import {styled} from "@linaria/react";
import raw from "../../assets/cv/personal.json";
import {BREAKPOINTS} from "../../utils/breakpoints.ts";
import {Section} from "./common-styles.tsx";

type InfoItem = {
    field: string;
    value: string;
};

type PersonalInfo = Record<string, InfoItem>;

const Personal = () => {

    const data = raw as PersonalInfo;

    const leftColumn = ["email", "date_of_birth", "phone"];
    const rightColumn = ["github", "drivers_license", "location"];

    return (
        <Section id={"personal"}>
            <SectionHeader>
                <SectionTitle>
                    Personal
                </SectionTitle>
                <Separator></Separator>
            </SectionHeader>

            <SectionContent>
                <div>
                    {leftColumn.map(key => (
                        <Item key={key}>
                            <Title>{data[key].field}</Title>
                            <Value>{data[key].value}</Value>
                        </Item>
                    ))}
                </div>

                <div>
                    {rightColumn.map(key => (
                        <Item key={key}>
                            <Title>{data[key].field}</Title>
                            <Value>{data[key].value}</Value>
                        </Item>
                    ))}
                </div>
            </SectionContent>
        </Section>
    )
}

const SectionHeader = styled.div`
    display: flex;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        flex-direction: column;
        gap: 8px;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 32px;
    grid-column: 2;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        margin-bottom: 24px;
    }
`;

const Title = styled.p`
    text-transform: uppercase;
    color: #221F1C80;
    font-family: var(--mono), monospace;
    letter-spacing: 2px;
    font-size: 10px;
`;

const SectionTitle = styled(Title)`
    width: 212px;
    flex: 0 0 212px auto;
`;

const SectionContent = styled.div`
    display: flex;
    gap: 32px;
    padding-left: 212px;

    @media only screen and (max-width: ${BREAKPOINTS.M.MAX}) {
        padding-left: 0;
        margin-top: 16px;
        flex-direction: column;
        gap: 0;
    }
`;

const Separator = styled.div`
    border-top: 1px solid #221F1C1A;
    height: 24px;
    flex: 1;
    width: 100%;
`;

const Value = styled.p`
    font-size: 15px;
`;

export default Personal;