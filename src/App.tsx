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
import Contador from './useCallback/Contador';
import PadreCallback from './useCallback/PadreCallback';
import SaludoCallback from './useCallback/SaludoCallback';
import ListaCallback from './useCallback/ListaCallback';
import ContadorReducer from './useReducer/ContadorReducer';
import FormularioReducer from './useReducer/FormularioReducer';
import ListaReducer from './useReducer/ListaReducer';
import CarritoReducer from './useReducer/CarritoReducer';
import FormStep from './useReducer/FormStep';
import ExpensiveCalc from './useMemo/ExpensiveCalc';
import FiltroLista from './useMemo/Filtrolista';
import TablaOrdenada from './useMemo/TablaOrdenada';
import PrimosMemo from './useMemo/Primosmemos';
import ContadorLetras from './useMemo/Contadorletras';
import { CentradoVerticalTS } from './useLayoutEffect/CentradoVerticalTS';
import MedicionCaja from './useLayoutEffect/MedicionCaja';
import MostrarSinParpadeoTS from './useLayoutEffect/MostrarSinParpadeoTS';
import { ScrollAutoTS } from './useLayoutEffect/ScrollAuto';
import AppRoutes from './AppRoutes';
import { Link } from 'react-router-dom';





function App() {
  const elementos = ["uno", "dos", "tres", "cuatro"];
  const userData = { name: "Carlos", age: 30 };

  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#21262d' }}>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/useEffect/IndexuseContext">UseEffect</Link>
        <Link to="/formulario/FormularioBasico">Formulario Basico</Link>
        <Link to="/formulario/FormularioRHF">Formulario RHF</Link>
        <Link to="/formulario/FormularioZod">Formulario Zod</Link>
      </nav>

      <AppRoutes />

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
      <Contador/>
      <br />
      <PadreCallback/>
      <br />
      <SaludoCallback/>
      <h2>Ejemplo de Lista</h2>
      <ListaCallback items={elementos} />
      <br />
      <ContadorReducer/>
      <br />
      <FormularioReducer/>
      <br />
      <ListaReducer/>
      <br />
      <CarritoReducer/>
      <br />
      <FormStep />
      <h1> Uso del memo </h1>
      <ExpensiveCalc/>
      <br />
      <FiltroLista/>
      <br />
      <TablaOrdenada/>
      <br />
      <PrimosMemo/>
      <br />
      <ContadorLetras/>
      <br />
      <CentradoVerticalTS/>
      <br />
      <MedicionCaja/>
      <MostrarSinParpadeoTS/>
      <ScrollAutoTS/>
      
    
      </>
  );
}

export default App;
