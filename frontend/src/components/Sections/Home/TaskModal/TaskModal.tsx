import { useState } from "react"

const TaskModal = () => {
    const priorityOptions = ["Low", "Medium", "High"]
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState(priorityOptions[0])
    const [dueDate, setDueDate] = useState("")
    const [projectId, setProjectId] = useState("")



    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Create a task below</h4>
                </div>
                <form className="modal-body">
                    <div className="name-input">
                        <label>Name</label>
                        <input placeholder="name"></input>
                    </div>
                    <div className="description-input">
                        <label>Description</label>
                        <input placeholder="description"></input>
                    </div>
                    <div className="priority-input">
                        <label>Priority</label>
                        <select>
                            {priorityOptions.map((prio) => (
                                <option key={prio} value={prio}>{prio}</option>
                            ))}
                        </select>
                    </div>
                    <div className="date-input">
                        <label>Due Date</label>
                        <input placeholder="due date"></input>
                    </div>
                    <div className="projectId-input">
                        <label>Project ID</label>
                        <input placeholder="project id"></input>
                    </div>
                </form>
                <div className="modal-footer">
                    <button>Create Task</button>
                </div>
            </div>
        </div>
    )
}

export default TaskModal