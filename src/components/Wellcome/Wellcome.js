import {WellcomeContainer, WellcomeButton} from './Wellcome.styled';

const Wellcome = ({handleStart}) => {
  return(
    <WellcomeContainer>
      <h3>This is a website project aimed to display information about Star Wars starships and pilots. </h3>

      <h3>Consuming API data, it displays retrieved information by screen, in a list, and also the detail of each item if you click on its name.</h3>

      <WellcomeButton onClick={handleStart}>Click to start!</WellcomeButton>
    </WellcomeContainer>
  )
}

export default Wellcome;