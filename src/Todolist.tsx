import React from "react";
import { FilterTypeValues } from "./App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: number) => void,
    changeFilter: (value: FilterTypeValues) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <input type="text" />
            <button>+</button>
            <ul>
                {
                    props.tasks.map(item => 
                    <li>
                        <input type="checkbox" checked={item.isDone} />
                        <span>{item.title}</span>
                        <button onClick={() => {props.removeTask(item.id)}}>X</button>
                    </li>)
                }
            </ul>
            <div>
                <button onClick={() => {props.changeFilter('all')}}>All</button>
                <button onClick={() => {props.changeFilter('actives')}}>Actives</button>
                <button onClick={() => {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}
