import React, {Component} from 'react'
import './navbar.css'
import nbc from '../../images/nbc.png'
import pft from '../../images/pft-logo.png'
import pftlive from '../../images/pftlive.png'

 class Navbar extends Component {
    constructor() {
        super()
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
                    <div className='top'>
                        <div className='top-links'>
                            <li className='tLink1'>PFT</li>
                            <li className='tLink2'>NCAA FB</li>
                            <li className='tLink3'>MLB</li>
                            <li className='tLink4'>NBA</li>
                            <li className='tLink5'>NHL</li>
                            <li className='tLink6'>NASCAR</li>
                            <li className='tLink7'>NCAA BB</li>
                            <li className='tLink8'>MOTORS</li>
                            <li className='tLink9'>SOCCER</li>
                            <li className='tLink10'>GOLF</li>
                        </div>
                    </div>
                    <div className='lower'>
                        <div className='lower-links'>
                            <li className='lLink1'>Home</li>
                            <li className='lLink2'>Latest News & Rumors</li>
                            <li className='lLink3'>FMIA Archive</li>
                            <li className='lLink4'>Teams</li>
                            <li className='lLink5'>Rotoworld</li>
                            <li className='lLink6'>About</li>
                            <li className='lLink7'>PFT Gear</li>
                            <li className='lLink8'>Tickets</li>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar