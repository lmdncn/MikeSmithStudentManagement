import Ember from 'ember';

export default Ember.Component.extend({



  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  
  isEditing: false,

  imgUrl:"/assets/images/malestudent.png",


  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

    save: function(id){
      this.set('isEditing', false);
      var myStore = this.get('store');

      var self = this;
      myStore.findRecord('student',id).then(function(post) {
        post.set('fistName',self.get('selectedStudent.fistName'));
        post.set('lastName', self.get('selectedStudent.lastName'));
        post.save();  // => PATCH to /posts/:post_id
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
