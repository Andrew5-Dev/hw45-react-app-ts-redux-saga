import { useSelector, useDispatch } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/counterSlice.ts'
import { RootState } from '../redux/store.ts'

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="header">Count: {count}</h1>
            <button className="button" onClick={() => dispatch(incrementAsync())}>Increment in 0.5s</button>
            <button className="button" onClick={() => dispatch(decrementAsync())}>Decrement in 0.5s</button>
        </div>
    )
}

export default Counter