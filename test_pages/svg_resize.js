const svg_graphic = document.getElementById("svg_graphic");
const polygon_body = document.getElementsByClassName("polygon-body");
const svg_viewbox = document.getElementById("svg_viewbox");
const viewbox_text = document.getElementById("viewbox_text");
const point_array = document.getElementById("point_array");
var svg_new_viewbox;
var viewbox_width = 500;
var current_width;
var polygon_ratio_array = new Array(1,1,.3,1,.35,1,.99,1,1,1,1,1,0.99,1,0.01,1,0,1,0,1);
/*ratio as percentages for the array is 1,0 30,0  35,6   99,6   100,7  100,99  99,100  1,100 0,99  0,1*/
/*var new_polygon_points = "5,0 150,0 175,30 395,30 400,35 400,594 395,600 5,600 0,594 0,5";*/
var new_polygon_points = "";

window.onresize = function(){
	window.addEventListener("resize", graphicResize);

}

function graphicResize(){
	/*Setup the new svg viewbox*/
	new_polygon_points = "";
	current_width = window.innerWidth;
	var new_width = Math.round(current_width * 0.9);
	var new_height = Math.round(new_width * 1.83);
	var body_width = new_width + "px";
	svg_new_viewbox = "0 0 " + new_width + " " + new_height;
	
	/*Add new points to a string using the polygon points percentages*/
	for (let i = 0; i < polygon_ratio_array.length; i++) {
		var temp_num = Math.round(polygon_ratio_array[i] * new_width);
		if (i%2 == 0){
			new_polygon_points += temp_num +",";
		}
		else if (i >= polygon_ratio_array.length){
			new_polygon_points += temp_num;
		}
		else {
			new_polygon_points += temp_num + " ";
		}
	}
	
	/* change width of the polygon-body of text*/
	for (let i = 0; i < polygon_body.length; i++) {
			polygon_body[i].style.width = body_width;
	}
	
	/*Set attributes for HTML elements*/
	/*svg_viewbox.setAttribute("viewBox", svg_new_viewbox);*/
	
	svg_graphic.setAttribute("points", new_polygon_points);
	svg_graphic.setAttribute("style", "fill:pink;");
	
	
	/*The new temp code
	svg_graphic.setAttribute("points", new_polygon_points);
	svg_graphic.setAttribute("style", "fill:pink;");*/
	
	viewbox_text.textContent = svg_new_viewbox;
	point_array.textContent = new_polygon_points;
	console.log("resize ran");
	
	
}


