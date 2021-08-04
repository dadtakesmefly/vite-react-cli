import React from 'react'
import './header.scss'

const Header = (props) => {
    return (
        <div id='h-contanier' className='h-container'>
            <img onClick={()=> {
                window.history.back()
            }} className='arrow' alt='' src='https://img.alicdn.com/imgextra/i4/O1CN01nG00rT1T5BWyPC2xu_!!6000000002330-2-tps-40-30.png' />
            <span>{props.title}</span> 
        </div>
    )
}

export default Header