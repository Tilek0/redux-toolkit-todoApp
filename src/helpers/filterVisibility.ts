import {VisibilityFilter} from "../store/visilitySlice";
import {todoType} from "../types/todoType";

export const getVisibleTodos = <T extends todoType,V>(todos: T[], filter: V) => {
    switch (filter) {
        case VisibilityFilter.ShowAll:
            return todos;
        case VisibilityFilter.ShowDone:
            return todos.filter(t => t?.done);
        case VisibilityFilter.ShowActive:
            return todos.filter(t => !t?.done);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};