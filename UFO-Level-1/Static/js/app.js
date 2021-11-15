// from data.js
var tableData = data;

// YOUR CODE HERE!

//Setup reference to the table data nodes
var datatable=d3.select("tbody")

//console.log(data)

var row=datatable.append("tr")
tableData.forEach(function(d) {
  var row = datatable.append("tr");

    Object.entries(d).forEach(function([key, value]) {
            var celldata = row.append("td");
            //console.log(data)
            celldata.text(value);
          });
        });

///SETUP FILTERS/// 

//SETUP BUTTON
var button=d3.select("#filter-btn");
var search=d3.select("#datetime")
function filterFunction()
    {
      console.log("filter button clicked")
      var nextDate = search.property("value");
      console.log(nextDate);
      var newtableData=tableData.filter(t=>t.datetime==nextDate);
      let tablebody = d3.select("tbody");
      tablebody.html("");
      newtableData.forEach(function(d1) {
        console.log(d1);
        
        var row = tablebody.append("tr");
          Object.entries(d1).forEach(function([key, value]) {

                  var cell = row.append("td");
                  cell.text(value);
                });
              });
    }
button.on("click",filterFunction);