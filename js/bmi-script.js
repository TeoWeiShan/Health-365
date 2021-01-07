$(document).ready(function () {
  //load and display chart and table data from local storage (if have)
  displayTable();
  displayChart();
  
  $("#frm-create-bmi").submit(function (e) {

    e.preventDefault();
    //validate form (ensure both textboxes are filled up)
    var x = document.forms.myForm.weight.value;
    var y = document.forms.myForm.height.value;

    if (x == "" || y == "") {
    alert("Cannot be left blank");
    } 
    else{
    //create object to store in local storage
    let weight = $('#weight').val();
    let height = $('#height').val();
    let createDate = new Date().toLocaleDateString();
    let userBMI = weight / (height * height) ;
    let userStatus = '';
    //assigning BMI status
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
    //pushing new data to local storage
    userList.push(user);

    localStorage.setItem('userList', JSON.stringify(userList));
    //display new data in table
    displayTable();
    //pushing new data to chart
    myChart.data.datasets[0].data.push(weight);

    myChart.data.labels.push(createDate);
    //update the display of chart
    myChart.update();
  }

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

    //displays value from local storage into table
    if (userList.length > 0) {
      for (let user of userList) {
        userInfo += `<tr><td>${user.userWeight}</td><td>${user.userHeight}</td><td>${user.createDate}</td><td>${user.userBMI}</td><td>${user.userStatus}</td></tr>`;
      }
      $('#user-info').html(userInfo);
    } else {
      $('#user-info').html('No user found');
    }
  }
}

function displayChart() {

  if (localStorage.getItem('userList')) {
    let userList = JSON.parse(localStorage.getItem('userList'));

    //displays value from local storage into chart
    if (userList.length > 0) {
      for (let user of userList) {
        myChart.data.datasets[0].data.push(user.userWeight);

        myChart.data.labels.push(user.createDate);

        myChart.update();
      }
    }
  } 
}

//Chart.js script (Allow chart to be displayed)
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Weight (kg)',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    },
  ]
  },
  options: {
    title:{
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    }
  }
});
