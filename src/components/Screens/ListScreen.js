import React, { Component } from 'react'
import uuid from 'uuid'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'

class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			items: [],
			itemsToShow: "all",
			id: uuid(),
			item: '',
			type: '',
			editItem: false,
		}
	}

	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}
	handleSelect = event => {
		this.setState({
			type: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		
		const newItem = {
			id: this.state.id,
			title: this.state.item,
			level: this.state.type,
			completed: false
		}
		if (this.state.type === "" || this.state.item === ""){
			alert("Nhập đầy đủ thông tin!!!");
		}
		else {
			const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				type: '',
				editItem: false
			})
		}
		}
		
	}

	updateTodosToShow = string => {
		this.setState({
			itemsToShow: string
		});
	};

	handleDoneTask = (id, completed) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems
		})
	}

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		const selectedItem = this.state.items.find(item => item.id === id)

		this.setState({
			items: filteredItems,
			id: id,
			item: selectedItem.title,
			editItem: true
		})
	}

	handleDeleteDoneTasks = () => {
		const filteredItems = this.state.items.filter(item => item.completed === false)

		this.setState({
			items: filteredItems
		})
	}

	clearList = () => {
		this.setState({
			items: []
		})
	}

	render() {
		let items = []

		if (this.state.itemsToShow === "all") {
			items = this.state.items;
		} else if (this.state.itemsToShow === "todo") {
			items = this.state.items.filter(item => !item.completed);
		} else if (this.state.itemsToShow === "done") {
			items = this.state.items.filter(item => item.completed);			
		} else if (this.state.itemsToShow === "dofirst"){
			items = this.state.items.filter(item => item.level === "Do first")
		} else if (this.state.itemsToShow === "schedule"){
			items = this.state.items.filter(item => item.level === "Schedule")
		} else if (this.state.itemsToShow === "delegate"){
			items = this.state.items.filter(item => item.level === "Delegate/Delay")
		} else if (this.state.itemsToShow === "delete"){
			items = this.state.items.filter(item => item.level === "Delete")
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">TodoInput</h3>
						<TodoInput
							item={this.state.item}
							type={this.state.type}
							handleChange={this.handleChange}
							handleSelect={this.handleSelect}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList
							items={items}
							filterDoneTasks={this.filterDoneTasks}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleDoneTask={this.handleDoneTask}
							handleDeleteDoneTasks={this.handleDeleteDoneTasks}
							updateTodosToShow={this.updateTodosToShow}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
