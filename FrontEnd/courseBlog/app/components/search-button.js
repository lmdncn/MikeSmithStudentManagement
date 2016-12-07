import Ember from 'ember';

export default Ember.Component.extend({

doSearch: function() {
// the current value of the text field
	var query = this.get('search');
	//this.transitionToRoute('search', { query: query });

    // this.set('searchQuery', query);

    this.transitionToRoute('home', query);

},

actions:{
    search(){
         console.log('doSearch called');
      //How can methodB calling methodC
      this.send('doSearch');
      
      return false;
     
    }


});
