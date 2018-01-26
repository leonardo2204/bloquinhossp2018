const blocoRepo = require('./repository/BlocoRepository');

exports.handler = function(event, context, callback) {
    console.log("request: " + JSON.stringify(event));

    // HTTP Method (e.g., POST, GET, HEAD)
    const httpMethod = event.httpMethod;

    const fetchBlocos = () => {
        blocoRepo
        .fetchBlocos()
        .then(blocos => {
            var response = {
                statusCode: 200,
                body: JSON.stringify(blocos.Items)
            };
            console.log("response: " + JSON.stringify(blocos))
            context.succeed(response);
        }).catch(err => {
            var response = {
                statusCode: 500,
                body: JSON.stringify(err)
            };
            
            console.log("response: " + JSON.stringify(err))
            callback(response);
        })
    }
    
    const pathParam = event.path.replace(/\/bloco\/?/, "")
    console.log(pathParam)

    const fetchBloco = (id) => {
        blocoRepo
            .fetchBloco(id)
            .then(bloco => {
                var response = {
                statusCode: 200,
                body: JSON.stringify(bloco.Items)
            };
            console.log("response: " + JSON.stringify(bloco))
            context.succeed(response);
            }).catch(err => {
            var response = {
                statusCode: 500,
                body: JSON.stringify(err)
            };
            
            console.log("response: " + JSON.stringify(err))
            callback(response);
        })
    }

    switch(httpMethod){
        case 'GET':
            if(pathParam)
                fetchBloco(pathParam);
            else
                fetchBlocos();
            break;
    }
};