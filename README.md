# Automation & Cypress Fundamentals Mini-Project

## Project Overview
This repository contains a completed automation suite developed for the Test Automation Practice demo website to satisfy the core requirements of the QA Automation fundamentals assignment.

## What I Learned
* **Test Architecture:** Structuring cleaner test suites using standard Mocha/Jasmine syntax hooks (`describe`, `it`, and `beforeEach`).
* **UI Interactions:** Automating diverse user actions including form fields, dropdown pickers, radios, dynamic file uploads, and specific viewport scrolling actions.
* **Functional Assertions:** Applying multiple explicit validation states (`have.value`, `be.checked`, `not.be.checked`, `be.visible`) to ensure data accuracy.
* **Environment Configuration:** Troubleshooting development environment issues, dealing with network download limits, and structuring automation file trees manually.

## How to Run the Project
1. Clone this repository.
2. Install dependencies by running:
   ```bash
   npm install
   ```
3. Execute the tests using the command line:
   ```bash
   npx cypress run --spec "cypress/e2e/mini_project.cy.js"
   ```
