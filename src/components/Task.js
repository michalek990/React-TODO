import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/modules/TODO/TODO.module.css';
import { assigneeColors } from '../pages/TODO/constants';

const ItemTypes = {
    TASK: 'task',
};

function Task({ task, index, column, rowIndex, moveTask, onTaskClick }) {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { index, column, rowIndex },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    // Determine background color based on assignee
    const backgroundColor = task.assignee
        ? assigneeColors[task.assignee] || assigneeColors.Unassigned
        : assigneeColors.Unassigned;

    return (
        <div
            ref={drag}
            className={styles.task}
            style={{
                backgroundColor,
                opacity: isDragging ? 0.5 : 1,
            }}
            onClick={() => onTaskClick(task)} // Task click handler
        >
            <div className={styles.taskHeader}>
                <span>{task.id}</span>
            </div>
            <div className={styles.taskText}>
                <p>{task.text}</p>
            </div>
            <div className={styles.taskOwner}>
                {task.assignee || 'Nie przypisano'}
            </div>
        </div>
    );
}

export default Task;
