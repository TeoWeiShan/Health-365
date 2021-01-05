$(document).ready(function () {
  
  displayTable();

  $("#frm-create-bmi").submit(function (e) {
    
    e.preventDefault();
    
    var x = document.forms["myForm"]["weight"].value;
    var y = document.forms["myForm"]["height"].value;
    if (x == "" || y == "") {
    alert("Cannot be left blank");
  }
  else{

    let weight = $('#weight').val();
    let height = $('#height').val();
    let createDate = new Date().toLocaleDateString();
    let userBMI = weight / (height * height) ;
    let userStatus = '';

    if (userBMI<18.5){
      userStatus = "Underweight";
    } 
    if (userBMI>=18.5 && userBMI<=25){
      userStatus = "Normal";
    } 
    if (userBMI>=25 && userBMI<=30){
      userStatus = "Obese";
    } 
    if (userBMI>30){
      userStatus = "Overweight";
    } 

    let user = new User(weight, height,createDate,userBMI.toFixed(2),userStatus);

    let userList = [];

    if (localStorage.getItem('userList')) {
      userList = JSON.parse(localStorage.getItem('userList'));
    }

    userList.push(user);

    localStorage.setItem('userList', JSON.stringify(userList));

    displayTable();}
  });
});

function User(weight, height, createDate, userBMI, userStatus) {
  this.userWeight = weight;
  this.userHeight = height;
  this.createDate = createDate;
  this.userBMI = userBMI;
  this.userStatus = userStatus;
  
}

function displayTable() {

  let userInfo = "";

  if (localStorage.getItem('userList')) {
    let userList = JSON.parse(localStorage.getItem('userList'));

    if (userList.length > 0) {
      for (let user of userList) {
        userInfo += `<tr><td>${user.userWeight}</td><td>${user.userHeight}</td><td>${user.createDate}</td><td>${user.userBMI}</td><td>${user.userStatus}</td></tr>`;
      }

      $('#user-info').html(userInfo);
    } else {
      
    }
  }

}
