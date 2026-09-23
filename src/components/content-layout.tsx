import { styled } from "@linaria/react";
import type { ReactNode } from "react";

interface ContentLayoutProps {
    children: ReactNode | ReactNode[];
}

const ContentLayout = ({children}: ContentLayoutProps) => {
    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>
    )
}

export default ContentLayout;

const LayoutContainer = styled.div`
    margin: 17px 152px ;
`;