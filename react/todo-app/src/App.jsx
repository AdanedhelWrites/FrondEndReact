import { useState } from "react";
import "./App.css";

const DATA_TODOS = [
  { id: 0, content: "Spor yapsan iyi olur...", isCompleted: false },
  { id: 1, content: "Biraz yürüyüş...", isCompleted: false },
  { id: 2, content: "Biraz programlama...", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState()

  //action addTodo 


  return (
    <main className="todo-app">
      <h1>Yapılacaklar Listesi</h1>

      <TodoForm />
      <ul>
        <TodoItem content="Spor Yap" />
        <TodoItem content="Yürüyüş Yap" />
      </ul>
    </main>
  );
}

function TodoForm() {
  return (
    <form id="frm-add-todo">
      <input type="text" name="" id="" placeholder="Yapılacak bir iş yaz..." />
      <button type="submit">Ekle</button>
    </form>
  );
}

function TodoItem({ content }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const viewTemplate = (
    <li>
      <div className="container-content">
        <input type="checkbox" name="" id="" />

        {content}
      </div>
      <footer>
        <button
          type="button"
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          Düzenle
        </button>
        <button type="button">Sil</button>
      </footer>
    </li>
  );

  const editTemplate = (
    <li>
      <form className="frm-edit-todo">
        <div className="container-content">
          <input type="text" />
        </div>

        <footer>
          <button type="submit">Kaydet</button>
          <button
            type="button"
            onClick={() => {
              setIsEditMode(false);
            }}
          >
            Kapat
          </button>
        </footer>
      </form>
    </li>
  );

  return <>{isEditMode ? editTemplate : viewTemplate}</>;
}

export default App;
