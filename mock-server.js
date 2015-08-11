var Nocker = require('nocker');
var fs = require('fs');

Nocker.register([
  {
      method: 'GET',
      path: '/animals',
      reply: function(params, query, body) {
        var result = fs.readFileSync('animals.json');
        return JSON.parse(result.toString());
      }
  },
  {
      method: 'POST',
      path: '/animals',
      reply: function(params, query, body) {
          var animals = require('./animals');
          animals.push(body.name);
          // Save
          fs.writeFileSync('animals.json', JSON.stringify(animals))
      }
  },
])

// Start server on port 7003
Nocker.start({delay: 500, port: 8080, auth: false}, function() {
  console.log("Server is listening on port " + this.port + '\n');
})
