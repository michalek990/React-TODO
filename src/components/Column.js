import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';
import styles from '../styles/modules/TODO/TODO.module.css';

function Column({ title, tasks = [], column, rowIndex, moveTask, onTaskClick }) {
    const [, drop] = useDrop({
        accept: 'task',
        drop: (item) => {
            if (item.column !== column || item.rowIndex !== rowIndex) {
                moveTask(item.index, item.column, column, item.rowIndex, rowIndex);
            }
        },
    });

    return (
        <div ref={drop} className={styles.column}>
            <h3>{title}</h3>
            <div className={styles.taskGrid}>
                {tasks.map((task, index) => (
                    <Task
                        key={`${task.id}-${index}`} // Dodano unikalny klucz, aby uniknąć konfliktów
                        task={task}
                        index={index}
                        column={column}
                        rowIndex={rowIndex}
                        moveTask={moveTask}
                        onTaskClick={onTaskClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
