// ------------- HEADER SECTION ------------- 


/** # Execute #
 * @brief Execute js code from your app or a WebWiew
 * Executes a piece of code asynchroneously to your program. It is designed for interacting with your main app from within a [WebView](CreateWebView.htm).
 * $$ app.Execute(js) $$ 
 * @param {str_jsc} js 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Execute code from WebView
var html = `
<html>
<head>
    <script src='file:///android_asset/app.js'></script>
</head>

<script>
    var source = "html";
    function btn_OnTouch()
    {
        app.Execute( "app.Alert( 'source: " + source + "\\\\ntarget: ' + source );" );
    }
</script>

<body style="text-align: center;">
    <input type="button" onclick="btn_OnTouch()" value="Click me!"></button>
</body>
</html>`;

var source = "app";

function OnStart()
{
    lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    web = app.CreateWebView( .5, .2 );
    web.LoadHtml( html );
    lay.AddChild( web );

    btn = app.CreateButton("call myFunction", .4, .1);
    btn.SetOnTouch(btn_OnTouch);
    lay.AddChild(btn);

    app.AddLayout( lay );
}

function btn_OnTouch()
{
    app.Execute( "app.Alert( 'source: " + source + "\\ntarget: ' + source );" );
}
 */
    
            