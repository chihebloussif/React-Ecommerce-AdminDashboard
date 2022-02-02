import React from 'react';
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
import './Topbar.css';
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">5</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://lh3.googleusercontent.com/ogw/ADea4I6yuGcbmWeh3hjQ8GtAy7Cwy5z4oAXgAdLayxZP=s83-c-mo" alt="" className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar
