// ------------- HEADER SECTION ------------- 


/** # CloseDrawer #
 * Closes the drawer layout on the given side with slide animation.
 * 
 * See Also: @OpenDrawer
 * $$ app.CloseDrawer(side) $$ 
 * @param {str} side left|right
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Open and Close Drawer via Button
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter,Left" );

	btnOpen = app.CreateButton( "»", .1, .3, "gray" );
    btnOpen.SetOnTouch( btnOpen_OnTouch );
    btnOpen.SetTextSize( 20 );
	lay.AddChild( btnOpen );

	app.AddLayout( lay );

	layDrawer = app.CreateLayout( "Linear", "Horizontal,FillXY,VCenter,Right" );
	layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" );

	txt2 = app.CreateText( "Hello" );
	txt2.SetTextSize( 40 );
	layDrawer.AddChild( txt2 );

	btnClose = app.CreateButton( "«", .1, .3, "gray" );
    btnClose.SetOnTouch( btnClose_OnTouch );
    btnClose.SetTextSize( 20 );
    btnClose.SetMargins( .2 );
	layDrawer.AddChild( btnClose );

	app.AddDrawer( layDrawer, "left", 0.8 );

    app.LockDrawer( "left" );
}

function btnOpen_OnTouch()
{
    app.OpenDrawer( "left" );
}

function btnClose_OnTouch()
{
    <b>app.CloseDrawer( "left" );</b>
}
 */
    
            