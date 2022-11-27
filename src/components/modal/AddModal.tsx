import React, {ChangeEvent, useEffect, useState} from "react";
import "./AddModal.less";
import {todoType} from "../../types/todoType";
import file from "../../assets/file.png"
import {MyButton} from "../UI/MyButton";
import {useActions} from "../../hooks/useActions";
import ok from "../../assets/ok.png"
import {useAppSelector} from "../../hooks/useSelectors";
import dayjs from "dayjs";


export const AddModal: React.FC = () => {
    const currentTodo = useAppSelector(state => state.todoSlice.current)
    const {closeForm, addTodo} = useActions()
    const ref = React.createRef<HTMLInputElement>()

    const [Todo, setTodo] = useState<todoType>({
        todoText: '',
        deadline: '',
        file: null,
    });

    const curr = dayjs().format('YYYY-MM-DD')

    useEffect(() => {
        ref.current?.focus()
        setTodo(() => ({
            todoText: currentTodo.todoText,
            deadline: currentTodo.deadline,
            file: currentTodo.file,
            id: currentTodo.id,
            done: currentTodo.done
        }))
    }, [currentTodo])

    function addHandler() {
        if (Todo.todoText?.trim().length) {
            const {todoText, deadline, file} = Todo
            const {done, id} = currentTodo
            addTodo({
                id,
                todoText,
                deadline,
                file,
                done
            })
            setTodo({
                todoText: '',
                deadline: '',
                file: null,
            })
            closeForm()
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        if (e.target.files) {
            const value = e.target.files[0].name
            setTodo(prevState => ({
                ...prevState,
                [name]: value
            }))
        } else {
            setTodo(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const stopBubbling = (event: React.MouseEvent<HTMLDivElement> | undefined) => {
        event?.stopPropagation()
    }

    return (
        <div className='b-modal grassCard' onClick={stopBubbling}>
            <div className='b-modal__btn'>
                <MyButton btnHandler={() => closeForm()}>&times;</MyButton>
            </div>
            <h1>Create todo</h1>
            <input
                name='todoText'
                type="text"
                value={Todo.todoText}
                onChange={handleChange}
                className='grassCard'
                placeholder='type todo'
                ref={ref}
            />
            <input
                name='deadline'
                type="date"
                min={curr}
                value={Todo.deadline}
                onChange={handleChange}
                className='grassCard'
            />
            <label className='b-modal__customFile'>
                <img src={file} alt=""/>
                {Todo?.file && <div className='ok'><img src={ok} alt=""/></div>}
                <input
                    name='file'
                    type="file"
                    onChange={handleChange}
                />
            </label>
            <div className='b-modal__addTodo'>
                <MyButton btnHandler={addHandler}>Add todo</MyButton>
            </div>
        </div>
    )
}