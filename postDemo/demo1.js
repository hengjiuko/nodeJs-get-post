var http = require( "http" );
var querystring = require( "querystring" );

var _html = '<form method="post">' +
                      '网站名： <input name="name"><br>' +
                      '年龄： <input name="age"><br>' +
                      '<input type="submit">' +
              '</form>';
http.createServer( function( req, res ){
    var _data = "";

    req.on( "data",function( _d ){
        //这里拼接字符串
        _data += _d;
    } );

    req.on( "end",function(){

        //把字符串转为对象
        _data = querystring.parse( _data ); 

        res.writeHead( 200,{
            "Content-Type" : "text/html;charset=utf-8" 
        } )

        //这里输出对象
        console.log( typeof _data );

        //对象里面有什么
        console.log( _data.name );


        if( _data.name != undefined ){
            res.write('我是谁：' + _data.name);
            res.write('<br/>');
            res.write('今年多大啦：' + _data.age);
        } else {
            res.write( _html );
        }

        res.end();
    
    } );
    
} ).listen(2347)

console.log( "执行完毕，端口号：2347" );