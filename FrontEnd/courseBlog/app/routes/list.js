import Ember from 'ember';

export default Ember.Route.extend({


	model: function() {
        console.log("Calling Get all students");
		return this.store.findAll('student');
	}

});
