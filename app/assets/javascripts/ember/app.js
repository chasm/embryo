Embryo = Ember.Application.create();

Embryo.Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.resource('show', { path: ':user_id' }, function() {
      this.route('edit');
    })
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