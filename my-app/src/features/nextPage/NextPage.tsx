import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"

export const NextPage = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    return <div style={{textAlign: "center", fontSize: 20, marginTop: 40}}>Counter Store: {count}</div>
}