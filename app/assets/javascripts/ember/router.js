Embryo.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
  });
});

Embryo.Router.reopen({
  location: 'history'
});

Embryo.UsersRoute = Ember.Route.extend({
  model: function() {
    return Embryo.User.find();
  }
});

Embryo.UsersShowRoute = Ember.Route.extend({
  model: function(params) {
    return Embryo.User.find(params.user_id);
  }
});

Embryo.UsersEditRoute = Ember.Route.extend({
  model: function(params) {
    return Embryo.User.find(params.user_id);
  }
});