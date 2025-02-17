
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Route, Routes } from "react-router-dom";
import ListToDoComponent from "./components/ListToDoComponent";
import ToDoComponent from "./components/ToDoComponent";
import './App.css'



function App() {
  return (
    <>

      <HeaderComponent/>
        <Routes>

          <Route path='/' element={<ListToDoComponent/>}> </Route>
          <Route path='/todos' element={<ListToDoComponent/>}> </Route>
          <Route path = '/add-todo' element = { <ToDoComponent/> }></Route>
          <Route path = '/edit-todo/:id' element = { <ToDoComponent/> }></Route>

        </Routes>
      <FooterComponent/>
      

    </>
  );
}

export default App;
