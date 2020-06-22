var fs = require('fs');

// fs = file system

// Criar um arquivo
/* fs.writeFile('data.txt', 'Hello world from SON', function(err){
      if(err){
           throw erro;
      }
}); */

// Ler o conteúdo de um arquivo
/* fs.readFile('data.txt', function(err, data){
      if(err){
            throw erro;
      }
      console.log(data.toString('utf8'));
}); */


// Ler arquivos do um diretório
/* fs.readdir('.', function(err, files){
      if(err)
      {
            throw err;
      }
      for (var file in files)
      {
            console.log(files[file]);
      }
}) */

// Ler arquivos de um diretório Sincrono e com filtro
/* fs
      .readdirSync('.')
      .filter(function(file){
            return (file.endsWith('.js'))
      })
      .forEach(function(file){
            console.log(file);
      }); */
