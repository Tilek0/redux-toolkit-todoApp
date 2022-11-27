import React from "react";
import {Header} from "../components/Header/Header";
import {TodoList} from "../components/List/TodoList";
import "../less/todoPage.less"
export const TodoPage:React.FC = () => {
    return (
        <div className='grassCard todoPage'>
            <Header />
            <TodoList />
        </div>
    )
}