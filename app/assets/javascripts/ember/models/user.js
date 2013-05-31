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