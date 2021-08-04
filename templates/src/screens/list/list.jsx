import React, { useState, useEffect } from 'react'
import Header from '@/components/header/header'
import './list.scss'
import global from '@/utils/tool'
import { getTime } from '@/utils/api'

const List = (params) => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7])
    const getData = () => {
        getTime({
            api: 'mtop.common.getTimestamp'
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        const navHeight = document.getElementsByClassName('h-container')[0].offsetHeight
        global.setStore('navHeight', navHeight)
        getData()

        let u = navigator.userAgent;
        console.log(u)
        if (u != null && u.includes("AlipayClient")) {
            console.log('来自支付宝')
            // "来自支付宝";
            // if (newObj.type == 1) {//跳转个人页
            //     window.location.href = 'http://192.168.2.198:8080/#/pages/index/info/index?uid=' + newObj.uid
            // }
        } else if (u != null && u.includes("MicroMessenger")) {
            // "来自微信";
            console.log('来自微信')
        } else if (u.includes("Android")) {
            // "Android移动客户端";
        } else if (u.includes("iPhone")) {
            // "iPhone移动客户端";
        } else if (u.includes("iPad")) {
            // "iPad客户端";
        } else if (u.includes("Window")) {
            // "PC端";
        } else if (u.includes("MY_APP_iOS/1.0.0")) {
            //  "App端";
        } else if (u.includes("miniProgram")) {
            // "微信小程序端";
        } else {
            // "其他客户端";
        }
    }, [])


    return (
        <div className='list-content'>
            <Header title='列表'></Header>
            {
                list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => {
                            params.history.push('detail')
                        }} className='list-box'>
                            <div className='item-list'>
                                <div className='flex jsb'>
                                    <div className='i-title'>C1标准报名合同</div>
                                    <div className='flex alc'>
                                        <div className='i-status'>去签约</div>
                                        <img className='arrow' src="https://img.alicdn.com/imgextra/i1/O1CN01dctGAB1FAljrSsdjC_!!6000000000447-2-tps-16-28.png" alt="" />
                                    </div>
                                </div>
                                <div className='i-time'>签约时间：2020.02.20 18:20</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List