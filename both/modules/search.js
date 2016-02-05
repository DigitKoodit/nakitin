var SearchModule = function(){
  searchEvents(keyword){
    let query = new RegExp(keyword, "i");

    let results = Events.find({$or:[{"name": query}, {"organizer": query}]});

    return {results: results};
  }
}