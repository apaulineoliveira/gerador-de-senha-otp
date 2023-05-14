 <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>


<h1 align="center">Target</h1> 
    <p align="center">The target of this project was create a One-time password generator when the user clicks on the "generate password" button, a combination of numbers will immediately appear along with a counter. When the time reaches zero the password will expire and it will be necessary to generate another code.</p>

<h3 align="center">About the project</h3> 
    <p>A one-time password (OTP) is a sequence of numbers and/or characters that is generated and sent to the user to be used in a single login attempt or transaction, for this reason the password is also called "one-time" password.</p>

<h3 align="center">Relevant explanations about the code</h3>

    <ul>
        <li>The random function is used to generate the random OTP which is predefined in the <code>Math</code> library;</li>

        <li>The <code>Math.floor</code> function return the floor of any floating number to an integer value;</li>

        <li><code>Math.random()</code> is a function that returns any random number between 0 and 1.</li>

    <p>Learn more about the above functions in the documentation: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random">Math.random()</a>, <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor">Math.floor()</a>.</p>

        <li>Within the loop of repetition with for I determined that the index will be 0, and what is the maximum number of digits that will be supplied to compose the password; In question, I opted for a 6 digit password;</li>

        <li>Also that, with <code>setTimeout()</code>and<code>setInterval() I created a function so that, every 10 minutes the page is reloaded, forcing the user <b>to need to generate a new code</b>. Which reads as if the OTP code has expired.</code></li>

    <p>Learn more about the functions used and mentioned above in the MDN documentation: <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">SetTimeout()</a>, <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval">setInterval()</a>.</p>
    </ul>