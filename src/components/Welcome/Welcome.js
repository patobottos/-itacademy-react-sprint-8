import { WelcomeContainer, WelcomeButton } from "./Welcome.styled";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/starships/");
  };

  return (
    <WelcomeContainer>
      <p>
        This is a website project aimed to display information about Star Wars starships and pilots.{" "}
      </p>

      <p>
        Consuming API data, it displays retrieved information by screen, in a list, and also the detail of each item if you click on its name.
      </p>
      <WelcomeButton onClick={handleStart}>Click to start!</WelcomeButton>
    </WelcomeContainer>
  );
};

export default Welcome;
