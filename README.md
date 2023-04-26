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
   
   
   <li>Dentro do laço de repetição com <code>for</code> determinei que o índice será <code>0</code>, e qual o número máximo de digitos que será fornecido para compôr a senha; Em questão, otpei por uma senha de 6 dígitos;</li>
   
   <li>Além disso, com <code>setTimeout( )</code> e <code>setInterval( )</code> criei uma função para que a cada 10 minutos a página seja recarregada forçando o usuário a precisar gerar um novo  código. O que lê-se como se o código OTP tivesse <b>expirado</b>.</li>
 </ul>
 
   <p>Saiba mais sobre as funções utilizadas e mencionadas acima, na documentação da MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">SetTimeout( ) , <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval">setInterval( )</a>.</p>
 </ul>




















