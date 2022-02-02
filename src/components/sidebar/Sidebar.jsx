import { BarChartOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, LineStyle, LocalMallOutlined, MailOutlined, PersonOutlineOutlined, ReportTwoTone, SettingsOutlined, Timeline, TrendingUp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItemList active" >
                            <LineStyle className="sidebarIcon"/>
                            <Link to='/' className='link'>
                            Home
                            </Link>
                            
                        </li>
                        <li className="sidebarItemList">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarItemList">
                            <TrendingUp className="sidebarIcon"/>
                            Trend
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItemList">
                           <Link to='/users' className='link'>
                            <PersonOutlineOutlined className="sidebarIcon"/>
                            Users
                            </Link>
                            
                        </li>
                        <li className="sidebarItemList">
                            <Link to='/productList'className='link'>
                            <LocalMallOutlined className="sidebarIcon"/>
                            Products
                            </Link>
                        </li>
                        <li className="sidebarItemList">
                            <TrendingUp className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarItemList">
                            <BarChartOutlined className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItemList">
                            <MailOutlined className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarItemList">
                            <DynamicFeedOutlined className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarItemList">
                            <ChatBubbleOutlineOutlined className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItemList">
                            <SettingsOutlined className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarItemList">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarItemList">
                            <ReportTwoTone className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
