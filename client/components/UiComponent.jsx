UiComponent = React.createClass({
  onSearchChange(event){
    event.preventDefault();
    let keyword = ReactDOM.findDOMNode(this.refs.searchInput).value.trim();
    let query = new RegExp(keyword, "i");
    console.log(keyword);
  },
  render(){
    return(
      <div className="uiBar">
        <button onClick={() => {window.location.href="/new"}} className="addEvent">+</button>
        <input type="text" placeholder="Hae..." className="searchField" onChange={this.onSearchChange} ref="searchInput"/>
      </div>
    );
  }
});