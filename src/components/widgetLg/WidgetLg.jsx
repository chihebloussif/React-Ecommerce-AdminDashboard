import './widgetLg.css';

const WidgetLg = () => {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type }>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Carol taylor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                         <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Carol taylor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                         <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Carol taylor</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                         <Button type="Pending"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
