
import CartView from './CartView';
import Clock from './Clock';
import DynamicTitle from './DynamicTitle';
import FetchUser from './FetchUser';
import LanguageToggle from './LanguageToggle';
import LogEffect from './LogEffect';
import LoginStatus from './LoginStatus';
import PersistCounter from './PersistCounter';
import SafeFetch from './SafeFetch';
import ScrollLogger from './ScrollLogger';


export default function IndexuseContext() {
  return (
    <>
      <CartView/>
      <Clock/>
      <DynamicTitle/>
      <FetchUser/>
      <LanguageToggle/>
      <LogEffect/>
      <LoginStatus/>
      <PersistCounter/>
      <SafeFetch/>
      <ScrollLogger/>
    </>
  );
}
