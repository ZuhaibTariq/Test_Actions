# PenguinIN Automation

## penguinin-e2e-cypress-tests

## Installations

- Clone repo
- Open New Terminal
- Go to project directory

- Execute following command to install project dependencies
-     npm install

###Commands to run testcases

- Execute following command to run testcase manually from cypress test runner

      npx cypress open

####

- you can click any test case on dashboard it will start executing

###

- Execute following command to run all test cases headless

      npm cypress run

###

- Execute following command to run all test cases headed in browser

      cypress run --headed --browser chrome

###

- Execute following command to run any specific test case headed in specified browser

      cypress run --headed --browser chrome --spec <spec_file_name>

###

- Execute following command to run any specific test case headless in specified browser

      cypress run --headless --browser chrome --spec <spec_file_name>

###
