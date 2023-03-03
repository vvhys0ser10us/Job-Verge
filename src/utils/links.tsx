import { FaChartBar, FaUser, FaFile, FaListAlt } from 'react-icons/fa'

const links = [
  { id: 1, text: 'stats', path: '/', icon: <FaChartBar /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <FaListAlt /> },
  { id: 3, text: 'add job', path: 'add-job', icon: <FaFile /> },
  { id: 4, text: 'profile', path: 'profile', icon: <FaUser /> },
]

export default links
