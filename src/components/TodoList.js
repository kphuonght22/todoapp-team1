import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center">
                    TodoList
                </h3>

                <div className="row">
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("all")}
                        >
                            All
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("done")}
                        >
                            Done
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button
                            type="button"
                            className="btn btn-info btn-block mt-1"
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Todo
                        </button>
                    </div>
                    <div className="col-md-3">
                        <div class="dropdown open">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        Level
                                    </button>
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <button class="dropdown-item" onClick={() => updateTodosToShow("dofirst")}>Do first</button>
                                <button class="dropdown-item" onClick={() => updateTodosToShow("schedule")}>Schedule</button>
                                <button class="dropdown-item" onClick={() => updateTodosToShow("delegate")}>Delegate/Delay</button>
                                <button class="dropdown-item" onClick={() => updateTodosToShow("delete")}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    items.length === 0 ? '' :
                        <ul className="list-group my-5">
                            {
                                items.map(item => {
                                    return (
                                        <TodoItem
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            level={item.level}
                                            completed={item.completed}
                                            handleDelete={() => handleDelete(item.id)}
                                            handleEdit={() => handleEdit(item.id)}
                                            handleDoneTask={handleDoneTask}
                                        />
                                    )
                                })
                            }

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-block mt-1"
                                        onClick={handleDeleteDoneTasks}
                                    >
                                        Delete done tasks
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-block mt-1"
                                        onClick={clearList}
                                    >
                                        Delete all tasks
                                    </button>
                                </div>
                            </div>
                        </ul>
                }
            </Fragment>
        )
    }
}
