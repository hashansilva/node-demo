import http from 'http';
import { Constants } from './constants';

const port = 3000;

const server = http.createServer((request, response) => {
    if(request.url === '/' && request.method === Constants.GET_METHOD) {
        response.writeHead(Constants.HTTP_OK_STATUS, {'Content-Type': 'application/json'});
        response.write('Hello World!');
        response.end();
    }else{
        response.writeHead(Constants.HTTP_NOT_FOUND_STATUS,{'Content-Type': 'application/json'} );
        response.write('Not Found!');
        response.end();
    }
});

server.listen(port, () => {
    console.log('Server running on port {}', port);
});

