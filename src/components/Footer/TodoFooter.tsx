import React from "react";
import FooterButton from "./FooterButton";
import {useActions} from "../../hooks/useActions";
import {VisibilityFilter} from "../../store/visilitySlice";
import {MyButton} from "../UI/MyButton";
import "./TodoFooter.less"

type footerPropType = {
    length: number
}
export const TodoFooter: React.FC<footerPropType> = ({length}) => {
    const {removeDone} = useActions()
    const clearCompleted = () => {
        removeDone()
    }
    return (
        <div className='grassCard container'>
            {length && <p>{length} : items left</p>}
            <div className='b-buttons grassCard'>
                <FooterButton
                    VisibilityFilter={VisibilityFilter.ShowAll}
                >All</FooterButton>
                <FooterButton
                    VisibilityFilter={VisibilityFilter.ShowActive}
                >Active</FooterButton>
                <FooterButton
                    VisibilityFilter={VisibilityFilter.ShowDone}
                >Completed</FooterButton>
            </div>
            <MyButton
                btnHandler={clearCompleted}
            >Clear completed</MyButton>
        </div>
    );
};