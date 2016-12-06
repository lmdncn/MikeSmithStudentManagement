import Ember from 'ember';

export default Ember.Route.extend({
    
    model: function(){
        var variable;
        /*this.store.findRecord('student', '5847296a5aaff9b65052bb28').then(function(student){
            var firstName = student.get('firstName');
            student.set('firstName', firstName);
            return student;
        });*/
        return this.store.findRecord('student', '5847296a5aaff9b65052bb28')
    }

});
