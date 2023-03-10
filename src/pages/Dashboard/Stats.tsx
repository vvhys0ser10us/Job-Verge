import { useEffect } from 'react'
import { StatusContainer, ChartContainer } from '../../components'
import { getStatus } from '../../features/allJobs/allJobsSlice'
import { useAppDispatch } from '../../utils/hooks'

const Stats = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStatus())
  }, [])

  return (
    <>
      <StatusContainer />
      <ChartContainer />
    </>
  )
}

export default Stats
