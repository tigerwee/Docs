// ------------- HEADER SECTION ------------- 


/** # ShowDebug #
 * @brief Show the in-app debug console
 * Show/Hide the debug console as overlay in your app, after calling @CreateDebug.
 * 
 * See Also: @Debug, @IsDebugVisible
 * $$ app.ShowDebug(show, options) $$ 
 * @param {bin} show 
 * @param {str} options dialog|clear-Clear content before showing
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Toggle Debug
function OnStart()
{
    app.CreateDebug();

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "WiFi Access Point", -1, 0.1 );
	tgl.SetOnTouch( ShowDebug );
	tgl.SetChecked( true );
	lay.AddChild( tgl );

	app.AddLayout( lay );
}

function ShowDebug( show )
{
    <b>app.ShowDebug( show );</b>
}
 */
    
            