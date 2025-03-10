// ------------- HEADER SECTION ------------- 


/** # SetOnError #
 * @brief Called on thrown JS errors
 * Define a callback function to catch thrown errors messages.
 * 
 * See also: @Error
 * $$ app.SetOnError(callback) $$ 
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Catch JS Errors
function OnStart()
{
    app.SetOnError( OnError );
    throw "My thrown error";
}

<b>function OnError( msg, line, file )
{
    var text =
        'Message: "' + msg + '"\n' +
        'Line: ' + line + '\n' +
        'File: "' + app.Uri2Path(file) + '"';

    app.Alert( text, "Received error message:" );
}</b>
 */
    
            