# Creating your own stopwatch!
This is originally from MDN

You may want to watch this video first [from Jaya Nilakantan](https://web.microsoftstream.com/video/cf717bb3-45df-4204-b207-3375115c67c2)

*__You may want to do this with a partner so you can help each other understand it.__*

Take a copy of the setInterval clock [setInterval-clock.html](setInterval-clock.html) example, and modify it to 
1.  use an external js file, not inline script
2.  create your own simple stopwatch.
<!--
How will it work
* start button 
    * every 1000 milliseconds, increment a counter by 1 second
* setInterval callback
    * write the code to display the counter as a string hh:mm:ss (see [String padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) for leading 0s)
* what about pause and reset? 
    * both clearInterval
    * reset also clears the text and resets the counter
-->
![image](https://user-images.githubusercontent.com/1751207/137652437-f951873c-2ffc-4f96-87a4-1e1cb6a0a238.png)

[Reference for this @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)

You need to display a time as before, but in this example, you need to add

1. A "Start" button to start the stopwatch running.
1. A "Stop" button to pause/stop it.
1. A "Reset" button to reset the time back to 0.
1.  The time display to show the number of seconds elapsed, rather than the actual time.

## do it incrementally
1.  Change time display to show the number of seconds elapsed, rather than the actual time. write the code to display the counter as a string hh:mm:ss (see [String padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) for leading 0s)
When that is working 
1.  implement the start button, maybe the stop button too
When start is working & stop
1.  continue with the rest

## Here's a few hints for you:

You can structure and style the button markup however you like; just make sure you use semantic HTML, with hooks (id, name etc.) to allow you to grab the button references using JavaScript.

You probably want to create a variable that starts at 0, then increments by one every second using a constant loop.

It is easier to create this example without using a Date() object, like we've done in our version, but less accurate ??? you can't guarantee that the callback will fire after exactly 1000ms. 

Optional Challenge:  A more accurate way would be to run startTime = Date.now() to get a timestamp of exactly when the user clicked the start button, and then do Date.now() - startTime to get the number of milliseconds after the start button was clicked.

You also want to calculate the number of hours, minutes, and seconds as separate values, and then show them together in a string after each loop iteration. From the second counter, you can work out each of these.

How would you calculate them? Hmmm think about it:
* The number of seconds in an hour is 3600.
* The number of minutes will be the amount of seconds left over when all of the hours have been removed, divided by 60.
* The number of seconds will be the amount of seconds left over when all of the minutes have been removed.

You'll want to include a leading zero on your display values if the amount is less than 10, so it looks more like a traditional clock/watch.

To pause the stopwatch, you'll want to clear the interval. To reset it, you'll want to set the counter back to 0, clear the interval, and then immediately update the display.

Disable the start button after pressing it once, and enable it again after you've stopped/reset it. Otherwise multiple presses of the start button will apply multiple setInterval()s to the clock, leading to wrong behavior.
