import { RootState } from '@/store/store'
import {useDispatch,useSelector} from 'react-redux'
import {decrement,increment} from '../../store/slices/couterSlice'
type Props = {}

const Home = (props: Props) => {
  const count = useSelector((state:RootState)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      Home
      <br />
      {count}
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Home