import { NavLink } from 'react-router-dom';

import HomeIcon from '../../assets/home.svg';
import HomeActiveIcon from '../../assets/homeiconactive.svg';

import ClientsIcon from '../../assets/clientes.svg';
import ClientsActiveIcon from '../../assets/clientesrosa.svg';

import ChargeIcon from '../../assets/chargeicon.svg';
import ChargeActiveIcon from '../../assets/cobrancaiconactive.svg';


import './style.css';


function NavBar() {
    return(
        <nav className='nav-sidebar'>
            <div className='nav-sidebar-content'>
                <NavLink to="/home">
                    {({ isActive }) => (
                        <div className={`nav-icon ${isActive ? 'active' : ''}`}>
                            <img src={isActive ? HomeActiveIcon : HomeIcon}/>
                            <span>Home</span>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/clients">
                    {({ isActive }) => (
                        <div className={`nav-icon ${isActive ? 'active' : ''}`}>
                        <img src={isActive ? ClientsActiveIcon : ClientsIcon }/>
                            <span>Clientes</span>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/cobrancas">
                    {({ isActive }) => (
                        <div className={`nav-icon ${isActive ? 'active' : ''}`}>
                        <img src={ isActive ? ChargeActiveIcon : ChargeIcon}/>
                            <span>Cobranças</span>
                        </div>
                    )}
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;