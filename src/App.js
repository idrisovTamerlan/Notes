import './styles.css';
import {useState} from 'react';

function App() {

    const [todos, setTodos]=useState([
        {text: "Найти камень души",
            favorite: false },

        { text: "Собрать остальные камни бесконечности",
            favorite: true },

        {text: "Щелкнуть",
            favorite: true }
    ]);

    const deleteTodo= (deleteIndex) =>{
        const filtered= todos.filter((todo,index) =>{
          if (index === deleteIndex ){
            return false; }
            return true;
         });
         setTodos(filtered); }

         const NewTodos = todos.map((todo,index) =>{

         const makeFavorite = (todo, index ) => {
            setTodos(

            )
         }


             return(
        <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
             <div className='favorite'>
                    <button onClick={() =>{makeFavorite(index)}}> ★ </button>
             </div>

            <div className='text'>  {todo.text}  </div>

            <div className='delete'>
                     <button onClick={() =>{deleteTodo(index)}}>    ✖   </button>
            </div>

        </div>) })

  return (

<div className="App">
     <div className='header'>   СПИСОК ДЕЛ     </div>
     <div className='form'>
    <input placeholder="Введите текст..." type='text'/>
        <button> Добавить </button>
     </div>

     <div className='todos'> {NewTodos} </div>

    </div>
  );
}

export default App;
