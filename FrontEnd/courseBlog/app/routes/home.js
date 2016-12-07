import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
      if(params.number == null){
          console.log("Params Null");
           return this.store.find('student',250136525);

      }

        return this.store.findRecord('student', params.number);
    }
});
