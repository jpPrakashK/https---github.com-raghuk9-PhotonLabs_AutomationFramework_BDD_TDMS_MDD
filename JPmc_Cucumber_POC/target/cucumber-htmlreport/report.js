$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JPMC_Demo.feature");
formatter.feature({
  "id": "cucumberpoc",
  "tags": [
    {
      "name": "@JPMC_Demo",
      "line": 1
    }
  ],
  "description": "",
  "name": "CucumberPOC",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 298240000,
  "status": "passed"
});
formatter.scenario({
  "id": "cucumberpoc;jpmc",
  "tags": [
    {
      "name": "@JPMC_HomeScreen_Scenario",
      "line": 7
    }
  ],
  "description": "",
  "name": "JPMC",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario",
  "comments": [
    {
      "value": "#________________________________________________________________________________________________",
      "line": 4
    }
  ]
});
formatter.step({
  "name": "Customer launch the Browser",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "Customer validate JPMC home screen explore products objects",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "Customer validate JPMC home screen images",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "Customer validate JPMC home screen linkTexts",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "Customer Login into the chase dot com",
  "keyword": "Then ",
  "line": 18,
  "rows": [
    {
      "cells": [
        "InputFileName",
        "SheetName",
        "RowId"
      ],
      "line": 19
    },
    {
      "cells": [
        "JPMC_Input",
        "Login",
        "User3"
      ],
      "line": 20
    }
  ]
});
formatter.step({
  "name": "Customer navigate back",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "Customer Close the Browser",
  "keyword": "Given ",
  "line": 24
});
formatter.match({
  "location": "CommonStep.Customer_launch_the_Browser()"
});
formatter.result({
  "duration": 27429791000,
  "status": "passed"
});
formatter.match({
  "location": "HomeScreenStep.Customer_validate_JPMC_home_screen_explore_products_objects()"
});
formatter.result({
  "duration": 15273179000,
  "status": "passed"
});
formatter.match({
  "location": "HomeScreenStep.Customer_validate_JPMC_home_screen_images()"
});
formatter.result({
  "duration": 2003988000,
  "status": "passed"
});
formatter.match({
  "location": "HomeScreenStep.Customer_validate_JPMC_home_screen_linkTexts()"
});
formatter.result({
  "duration": 16775173000,
  "status": "passed"
});
formatter.match({
  "location": "HomeScreenStep.Customer_Login_into_the_chase_dot_com(DataTable)"
});
formatter.result({
  "duration": 7901158000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_navigate_back()"
});
formatter.result({
  "duration": 7446783000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_Close_the_Browser()"
});
formatter.result({
  "duration": 698041000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 5187000,
  "status": "passed"
});
formatter.scenario({
  "id": "cucumberpoc;jpmc",
  "tags": [
    {
      "name": "@JPMC_HomeScreen_Search",
      "line": 29
    }
  ],
  "description": "",
  "name": "JPMC",
  "keyword": "Scenario",
  "line": 30,
  "type": "scenario",
  "comments": [
    {
      "value": "#________________________________________________________________________________________________",
      "line": 26
    }
  ]
});
formatter.step({
  "name": "Customer launch the Browser",
  "keyword": "Given ",
  "line": 32
});
formatter.step({
  "name": "Customer search data in chase dot com",
  "keyword": "Then ",
  "line": 34,
  "rows": [
    {
      "cells": [
        "InputFileName",
        "SheetName",
        "RowId"
      ],
      "line": 35
    },
    {
      "cells": [
        "JPMC_Input",
        "ProductSearch",
        "PS02"
      ],
      "line": 36
    }
  ]
});
formatter.step({
  "name": "Customer navigate back",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "Customer Close the Browser",
  "keyword": "Given ",
  "line": 40
});
formatter.match({
  "location": "CommonStep.Customer_launch_the_Browser()"
});
formatter.result({
  "duration": 27401985000,
  "status": "passed"
});
formatter.match({
  "location": "HomeScreenStep.Customer_search_data_in_chase_dot_com(DataTable)"
});
formatter.result({
  "duration": 15347978000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_navigate_back()"
});
formatter.result({
  "duration": 7241081000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_Close_the_Browser()"
});
formatter.result({
  "duration": 617088000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 5484000,
  "status": "passed"
});
formatter.scenario({
  "id": "cucumberpoc;jpmc",
  "tags": [
    {
      "name": "@JPMC_Navigate_Creditcards",
      "line": 46
    }
  ],
  "description": "",
  "name": "JPMC",
  "keyword": "Scenario",
  "line": 47,
  "type": "scenario",
  "comments": [
    {
      "value": "#________________________________________________________________________________________________",
      "line": 43
    }
  ]
});
formatter.step({
  "name": "Customer launch the Browser",
  "keyword": "Given ",
  "line": 49
});
formatter.step({
  "name": "Customer navigate to \"Creditcards\" products objects",
  "keyword": "Then ",
  "line": 51
});
formatter.step({
  "name": "Customer validate credit card screen objects",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "Customer navigate back",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "Customer Close the Browser",
  "keyword": "Given ",
  "line": 57
});
formatter.match({
  "location": "CommonStep.Customer_launch_the_Browser()"
});
formatter.result({
  "duration": 27511333000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Creditcards",
      "offset": 22
    }
  ],
  "location": "HomeScreenStep.Customer_navigate_to_explore_Product_Page(String)"
});
formatter.result({
  "duration": 26900352000,
  "status": "passed"
});
formatter.match({
  "location": "CreditcardsScreenSteps.Customer_validate_credit_card_screen_objects()"
});
formatter.result({
  "duration": 31502920000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_navigate_back()"
});
formatter.result({
  "duration": 7354816000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_Close_the_Browser()"
});
formatter.result({
  "duration": 938728000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 5110000,
  "status": "passed"
});
formatter.scenario({
  "id": "cucumberpoc;jpmc",
  "tags": [
    {
      "name": "@JPMC_Navigate_Checking",
      "line": 62
    }
  ],
  "description": "",
  "name": "JPMC",
  "keyword": "Scenario",
  "line": 63,
  "type": "scenario",
  "comments": [
    {
      "value": "#________________________________________________________________________________________________",
      "line": 59
    }
  ]
});
formatter.step({
  "name": "Customer launch the Browser",
  "keyword": "Given ",
  "line": 65
});
formatter.step({
  "name": "Customer navigate to \"Checking\" products objects",
  "keyword": "Then ",
  "line": 67
});
formatter.step({
  "name": "Customer validate checking screen objects",
  "keyword": "Then ",
  "line": 69
});
formatter.step({
  "name": "Customer navigate back",
  "keyword": "Then ",
  "line": 71
});
formatter.step({
  "name": "Customer Close the Browser",
  "keyword": "Given ",
  "line": 73
});
formatter.match({
  "location": "CommonStep.Customer_launch_the_Browser()"
});
formatter.result({
  "duration": 27990116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 22
    }
  ],
  "location": "HomeScreenStep.Customer_navigate_to_explore_Product_Page(String)"
});
formatter.result({
  "duration": 2978456000,
  "status": "passed"
});
formatter.match({
  "location": "CheckingScreenSteps.Customer_validate_checking_screen_objects()"
});
formatter.result({
  "duration": 30054595000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_navigate_back()"
});
formatter.result({
  "duration": 5414767000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStep.Customer_Close_the_Browser()"
});
formatter.result({
  "duration": 743024000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
});