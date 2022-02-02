import './chart.css';
import { LineChart,Line,XAxis,Tooltip,ResponsiveContainer,CartesianGrid } from 'recharts';

const Chart = ( {title , data , dataKey}) => {

    return (
        <div className='chart'>
           <h3 className='chartTitle'>{title}</h3>
           <ResponsiveContainer width="100%" aspect={ 4 / 1}>
              <LineChart data = {data}>       
                  <XAxis dataKey="name" stroke="#5550bd "/>
                  <Line type="monotone" dataKey="Active User" stroke='#5550bd'></Line>
                  <Tooltip/>
                  <CartesianGrid strokeDasharray="2 2"/>
              </LineChart>
           </ResponsiveContainer>
        </div>
    )
}

export default Chart
