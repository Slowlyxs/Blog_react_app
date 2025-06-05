import './App.css'
import ButtonCounter from './components/ButtonCounter';
import HelloWorld from "./components/HelloWorld";
import WelcomeUser from "./components/WelcomeUser";
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import ShowDate from './components/ShowDate';
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import SimpleForm from './components/SimpleForm';
import Greeting from './props/Greatting';
import UserCard from './props/UserCard';
import ParentButtonOne from './props/ParentButtonOne';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentUserList from './props/ParentUserList';
import ParentLoginForm from './props/ParentLoginForm';
import HoverFont from './useStates/Hoverfront';




function App() {
  const userData = { name: "Carlos", age: 30 };
  return (
    <>
      <HelloWorld/>
      <WelcomeUser/>
      <ButtonCounter/>
      <br />
      <TextInput/>
      <br />
      <ToggleMessage/>
      <ShowDate/> 
      <br />
      <ColorBox/>
      <br />
      <ConditionalText/>
      <EmojiList/>
      <br />
      <SimpleForm/>
      <Greeting name="Alejandro" lastname="Rivera" />
      <UserCard user={userData} />
      <ParentButtonOne />   
      <ParentIncrementButton/>
      <br />
      <ParentInputNotifier/>
      <br />
      <ParentUserList />
      <br />
      <ParentLoginForm/>
      <HoverFont/>

    </>
  );
}

export default App;
