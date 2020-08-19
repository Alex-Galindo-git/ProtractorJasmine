if you want to run scripts for chrome and firefox, copy paste the following command to execute scripts
- comment 'seleniumAddress = http://localhost:4444/wd/hub' in conf.js file
- uncomment 'directConnect = true'
- uncomment chrome and firefox browser from 'multiCapabilities' option
- now open a cmd window and run following command
- protractor conf.js --suite header,home,footer


for internet explorer follow these steps
- open a cmd window and run following commands
- webdriver-manager update --ie32 --versions.standalone=3.4.0 --versions.ie=3.5.1
- webdriver-manager start --versions.standalone=3.4.0

- now open another cmd window and run following command
- protractor conf.js --suite header,home,footer
