/** @format */

"use strict";

window.addEventListener("load", function () {
	/* ===========================================
    DOM ELEMENTS
    =========================================== */

	// nav buttons
	const algorithmsNavItem = document.getElementById("nav-item-algorithms");
	const comparisonNavItem = document.getElementById("nav-item-comparison");
	const changelogNavItem = document.getElementById("nav-item-changelog");

	// nav dropdowns
	const navDropdownAlgorithms = document.getElementById("nav-dropdown-algorithms");
	const navDropdownComparison = document.getElementById("nav-dropdown-comparison");
	const navDropdownChangelog = document.getElementById("nav-dropdown-changelog");

	// nav button icons
	const algorithmsIcon = document.getElementById("nav-item-algorithms-icon");
	const comparisonIcon = document.getElementById("nav-item-comparison-icon");
	const changelogIcon = document.getElementById("nav-item-changelog-icon");

	let activeNavButton = null;

	/* ===========================================
    FUNCTIONS
    =========================================== */
	function toggleAlgorithmsDropdown(toggle) {
		if (toggle) {
			algorithmsNavItem.style.color = "var(--hot-pink)";
			navDropdownAlgorithms.style.display = "flex";
			algorithmsIcon.classList.add("cs-navbar-icon-rotate");
		} else {
			algorithmsNavItem.style.color = "var(--black)";
			navDropdownAlgorithms.style.display = "none";
			algorithmsIcon.classList.remove("cs-navbar-icon-rotate");
		}
	}

	function toggleComparisonDropdown(toggle) {
		if (toggle) {
			comparisonNavItem.style.color = "var(--hot-pink)";
			navDropdownComparison.style.display = "flex";
			comparisonIcon.classList.add("cs-navbar-icon-rotate");
		} else {
			comparisonNavItem.style.color = "var(--black)";
			navDropdownComparison.style.display = "none";
			comparisonIcon.classList.remove("cs-navbar-icon-rotate");
		}
	}

	function toggleChangelogDropdown(toggle) {
		if (toggle) {
			changelogNavItem.style.color = "var(--hot-pink)";
			navDropdownChangelog.style.display = "block";
			changelogIcon.classList.add("cs-navbar-icon-rotate");
		} else {
			changelogNavItem.style.color = "var(--black)";
			navDropdownChangelog.style.display = "none";
			changelogIcon.classList.remove("cs-navbar-icon-rotate");
		}
	}

	/* ===========================================
    EVENT LISTENERS
    =========================================== */
	algorithmsNavItem.addEventListener("click", function (e) {
		if (activeNavButton == "algorithm") {
			activeNavButton = null;
			toggleAlgorithmsDropdown(false);
			toggleComparisonDropdown(false);
			toggleChangelogDropdown(false);
		} else {
			activeNavButton = "algorithm";
			toggleAlgorithmsDropdown(true);
			toggleComparisonDropdown(false);
			toggleChangelogDropdown(false);
		}
	});

	comparisonNavItem.addEventListener("click", function (e) {
		if (activeNavButton == "comparison") {
			activeNavButton = null;
			toggleAlgorithmsDropdown(false);
			toggleComparisonDropdown(false);
			toggleChangelogDropdown(false);
		} else {
			activeNavButton = "comparison";
			toggleComparisonDropdown(true);
			toggleAlgorithmsDropdown(false);
			toggleChangelogDropdown(false);
		}
	});

	changelogNavItem.addEventListener("click", function (e) {
		if (activeNavButton == "changelog") {
			activeNavButton = null;
			toggleAlgorithmsDropdown(false);
			toggleComparisonDropdown(false);
			toggleChangelogDropdown(false);
		} else {
			activeNavButton = "changelog";
			toggleChangelogDropdown(true);
			toggleAlgorithmsDropdown(false);
			toggleComparisonDropdown(false);
		}
	});
});
