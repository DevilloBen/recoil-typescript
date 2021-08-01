import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infoValue, todosState } from "../store/Store";
import { v4 } from "uuid"

const TodoAdd = () => {
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useRecoilState(todosState)
    const info = useRecoilValue(infoValue)

    return (
        <>
            <div className="alert alert-primary">
                <div className="d-inline col-4">
                    Total items: &nbsp;
                    <span className="badge badge-info">{info.total}</span>
                </div>
                <div className="d-inline col-4">
                    Total items: &nbsp;
                    <span className="badge badge-info">{info.completd}</span>
                </div>
                <div className="d-inline col-4">
                    Total items: &nbsp;
                    <span className="badge badge-info">{info.notCompleted}</span>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={(_) => {
                    setTitle("")
                    setTodos([...todos, { id: v4(), title: title, completed: false }])
                }}>Add Todo</button>
            </div>

        </>
    )

}
export default TodoAdd