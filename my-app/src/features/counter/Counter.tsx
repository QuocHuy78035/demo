import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { useNavigate } from 'react-router'
import { Switch } from 'antd';
import { switchDark, switchLight } from '../theme/themeSlice';

export function Counter() {
    const navigate = useNavigate();
    const count = useSelector((state: RootState) => state.counter.value);
    const theme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch()

    return (
        <div style={{textAlign: "center"}}>
            <div>
                <button
                    style={{marginRight: 20, marginTop: 40}}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    style={{marginLeft: 20}}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div style={{marginTop: 20}}>This is my text</div>
            <Switch style={{marginRight: 20}} defaultChecked onChange={() => {
                theme === "dark" ? dispatch(switchLight()) :  dispatch(switchDark())
            }} />
            <button style={{marginTop: 20}} onClick={() => navigate("/nextPage")}>Go to Next Page</button>
        </div>
    )
}