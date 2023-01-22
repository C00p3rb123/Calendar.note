import { useRef, useState } from "react"
import { Task } from "../Types/types"


export const useTasks = () => {

    const id = useRef(0)
    const [tasks, setTasks] = useState<Task[]>([])

    return ({tasks, setTasks, id})

}