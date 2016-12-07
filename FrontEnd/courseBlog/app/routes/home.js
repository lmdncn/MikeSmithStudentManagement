import Ember from 'ember';

export default Ember.Route.extend({

    // actions: {
    //         save: function(id) {

    //             console.log($('#first-name').val());

    //             /*var data = {
    //                 number: id,
    //                 firstName: $('#first-name').val(),
    //                 lastName: $('#last-name').val(),
    //                 gender: $('#gender').val(),
    //                 DOB: $('#dob').val(),
    //                 residency: $('#residency').val()
    //             };*/
                
    //             console.log(id);
    //             console.log(JSON.stringify(data));

    //             /*$.ajax({
    //                 url: 'http://localhost:3700/api/students/' + id,
    //                 type: 'PUT',
    //                 data: data,
    //                 success: function(data) {
    //                     alert('Load was performed.');
    //                 }
    //             });*/
    //         }
    //     },

    model: function(params){
      if(params.number == null){
          console.log("Params Null");
           return this.store.find('student',250985159);

      }

        return this.store.findRecord('student', params.number);
    }
});
