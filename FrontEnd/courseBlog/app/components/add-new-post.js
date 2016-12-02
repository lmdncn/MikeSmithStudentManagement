import Ember from 'ember';

export default Ember.Component.extend({


  isAdding: false,
  store: Ember.inject.service(),

  actions: {
    addNewPost (){
      this.set('title', null);
      this.set('body', null);
      this.set('isAdding', true);
    },
    savePost (){
      var myStore = this.get('store');
      var newPost = myStore.createRecord('post',{
        title: this.get('title'),
        body: this.get('body')
      });
      newPost.save();
      this.set('isAdding', false);
    },

    cancelPost (){
      this.set('isAdding', false);
    }
  }


});
