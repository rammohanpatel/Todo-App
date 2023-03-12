import styles from './style.module.css'
import shortid from 'shortid';

const Form=({todo, setTodo, todoList, setTodoList})=>{
    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:shortid.generate()}]);
        console.log(todoList);
        setTodo("");
    }
    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} placeholder="Add Todo Item" value={todo} onChange={handleChange}></input>
                <button className={styles.todobutton} type="submit">Add</button>
            </form>
        </div>
    )
};

export default Form;