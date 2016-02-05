MainComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    let currentDate = new Date();
    return{
      events: Events.find({}, {sort: {createdAt:-1}}).fetch()
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
      return <ListEvent key={event.id} event={event}/>
    });    
  },
  render(){
    return(
      <div className="eventsContainer">
        <h2>Tarjolla olevat nakit</h2>
        <ul>
          {this.renderEvents()}
        </ul>
        <UiComponent/>
      </div>
    );
  }
});