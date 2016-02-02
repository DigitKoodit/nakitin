MainComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    console.log("Fetching events");
    let currentDate = new Date();
    console.log("Fetching the mixing for this.");
    return{
      events: Events.find({}).fetch()
    }
  },
  renderEvents(){
    console.log("Loading events to render.");
    if(typeof this.data.events === undefined){
      console.log("Events is undefined");
      return(
        <p>Yhtään nakkeja ei ole tarjolla.</p>
      );
    }
    if(this.data.events.length < 1){
      return(
        <p>Yhtään nakkeja ei ole tarjolla.</p>
      );
    }
    return this.data.events.map((event) => {
      return <ListEvent key={event._id} event={event}/>
    });    
  },
  render(){
    return(
      <div className="eventsContainer">
        <h2>Tarjolla olevat nakit</h2>
        <ul>
          {this.renderEvents()}
        </ul>
        <a href="/new">Add an event.</a>
      </div>
    );
  }
});