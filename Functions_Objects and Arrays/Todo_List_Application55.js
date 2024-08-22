
//a)Define the Array of Tasks:
const tasks = [
    { id: 1, description: "Complete project report", dueDate: "2024-08-25", status: "Pending" },
    { id: 2, description: "Buy groceries", dueDate: "2024-08-22", status: "Completed" },
    { id: 3, description: "Schedule dentist appointment", dueDate: "2024-08-23", status: "Pending" },
    { id: 4, description: "Prepare for meeting", dueDate: "2024-08-24", status: "In Progress" },
    { id: 5, description: "Call plumber", dueDate: "2024-08-22", status: "Pending" }
];

//b)Create the Task Class:

class Task{
    constructor(id, description, dueDate, status) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;

    }
}

//c)Define the displayTasks Function:

const displayTasks = () => {
    tasks.forEach((task) => {
        console.log(`${task.description} -$${task.dueDate}`);
    })
}

//d)Define the addTask Function:
const addTask = () => {
    const task1 = new Task(6, 'meet friend', '2024 -08 - 22', 'completed');
    tasks.push(task1);
}

//e)Define the updateTask Function:
//using Find
const updateTask = (id, status) => {
    tasks.find((task => {
        if (task.id === id) {
            task.status = status;
        }
    }))
}
//using map
const updateTaskWithMap = (id, status) => {
    tasks.map((task) => {
        if (task.id === id) {
            product.status = status;
        }
    })
}

//f)Define the removeTask Function:
const removeTask = (id) => {
    return tasks.filter(task => task.id !== id);
}

const updatedTasks = removeTask(5);
console.log(updatedTasks);