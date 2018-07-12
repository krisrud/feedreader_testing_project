# Feedreader testing project

This is project for testing Feed Reader using Jasmine framework.


## About
There are 4 test suits:

**1. Test Suite "RSS Feeds"**

This test ensures that 
  * the allFeeds variable has been defined and that it is not empty, 
  * the URLs of allFeeds object are defined and are not empty, 
  * the name values of allFeeds object are defined and are not empty.
  
**2. Test Suite "The menu"**

This test ensures that 
  * the menu element is hidden by default,
  * the menu changes visibility when the menu icon is clicked,

**3. Test Suite "Initial Entries"**

This test ensures 
  * when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container

**4. Test Suite "New Feed Selection"**

This test ensures
  * when a new feed is loaded by the loadFeed function that the content actually changes.


## How to run the app

1. Quick start:

* Click the [link](https://krisrud.github.io/feedreader_testing_project/)
* There is a page with some test results on the bottom

2. Run locally:

* Click the green button "Clone or download"
* Download ZIP
* Open the folder
* Open the index.html
* There is a page with some test results on the bottom


## Dependencies

For developing I've used:

* [starter code](https://github.com/udacity/frontend-nanodegree-feedreader)

* external libraries: JQuery


