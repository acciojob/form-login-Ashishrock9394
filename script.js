const form = document.getElementById("form1");

function getFormvalue(){
	let fname = form["fname"].value;
	let lname = form["lname"].value;
    alert(fname + " " + lname);
}