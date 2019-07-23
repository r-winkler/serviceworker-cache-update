# Service Worker Showcase

* Open browser and open dev tools
* Throttle network traffic to slow
* go to http://localhost:3000 and see how long it takes to load the page initially 

The service worker is installed after the page has loaded the first time.

* Thus, refresh twice (precaching does not work yet...very buggy) the page and see how fast the page is loaded (all assets served by the service worker => see network tab in dev tools)

All assets are served by the service worker, but in background the service worker updates all assets. These changes would be seen after another page refresh.

* go offline via dev tools and verify that the page is displayed correctly even without any network. See in network tab that the refresh calls are failing.


* Right click on refresh button in Chrome and select "Empty cache and refresh completly" or unregister the service worker in "Application" tab in dev tools. Thus, you can redo the above described procedure.

## Important

* disable network cache for debugging etc.
* if cache storage is not correclty displayed, open new browser...

## See

https://serviceworke.rs/
