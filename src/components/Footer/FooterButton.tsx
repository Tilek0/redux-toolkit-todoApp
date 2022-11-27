import React from 'react';
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {VisibilityFilter} from "../../store/visilitySlice";
import "./FooterButton.less"
type BtnPropsType = {
    children: React.ReactNode
    VisibilityFilter: VisibilityFilter
}
const FooterButton: React.FC<BtnPropsType> = ({
                                                  children,
                                                  VisibilityFilter
                                              }) => {
    const {setVisibilityFilter} = useActions()
    const currentVisibilityFilter = useSelector(
        (state: RootState) => state.visibilitySlice
    );
    return (
        <button
            onClick={() => setVisibilityFilter(VisibilityFilter)}
            className='button'
            style={{background: currentVisibilityFilter === VisibilityFilter ? 'linear-gradient(90deg, #00DBDE, #FC00FF)' : ''}}
        >{children}</button>
    );
};

export default FooterButton;