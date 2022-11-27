import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "../store/todoSlice";
import {AppDispatch} from "../store";
import {setVisibilityFilter} from "../store/visilitySlice";

const allActions = {...actions, setVisibilityFilter}

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(allActions, dispatch);
}