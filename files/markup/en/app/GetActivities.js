// ------------- HEADER SECTION -------------


/** # GetActivities #
 * GetActivities returns a list of object of currently running activities.
 *
 * <deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.> \
 * See [Android Package Visibility](https://developer.android.com/training/package-visibility) for more information.
 *
 * See Also: @GetRunningApps, @GetRunningServices
 * $$ app.GetActivities() $$
 * @returns lst-[{ label:str&comma; packageName:str&comma; className:str }]
*/




// ------------- SAMPLES ------------- 



/**
@sample Show Activities
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear" );

    var list = app.GetActivities();

    lst = app.CreateList( "", 1, 1 );
    lay.AddChild( lst )

    app.AddLayout(lay);

    for(var i in list) {
        var a = list[i];
        lst.AddItem(a.label, a.packageName);
    }

    app.HideProgress();
}
 */

