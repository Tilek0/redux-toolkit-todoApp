import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {todoList, todoType} from "../types/todoType";
import {updateObjectInArray} from "../helpers/objectFilter";
import {checkDeadline} from "../helpers/checkDeadline";

const initialState: todoList = {
    list: [],
    isForm: false,
    current: {
        file: null,
        deadline: '',
        todoText: '',
        done: false,
        id: ''
    },
}

export const todoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        openForm: (state) => {
            state.isForm = true
            state.current = {
                file: null,
                deadline: '',
                todoText: '',
                done: false,
                id: ''
            }
        },
        closeForm: (state) => {
            state.isForm = false
        },

        addTodo: (state, action: PayloadAction<todoType>) => {
                const isDone =  checkDeadline(action.payload.deadline)
            if (action.payload.id) {
                const propObj: todoType = {
                    todoText: action.payload.todoText,
                    done: isDone,
                    deadline: action.payload.deadline,
                    file: action.payload.file
                }
                state.list = updateObjectInArray(state.list, action.payload.id, 'id', propObj)
            } else {
                const newObj: todoType = {
                    id: new Date().toString(),
                    todoText: action.payload.todoText,
                    done: isDone,
                    deadline: action.payload.deadline,
                    file: action.payload.file
                }
                state.list.unshift(newObj)
            }
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            let todo = state.list.find(todo => todo.id === action.payload)
            if (todo) {
                todo.done = !todo.done
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        removeDone(state) {
            state.list = state.list.filter(todo => !todo.done)
        },
        changeTodo(state, action: PayloadAction<string>) {
            state.list.forEach((todo, i) => {
                if (todo.id === action.payload) {
                    state.current = state.list[i]
                }
            });
            state.isForm = true
        },
    },
});
export const actions = todoSlice.actions;

export default todoSlice.reducer;
