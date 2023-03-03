import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterTypeValues } from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterTypeValues) => void,
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const onNewTaskTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }

    const onAllClickHandler = () => props.changeFilter('all')
    const onActivesClickHandler = () => props.changeFilter('actives')
    const onCompletedClickHandler = () => props.changeFilter('completed')

    return (
        <div>
            <h3>{props.title}</h3>
            <input type="text" value={newTaskTitle} 
                    onChange={onNewTaskTitleChangeHandler}
                    onKeyPress={onKeyPressHandler} />
            <button onClick={addTask}>+</button>
            <ul>
                {
                    props.tasks.map(item => {

                    const onRemoveHandler = () => props.removeTask(item.id)

                    return <li key={item.id}>
                        <input type="checkbox" checked={item.isDone} />
                        <span>{item.title}</span>
                        <button onClick={onRemoveHandler}>X</button>
                    </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActivesClickHandler}>Actives</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}
