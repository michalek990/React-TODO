import React from 'react';
import Column from './Column';
import styles from '../styles/modules/TODO/TODO.module.css';

function Row({ category, tasks, rowIndex, moveTask, onTaskClick, onAddTask }) {
    return (
        <div className={styles.row}>
            <div className={styles.rowHeader}>
                <button
                    className={styles.addTaskButton}
                    onClick={() => onAddTask(rowIndex)} // Upewnij się, że przekazywany indeks jest poprawny
                >
                    +
                </button>
                <h2 className={styles.rowTitle}>{category}</h2>
            </div>

            <div className={styles.rowColumns}>
                <Column
                    title="Do zrobienia"
                    tasks={tasks.todo}
                    column="todo"
                    rowIndex={rowIndex}
                    moveTask={moveTask}
                    onTaskClick={onTaskClick}
                />
                <Column
                    title="W trakcie"
                    tasks={tasks.inProgress}
                    column="inProgress"
                    rowIndex={rowIndex}
                    moveTask={moveTask}
                    onTaskClick={onTaskClick}
                />
                <Column
                    title="Zakończone"
                    tasks={tasks.done}
                    column="done"
                    rowIndex={rowIndex}
                    moveTask={moveTask}
                    onTaskClick={onTaskClick}
                />
            </div>
        </div>
    );
}

export default Row;
