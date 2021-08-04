import React, { useState } from 'react'
import Header from '@/components/header/header'
import './detail.scss'


const Detail = (params) => {
    const [imgList, setImgList] = useState(['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1894245189,624137215&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1894245189,624137215&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1894245189,624137215&fm=26&gp=0.jpg'])
    return (    
        <div className='d-container'>
            <Header title='详情'></Header>
            <div className='ht-box'>
                {
                    imgList.map((item,index)=> {
                        return (
                            <img key={index} className='ht-img' src={item} alt=""/>
                        )
                    })
                }
                
            </div>
            <div className='footer-action'>
                <div onClick={ ()=> {
                    params.history.push('draw')
                 }} className='qy'>签约</div>
            </div>
        </div>
    )
}

export default Detail