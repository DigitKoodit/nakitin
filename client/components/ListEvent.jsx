ListEvent = React.createClass({
  shortenDescription(){
    if(this.props.event.description.length > 100){
      return this.props.event.description.substring(0, 97) + "...";
    }else{
      return this.props.event.description;
    }
  },
  returnTasks(){
    let total = 0;
    this.props.event.tasks.reduce((task, sum) => {
      return sum + task.count;
    });
  },
  render(){
    return(
      <div>
      <li><div className="eventListCard">
            <h2><a href={"/event/"+this.props.event.id}>{this.props.event.name}</a></h2>
            <h3>Järjestäjä: {this.props.event.organizer} Tehtävistä täytetty: x/{this.returnTasks()}</h3>
            <p>{this.shortenDescription()}</p>
        </div></li>
      </div>
    );
  }
});