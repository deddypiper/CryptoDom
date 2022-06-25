import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"
import icon from '../images/codepipelogo.jpg'
import './Loader.css'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <img style={{ borderRadius: '20%' }} src={icon} size="large" className="logopic" />
            <Typography.Title level={2} className="logo" >
                 <Link to="/" >CryptoDom</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark" style={{backgroundColor: "rgb(5, 50, 50)"}}>
            <>
            <Menu.Item icon={< HomeOutlined />}>
                <Link to="/" >Home</Link>
            </Menu.Item>
            <Menu.Item icon={< FundOutlined />}>
                <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={< MoneyCollectOutlined />}>
                <Link to="/exchanges" >Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={< BulbOutlined />}>
                <Link to="/news" >News</Link>
            </Menu.Item>
            </>
        </Menu>
    </div>
  )
}

export default Navbar