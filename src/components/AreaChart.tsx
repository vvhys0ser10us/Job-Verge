import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { ChartData } from '../utils/types'

type PropsType = {
  data: ChartData[]
}

const AreaChartComponent = ({ data }: PropsType) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#94a1b2" />
        <XAxis
          dataKey="date"
          tick={{ fill: '#fffffe' }}
          tickLine={{ stroke: '#94a1b2' }}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fill: '#fffffe' }}
          tickLine={{ stroke: '#94a1b2' }}
        />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#593fa8" fill="#7f5af0" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
