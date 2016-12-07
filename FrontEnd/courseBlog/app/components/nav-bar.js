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
    $('#cancel-button').trigger('click');

  },

  undoChange:function(){
    console.log("undoChange");

  },

  firstRecord:function(){
    console.log("firstRecord");

    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.number', data[0].number)
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
  
    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){

        let currNum = storethingy.get('selectedStudent.number');
        let prevIndex;

        for(var i = 0; i < data.length; i++){

          if(data[i].number === currNum) {
            prevIndex = i - 1;
            break;
          }

       }
        
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.number', data[prevIndex].number)
        storethingy.set('selectedStudent.firstName', data[prevIndex].firstName)
        storethingy.set('selectedStudent.lastName', data[prevIndex].lastName)
        storethingy.set('selectedStudent.gender', data[prevIndex].gender)
        storethingy.set('selectedStudent.DOB', data[prevIndex].DOB)
        storethingy.set('selectedStudent.residency', data[prevIndex].residency)
        storethingy.didReceiveAttrs();

    });

  },

  nextRecord:function(){
    //console.log("nextRecord");

    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){

        let currNum = storethingy.get('selectedStudent.number');
        let nextIndex;

        for(var i = 0; i < data.length; i++){

          if(data[i].number === currNum) {
            nextIndex = i + 1;
            break;
          }

       }
        
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.number', data[nextIndex].number)
        storethingy.set('selectedStudent.firstName', data[nextIndex].firstName)
        storethingy.set('selectedStudent.lastName', data[nextIndex].lastName)
        storethingy.set('selectedStudent.gender', data[nextIndex].gender)
        storethingy.set('selectedStudent.DOB', data[nextIndex].DOB)
        storethingy.set('selectedStudent.residency', data[nextIndex].residency)
        storethingy.didReceiveAttrs();

    });
  

  },

  lastRecord:function(){
    console.log("lastRecord");
    var storethingy = this;
    $.get('http://localhost:3700/api/students', function(data){
        storethingy.set('isEditing', false);
        storethingy.set('selectedStudent.number', data[data.length - 1].number)
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
