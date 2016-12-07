import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),


  actions: {

  saveStudent:function(id){
    console.log("saveStudent");
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
      }
    });

    this.set('isEditing', false);
    this.set('selectedStudent.firstName',$('#first-name').val())
    this.set('selectedStudent.lastName',$('#last-name').val())
    this.set('selectedStudent.gender',$('#gender').val())
    this.set('selectedStudent.DOB',$('#dob').val())
    this.set('selectedStudent.residency',$('#residency').val())
    this.didReceiveAttrs();

  },

  undoChange:function(){
    console.log("undoChange");

  },

  firstRecord:function(){
    console.log("firstRecord");
    /*($.get('http://localhost:3700/api/students', function(data){
        console.log(data);
    });*/

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
