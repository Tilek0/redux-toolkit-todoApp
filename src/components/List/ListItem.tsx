import React from "react";
import {useActions} from "../../hooks/useActions";
import {todoType} from "../../types/todoType";
import {MyButton} from "../UI/MyButton";
import "./ListItem.less"
import pencil from "../../assets/pencil.png"
import fileImg from "../../assets/file.png"

export const ListItem: React.FC<todoType> = ({
                                                 id,
                                                 todoText,
                                                 done,
                                                 deadline,
                                                 file
                                             }) => {
    const {toggleTodo, removeTodo, changeTodo} = useActions()

    const handeChange = () => {
        if (id?.length) {
            toggleTodo(id)
        }

    }
    const remove = () => {
        if (id?.length) {
            removeTodo(id)
        }
    }
    const change = () => {
        if (id?.length) {
            changeTodo(id)
        }
    }
    return (
        <li className="b-listItem">
            <input
                type="checkbox"
                checked={done}
                onChange={handeChange}
            />
            <div className='b-listItem__span'>
                <span className={done ? 'checked' : ''}>{todoText}</span>
                <span
                    className={done ? 'checked' : ''}
                    style={{color: '#696869'}}
                >{deadline}</span>
            </div>
            <div className='b-listItem__buttons'>
                {file ? <div className='file'><img src={fileImg} alt=""/></div> : <div />}
                <div onClick={change} className='pencil'><img src={pencil} alt=""/></div>
                <MyButton
                    btnHandler={remove}
                >&times;</MyButton>
            </div>
        </li>
    );
};