import React, { useState, useEffect, useRef } from 'react'
import SignaturePad from 'react-signature-phone';
import Header from '@/components/header/header'
import './draw.scss'
import global from '@/utils/tool';

const Draw = (params) => {
    const mySignature = useRef()
    const height = global.getStore('navHeight')
    console.log(window.innerHeight, height)

    return (
        <div>
            <Header title='签名'></Header>
            <SignaturePad ref={mySignature} height={window.innerHeight - height - 50} />
            <div className='footer'>
                <div className='clear' onClick={() => {
                    mySignature.current.clear()
                }}>清除</div>
                <div className='reset' onClick={() => {
                    console.log(mySignature.current.toDataURL())
                }}>保存</div>
            </div>
        </div>
    )
}

export default Draw