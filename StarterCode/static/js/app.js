d3.json("samples.json").then(function(data) {
    // console.log(data);
  var sample=data.samples
   
var array=sample.filter(obj=>obj.id==sample)
result=sample[0]
console.log(result) 

o_ids=result.otu_ids
var y=o_ids.slice(0,10).map(otu_y=>`otu ${otu_y}`).reverse()

o_labels=result.otu_labels
console.log(o_ids)
// x=x.sort()
// y=y.sort()
// o_labels=o_labels.sort()

var trace = {
  x: o_ids.slice(0,10).sort().reverse(),
  y: y.sort(),
  text: o_labels.slice(0,10).reverse(),
  type: "bar",
  orientation:"h"
};
var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "Top 10 Bacteria",
  // xaxis: { title: "City" },
  // yaxis: { title: "2017 Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar", data, layout);

  });
  
  // Promise Pending
  // var cities = d3.json(url);
  // console.log("cities: ", cities);
  // @TODO: Complete the Following Steps

// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the cities with a population increase greater than 15,000.

// function filterCities(city) {
//   return parseInt(city.Increase_from_2016) > 15000;
// }

// 2. Use filter() to pass the function as its argument
// var filteredCities = top15Cities.filter(filterCities);

//  Check to make sure your filtered your cities.
// console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities.
// var cities = filteredCities.map(city => city.City);

//  Check your filtered cities
// console.log(cities);

// 4. Use the map method with the arrow function to return all the filtered cities population.
// var population = filteredCities.map(city => city.population);

//  Check the populations of your filtered cities
// console.log(population);


// 5. Create your trace.

// 6. Create the data array for our plot
