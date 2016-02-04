ListEvent = React.createClass({
  render(){
    return(
      <div>
      <li><div className="eventListCard">
            <h2><a href={"/event/"+this.props.id}>{this.props.name}</a></h2>
            <p>{this.props.text}</p>
        </div></li>
      </div>
    );
  }
});