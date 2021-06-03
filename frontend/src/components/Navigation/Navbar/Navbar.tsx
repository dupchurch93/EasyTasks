import LogoutButton from "../../Auth/LogoutButton"
import TaskButton from "../../Sections/Home/TaskButton"

const Navbar = () => {
    return (
        <div>
            <div className="w-full h-16 bg-blue-600">
                <LogoutButton />
                <TaskButton />
            </div>
        </div>
    )
}

export default Navbar