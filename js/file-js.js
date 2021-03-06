var timer = null;
var inc = 0;
function playFooter() {
	var footer = document.querySelectorAll("div.bg-run")[0];
	var text = footer.querySelectorAll("div.member-list-run")[0];
	
	timer = setInterval(function() {
		inc -= 1;			
		if (inc + text.offsetWidth < 0)
			inc = footer.offsetWidth;
			
		text.style.left = inc + "px";
	}, 20);
}

function stopFooter() {
	if (timer != null)
		clearInterval(timer);
}
function checkInput(obj) {
	obj.style.border = "none";
	if (obj.value == "") {
		obj.style.border = "2px solid red";
		setTimeout(function(){
			obj.style.border = "";
		}, 2000);
		return true;
	}	
	return false;
}
function submitItem() {
	var content = document.getElementById("contentId");
	var date = document.getElementById("dateId");
	var number = document.getElementById("numberId");
	var member = document.getElementById("memberId");
	
	if (checkInput(content) || checkInput(date) || checkInput(number) || checkInput(member))
		return;
	content.value = "";
	date.value = "";
}