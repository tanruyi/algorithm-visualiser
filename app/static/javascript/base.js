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
	const navDropdownComparison = document.getElementById("nav-dropdown-comparison");

	const algorithmsIcon = document.getElementById("nav-item-algorithms-icon");
	const comparisonIcon = document.getElementById("nav-item-comparison-icon");

	/* ===========================================
    FUNCTIONS
    =========================================== */
	function toggleAlgorithmsDropdown() {
		if (navDropdownAlgorithms.style.display === "none") {
			algorithmsNavItem.style.color = "var(--hot-pink)";
			navDropdownAlgorithms.style.display = "flex";
			algorithmsIcon.classList.add("cs-navbar-icon-rotate");
		} else {
			algorithmsNavItem.style.color = "var(--black)";
			navDropdownAlgorithms.style.display = "none";
			algorithmsIcon.classList.remove("cs-navbar-icon-rotate");
		}
	}

	function toggleComparisonDropdown() {
		if (navDropdownComparison.style.display === "none") {
			comparisonNavItem.style.color = "var(--hot-pink)";
			navDropdownComparison.style.display = "flex";
			comparisonIcon.classList.add("cs-navbar-icon-rotate");
		} else {
			comparisonNavItem.style.color = "var(--black)";
			navDropdownComparison.style.display = "none";
			comparisonIcon.classList.remove("cs-navbar-icon-rotate");
		}
	}

	/* ===========================================
    EVENT LISTENERS
    =========================================== */
	algorithmsNavItem.addEventListener("click", function () {
		toggleAlgorithmsDropdown();
	});

	comparisonNavItem.addEventListener("click", function () {
		toggleComparisonDropdown();
	});
});
