import Ember from 'ember';

export default Ember.Component.extend({



  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  
  isEditing: false,

  imgUrl:"/assets/images/malestudent.png",

// didReceiveAttrs:function() {

//       if (1 == this.get('selectedStudent.gender')) {
//         this.set('imgUrl', "/assets/images/malestudent.png");
//       }

//       else{
//          this.set('imgUrl', "/assets/images/femalestudent.png");
//       }
//     }));
//   },



  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

save: function(id) {

            console.log($('#first-name').val());

            var data = {
                number: id,
                firstName: $('#first-name').val(),
                lastName: $('#last-name').val(),
                gender: $('#gender').val(),
                DOB: $('#dob').val(),
                residency: $('#residency').val()
            };
            
            console.log(JSON.stringify(data));

            $.ajax({
                url: 'http://localhost:3700/api/students/' + id,
                type: 'PUT',
                data: data,
                success: function(data) {
                    alert('Load was performed.');
                }
            });
        }
    },


    cancel: function(number){
        this.set('isEditing', false);
    //   this.get('routing').transitionTo('home/'+number);
    }

});
