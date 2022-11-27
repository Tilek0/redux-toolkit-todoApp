import React from "react";
import {useAppSelector} from "../../hooks/useSelectors";
import {getVisibleTodos} from "../../helpers/filterVisibility";
import {todoType} from "../../types/todoType";
import {VisibilityFilter} from "../../store/visilitySlice";
import {ListItem} from "./ListItem";
import {TodoFooter} from "../Footer/TodoFooter";
import "./TodoList.less"

export const TodoList: React.FC = () => {
    const todos = useAppSelector(state =>
        getVisibleTodos<todoType,VisibilityFilter>
        (state.todoSlice.list, state.visibilitySlice))
    let todoLength = todos.length
    return (
        <>
            <ul className='b-list'>
                {todos.map((todo: todoType) => (
                    <ListItem
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </ul>
            <TodoFooter length={todoLength} />
        </>
    );
};