import DS from 'ember-data';

export default DS.Model.extend({

    number: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
    gender: DS.attr('string'),
    DOB: DS.attr('date'),
    residency: DS.attr('string')
  
});
