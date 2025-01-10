import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Row from '../../components/Row';
import styles from '../../styles/modules/TODO/TODO.module.css';

function TodoApp() {
    const [rows, setRows] = useState([
        { id: 1, category: 'Zadania dla Frontu', tasks: { todo: [], inProgress: [], done: [] } },
    ]);

    const [newTask, setNewTask] = useState({ text: '', assignee: '' });
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [taskCounter, setTaskCounter] = useState(1);

    const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    const moveTask = (taskIndex, fromColumn, toColumn, fromRow, toRow) => {
        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            const fromTasks = updatedRows[fromRow].tasks[fromColumn];
            const toTasks = updatedRows[toRow].tasks[toColumn];

            if (!fromTasks || !fromTasks[taskIndex]) {
                console.error('Task not found or invalid index.');
                return prevRows;
            }

            const [movedTask] = fromTasks.splice(taskIndex, 1);

            updatedRows[toRow].tasks[toColumn] = [...toTasks, movedTask];

            return updatedRows;
        });
    };

    const handleAddTaskToRow = (rowIndex) => {
        setSelectedRowIndex(rowIndex);
        setIsPopupOpen(true);
    };

    const handleSaveTask = () => {
        if (selectedRowIndex === null) return;

        if (!newTask.text.trim()) {
            console.error('Task text is empty. Skipping save.');
            return;
        }

        setRows((prevRows) => {
            const updatedRows = [...prevRows];
            const row = updatedRows[selectedRowIndex];

            const newTaskData = {
                id: taskCounter,
                text: newTask.text.trim(),
                assignee: newTask.assignee || 'Nie przypisano',
            };

            row.tasks.todo = row.tasks.todo.filter((task) => task.id !== taskCounter);
            row.tasks.todo.push(newTaskData);

            return updatedRows;
        });

        setTaskCounter((prev) => prev + 1);
        setNewTask({ text: '', assignee: '' });
        setIsPopupOpen(false);
        setSelectedRowIndex(null);
    };

    const handleSaveCategory = () => {
        if (!newCategoryName.trim()) return;

        setRows((prev) => [
            ...prev,
            { id: prev.length + 1, category: newCategoryName, tasks: { todo: [], inProgress: [], done: [] } },
        ]);

        setNewCategoryName('');
        setIsCategoryPopupOpen(false);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.todoAppContainer}>
                <div className={styles.addRow}>
                    <button onClick={() => setIsCategoryPopupOpen(true)} className={styles.addRowButton}>
                        Dodaj dział
                    </button>
                </div>

                {rows.map((row, rowIndex) => (
                    <Row
                        key={row.id}
                        category={row.category}
                        tasks={row.tasks}
                        rowIndex={rowIndex}
                        moveTask={moveTask}
                        onTaskClick={(task) =>
                            alert(`Zadanie: ${task.text}\nAutor: ${task.assignee || 'Nie przypisano'}`)
                        }
                        onAddTask={handleAddTaskToRow}
                    />
                ))}

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
                            <div style={{ textAlign: 'right' }}>
                                <button onClick={handleSaveTask} className={styles.saveButton}>
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
                    </div>
                )}

                {isCategoryPopupOpen && (
                    <div className={styles.popupOverlay}>
                        <div className={styles.popup}>
                            <h3>Dodaj nową kategorię</h3>
                            <input
                                type="text"
                                placeholder="Nazwa kategorii"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                className={styles.input}
                            />
                            <div style={{ textAlign: 'right' }}>
                                <button onClick={handleSaveCategory} className={styles.saveButton}>
                                    Zapisz kategorię
                                </button>
                                <button
                                    onClick={() => setIsCategoryPopupOpen(false)}
                                    className={styles.cancelButton}
                                >
                                    Anuluj
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DndProvider>
    );
}

export default TodoApp;