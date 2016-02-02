NewEventTask = React.createClass({
  render(){
    console.log("Rendering new task");
    return (
      <li>Tehtävä: {this.props.task}, Tarvittu määrä: {this.props.count} - <a href="#" onClick={this.props.remove}>Poista</a></li>
    );
  }
});