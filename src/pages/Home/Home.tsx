import React from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/couterSlice";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            Home
            <br />
            {count}
            <button
                style={{
                    border: "1px red solid",
                }}
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};
export default Home;
