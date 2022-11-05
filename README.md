# 🚩 Objetivo
<p>O objetivo desse projeto foi criar um gerador de senha otp em que ao usuário clicar no botão "gerar senha" de imediato irá aparecer uma combinação de números e um contador. Quando o tempo chegar a zero a senha irá expirar e será necessário gerar outro código. </p>
<h3>Definição</h3>
<p>Uma senha de uso único (OTP) é uma sequência de números e/ou caracteres que é gerada e enviada a um usuário para ser usada em uma única tentativa de login ou transação. Também denominada como senha descartável ou senha de uso único.</p>
<h3>Pontos relevantes do projeto</h3>
<li>A função aleatória é usada para gerar OTP aleatório que é predefinido na biblioteca Math.</li>
<li>A função Math.floor retorna o piso de qualquer número flutuante para um valor inteiro.( )</li>
<li>Math.random() é uma função que retorna qualquer número aleatório entre 0 e 1.</li>
<p>Saiba mais sobre as funções acima na documentação: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,dimensionar%20para%20um%20intervalo%20desejado.">Math.random( ) , <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,dentre%20o%20n%C3%BAmero%20%22x%22.">Math.floor( )</a>.</p>
<li>Dentro do laço de repetição com for determinei que o índice será 0 e qual o número máximo de digitos que irá retornar. Em questão, otpei por uma senha de 6 dígitos.</li>
<li>Além disso, com setTimeout( ) e setInterval( ) criei uma função para que a cada 10 minutos a página seja recarregada forçando o usuário a precisar gerar um novo código. O que lê-se como se o código OTP tivesse expirado.</li>
<p>Saiba mais sobre as funções acima na documentação: <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">SetTimeout( ) , <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval">setInterval( )</a>.</p>
