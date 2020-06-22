var queryString = require('querystring');

function handle(request, response){
      response.writeHead(200, {
            'Content-Type': 'text/html'
      });

      // Tras os atributos do request e transforma em json POST and GET
      /* var body = '';

      request.on('data', function(data){
            body += data.toString();
      });

      request.on('end', function(){
            var decode = queryString.parse(body);

            console.log(decode);
      }); */

      response.write('<!DOCTYPE "html">');
      response.write('<html lang="pt-BR">');
      response.write('<head>');
      response.write('<title>Teste title</title>');
      response.write('</head>');
      response.write('<body>');
      response.write('<h1>Teste</h1>');
      response.write('</body>');
      response.write('</html>');    
      response.end();
}

module.exports = handle;