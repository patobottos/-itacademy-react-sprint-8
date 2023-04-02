import { HeaderContainer,  ButtonsContainer } from "./Header.styled";
import { HeaderButton } from "../../styles/AppStyles";
import starWarslogo from "../../assets/img/star_wars_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <HeaderContainer>
      <div>
        <img src={starWarslogo} alt="star wars logo" />
      </div>
      <ButtonsContainer>
        <HeaderButton><Link to="/login">LOG IN</Link></HeaderButton>
        <HeaderButton><Link to="/signup">SIGN UP</Link></HeaderButton>
      </ButtonsContainer>
    </HeaderContainer>

   );
}
 
export default Header;
