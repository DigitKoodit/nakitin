NewEventForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      EventSize: Events.find({}).fetch().length
    }
  },
  getInitialState(){
    return {Tasks: [], name: "", description: ""}
  },
  eventSubmit(){
    if(this.state.name === "" || this.state.description === ""){
      alert("Tapahtuman nimi tai kuvaus on tyhjä.");
      return;
    }
    let Event = {
      name: this.state.name,
      description: this.state.description,
      tasks: this.state.Tasks,
      createdAt: new Date(),
      id: this.data.EventSize
    }
    console.log(Event);

    Events.insert(Event);

  },
  onChangeDescription(event){
    event.preventDefault();
    this.setState({description: event.target.value});
  },
  onChangeText(event){
    event.preventDefault();
    this.setState({name: event.target.value});
  },
  addEventTask(event){
    event.preventDefault();
    console.log("Adding new task");
    let taskName = ReactDOM.findDOMNode(this.refs.taskNameField).value.trim();
    let taskCount = ReactDOM.findDOMNode(this.refs.taskNumberCount).value.trim();
    taskCount = parseInt(taskCount) || 0;
    if(taskCount === 0){
      alert("Tehtävän määrän täytyy olla suurempi kuin 0");
      return;
    }else if(taskName === ""){
      alert("Tehtävällä täytyy olla nimi");
      return;
    }
    this.setState({Tasks: this.state.Tasks.concat(
      {
        task: taskName,
        count: taskCount
      }
    )});
    // this.forceUpdate();
    ReactDOM.findDOMNode(this.refs.taskNameField).value = "";
    ReactDOM.findDOMNode(this.refs.taskNumberCount).value = "";
  },
  removeEventTask(index){
    this.setState({
      Tasks: this.state.Tasks.filter((_, i) => i !== index)
    });
  },
  renderEventTasks(){
    if(this.state.Tasks.length==0){
      return <li>No tasks yet</li>
    }
    return this.state.Tasks.map((task, index) => {
      let boundClick = this.removeEventTask.bind(this, index);
      return(
        <NewEventTask key={index} remove={boundClick} task={task.task} count={task.count}/>
      );
    });
  },
  render(){
    return(
      <div className="fuksiContent">
          <h1>Uusi tapahtuma</h1>
          <h2>Kuvaus</h2>
        <form className="descriptionForm">
          <input className="eventNameField" onChange={this.onChangeText} type="text" ref="nameField" placeholder="Tapahtuman nimi"/>
          <textarea rows="3" className="commentField"  onChange={this.onChangeDescription} ref="descriptionField" type="text" placeholder="Tapahtuman kuvaus" />
        </form>
          <h2>Tehtävät</h2>
          <ul>
            {this.renderEventTasks()}
          </ul>
        <form className="taskForm" onSubmit={this.addEventTask}>
          <input className="taskName" type="text" ref="taskNameField" placeholder="Tehtävän nimi"/>
          <input className="personsCount" type="text" ref="taskNumberCount" placeholder="2"/>
          <input className="addTaskToEvent" type="submit" value="Lisää tehtävä" />
        </form>
        <button className="addEventButton" onClick={() => this.eventSubmit()} >Lisää tapahtuma</button>
      </div>
    );
  }
});