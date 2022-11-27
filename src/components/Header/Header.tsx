import {MyButton} from "../UI/MyButton";
import {useActions} from "../../hooks/useActions";
import "./Header.less"

export const Header = () => {
    const {openForm} = useActions()
    const handleAction = () => {
        openForm()
    }
    return (
        <div className='b-form grassCard'>
            <MyButton
                btnHandler={handleAction}
            >Add todo</MyButton>
        </div>
    )
}