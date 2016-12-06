import DS from 'ember-data';

export default DS.Model.extend({

    StudentNumber: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
    dateOfBirth: DS.attr('date'),
    residency: DS.attr('string'),
    gender: DS.attr('string')

````

});
