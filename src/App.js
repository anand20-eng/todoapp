import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [allTods, setTodos] = useState([]);
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    };
    let updatedTodoArray = [...allTods]
    updatedTodoArray.push(newTodoItem)
    setTodos(updatedTodoArray)
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArray));

  }
  const handleDeleteTodo = index => {
    let reducedTodo = [...allTods];
    reducedTodo.splice(index);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
   };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist')) || [];
    let savedCompletedTodo = JSON.parse(
      localStorage.getItem('completedTodos')
    );
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  }
  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value }
    })
  }

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value }
    })
  }

  const handleUpdateToDo = () => {
    let newToDo = [...allTods];
    newToDo[currentEdit] = currentEditedItem;
    setTodos(newToDo);
    setCurrentEdit("");
  }

  
  return (
    <div className='App'>
      <input
        type="text"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        placeholder="What's the task title?"
      />
      <input
        type="text"
        value={newDescription}
        onChange={e => setNewDescription(e.target.value)}
        placeholder="What's the task description?"
      />
      <button
        type="button"
        onClick={handleAddTodo}
        className="primaryBtn"
      >
        Add
      </button>
      <button type="button" >
        Todo
      </button>

      <button type="button" >
        Completed
      </button>

      {isCompleteScreen === false &&
        allTods.map((item, index) => {
          if (currentEdit === index) {
            return (
              <div key={index}>
                <input placeholder='Updated Title'
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  value={currentEditedItem.title} />
                <textarea placeholder='Updated Title'
                  rows={1}
                  onChange={(e) => handleUpdateDescription(e.target.value)}
                  value={currentEditedItem.description} />

                <button
                  type="button"
                  onClick={handleUpdateToDo}
                  className="primaryBtn"
                >
                  Update
                </button>
              </div>
            )
          } else {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                
                 
                  <button
                    onClick={() => handleEdit(index, item)}
                    title="Edit?" > Edit </button>
                  <button
                    onClick={() => handleDeleteTodo(index)}
                    title="Delete" > Delete </button>
                </div>

              </div>
            );
          }

        })}

    </div>
  );
}

export default App;
