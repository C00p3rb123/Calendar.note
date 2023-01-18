import { useRef, useState } from "react"


export const useTasks = () => {

    const id = useRef(0)
    const [tasks, setTasks] = useState<JSX.Element[]>([])

    return ({tasks, setTasks, id})

}