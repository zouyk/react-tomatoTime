import React, {Component} from 'react';
import Logo from '../../components/Logo'
import Configuration from '../../components/Configuration'

import './header.scss'

import logoImg from '../../assets/images/tomato.png'
import setImg from '../../assets/images/set.png'


class Header extends Component {
    render() {
        return (
            <div className='header'>

                    <Logo src={logoImg} title='itsource.cn'/>
                    <Configuration src={setImg}/>
            </div>
        );
    }
}

export default Header;