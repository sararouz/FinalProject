
var consumptionData = [];
var conprorenewData = [];
var result = [];


function allEnergy() {
  var ctx = document.getElementById("allEnergyChart").getContext('2d');
  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: consumptionData[0]['Month'],
      datasets: [
        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          label: 'Biomass Energy',
          data: consumptionData[0]['Biomass Energy Consumption'] ,
          backgroundColor: '#AED6F1'
        },
        {
          label: 'Coal',
          data: consumptionData[0]['Coal Consumption'],
          backgroundColor: '#FCF3CF'
        }, {
          label: 'Geothermal Energy',
          data: consumptionData[0]['Geothermal Energy Consumption'],
          backgroundColor: '#3498DB'
        },
        {
          label: 'Hydroelectric Power',
          data: consumptionData[0]['Hydroelectric Power Consumption'] ,
          backgroundColor: '#D6E9C6'
        },
        {
          label: 'Natural Gas',
          data: consumptionData[0]['Natural Gas Consumption (Excluding Supplemental Gaseous Fuels)'],
          backgroundColor: '#f49441'
        }, {
          label: 'Nuclear Electric Power',
          data: consumptionData[0]['Nuclear Electric Power Consumption'],
          backgroundColor: '#EBCCD1'
        }, {
          label: 'Petroleum (Excluding Biofuels)',
          data: consumptionData[0]['Petroleum Consumption (Excluding Biofuels)'],
          backgroundColor: '#B7950B'
        }, {
          label: 'Solar Energy',
          data: consumptionData[0]['Solar Energy Consumption'],
          backgroundColor: '#C0392B'
        }, {
          label: 'Wind Energy',
          data: consumptionData[0]['Wind Energy Consumption'],
          backgroundColor: '#4286f4'
        }
      ]

        // }]
      },

      // Configuration options go here
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true


          }
        ]
      }
    }
  });



}

function totalEnergy() {
  var ctx = document.getElementById("totalEnergyChart").getContext('2d');
  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: consumptionData[0]['Month'],
      datasets: [
        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          label: 'Total Fossil Fuels',
          data: consumptionData[0]['Total Fossil Fuels Consumption'],
          backgroundColor: '#f44641'
        },
        // {
        //   label: 'Total Primary Energy',
        //   data: consumptionData[0]['Total Primary Energy Consumption'],
        //   backgroundColor: '#414ff4'
        // },
        {
          label: 'Total Renewable Energy',
          data: consumptionData[0]['Total Renewable Energy Consumption'],
          backgroundColor: '#41f479'
        }
      ]

        // }]
      },

      // Configuration options go here
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true


          }
        ]
      }
    }
  });



}

// Start of new chart (Pie chart)1

function totalEnergyPie() {
  var ctx = document.getElementById("totalEnergyPieChart").getContext('2d');
  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels: ['Total Fossil Fuels Consumption', 'Total Renewable Energy Consumption'],
      datasets: [

        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          // label: 'Total Fossil Fuels',
          data: [consumptionData[0]['Total Fossil Fuels Consumption'][0],consumptionData[0]['Total Renewable Energy Consumption'][0]],
          backgroundColor: ['#f44641','#414ff4']
        },

        // {
        //   label: 'Total Primary Energy',
        //   data: consumptionData[0]['Total Primary Energy Consumption'],
        //   backgroundColor: '#414ff4'
        // },
        // {
        //   label: 'Total Renewable Energy',
        //   data: consumptionData[0][1]['Total Renewable Energy Consumption'],
        //   backgroundColor: '#41f479'
        // }
      ]

        // }]
      },

      // Configuration options go here
    //   options: {
    //     scales: {
    //       xAxes: [{
    //         stacked: true
    //       }],
    //       yAxes: [{
    //         stacked: true
    //
    //
    //       }
    //     ]
    //   }
    // }
  });



}

// ENd of new pie  chart


// Start of new chart (Pie chart)2

function totalEnergyPie2() {
  var ctx = document.getElementById("totalEnergyPieChart2").getContext('2d');
  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels: ['Total Fossil Fuels Consumption', 'Total Renewable Energy Consumption'],
      datasets: [

        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          // label: 'Total Fossil Fuels',
          data: [consumptionData[0]['Total Fossil Fuels Consumption'][530],consumptionData[0]['Total Renewable Energy Consumption'][530]],
          backgroundColor: ['#f44641','#414ff4']
        },

        // {
        //   label: 'Total Primary Energy',
        //   data: consumptionData[0]['Total Primary Energy Consumption'],
        //   backgroundColor: '#414ff4'
        // },
        // {
        //   label: 'Total Renewable Energy',
        //   data: consumptionData[0][1]['Total Renewable Energy Consumption'],
        //   backgroundColor: '#41f479'
        // }
      ]

        // }]
      },

      // Configuration options go here
    //   options: {
    //     scales: {
    //       xAxes: [{
    //         stacked: true
    //       }],
    //       yAxes: [{
    //         stacked: true
    //
    //
    //       }
    //     ]
    //   }
    // }
  });



}

// ENd of new pie  chart2

function totalRenewProConEnergy() {
  var ctx = document.getElementById("totalRenewProConEnergyChart").getContext('2d');
  var to = conprorenewData[0]['Month'].length;
  var from = to - 60;
  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: conprorenewData[0]['Month'].slice(from,to),
      datasets: [
        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          label: 'Total Production',
          data: conprorenewData[0]['Total Renewable Energy Production'].slice(from,to),
          backgroundColor: '#f44641',
          fill: false,
        },
        // {
        //   label: 'Total Primary Energy',
        //   data: consumptionData[0]['Total Primary Energy Consumption'],
        //   backgroundColor: '#414ff4'
        // },
        {
          label: 'Total Consumption',
          data: conprorenewData[0]['Total Renewable Energy Consumption'].slice(from,to),
          backgroundColor: '#414ff4',
          fill: false
        }
      ]

        // }]
      },

      // Configuration options go here
      options: {
        scales: {
          xAxes: [{
            stacked: false
          }],
          yAxes: [{
            stacked: false


          }
        ]
      }
    }
  });



}



function energyPrices() {
  var ctx = document.getElementById("pricesChart").getContext('2d');
  var len = result[0]['prices']['Crude'][0].length;
  var from = len - 365;  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');
  var dates = []
  for (var i=from; i<len;i++){
    date = new Date(result[0]['prices']['Crude'][0][i]*1000);
    formattedTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    dates.push(formattedTime)
  }

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: dates,
      datasets: [
        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          label: 'Crude Oil',
          data: result[0]['prices']['Crude'][1].slice(from,len),
          borderColor: '#f44641',
          fill: false
        },
        {
          label: 'Diesel',
          data: result[0]['prices']['Diesel'][1].slice(from,len),
          borderColor: '#414ff4',
          fill: false
        },
        {
          label: 'Gasoline',
          data: result[0]['prices']['Gasoline'][1].slice(from,len),
          borderColor: '#D6E9C6',
          fill: false
        },
        {
          label: 'Propane',
          data: result[0]['prices']['Propane'][1].slice(from,len),
          borderColor: '#3498DB',
          fill: false
        }
      ]

        // }]
      },

      // Configuration options go here
      options: {
        // elements: {
        //   point: { radius: 0 }
        // },
        scales: {
          xAxes: [{
            stacked: false
          }],
          yAxes: [{
            stacked: false


          }
        ]
      }
    }

  });



}



function predictionData() {
  var ctx = document.getElementById("predictionContainerChart").getContext('2d');
  var len = result[0]['result']['y_train'].length;
  var from = len - 24;

  // $('#ConsumptionChart').remove();
  // $('iframe.chartjs-hidden-iframe').remove();
  // $('#chartContainer').append('<canvas id="ConsumptionChart"><canvas>');
  // document.getElementById('DemoChart').removeChild;
  // var ctx = document.getElementById('DemoChart').getContext('2d');

  var my_y_train = [];
  var my_y_model = [];
  var my_y_test = [];
  var my_y_pred = [];

  var dates = []
  for (var i=from; i<len;i++){
    date = new Date(result[0]['prices']['Crude'][0][i]*1000);
    formattedTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    dates.push(formattedTime)
    var tmp = {};
    var tmp1 = {};
    tmp.x = result[0]['prices']['Crude'][0][i]*1000;//formattedTime;
    tmp1.x = result[0]['prices']['Crude'][0][i]*1000;//formattedTime;
    tmp.y = result[0]['result']['y_train'][i];
    my_y_train.push(tmp);
    tmp1.y = result[0]['result']['y_pred'][i-from];
    my_y_model.push(tmp1);
  }

  var newDates = []
  for (var i=len; i<len+60;i++){
    date = new Date(result[0]['prices']['Crude'][0][i]*1000);
    formattedTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    newDates.push(formattedTime);
    var tmp = {};
    var tmp1 = {};
    tmp.x = result[0]['prices']['Crude'][0][i]*1000;//formattedTime;
    tmp1.x = result[0]['prices']['Crude'][0][i]*1000;//formattedTime;
    tmp.y = result[0]['result']['y_test'][i-len];
    my_y_test.push(tmp);
    tmp1.y = result[0]['result']['y_pred'][i-len + 24];
    my_y_pred.push(tmp1);
  }

  console.log(my_y_train);
  console.log(my_y_model);
  console.log(my_y_test);
  console.log(my_y_pred);


  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'scatter',

    // The data for our dataset
    data: {
      // labels: [dates,newDates],
      datasets: [
        // {
        // label: "My First dataset",
        // backgroundColor: 'rgb(255, 99, 132)',
        // borderColor: 'rgb(255, 99, 132)',
        // datasets: [

        {
          label: 'Total Renewable Energy Consumption',
          // xAxisID: "x-axis-1", // bottom axis
          // yAxisID: "y-axis-1", // left axis
          // data: result[0]['result']['y_train'].slice(from,len),
          data: my_y_train,
          showLine: true,
          borderColor: '#f44641',
          fill: false
        },
        {
          label: 'Model Fit',
          // xAxisID: "x-axis-1", // bottom axis
          // yAxisID: "y-axis-1", // left axis
          // data: result[0]['result']['y_pred'].slice(0,24),
          data: my_y_model,
          showLine: true,
          borderColor: '#414ff4',
          fill: false
        },
        {
          label: 'Future Ground Truth Total Renewable Energy Consumption',
          // xAxisID: "x-axis-1", // top axis
          // yAxisID: "y-axis-1", // right axis
          // data: result[0]['result']['y_test'].slice(0,60),
          data: my_y_test,
          showLine: true,
          borderColor: '#f47142',
          fill: false
        },
        {
          label: 'Model Prediction',
          // xAxisID: "x-axis-1", // top axis
          // yAxisID: "y-axis-1", // right axis
          // data: result[0]['result']['y_pred'].slice(24,84),
          data: my_y_pred,
          showLine: true,
          borderColor: '#41a0f4',
          fill: false
        }
        // {
        //   label: 'Gasoline',
        //   data: result[0]['prices']['Gasoline'][1].slice(from,len),
        //   borderColor: '#D6E9C6',
        //   fill: false
        // },
        // {
        //   label: 'Propane',
        //   data: result[0]['prices']['Propane'][1].slice(from,len),
        //   borderColor: '#3498DB',
        //   fill: false
        // }
      ]

        // }]
      },

      // Configuration options go here

      options: {
        // tooltips: {
        //   // userCallback: function(label, index, labels) {
        //   //     return moment(label).format("DD/MM/YY");
        //   //   }
        //     // mode: 'index',
        //     // intersect: false,
        //   },
    scales: {
        xAxes: [{
            ticks: {
                userCallback: function(label, index, labels) {
                    return moment(label).format("DD/MM/YY");
                }
             }
        }]
 }
}





    //   options: {
    //     scales: {
    //         xAxes: [{
    //             position: "bottom",
    //             type: "time", // gives us a date axis
    //             id: "x-axis-1"
    //         }
    //         // , {
    //         //     position: "top",
    //         //     type: "time",
    //         //     id: "x-axis-2"
    //         // }
    //       ],
    //         yAxes: [{
    //             type: "linear",
    //             position: "left",
    //             id: "y-axis-1",
    //         }
    //         // , {
    //         //     type: "linear",
    //         //     position: "right",
    //         //     id: "y-axis-2",
    //         // }
    //       ],
    //     }
    // }







    //   options: {
    //     // elements: {
    //     //   point: { radius: 0 }
    //     // },
    //     scales: {
    //       xAxes: [{
    //         stacked: false
    //       }],
    //       yAxes: [{
    //         stacked: false
    //
    //
    //       }
    //     ]
    //   }
    //
    // }


  //   options: {
  //   tooltips: {
  //     mode: 'index',
  //     intersect: false,
  //   },
  //   hover: {
  //     mode: 'nearest',
  //     intersect: true
  //   },
  //   scales: {
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero:true
  //       }
  //     }]
  //   },
  // }

  });



}





function readConsumptionData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/consumptiondata", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(xhttp.responseText);

      consumptionData.push(myObj)
      console.log(consumptionData);
      allEnergy();
      totalEnergy();
      totalEnergyPie();
      totalEnergyPie2();
    }
  };
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}



function readConsumptionProductionRenewData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/conprorenewdata", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(xhttp.responseText);

      conprorenewData.push(myObj)
      console.log(conprorenewData);
      totalRenewProConEnergy();
    }
  };
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}



function readPredictionData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/result", true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(xhttp.responseText);

      result.push(myObj)
      console.log(result);
      energyPrices();
      predictionData();

    }
  };
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}







Array.prototype.contains = function(v) {
  for(var i = 0; i < this.length; i++) {
    if(this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}



//
// function majorTable() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "/univ_major", true);
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       myObj = JSON.parse(xhttp.responseText);
//       majorTableData.push(myObj)
//       console.log(majorTableData);
//       var majors = [];
//       for (var i = 0; i<myObj.length; i++) {
//         majors.push(myObj[i].MajorFieldsDesc);
//       }
//       majors = majors.unique().sort();
//
//       var radioButtons = document.getElementById('myRadios');
//       var myForm = document.createElement('form');
//       myForm.id = "formID";
//       for (var i = 0; i < majors.length; i++) {
//         var myDiv = document.createElement('div');
//         myDiv.className = "radio";
//         var radioOpt = document.createElement('input');
//         radioOpt.type = "radio";
//         radioOpt.name = "optRadio";
//         radioOpt.value = majors[i];
//         if (i == 0){
//           radioOpt.checked = true;
//         }
//         // radioOpt.id = "optRadio";
//
//         var label = document.createElement('label')
//         // label.htmlFor = "id";
//         label.appendChild(radioOpt);
//         label.appendChild(document.createTextNode(majors[i]));
//
//         // myDiv.appendChild(radioOpt);
//         myDiv.appendChild(label);
//         myForm.appendChild(myDiv);
//         // checkBoxes.appendChild(label);
//         // myOption.value = states[i];//myObj[i][];
//         // myOption.text = states[i];//myObj[i];
//         // myDrop.appendChild(myOption);
//       }
//       radioButtons.appendChild(myForm);
//       btnSubmit();
//       // console.log(JSON.parse(xhttp.responseText));
//     }
//
//   };
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.send();
//
// }
//
//
//
// // function OptionField(){
// //
// //   var major = [];
// //   for ( var i = 1; i<stateTableData.lenght; i++){
// //     major.push(stateTableData[i].)
// //   }
// //
// // }
//
// function getRadioVal(form, name) {
//   var val;
//   // get list of radio buttons with specified name
//   var radios = form.elements[name];
//
//   // loop through list of radio buttons
//   for (var i=0, len=radios.length; i<len; i++) {
//     if ( radios[i].checked ) { // radio checked?
//       val = radios[i].value; // if so, hold its value in val
//       break; // and break out of for loop
//     }
//   }
//   return val; // return value of checked radio or undefined if none checked
// }
//
// function optionChanged(myValue) {
//   stateSelected = myValue;
//
//
// }
//
// function btnSubmit(){
//   var majorSelected = getRadioVal(document.getElementById("formID"),"optRadio");
//   console.log(majorSelected);
//   console.log(stateSelected);
//   var filteredStateData = [];
//   for (var i=0; i<stateTableData[0].length; i++) {
//     if (stateTableData[0][i].state_abbr == stateSelected){
//       filteredStateData.push(stateTableData[0][i]);
//     }
//   }
//   var filteredMajorData = [];
//   for ( var i=0; i<majorTableData[0].length; i++){
//     if (majorTableData[0][i].MajorFieldsDesc == majorSelected) {
//       filteredMajorData.push(majorTableData[0][i]);
//     }
//   }
//
//   var filteredData = []
//   for (var i=0; i<filteredStateData.length; i++){
//     for (var j=0; j<filteredMajorData.length; j++){
//       if (filteredStateData[i].UNITID == filteredMajorData[j].UNITID){
//         var myTuple = [filteredStateData[i],filteredMajorData[j]];
//         filteredData.push(myTuple);
//         break;
//       }
//     }
//   }
//
//   filteredData.sort(function(a,b){
//     return b[0].acceptance_rate - a[0].acceptance_rate;
//   });
//
//   // console.log(filteredData);
//   $(sampleList).empty();
//   var myList = document.getElementById('sampleList');
//   // var labels=[];
//   // var UNITID=[];
//   // var acceptance_rate=[];
//   // var address=[];
//   // var ave_amt_grant_aid=[];
//   // var ave_amt_stu_loan=[];
//   // var city=[];
//   // var in_state_tuition=[];
//   // var lat=[];
//   // var lon=[];
//   var name=[];
//   // var out_of_state_tuition=[];
//   // var state_abbr=[];
//   // var student_faculty_ratio=[];
//   // var total_fin_aid=[];
//   // var univ_index=[];
//   // Second Part
//
//   // var AfricanAmericanMen=[];
//   var AfricanAmericanTotal=[];
//   // var AfricanAmericanWomen=[];
//   // var AmericanIndianAlaskaNativeMen=[];
//   var AmericanIndianAlaskaNativeTotal=[];
//   // var AmericanIndianAlaskaNativeWomen=[];
//   // var AsianMen=[];
//   var AsianTotal=[];
//   // var AsianWomen=[];
//   var GrandTotal=[];
//   // var HispanicMen=[];
//   var HispanicTotal=[];
//   // var HispanicWomen=[];
//   // var MajorFieldsDesc=[];
//   // var MajorFieldsID=[];
//   // var NonresidentAlienMen=[];
//   // var NonresidentAlienTotal=[];
//   // var NonresidentAlienWomen=[];
//   // var PacificIslanderMen=[];
//   var PacificIslanderTotal=[];
//   // var PacificIslanderWomen=[];
//   // var RaceUnknownMen=[];
//   var RaceUnknownTotal=[];
//   // var RaceUnknownWomen=[];
//   var TotalMen=[];
//   var TotalWomen=[];
//   // var TwoOrMoreRacesMen=[];
//   var TwoOrMoreRacesTotal=[];
//   // var TwoOrMoreRacesWomen=[];
//   // var UNITID=[];
//   // var WhiteMen=[];
//   var WhiteTotal=[];
//   // var WhiteWomen=[];
//   // var index=[];
//
//   if (filteredData.length<10) {
//     var numberOfBars = filteredData.length;
//   }else{
//     var numberOfBars = 10;
//   }
//
//   for (var i=0; i<numberOfBars; i++) {
//     var myElem = document.createElement('li');
//     myElem.appendChild(document.createTextNode(filteredData[i][0].name));
//     myList.appendChild(myElem);
//     name.push(filteredData[i][0].name);
//     AfricanAmericanTotal.push(filteredData[i][1].AfricanAmericanTotal);
//     AmericanIndianAlaskaNativeTotal.push(filteredData[i][1].AmericanIndianAlaskaNativeTotal);
//     AsianTotal.push(filteredData[i][1].AsianTotal);
//     GrandTotal.push(filteredData[i][1].GrandTotal);
//     HispanicTotal.push(filteredData[i][1].HispanicTotal);
//     PacificIslanderTotal.push(filteredData[i][1].PacificIslanderTotal);
//     RaceUnknownTotal.push(filteredData[i][1].RaceUnknownTotal);
//     TwoOrMoreRacesTotal.push(filteredData[i][1].TwoOrMoreRacesTotal);
//     TotalMen.push(filteredData[i][1].TotalMen);
//     TotalWomen.push(filteredData[i][1].TotalWomen);
//     WhiteTotal.push(filteredData[i][1].WhiteTotal);
//
//     // console.log(AfricanAmericanTotal);
//
//     TuitionChart(filteredData, numberOfBars);
//
//   }
//   // Here you can use filteredData to plot different charts
//   // chart.js
//   $('#DemoChart').remove();
//   $('iframe.chartjs-hidden-iframe').remove();
//   $('#chartContainer').append('<canvas id="DemoChart"><canvas>');
//   // document.getElementById('DemoChart').removeChild;
//   var ctx = document.getElementById('DemoChart').getContext('2d');
//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'horizontalBar',
//
//     // The data for our dataset
//     data: {
//       labels: name,
//       datasets: [
//         // {
//         // label: "My First dataset",
//         // backgroundColor: 'rgb(255, 99, 132)',
//         // borderColor: 'rgb(255, 99, 132)',
//         // datasets: [
//         {
//           label: 'African American',
//           data: AfricanAmericanTotal ,
//           backgroundColor: '#AED6F1'
//         },
//         {
//           label: 'American-Indian/AlaskaNative',
//           data: AmericanIndianAlaskaNativeTotal,
//           backgroundColor: '#FCF3CF'
//         }, {
//           label: 'Asian',
//           data: AsianTotal,
//           backgroundColor: '#3498DB'
//         },
//         {
//           label: 'Hispanic',
//           data: HispanicTotal ,
//           backgroundColor: '#D6E9C6'
//         },
//         {
//           label: 'Pacific Islander',
//           data: PacificIslanderTotal,
//           backgroundColor: '#FAEBCC'
//         }, {
//           label: 'Race Unknown',
//           data: RaceUnknownTotal,
//           backgroundColor: '#EBCCD1'
//         }, {
//           label: 'Two or More Races',
//           data: TwoOrMoreRacesTotal,
//           backgroundColor: '#B7950B'
//         }, {
//           label: 'White',
//           data: WhiteTotal,
//           backgroundColor: '#C0392B'
//         }]
//
//         // }]
//       },
//
//       // Configuration options go here
//       options: {
//         scales: {
//           xAxes: [{
//             stacked: true
//           }],
//           yAxes: [{
//             stacked: true
//
//
//           }
//         ]
//       }
//     }
//   });
//
// }
//
//
// //
// function TuitionChart(filteredData, numberOfBars) {
//
//   var data;
//
//   var name_array = [];
//   var in_tuition_array = [];
//   var out_tuition_array = [];
//   var grants_array = [];
//   var loans_array = [];
//
//   // Loop through the majors data
//   for (var i = 0; i < numberOfBars; i++) {
//
//     data = filteredData[i][0];
//
//     data.in_state_tuition = +data.in_state_tuition;
//     data.out_of_state_tuition = +data.out_of_state_tuition;
//     data.ave_amt_grant_aid = +data.ave_amt_grant_aid;
//     data.ave_amt_stu_loan = +data.ave_amt_stu_loan;
//
//     name_array.push(data.name);
//     in_tuition_array.push(data.in_state_tuition);
//     out_tuition_array.push(data.out_of_state_tuition);
//     grants_array.push(data.ave_amt_grant_aid);
//     loans_array.push(data.ave_amt_stu_loan);
//
//   }
//
//   var trace1 = {
//     x: name_array,
//     y: in_tuition_array,
//     name: 'Tuition',
//     marker: {
//       // color: 'rgb(55, 83, 109)',
//       color: 'rgb(106,90,205)',
//       opacity: 0.7
//     },
//     type: 'bar',
//     text: in_tuition_array,
//     textposition: 'auto',
//     hoverinfo: 'none'
//   };
//
//   var trace2 = {
//     // x: [0, 1, 2, 3, 4, 5],
//     x: name_array,
//     y: grants_array,
//     name: 'Grants',
//     marker: {color: 'rgb(50,205,50)'},
//     type: 'scatter'
//   };
//
//   var trace3 = {
//     x: name_array,
//     y: loans_array,
//     name: 'Loans',
//     marker: {color: 'rgb(255,165,0)'},
//     type: 'scatter'
//   };
//
//   var data = [trace1, trace2, trace3];
//
//   var layout = {
//     title: 'Tuition and Financial Aid Comparison by Universities',
//     xaxis: {
//       title: 'US Universities',
//       titlefont: {
//         family: 'Helvetica',
//         size: 18,
//         color: '#000000'
//       },
//       tickfont: {
//         family: 'Old Standard TT, serif',
//         size: 9,
//         color: 'black'
//       },
//     },
//     yaxis: {
//       title: 'Average Tuition vs. Grants and Loans (USD)',
//       titlefont: {
//         family: 'Helvetica',
//         size: 18,
//         color: '#000000'
//       }
//     }
//   };
//
//   Plotly.newPlot('tuition_chart', data, layout);
//
// }
//
// var color = "lightgreen"
// var url = "/univ_map";
//
// // Import Data
// d3.json(url, function (err, universityData) {
//   if (err) throw err;
//
//   //Parse Data/Cast as numbers
//   universityData.forEach(function (univData) {
//     univData.name = univData.name;
//     univData.acceptance_rate = +univData.acceptance_rate;
//     univData.student_faculty_ratio = +univData.student_faculty_ratio;
//     univData.in_state_tuition = +univData.in_state_tuition;
//     univData.out_of_state_tuition = +univData.out_of_state_tuition;
//   });
//
//   var margin = {top: 50, right: 20, bottom: 70, left: 90},
//   width = 960 - margin.left - margin.right,
//   height = 500 - margin.top - margin.bottom;
//
//   //Create scale functions
//   // var x = d3.scaleLinear()
//   // .domain(d3.extent(universityData, d => d.acceptance_rate))
//   // .range([0, width]);
//
//   values =  [];
//   for (var i = 0; i< universityData.length; i++){
//     data = universityData[i];
//     value = +data.acceptance_rate;
//     values.push(value);
//   }
//   console.log(values);
//
//   var max = d3.max(values);
//   var min = d3.min(values);
//   var x = d3.scaleLinear()
//   .domain([min, max])
//   .range([0, width]);
//
//   console.log("This is x(0):",x(0));
//
//   var formatCount = d3.format(",.0f");
//
//   // Generate a histogram using ten uniformly spaced bins
//   var data = d3.histogram()
//   .thresholds(10)
//   (values);
//   console.log('This is data:',data);
//
//   var y = d3.scaleLinear()
//   .domain([0, d3.max(data, d => d.length)])
//   .range([height, 0]);
//
//   console.log('y(0):',y(1),data[0]);
//   var xAxis = d3.axisBottom(x);
//   // .scale(x)
//   // .orient("bottom");
//
//   var svg = d3.select("body").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//   var bar = svg.selectAll(".bar")
//   .data(data)
//   .enter().append("g")
//   .attr("class", "bar")
//   .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
//
// // console.log('width:',x(data[0].x0), x(data[0].x1),x(0));
//
//   bar.append("rect")
//   .attr("x", 1)
//   .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1; })
//   // (x(data[1].x1) - x(data[1].x0)) -1)
//   .attr("height", function(d) { return height - y(d.length); })
//   .attr("fill", color);
//
//   bar.append("text")
//   .attr("dy", ".75em")
//   .attr("y", -12)
//   .attr("x", function(d) { return (x(d.x1) - x(d.x0))/2; })
//   // (x(data[0].x1) - x(data[0].x0)) / 2)
//   .attr("text-anchor", "middle")
//   .text(function(d) { return formatCount(d.length); });
//
//   svg.append("g")
//   .attr("class", "x axis")
//   .attr("transform", "translate(0," + height + ")")
//   .call(xAxis);
//
//   svg.append("text")
//         .attr("x", (width / 2))
//         .attr("y", 0 - (margin.top / 2))
//         .attr("text-anchor", "middle")
//         .style("font-size", "18px")
//         .style("font-type", "Helvetica")
//         .attr("fill", "green")
//         .text("Number of Universites vs Acceptance Rate");
//
//     svg.append("text")
//     .attr("transform",`translate(${width / 2}, ${height + margin.top + 2})`)
//     .attr("text-anchor", "middle")
//     .attr("font-size", "16px")
//     .attr("font-type", "Helvetica")
//     .attr("fill", "green")
//     .text("Acceptance Rate");
//
//     svg.append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 80 - margin.left)
//     .attr("x", 0 - (height / 2))
//     .attr("dy", "1em")
//     .attr("font-size", "16px")
//     .attr("font-type", "Helvetica")
//     .attr("fill", "green")
//     // .classed("axis-text", true)
//     .text("Number of Universities");
// });

readConsumptionData();
readConsumptionProductionRenewData();
readPredictionData();
