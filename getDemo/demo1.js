var http = require( "http" );
var url = require( "url" );
var util = require( "util" );

http.createServer( function( req, res ){
    res.writeHead( 200,{
        "Content-Type" : "text/html;charset=utf-8"
    } );
    
    //现在这个输出是一个对象，不能输出到html页面上
    //console.log( url.parse(req.url, true) )
    
    // url.parse，转成对象
    // util.inspect，转成字符
    // req.url，请求信息

    console.log( util.inspect(url.parse(req.url,true)) );
    
    res.end( util.inspect(url.parse(req.url,true)) );

} ).listen(2345)

console.log( "执行完毕，端口号：2345" );

