// ------------- HEADER SECTION ------------- 


/** # GetEnv #
 * @brief Get environment variable
 * Returns the value of an environment variable defined on the device.
 * $$ app.GetEnv(name) $$ 
 * @param {str} name PATH|...
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show PATH environment variable
function OnStart()
{
    <b>var envPath = app.GetEnv("PATH");</b>
    app.Alert( envPath );
}
 */
    
            