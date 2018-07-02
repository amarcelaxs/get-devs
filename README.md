# Seja um desenvolvedor na Profit-e RJ
instalação do node.js

Instalação do grunt na pasta do projeto:


para instalar: npm install grunt-cli -g;

 e suas dependências:


concat:
npm install grunt-contrib-concat --save-dev

css minificado:
npm install grunt-contrib-css-min --save-dev  

sass
npm install node-sass grunt-contrib-sass --save-dev

js minificado:

npm install --save-dev grunt-contrib-uglify


instalação watch :
npm install grunt-contrib-watch --save-dev


rodar o sass:  grunt sass
rodar o js grunt uglify

dar permissão ao data.json
feche o chrome
acessar a pasta C:\Program Files (x86)\Google\Chrome\Application
e executar o comando :
chrome --allow-file-access-from-files file:///C:/get-devs/data.json(o caminho de onde o arquivo data.json esta localizado)


obs: para tela desktop e mobile existe um javascript próprio para cada um precisando de reload.
