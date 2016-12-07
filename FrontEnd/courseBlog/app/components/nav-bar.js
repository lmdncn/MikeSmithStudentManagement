import Ember from 'ember';

export default Ember.Component.extend({



  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {

  saveStudent:function(){
    console.log("saveStudent");

  

  },

undoChange:function(){
    console.log("undoChange");

  

  },

  firstRecord:function(){
    console.log("firstRecord");

  

  },

  prevRecord:function(){
    console.log("prevRecord");

  

  },

  nextRecord:function(){
    console.log("nextRecord");

  

  },

lastRecord:function(){
    console.log("lastRecord");

  

  }



  }




});
