import {WelcomeContainer, WelcomeButton} from './Welcome.styled';

const Welcome = ({handleStart}) => {
  return(
    <WelcomeContainer>
      <h3>This is a website project aimed to display information about Star Wars starships and pilots. </h3>

      <h3>Consuming API data, it displays retrieved information by screen, in a list, and also the detail of each item if you click on its name.</h3>

      <WelcomeButton onClick={handleStart}>Click to start!</WelcomeButton>
    </WelcomeContainer>
  )
}

export default Welcome;