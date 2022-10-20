import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderApp = () => {
    const [current, setCurrent] = useState<string>('')

    const handleHeader = (e: any) => {
        setCurrent(e.key)
    }

    return(
        <Header>
            <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleHeader}
            >
                <Menu.Item key='1'>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link to="/form">Form</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderApp;