import ToDoSingleItem from "./ToDoSingleItem";

const ToDoList = () => {

let aufgabenArray = [
    {task: "Bug Grocery", priority: 1},
    {task: "Send Email", priority: 1},
    {task: "Finish Assignment", priority: 1},
    {task: "Write Blog", priority: 2},
    {task: "Bake Cake", priority: 2},
]

    return ( 
        <>
        <h1>My Todos</h1>
        <ul>
        {aufgabenArray.map((aufgabe, index) => {return <ToDoSingleItem singleToDo={aufgabe} key={index} />} )}
        </ul>
        </>
    );
}
 
export default ToDoList;