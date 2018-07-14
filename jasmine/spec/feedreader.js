$(function () {
    // This test suite contains a related set of tests.
    describe('RSS Feeds', function () {
        // This test checks that the allFeeds variable has been defined and that it is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        // This test checks that the URLs of allFeeds object are defined and are not empty.
        it('URL is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        // This test checks that the name values of allFeeds object are defined and are not empty.
        it('name is defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    // Test suite for the menu
    describe('The menu', function () {
        // let menuHidden = $("body").hasClass("menu-hidden");
        let menuClicked = $(".menu-icon-link");

        // This test ensures that the menu element is hidden by default
        it('is hidden', function () {
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

        //This test ensures that  the menu changes visibility when the menu icon is clicked.
        it('is displayed when clicked and hidden when clicked again', function () {
            menuClicked.click();
            expect($("body").hasClass("menu-hidden")).toBeFalsy();

            menuClicked.click();
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    });

    //Test suite for the initial entries
    describe('Initial Entries', function () {

        let originalTimeout;

        beforeEach(function () {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
        });

        afterEach(function () {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });

        let Entries;
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
            Entries = document.querySelector(".feed").getElementsByClassName("entry");
        });

        /*This test ensures when the loadFeed function is called and completes its work,
          there is at least a single .entry element within the .feed container.*/
        it('has entry elements after calling loadFeed function', function (done) {
            expect(Entries.length).toBeGreaterThan(0);
            done();
        });
    });


    // Test suite for new feed selection
    describe('New Feed Selection', function () {

        let starterFeed;
        let newFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                starterFeed = document.querySelectorAll(".feed h2")[0];
                done();
                loadFeed(1, function () {
                    newFeed = document.querySelectorAll(".feed h2")[0];
                    done();
                });
            });
        });

        //This test ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        it('has new content after calling loadFeed function', function () {
            expect(newFeed).not.toBe(starterFeed);
        });

    });
});


