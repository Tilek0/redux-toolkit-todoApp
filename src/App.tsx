import React from 'react';
import './App.less';
import {TodoPage} from "./pages/TodoPage";
import {AddModal} from "./components/modal/AddModal";
import {useAppSelector} from "./hooks/useSelectors";
import {useActions} from "./hooks/useActions";

function App() {
    const isForm = useAppSelector(state => state.todoSlice.isForm)
    const {closeForm} = useActions()
    const closeModal = () => {
        closeForm()
    }
  return (
    <div className="App">
        <div
            onClick={closeModal}
            className='b-modalContainer'
            style={{display: isForm ? '' : 'none'}}
        >
            <AddModal />
        </div>
      <TodoPage/>
    </div>
  );
}

export default App;
