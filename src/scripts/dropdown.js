function toggleDropdown(selector) {
	// let element = selector
	if (selector.style.display === "none") {
		selector.style.display = "block";
	} else {
		selector.style.display = "none";
	}
}

const button = document.getElementById("menu-button");
const dropdownSelector = document.querySelector(".dropdown-div");

button.addEventListener("click", function () {
	toggleDropdown(dropdownSelector);
});

