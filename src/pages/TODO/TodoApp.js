import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../../styles/modules/TODO/TODO.module.css';

const ItemTypes = {
    TASK: 'task',
};

// Kolory dla osób
const assigneeColors = {
    Alice: '#ff6347', // Tomato
    Bob: '#1e90ff', // DodgerBlue
    Charlie: '#32cd32', // LimeGreen
};

function Task({ task, index, moveTask, column }) {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { index, column },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    // Dynamiczny kolor kafelka
    const backgroundColor = task.assignee
        ? assigneeColors[task.assignee] || '#007bff' // Kolor przypisanej osoby
        : '#b0b0b0'; // Szary kolor dla "Nie przypisano"

    return (
        <div
            ref={drag}
            className={styles.task}
            style={{
                backgroundColor,
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {/* Nagłówek z numerem zadania */}
            <div className={styles.taskHeader}>
                <span>{task.id}</span>
            </div>

            {/* Tekst zadania */}
            <div className={styles.taskText}>
                <p>{task.text}</p>
            </div>

            {/* Właściciel zadania */}
            <div className={styles.taskOwner}>
                {task.assignee || 'Nie przypisano'}
            </div>
        </div>
    );
}


function Column({ title, tasks, column, moveTask }) {
    const [, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => {
            moveTask(item.index, item.column, column);
        },
    });

    return (
        <div ref={drop} className={styles.column}>
            <h3>{title}</h3>
            <div className={styles.taskGrid}>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        index={index}
                        moveTask={moveTask}
                        column={column}
                    />
                ))}
            </div>
        </div>
    );
}

function TodoApp() {
    const [tasks, setTasks] = useState({
        todo: [],
        inProgress: [],
        done: [],
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newTask, setNewTask] = useState({ text: '', assignee: '' });
    const [taskCounter, setTaskCounter] = useState(1); // Licznik zadań

    const moveTask = (taskIndex, fromColumn, toColumn) => {
        const task = tasks[fromColumn][taskIndex];
        setTasks((prev) => {
            const newTasks = { ...prev };
            newTasks[fromColumn] = newTasks[fromColumn].filter(
                (_, index) => index !== taskIndex
            );
            newTasks[toColumn] = [...newTasks[toColumn], task];
            return newTasks;
        });
    };

    const handleAddTask = () => {
        const newTaskData = {
            ...newTask,
            id: taskCounter, // Dodanie numeru zadania
        };
        setTasks((prev) => ({
            ...prev,
            todo: [...prev.todo, newTaskData],
        }));
        setTaskCounter(taskCounter + 1); // Zwiększenie licznika
        setNewTask({ text: '', assignee: '' }); // Reset formularza
        setIsPopupOpen(false); // Zamknięcie popupu
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.todoAppContainer}>
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className={styles.addTaskButton}
                >
                    + Dodaj nowe zadanie
                </button>
                {isPopupOpen && (
                    <div className={styles.popupOverlay}>
                        <div className={styles.popup}>
                            <h3>Dodaj nowe zadanie</h3>
                            <input
                                type="text"
                                placeholder="Nazwa zadania"
                                value={newTask.text}
                                onChange={(e) =>
                                    setNewTask({ ...newTask, text: e.target.value })
                                }
                                className={styles.input}
                            />
                            <select
                                value={newTask.assignee}
                                onChange={(e) =>
                                    setNewTask({ ...newTask, assignee: e.target.value })
                                }
                                className={styles.select}
                            >
                                <option value="">Przypisz osobę</option>
                                <option value="Alice">Alice</option>
                                <option value="Bob">Bob</option>
                                <option value="Charlie">Charlie</option>
                            </select>
                            <button onClick={handleAddTask} className={styles.saveButton}>
                                Zapisz zadanie
                            </button>
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className={styles.cancelButton}
                            >
                                Anuluj
                            </button>
                        </div>
                    </div>
                )}
                <div className={styles.todoApp}>
                    <Column
                        title="Do zrobienia"
                        tasks={tasks.todo}
                        column="todo"
                        moveTask={moveTask}
                    />
                    <Column
                        title="W trakcie"
                        tasks={tasks.inProgress}
                        column="inProgress"
                        moveTask={moveTask}
                    />
                    <Column
                        title="Zakończone"
                        tasks={tasks.done}
                        column="done"
                        moveTask={moveTask}
                    />
                </div>
            </div>
        </DndProvider>
    );
}

export default TodoApp;