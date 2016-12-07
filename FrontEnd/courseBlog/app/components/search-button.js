import Ember from 'ember';

export default Ember.Component.extend({


  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
  searchStudent:function(){
    console.log("Searching");

    var temp =  $('#search').val();
    if(temp >10000){
      this.get('routing').transitionTo('/home/'+ temp);

  }
  }
  }


// doSearch: function() {
// // the current value of the text field
// 	var query = this.get('search');
// 	//this.transitionToRoute('search', { query: query });

//     // this.set('searchQuery', query);

//     this.transitionToRoute('home', query);

// },

// actions:{
//     search(){
//          console.log('doSearch called');
//       //How can methodB calling methodC
//       this.send('doSearch');
      
//       return false;
     
//     }


});
