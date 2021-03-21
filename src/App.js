import './styles.css';
function App() {
    const todos = [
        {text: "Найти камень души",
            favorite: false },

        { text: "Собрать остальные камни бесконечности",
            favorite: true },

        {text: "Щелкнуть",
            favorite: true }
        ];

    const NewTodos = todos.map((todo) =>{

        let todoClass = `todo ${todo.favorite ? 'selected' : ''}`

        const deleteTodo = () => {
            alert(" Какой ценой?")
        }



return(
     <div className={todoClass}>
             <div className='favorite'>
                    <span> ★ </span>
             </div>

            <div className='text'>
               {todo.text}
            </div>

            <div className='delete'>
                     <button onClick={deleteTodo}>
                         ✖
                     </button>
            </div>

        </div>)
    })

  return (

    <div className="App">

     <div className='header'>СПИСОК ДЕЛ</div>

     <div className='form'>
    <input placeholder="Введите текст..." type='text'/>
        <button>
            Добавить
        </button>
     </div>

     <div className='todos'>
         {NewTodos}
     </div>



    </div>
  );
}

export default App;
