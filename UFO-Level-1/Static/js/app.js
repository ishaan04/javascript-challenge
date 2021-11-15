// from data.js
var tableData = data;

// YOUR CODE HERE!
//data.js and index.html predefined, style.css added  different color


///SETUP REFERENCE TO THE TABLE DATA NODES
var datatable=d3.select("tbody")

//console.log(data)
//table setup
var row=datatable.append("tr")
tableData.forEach(function(d) {
  var row = datatable.append("tr");

    Object.entries(d).forEach(function([key, value]) 
        {var celldata = row.append("td");
            //console.log(data)
            celldata.text(value);
          });
        });

///SETUP FILTERS/// 

//SETUP BUTTON, retrieve inputed date and filter the table based on it
var button=d3.select("#filter-btn"); //linked with the index.html
var search=d3.select("#datetime") //linked with index.html

//Setup the filtering function below
function filterdata()
    {
      console.log("user clicked button") //from class activity
      var nextDate = search.property("value");
      console.log(nextDate);
      
      var tabledatanew=tableData.filter(t=>t.datetime==nextDate); //scan the table
      let tablebody = d3.select("tbody"); //linked with html
      tablebody.html("");
      
      tabledatanew.forEach(function(d1) {
        console.log(d1);
        ///loop through each row and append table
        var row = tablebody.append("tr");
          Object.entries(d1).forEach(function([key, value]) 
          {var cell = row.append("td");
                  cell.text(value);
                });
              });
    }

// Activite the button
button.on("click",filterdata);