 <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png" height="50" width="50"/>

<h1 align="center">Objetivo</h1>
  <p>O objetivo desse projeto foi criar um <b>Gerador de Senha OTP</b> em que ao usuário clicar no botão "gerar senha" de imediato aparecerá uma combinação de números juntamente a um contador. Quando o tempo chegar a zero a senha irá expirar e será necessário gerar outro código.</p>

<br> 

<h2 align="center">Sobre o Projeto</h2>
<p>Uma senha de uso único (OTP) é uma sequência de números e/ou caracteres que é gerada e enviada ao usuário para ser usada em uma <b>única</b> tentativa de login ou transação, por esse motivo, a senha também é chamada de "descartável".</p> 

<br>

<h3>Explicações relevantes sobre o código</h3>

 <ul>
   <li>A função aleatória é usada para gerar o OTP aleatório que é predefinido na biblioteca <code>Math</code>;</li>
   <li>A função <code>Math.floor</code> retorna o piso de qualquer número <b>flutuante</b> para um valor inteiro;</li>
   <li><code>Math.random()</code> é uma função que retorna qualquer número <b>aleatório</b> entre 0 e 1.</li>
   
<br>

   <p>Saiba mais sobre as funções acima na documentação: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,dimensionar%20para%20um%20intervalo%20desejado.">Math.random( ) , <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,dentre%20o%20n%C3%BAmero%20%22x%22.">Math.floor( )</a>.</p>
   <li>Dentro do laço de repetição com for determinei que o índice será 0 e qual o número máximo de digitos que irá retornar. Em questão, otpei por uma senha de 6 dígitos.</li>
   <li>Além disso, com setTimeout( ) e setInterval( ) criei uma função para que a cada 10 minutos a página seja recarregada forçando o usuário a precisar gerar um novo  código. O que lê-se como se o código OTP tivesse expirado.</li>
 </ul>
<p>Saiba mais sobre as funções acima na documentação: <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">SetTimeout( ) , <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval">setInterval( )</a>.</p>


<h1>🚩 Goal</h1>
<p>The target of this project was to create an otp password generator in which the user clicks on the "generate password" button and a combination of numbers and a counter will immediately appear. When the time reaches zero the password will expire and it will be necessary to generate another code. </p>
<h3>Definition</h3>
<p>A one-time password (OTP) is a string of numbers and/or characters that is generated and sent to a user to be used for a single login attempt or transaction. Also known as one-time password or one-time password.</p>
<h3>Relevant points of the project</h3>
<li>Random function is used to generate random OTP which is predefined in Math library.</li>
<li>The Math.floor function returns the floor of any floating number to an integer value.( )</li>
<li>Math.random() is a function that returns any random number between 0 and 1.</li>
<p>Learn more about the above functions in the documentation: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#:~:text= A%20fun%C3%A7%C3%A3o%20Math.,scale%20to%20um%20desiredinterval%20.">Math.random() , <a href="https://developer.mozilla.org/en- BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,de%20o%20n%C3%BAmero%20%22x% 22.">Math.floor( )</a>.</p>
<li>Within the loop of repetition with for I determined that the index will be 0 and what is the maximum number of digits that will return. In question, I opted for a 6-digit password.</li>
<li>In addition, with setTimeout( ) and setInterval( ) I created a function so that every 10 minutes the page is reloaded forcing the user to need to generate a new code. Which reads as if the OTP code has expired.</li>
<p>Learn more about the above functions in the documentation: <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">SetTimeout() , <a href="https ://developer.mozilla.org/en-US/docs/Web/API/setInterval">setInterval( )</a>.</p>
