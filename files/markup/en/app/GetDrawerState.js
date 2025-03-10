// ------------- HEADER SECTION ------------- 


/** # GetDrawerState #
 * @brief Get current drawer state
 * Returns the current drawer state of a drawer on a given side.
 * 
 * See Also: @OpenDrawer, @CloseDrawer, @AddDrawer
 * $$ app.GetDrawerState(side) $$ 
 * @param {str} side left|right
 * @returns str-Open|Closed
*/




// ------------- SAMPLES ------------- 


    
/**
@sample 
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter,Left" );

	btnOpen = app.CreateButton( "»", .1, .3, "gray" );
    btnOpen.SetOnTouch( btn_OnTouch );
    btnOpen.SetTextSize( 20 );
	lay.AddChild( btnOpen );

	app.AddLayout( lay );

	layDrawer = app.CreateLayout( "Linear", "Horizontal,FillXY,VCenter,Right" );
	layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" );

	txt2 = app.CreateText( "Hello" );
	txt2.SetTextSize( 40 );
	layDrawer.AddChild( txt2 );

	btnClose = app.CreateButton( "«", .1, .3, "gray" );
    btnClose.SetOnTouch( btn_OnTouch );
    btnClose.SetTextSize( 20 );
    btnClose.SetMargins( .2 );
	layDrawer.AddChild( btnClose );

	app.AddDrawer( layDrawer, "left", 0.8 );

    app.LockDrawer( "left" );
}

function btn_OnTouch()
{
    <b>if(app.GetDrawerState("left") == "Closed")
        app.OpenDrawer( "left" );
    else // "Open"
        app.CloseDrawer( "left" );</b>
}
 */
    
            