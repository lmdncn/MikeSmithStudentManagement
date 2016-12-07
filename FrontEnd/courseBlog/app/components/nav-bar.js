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

    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.firstName', data[0].firstName)
        storethingy.set('selectedStudent.lastName', data[0].lastName)
        storethingy.set('selectedStudent.gender', data[0].gender)
        storethingy.set('selectedStudent.DOB', data[0].DOB)
        storethingy.set('selectedStudent.residency', data[0].residency)
        storethingy.didReceiveAttrs();
    });

  },

  prevRecord:function(){
    console.log("prevRecord");

  

  },

  nextRecord:function(){
    console.log("nextRecord");

  

  },

  lastRecord:function(){
    console.log("lastRecord");
    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.firstName', data[data.length - 1].firstName)
        storethingy.set('selectedStudent.lastName', data[data.length - 1].lastName)
        storethingy.set('selectedStudent.gender', data[data.length - 1].gender)
        storethingy.set('selectedStudent.DOB', data[data.length - 1].DOB)
        storethingy.set('selectedStudent.residency', data[data.length - 1].residency)
        storethingy.didReceiveAttrs();
    });

  }



  }




});
