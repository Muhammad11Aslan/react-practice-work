import "./App.css";
import Ashraf from "./components/Ashraf";
import HomePage from "./components/HomePage";
import { User } from "./fuctioncomponents2/User";
import Class from "./classbasecomponent1/Class";
import EventFunctionConcept from "./EventFuctionCallWithOutVariableAndVariable3/EventFunctionConcept";
import StateCon from "./stateconcept4/StateCon";
import StatemangeClassCom from "./stateconcept4/StatemangeClassCom";
import { PropsConcept } from "./propswithfunctioncomponents5/PropsConcept";
import PropsSend from "./propsWithClassComponents/PropsSend";
import GetDataFormInput from "./functioncomponentgetvalueinput/GetDataFormInput";
import HideAndShowBtn from "./functioncomponentgetvalueinput/HideAndShowBtn";
import ConionalOperater from "./condionalOperaterIfElse/ConionalOperater";
function App() {
  function Apple() {
    return <div>Apple Components</div>;
  }
  return (
    <div className="App">
      <User />
      <Class />
      <EventFunctionConcept />
      {/* ======== */}
      {/* {Apple()} <===>asy be use kr skty hai kis bi components ko or second tarika ya hai
       */}
      {/* Ya oper component banya hai jo ham ny nichy use kia hova hai apple ka name ka */}
      {/* <Apple /> */}
      {/* <Ashraf /> */}
      {/* <HomePage /> */}
      {/* ========= */}
      <StateCon />
      <StatemangeClassCom />
      <PropsConcept />
      <PropsSend />
      <GetDataFormInput />
      <HideAndShowBtn />
      <ConionalOperater />
    </div>
  );
}

export default App;
