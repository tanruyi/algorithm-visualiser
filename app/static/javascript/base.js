/** @format */

"use strict";

window.addEventListener("load", function () {
	/* ===========================================
    DOM ELEMENTS
    =========================================== */

	// nav buttons
	const algorithmsNavButton = document.getElementById("nav-item-algorithms");
	const comparisonNavButton = document.getElementById("nav-item-comparison");
	const changelogNavButton = document.getElementById("nav-item-changelog");

	// nav dropdowns
	const algorithmsNavDropdown = document.getElementById("nav-dropdown-algorithms");
	const comparisonNavDropdown = document.getElementById("nav-dropdown-comparison");
	const changelogNavDropdown = document.getElementById("nav-dropdown-changelog");

	// nav button icons
	const algorithmsIcon = document.getElementById("nav-item-algorithms-icon");
	const comparisonIcon = document.getElementById("nav-item-comparison-icon");
	const changelogIcon = document.getElementById("nav-item-changelog-icon");

	let navDropdownControls = {
		algorithm: false,
		comparison: false,
		changelog: false,
	};

	/* ===========================================
    FUNCTIONS
    =========================================== */

	function toggleNavDropdowns(toggles) {
		let currentNavButton;
		let currentNavDropdown;
		let currentIcon;

		// iterate through the object and set the current DOM elements to update
		for (const [key, value] of Object.entries(toggles)) {
			if (key === "algorithm") {
				currentNavButton = algorithmsNavButton;
				currentNavDropdown = algorithmsNavDropdown;
				currentIcon = algorithmsIcon;
			} else if (key === "comparison") {
				currentNavButton = comparisonNavButton;
				currentNavDropdown = comparisonNavDropdown;
				currentIcon = comparisonIcon;
			} else {
				currentNavButton = changelogNavButton;
				currentNavDropdown = changelogNavDropdown;
				currentIcon = changelogIcon;
			}

			// if value is true, display dropdown
			// otherwise, hide dropdown
			if (value) {
				currentNavButton.style.color = "var(--hot-pink)";
				currentNavDropdown.style.display = currentNavDropdown === algorithmsNavDropdown ? "flex" : "block";
				currentIcon.classList.add("cs-navbar-icon-rotate");
			} else {
				currentNavButton.style.color = "var(--black)";
				currentNavDropdown.style.display = "none";
				currentIcon.classList.remove("cs-navbar-icon-rotate");
			}
		}
	}

	/* ===========================================
    EVENT LISTENERS
    =========================================== */
	algorithmsNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["algorithm"] === true) {
			navDropdownControls["algorithm"] = false;
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls["algorithm"] = true;
			toggleNavDropdowns(navDropdownControls);
		}
	});

	comparisonNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["comparison"] === true) {
			navDropdownControls["comparison"] = false;
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls["comparison"] = true;
			toggleNavDropdowns(navDropdownControls);
		}
	});

	changelogNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["changelog"] === true) {
			navDropdownControls["changelog"] = false;
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls["changelog"] = true;
			toggleNavDropdowns(navDropdownControls);
		}
	});
});
