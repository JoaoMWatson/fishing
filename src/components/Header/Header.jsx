import React from 'react';
import logo from '../../image/linkeding_logo.png'
import "./Header.css"

const Header = () => {
    return ( 
        <div className="header">
            <img className="" src={ logo }/>
            <h2>
                Olá novamente
            </h2>
            <p>
            Não perca sua próxima oportunidade. Entre para ficar por dentro das novidades na sua profissão.
            </p>
        </div>
     );
}
 
export default Header;