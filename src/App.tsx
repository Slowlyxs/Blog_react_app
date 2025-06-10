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
import AccessWithLimit from './useStates/AccessWithLimit';
import DocumentTitleChanger from './useStates/DocumentTitleChanger';
import PostLikes from './useStates/PostLikes';
import CheckboxSummary from './useStates/CheckboxSummary';
import LanguageSwitcher from './useStates/LanguageSwitcher';
import MultiSwitch from './useStates/MultiSwitch';
import AutoCounter from './useStates/AutoCounter';
import DynamicColor from './useStates/DynamicColor';
import ClickHistory from './useStates/ClickHistory';
import LogEffect from './useEffect/LogEffect';
import FetchUser from './useEffect/FetchUser';
import Clock from './useEffect/Clock';
import ScrollLogger from './useEffect/ScrollLogger';
import DynamicTitle from './useEffect/DynamicTitle';
import SafeFetch from './useEffect/SafeFetch';
import PersistCounter from './useEffect/PersistCounter';
import LanguageToggle from './useContext/language-context/LanguageToggle';
import LoginStatus from './useContext/logincontext/LoginStatus';
import CartView from './useContext/cart-context/CartView';
import Profile from './useContext/user-context/Profile';
import CirculoColorido from './useRef/CirculoColorido';
import FocoAutomatico from './useRef/FocoAutomatico';
import MoverCaja from './useRef/MoverCaja';
import ReproductorSonido from './useRef/ReproductorSonido';
import ScrollDemo from './useRef/ScrollDemo';





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
      <br />
      <AccessWithLimit/> 
      <br />
      <DocumentTitleChanger/>
      <br />
      <PostLikes/>
      <br />
      <CheckboxSummary/>
      <br />
      <LanguageSwitcher/>  
      <br />
      <MultiSwitch/>
      <br />
      <AutoCounter/>
      <br />
      <DynamicColor/> 
      <br />
      <ClickHistory/>
      <br />
      <h1>Ejercicios los Hooks</h1>
      <LogEffect/>
      <br />
      <FetchUser/>  
      <br />
      <Clock/>
      <br />
      <ScrollLogger/>
      <br />
      <DynamicTitle/>
      <br />
      <SafeFetch/>
      <br />
      <PersistCounter/>
      <br />
      <h1>Ejercicios User Context </h1>
      <LanguageToggle/>
      <br />
      <LoginStatus/>
      <br />
      <CartView/>
      <br />
      <Profile/>
      <br />
      <h1>Ejercicios Use Ref</h1>
      <CirculoColorido/>
      <br />
      <FocoAutomatico/>
      <br />
      <MoverCaja />
      <br />
      <ReproductorSonido/>
      <br />
      <ScrollDemo/>
    

      </>
  );
}

export default App;
