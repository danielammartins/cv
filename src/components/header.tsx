import { styled } from "@linaria/react";

const Header = () => {
    const currentYear = new Date().getFullYear()
    return (
        <HeaderContainer>  
            <SpacedText>Portfolio&nbsp;&nbsp;/&nbsp;&nbsp;{currentYear} </SpacedText>
            <MenuItemsContainer>
                <HeaderLink href={"#personal"}>Personal</HeaderLink>
                <HeaderLink href={"#experience"}>Experience</HeaderLink>
                <HeaderLink href={"#education"}>Education</HeaderLink>
                <HeaderLink href={"#"}>Contact</HeaderLink>
            </MenuItemsContainer>
        </HeaderContainer>
    )
}


const MenuItemsContainer = styled.div`
    display: flex;
    gap: 32px;
`;

const HeaderContainer = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 32px 24px;
    font-size: 10px;
`;

const SpacedText = styled.p`
    letter-spacing: 2px;
`;

const HeaderLink = styled.a`
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    font-width: 400;
`;



export default Header;