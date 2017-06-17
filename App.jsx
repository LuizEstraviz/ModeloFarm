import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: "Header from state ...",
			content: "Content from state ...",
			data:
			[
				{
					"id":1,
					"name":"Luiz",
					"age":"58"
				},
				{
					"id":2,
					"name":"Fernando",
					"age":"36"
				},
				{
					"id":3,
					"name":"Eduardo",
					"age":"32"
				},
			]
		}
	}

   render() {
      return (
         <div>

			{/* class Header */}
            <Header/>	{/* Header from class Header */}
				<h1>{this.state.header}</h1>	{/* state */}

			{/* class Content */}
            <Content/>	{/* Content from class Content */}
				<h2>{this.state.content}</h2>	{/* state */}

			<table>
				<tbody>
					{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
				</tbody>
			</table>
         </div>
      );
   }
}

class Header extends React.Component {
	render() {
		var myStyle = {fontSize: 50, color: '#FF0000'}
		return (
			<div>
				<h1 style = {myStyle}>Header from class Header</h1>
			</div>
      );
   }
}

class Content extends React.Component {
   render() {
		var i = 1;
		{/* Parte comentada:
		function myFunctionShowDate() {document.getElementById("block").innerHTML = Date()} */}
		return (
			<div>
				<h1>Content from class Content</h1>
				<p>This is the content!!!</p>
				<h2>Good morning, Luiz.</h2>
				<h2>{2+2}</h2>
				<h2>{i == 2 ? 'True!' : 'False!'}</h2>
				{/* <hr> */}
				<h2>Table</h2>
				{/* <p id="block"></p>
				<button type="button" onclick='myFunctionShowDate()'>Click me to display Date  and Time.</button>  */}
			</div>
		);
	}
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;