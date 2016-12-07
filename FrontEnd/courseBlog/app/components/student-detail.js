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

    save: function(id){
      this.set('isEditing', false);
      var myStore = this.get('store');


      var self = this;
      myStore.findRecord('student',id).then(function(put) {
        put.set('fistName',self.get('selectedStudent.fistName'));
        put.set('lastName', self.get('selectedStudent.lastName'));
        put.set('DOB', self.get('selectedStudent.DOB'));
        put.set('residency', self.get('selectedStudent.residency'));
        put.set('gender', self.get('selectedStudent.gender'));
        put.save();  // => PATCH to /puts/:put_id
      });


      this.set('isEditing', false);
      this.get('routing').transitionTo('home' );
    },

    cancel: function(number){
        this.set('isEditing', false);
    //   this.get('routing').transitionTo('home/'+number);
    }

  }








});
