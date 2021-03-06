$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/DheerenFramework/CucumberTest/src/test/java/cucumberPckg/TestFeature.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.goToFacebook()"
});
formatter.result({
  "duration": 12988430667,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#Scenario with AND"
    }
  ],
  "line": 10,
  "name": "Scenario1",
  "description": "",
  "id": "annotation;scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter username as \"TOM1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter password as \"JERRY1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM1",
      "offset": 21
    }
  ],
  "location": "StepDef.enterUsername(String)"
});
formatter.result({
  "duration": 450357669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY1",
      "offset": 21
    }
  ],
  "location": "StepDef.enterPassword(String)"
});
formatter.result({
  "duration": 18994137714,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.checkFail()"
});
formatter.result({
  "duration": 2944455397,
  "status": "passed"
});
formatter.after({
  "duration": 249086851,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#Scenario Outline Example"
    }
  ],
  "line": 25,
  "name": "Parameterize Test",
  "description": "",
  "id": "annotation;parameterize-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "annotation;parameterize-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 31,
      "id": "annotation;parameterize-test;;1"
    },
    {
      "cells": [
        "TOM3",
        "JERRY3"
      ],
      "line": 32,
      "id": "annotation;parameterize-test;;2"
    },
    {
      "cells": [
        "TOM4",
        "JERRY4"
      ],
      "line": 33,
      "id": "annotation;parameterize-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.goToFacebook()"
});
formatter.result({
  "duration": 7555901908,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Parameterize Test",
  "description": "",
  "id": "annotation;parameterize-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"TOM3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"JERRY3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM3",
      "offset": 21
    }
  ],
  "location": "StepDef.enterUsername(String)"
});
formatter.result({
  "duration": 195153222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY3",
      "offset": 21
    }
  ],
  "location": "StepDef.enterPassword(String)"
});
formatter.result({
  "duration": 6375422362,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.checkFail()"
});
formatter.result({
  "duration": 22494192,
  "status": "passed"
});
formatter.after({
  "duration": 171491961,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.goToFacebook()"
});
formatter.result({
  "duration": 7614968244,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Parameterize Test",
  "description": "",
  "id": "annotation;parameterize-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"TOM4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"JERRY4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM4",
      "offset": 21
    }
  ],
  "location": "StepDef.enterUsername(String)"
});
formatter.result({
  "duration": 217618760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY4",
      "offset": 21
    }
  ],
  "location": "StepDef.enterPassword(String)"
});
formatter.result({
  "duration": 4097531708,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.checkFail()"
});
formatter.result({
  "duration": 16422783,
  "status": "passed"
});
formatter.after({
  "duration": 2319928222,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.goToFacebook()"
});
formatter.result({
  "duration": 8706167674,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Using Data Table",
  "description": "",
  "id": "annotation;using-data-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I enter invalid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 38
    },
    {
      "cells": [
        "First Name",
        "Tom"
      ],
      "line": 39
    },
    {
      "cells": [
        "Last Name",
        "Kenny"
      ],
      "line": 40
    },
    {
      "cells": [
        "Email Address",
        "someone@someone.com"
      ],
      "line": 41
    },
    {
      "cells": [
        "Re-enter Email Address",
        "someone@someone.com"
      ],
      "line": 42
    },
    {
      "cells": [
        "Password",
        "Password1"
      ],
      "line": 43
    },
    {
      "cells": [
        "Birthdate",
        "01"
      ],
      "line": 44
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the user registration should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.enterData(DataTable)"
});
formatter.result({
  "duration": 3237961423,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.User_registration_should_be_unsuccessful()"
});
formatter.result({
  "duration": 20896902,
  "status": "passed"
});
formatter.after({
  "duration": 2329622291,
  "status": "passed"
});
});