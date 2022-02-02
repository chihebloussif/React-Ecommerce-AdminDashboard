import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className='widgetSmButton'>
                         <Visibility className='widgetSmIcon'/>
                         Display          
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className='widgetSmButton'>
                         <Visibility className='widgetSmIcon'/>
                         Display          
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className='widgetSmButton'>
                         <Visibility className='widgetSmIcon'/>
                         Display          
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
