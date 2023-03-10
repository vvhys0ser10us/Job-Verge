import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChartData } from '../utils/types'

type PropsType = {
  data: ChartData[]
}

const BarChartComponent = ({ data }: PropsType) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " stroke="#94a1b2" />
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
        <Bar dataKey="count" fill="#7f5af0" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
