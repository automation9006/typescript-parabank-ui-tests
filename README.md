Scenario
You've recently joined a team as the sole Automation Engineer.
They are in need of some automated tests for APIs and their front end. Your task requires you to set up
the initial framework and a single test for APIs and UI.

Minimum Requirements
● Playwright Framework
● A readme to get the tests running
● Scripts to run tests in the package.json
● A directory structure that's scalable
● Code re-usability

Task
Set up the repo with the above in and write the code that executes the following tests

● UI:
○ Given I visit Parabank
○ When I try to login with an random username and password
○ Then I should get the error: “The username and password could not be verified"

● Parabank front end link
○ https://parabank.parasoft.com/parabank/index.htm


Things to think about/Bonus Points:
● Fixtures
● Directory structure
● Storing elements
● Scaling the repo
● Reporting
● Pipelines

############################################################################################



# Playwright Project using JavaScript


## Clone the repository from github repo

```shell
git clone  <git url>
``````

### run tests from scripts block with below command line

-- command to run regression tests
`npm run test:regression`
-- command to run specific test on qa environment
`npm run test:qa`
-- command to run sanity tests on uat environment
`npm run test:uat`
-- command to run sanity tests on stg environment
`npm run test:stg`
-- command to run sanity tests on prod environment
`npm run test:prod`
-- command to run tests by tags
`npm run tags:sanity`
-- command to run tests chrome
`npm run test:chrome`
-- command to run tests firefox
`npm run test:chrome`
-- command to run tests webkit
`npm run test:chrome`
-- command to generate report
`npm run allureGenReport`
-- command to publish report
`npm run allurePublishReport`

### Run a single test file
```shell
ENV=qa npx playwright test homePageValidations.spec.ts
```

### **Run tests in Headed mode**
```shell
ENV=qa npx playwright test homePageValidations.spec.ts --headed
```

### **Run the test in a specific Project (Browser)**
```shell
ENV=qa npx playwright test homePageValidations.spec.ts --project=firefox
```

### **Run the test with the Title**
```shell
ENV=qa npx playwright test -g "Your Test Title"
```

### **Disable Parallel Execution**
```shell
ENV=qa npx playwright test --workers=1
```

## Debug the Playwright Test
To debug the tests, open the terminal and type the following commands -

### **Debug all the tests**
```shell
ENV=qa npx playwright test --debug
```

### **Debug a single test file**
```shell
ENV=qa npx playwright test homePageValidations.spec.ts --debug
```

## run tests headed with specific browser
```shell

ENV=qa npx playwright test homePageValidations.spec.ts --project=chrome --workers=1

add other browser values under project like firefox,edge 
```

## run tests by tags
```shell
ENV=qa npx playwright test tests/login.spec.ts --project=chrome --grep @sanity
```

## To generate allure reports,please run the below command if you do not see the dev dependencies.

npm i -D @playwright/test allure-playwright
npm install -D allure-commandline

## Run this command and this will generate allure reports:

npx allure generate allure-results --clean

## Run this command to open the allure reports

npx allure open allure-report

* the browser will open with allure reports and the html files will be generated under allure-report folder.

