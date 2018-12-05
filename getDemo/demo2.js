var http = require( "http" );
var url = require( "url" );
var util = require( "util" );

http.createServer( function( req, res ){
    res.writeHead( 200,{
        "Content-Type" : "text/html;charset=utf-8"
    } );
    
    
    //解析参数，此时，是一个对象
    console.log( url.parse(req.url,true).query );
    _query = url.parse(req.url,true).query;

    res.write( "我是谁 ："+ _query.name );
    res.write("<br/>");
    res.write( "今年几岁：" + _query.age );
    
    //加end(),请求会结束，不加end(),页面一直在转动
    res.end();

} ).listen(2346)

console.log( "执行完毕，端口号：2346" );

