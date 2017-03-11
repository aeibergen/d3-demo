var container = d3.select("body")
//in d3 you don't need the carots, just the name
	.append("svg")
	.datum(500) //mathematical meaning NOT CARTOGRAPHY, just means a single piece of data
	.attr("width", function(d){
		return d+"px";
	})
	.attr("height", "500px")
	.attr("class", "container");
	//no semicolon on above lines because that would end the statement
	//basically, you could have this on the same line, but we are spacing it out to create blocks

//new code block (only create one operand per block)

	var x = d3.scaleLinear() //create a new linear scale
		.domain([0, 40]) //input min and max
		.range([500, 0]); //output min and max

console.log(x);

d3.json("data/MegaCities.geojson", function(data){
	var textElements = container.selectAll(".textElement")
	.data(data.features)
	.enter()
	.append("text")
	.attr("class", "textElement")
	.attr("x", 0)
	.attr("y", function(d, i){
		return x(d.properties.Pop_2015);
	})
	.text(function(d){
		return d.properties.City;
	});
})