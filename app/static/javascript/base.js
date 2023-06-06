/** @format */

"use strict";

window.addEventListener("load", function () {
	/* ===========================================
    STATES
    =========================================== */

	let navDropdownControls = {
		algorithm: false,
		comparison: false,
		changelog: false,
	};

	let mobileNavItemsDisplay = false;

	/* ===========================================
    DOM ELEMENTS
    =========================================== */

	const mobileNavMenuIcon = document.getElementById("mobile-navbar-menu-icon");
	const mobileNavItems = document.getElementById("nav-items-mobile");
	const mobileBarsIcon = document.getElementById("mobile-navbar-menu-icon-bars");
	const mobileUpIcon = document.getElementById("mobile-navbar-menu-icon-up");

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

	/* ===========================================
    FUNCTIONS
    =========================================== */

	function toggleNavDropdowns(controls) {
		let currentNavButton;
		let currentNavDropdown;
		let currentIcon;

		// iterate through the object and set the current DOM elements to update
		for (const [key, value] of Object.entries(controls)) {
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
	mobileNavMenuIcon.addEventListener("click", function () {
		mobileNavItemsDisplay = !mobileNavItemsDisplay;

		if (mobileNavItemsDisplay) {
			mobileNavItems.style.display = "block";
			mobileBarsIcon.style.display = "none";
			mobileUpIcon.style.display = "inline";
		} else {
			mobileNavItems.style.display = "none";
			mobileBarsIcon.style.display = "inline";
			mobileUpIcon.style.display = "none";
		}
	});

	algorithmsNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["algorithm"] === true) {
			navDropdownControls = {
				algorithm: false,
				comparison: false,
				changelog: false,
			};
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls = {
				algorithm: true,
				comparison: false,
				changelog: false,
			};
			toggleNavDropdowns(navDropdownControls);
		}
	});

	comparisonNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["comparison"] === true) {
			navDropdownControls = {
				algorithm: false,
				comparison: false,
				changelog: false,
			};
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls = {
				algorithm: false,
				comparison: true,
				changelog: false,
			};
			toggleNavDropdowns(navDropdownControls);
		}
	});

	changelogNavButton.addEventListener("click", function (e) {
		if (navDropdownControls["changelog"] === true) {
			navDropdownControls = {
				algorithm: false,
				comparison: false,
				changelog: false,
			};
			toggleNavDropdowns(navDropdownControls);
		} else {
			navDropdownControls = {
				algorithm: false,
				comparison: false,
				changelog: true,
			};
			toggleNavDropdowns(navDropdownControls);
		}
	});
});
