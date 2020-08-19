let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    plugins: [
       // package: 'protractor-timeline-plugin',

        // inline: require('protractor-timeline-plugin'),

    //     outdir: 'timelines',
    //     outputHtmlFileName: 'results.html'
    // },

    ],
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        header: 'specs/header/spec.js',
        home: 'specs/home/spec.js',
        footer: 'specs/footer/spec.js'
    },
    params: {
        baseUrl: 'https://www.postman.com/',
    },
    framework: 'jasmine2',
    multiCapabilities: [
        // {
        //   'browserName': 'internet explorer',
        //   'version': 11,
        //   'nativeEvents': false,
        //   'unexpectedAlertBehaviour': 'accept',
        //   'ignoreProtectedModeSettings': true,
        //   'enablePersistentHover': true,
        //   'disable-popup-blocking': true
        // },
        {
            browserName: 'firefox',
            firefoxOptions: {
                args: ['--incognito']
            },
            'moz:firefoxOptions': {
                args: ['--incognito']
            }
        },
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ["--incognito", "--disable-infobars", "--disable-popup-blocking",]
            }
        }
    ],

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = false;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
            }
        }));
    },

    jasmineNodeOpts: {
        showColors: true
    }
};