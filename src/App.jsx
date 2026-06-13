import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
 function App() {
    const [userInput, setUserInput]= useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    // state updating function
function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });    
  }

  const isInputValid = userInput.duration >= 1;
  return (
<>
   <Header/>
  <UserInput userInput={userInput} onChange={handleChange}/>
  {!isInputValid && <p className="center">Invalid Input: Duration should be greater than zero</p>}
  {isInputValid && <Result input={userInput}/>}
</>
);
}



export default App;
