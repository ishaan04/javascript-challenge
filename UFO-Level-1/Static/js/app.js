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

//SETUP BUTTON, retrieve inputed date and filter the table based on it
var button=d3.select("#filter-btn");
var search=d3.select("#datetime")
function filterdata()
    {
      console.log("filter button clicked")
      var nextDate = search.property("value");
      console.log(nextDate);
      var tabledatanew=tableData.filter(t=>t.datetime==nextDate);
      let tablebody = d3.select("tbody");
      tablebody.html("");
      tabledatanew.forEach(function(d1) {
        console.log(d1);
        ///loop through each row and append table
        var row = tablebody.append("tr");
          Object.entries(d1).forEach(function([key, value]) {

                  var cell = row.append("td");
                  cell.text(value);
                });
              });
    }
button.on("click",filterdata);