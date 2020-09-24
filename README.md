# Cypress Throttle Demo
Demonstates how Cypress can throttle down an app's running speed.

# Start

Clone Down the Repo

<br>
Run NPM
<code>npm i</code>

<br>
Serve
<code>ionic serve</code>

<br>
Start Cypress
<code>npm run cypress</code>

## Test 
Run the <code>throttle.spec.ts</code> test.
<br>
Allow Test to finish and allow interaction.
<br>
The Shown run time should be much higher than the run time if interacted in another window, 
<br>
or ever re-ran in the same test

## Test File
Explore the Test File <br>
Recommended to only run one test (one <code>it()</code> statement) at a time <br>
Select Test by moving around <code> it.only() </code>

## The Problem
In the Browser while cypress isn't running it takes roughly 5 seconds for items to load.<br>
However while cypress queries the dom in the test as the page loads and re-renders<br>
The Loading time can bloat to significantly, as much as 2x or 3x.  <br>
But once the test finishes. The loading returns to normal times, even while using the cypress<br>
Interactable window.
