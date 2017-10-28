/**
 * Sample automated test scenario for portal
 *
 * > it navigates to portal and sigin for suscriptor,
 *   verifying if the  'suscriptor' exists in the login succesfully
 */

module.exports = {
    'demo test portal' : function (client) {
        client
            .url('http://turner-csc-portal-release1-website.s3-website-us-east-1.amazonaws.com')
            .waitForElementPresent('body', 1000);
    },

    'part two' : function(browser) {
        browser
            .waitForElementPresent('#login-popup', 5000)
            .click('#login-popup')
            .waitForElementPresent('#input-user', 5000)
            /* .setValue('#input-user', 'jairo.aparicio@turner.com')
            .setValue('#input-password', 'jairo.aparicio')
            .click('#login-button') */
            .pause(1000)
        /* .assert.containsText('#main', 'Night Watch') */
        /* .end(); */
    },
    'part tree succesfully login' : function (browser) {
        browser.window_handles(function(result) {
            var handle = result.value[0];
            browser.switchWindow(handle);
            browser.setValue('#input-user', 'jairo.aparicio@turner.com');
            /* browser.setValue('#input-password', '#incorrectPassw');
            browser.click('#login-button');
            browser.expect.element('#loading-spinner').to.have.css('display').which.equals('block');
            /* browser.waitForElementVisible('#loading-spinner', 1000);  */
            /* browser.pause(1000);
                var handle1 = result.value[1];
            browser.switchWindow(handle1);
            browser.setValue('#input-password').click;
              browser.pause(1000);
              browser.clearValue('#input-password'); */
            browser.setValue('#input-password', 'jairo.aparicio');
            browser.click('#login-button');
            browser.pause(5000);
            browser.assert.containsText('.dropdown-toggle', 'Jairo Aparicio');
            browser.assert.title('Distributor Content Delivery Portal');
            browser.assert.urlContains('#landing');
            browser.assert.containsText('#options > div:nth-child(4) > a:nth-child(1)', 'My orders');
            browser.click('#options > div:nth-child(4) > a:nth-child(1)');
            browser.pause(5000);
            browser.waitForElementPresent('#filter-container', 1000);
            browser.assert.urlContains('#/requestList')
            browser.end();
        });
    }
}

