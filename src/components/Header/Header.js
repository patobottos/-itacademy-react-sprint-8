import { HeaderContainer,  ButtonsContainer } from "./Header.styled";
import { HeaderButton } from "../../styles/AppStyles"
import starWarslogo from "../../assets/img/star_wars_logo.png"

const Header = () => {
  return ( 
    <HeaderContainer>
      <div>
        <img src={starWarslogo} alt="star wars logo" />
      </div>
      <ButtonsContainer>
        <HeaderButton>LOG IN</HeaderButton>
        <HeaderButton>SIGN UP</HeaderButton>
      </ButtonsContainer>
    </HeaderContainer>

   );
}
 
export default Header;
