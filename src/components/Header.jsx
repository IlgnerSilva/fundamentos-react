import { header } from './Header.module.css';
import oMagoLogo from '../assets/omago-logo.png';

export function Header (){
    return (
        <header className={header}>
            <a href='#'><img src={oMagoLogo} alt="Logotipo do mago" /></a>
        </header>
    );
}