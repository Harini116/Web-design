/*Structure of DOM(Document Object Model)
                DOM
                 |
-----------------------------------------
|                |          |           |
|                |          |           |
 --------     --------    ------      -------
|Document|   |Location|  |Screen|    |History|
 --------     --------    ------      -------
*/
//url
var url = location.href;
console.log("url: " ,url);
//host
var host = location.host;
console.log("host: " ,host);
//hostname
var hostname = location.hostname;
console.log("hostname: " ,hostname);
//port address
var port = location.port;
console.log("port: " ,port);
//protocol
var protocol = location.protocol;
console.log("protocol: " ,protocol);
//pathname
var pathname = location.pathname;
console.log("pathname: " ,pathname);
//search
var s = location.search;
console.log("search : " ,s);
//screen width
var w = screen.width;
console.log("screen width: ",w);
//screen height
var h = screen.height;
console.log("screen height: ",h);
//screen orientation type
var sot = screen.orientation.type;
console.log("screen orientation type :",sot);
//screen orientation angle
var soa = screen.orientation.angle;
console.log("screen orientation angle :",soa);
//history's length
console.log("Length of history: ",history.length);