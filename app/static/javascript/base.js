/** @format */

"use strict";

window.addEventListener("load", function () {
	/* ===========================================
    DOM ELEMENTS
    =========================================== */

	const algorithmsNavItem = document.getElementById("nav-item-algorithms");
	const comparisonNavItem = document.getElementById("nav-item-comparison");
	const changelogNavItem = document.getElementById("nav-item-changelog");
	const navDropdownAlgorithms = document.getElementById("nav-dropdown-algorithms");

	/* ===========================================
    FUNCTIONS
    =========================================== */
	function toggleAlgorithmsDropdown() {
		console.log("hi");
		if (navDropdownAlgorithms.style.display === "none") {
			navDropdownAlgorithms.style.display = "flex";
		} else {
			navDropdownAlgorithms.style.display = "none";
		}
	}

	/* ===========================================
    EVENT LISTENERS
    =========================================== */
	algorithmsNavItem.addEventListener("click", function () {
		toggleAlgorithmsDropdown();
	});
});
