# Automation & Cypress Fundamentals Mini-Project

## Project Overview
This repository contains a completed automation suite developed for the Test Automation Practice demo website to satisfy the core requirements of the QA Automation fundamentals assignment.

## What I Learned
* **Test Architecture:** Structuring clean, maintainable automation suites using standard lifecycle hooks like `describe`, `it`, and `beforeEach` to manage test setup efficiently.
* **Form Automation:** Manipulating text inputs by targeting element selectors (`#name`, `#email`, `#phone`, `#textarea`) to accurately programmatically fill out complex registration forms.
* **Dropdown Selection:** Targeting select elements (`#country`) and interacting with options by visible text to choose specific geographic data dynamically.
* **State Management:** Using `.check()` and `.uncheck()` commands to change the active states of HTML radio buttons and checkboxes dynamically.
* **Advanced File Uploads:** Uploading files programmatically by feeding file metadata buffers directly into input elements using built-in automation utilities.
* **Viewport Scrolling:** Moving to low or obscured viewport fields via commands like `scrollIntoView()` to ensure elements are active and reachable before clicking them.
* **Assertion Testing:** Verifying application states using explicit validation criteria (`have.value`, `be.checked`, `not.be.checked`, `be.visible`) to confidently guarantee that fields change as expected.
* **Environment Configuration:** Troubleshooting environment deployment constraints, fixing binary compression corruption issues, and manually generating nested file paths.
* **Technical Resilience:** Developing the problem-solving mindset needed to analyze terminal error logs, trace download failures, and apply alternative solutions under system limits.
