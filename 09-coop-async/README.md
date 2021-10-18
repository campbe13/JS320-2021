# Creating your own stopwatch!
This is originally from MDN

Take a copy of the setInterval clock [setInterval-clock.html](setInterval-clock.html) example, and modify it to create your own simple stopwatch.

[Reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)

You need to display a time as before, but in this example, you need:

A "Start" button to start the stopwatch running.
A "Stop" button to pause/stop it.
A "Reset" button to reset the time back to 0.
The time display to show the number of seconds elapsed, rather than the actual time.
Here's a few hints for you:

You can structure and style the button markup however you like; just make sure you use semantic HTML, with hooks to allow you to grab the button references using JavaScript.
You probably want to create a variable that starts at 0, then increments by one every second using a constant loop.
It is easier to create this example without using a Date() object, like we've done in our version, but less accurate — you can't guarantee that the callback will fire after exactly 1000ms. A more accurate way would be to run startTime = Date.now() to get a timestamp of exactly when the user clicked the start button, and then do Date.now() - startTime to get the number of milliseconds after the start button was clicked.
You also want to calculate the number of hours, minutes, and seconds as separate values, and then show them together in a string after each loop iteration. From the second counter, you can work out each of these.
How would you calculate them? Have a think about it:
The number of seconds in an hour is 3600.
The number of minutes will be the amount of seconds left over when all of the hours have been removed, divided by 60.
The number of seconds will be the amount of seconds left over when all of the minutes have been removed.
You'll want to include a leading zero on your display values if the amount is less than 10, so it looks more like a traditional clock/watch.
To pause the stopwatch, you'll want to clear the interval. To reset it, you'll want to set the counter back to 0, clear the interval, and then immediately update the display.
You probably ought to disable the start button after pressing it once, and enable it again after you've stopped/reset it. Otherwise multiple presses of the start button will apply multiple setInterval()s to the clock, leading to wrong behavior.
