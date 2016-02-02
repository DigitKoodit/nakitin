FlowRouter.route('/', {
  name: "home",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <MainComponent />});
  }
});

FlowRouter.route('/new', {
  name: "newEvent",
  action: function(){
    ReactLayout.render(AppRoot, {yield: <NewEventComponent />});
  }
});

FlowRouter.route('/event/:eventId', {
  action: function(params, queryParams){
    console.log("Params:", params);
    console.log("Query Params:", queryParams);
  }
})