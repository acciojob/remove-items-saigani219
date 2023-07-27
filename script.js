//your JS code here. If required.
 let dropdown = document.getElementById("colorSelect");

let selection = document.querySelector("form > input");
selection.addEventListener("click", () => {
	let obj = document.getElementById("colorSelect");
	let selectedIndex = obj.selectedIndex;
	
      // Remove the selected option from the dropdown list
      obj.remove(selectedIndex);
});
