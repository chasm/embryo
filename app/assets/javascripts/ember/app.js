Embryo = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Embryo.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('show', { path: ':user_id' });
    this.route('edit', { path: ':user_id/edit' });
  });
});

Embryo.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter
});

Embryo.User = DS.Model.extend({
  name: DS.attr('string')
});

Embryo.User.FIXTURES = [
  {
    id: 1,
    name: "Joe"
  },
  {
    id: 2,
    name: "Betty"
  },
  {
    id: 3,
    name: "Marge"
  }
];

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