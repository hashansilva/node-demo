import http from 'http';
import { Constants } from './constants';
import { UserService } from './service/user.service';
import { NetworkUtils } from './service/network-utils.service';

const port = 3000;

const userService: UserService = new UserService();


const server: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.setHeader("Content-Type", "application/json");
    if (request.url === "/users" && request.method === Constants.GET_METHOD) {
        response.statusCode = Constants.HTTP_OK_STATUS;
        response.end(JSON.stringify(NetworkUtils.wrap(Constants.HTTP_OK_STATUS, userService.getUsers())));
    } else {
        response.writeHead(Constants.HTTP_NOT_FOUND_STATUS, { 'Content-Type': 'application/json' });
        response.write('Not Found!');
        response.end();
    }
});

server.listen(port, () => {
    console.log('Server running on port {}', port);
});

