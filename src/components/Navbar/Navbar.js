import React, {Component} from 'react'
import './navbar.css'
import nbc from '../../images/nbc.png'
import pft from '../../images/pft-logo.png'
import pftlive from '../../images/pftlive.png'

 class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            topLinks: ['PFT','NCAA FB','MLB','NBA','NHL','NASCAR','NCAA BB','MOTORS','SOCCER','GOLF'],
            lowerLinks: ['Home','Latest News & Rumors','FMIA Archive','Teams','Rotoworld','About','PFT Gear','Tickets']
        }

    }

    render() {
        return (
            <>
                <div className='navbar-background'>
                    <div className='icons'>
                        <img className='nbc' src={nbc}/>
                        <img className='pft' src={pft}/>
                        <img className='pftlive' src={pftlive}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar