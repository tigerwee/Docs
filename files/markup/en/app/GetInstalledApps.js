// ------------- HEADER SECTION ------------- 


/** # GetInstalledApps #
 * @brief Get data about installed apps
 * Returns a list of objects containing informations about installed apps.
 * 
 * <deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.> \
 * See [Android Package Visibility](https://developer.android.com/training/package-visibility) for more information.
 *
 * See Also: @GetRunningApps, @GetRunningServices
 * $$ app.GetInstalledApps() $$ 
 * @returns lst-[{ packageName:str&comma; className:str&comma; uid:num_int&comma; targetSdkVersion:num_int&comma; dataDir:str_pth&comma; sourceDir:str_pth&comma; publicSourceDir:str_pth&comma; nativeLibraryDir:str_pth }]
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show installed apps
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear" );

    var list = app.GetInstalledApps();

	lst = app.CreateList( "", 1, 1 );
	lay.AddChild( lst );

    for(var i in list) {
        var a = list[i];
        lst.AddItem(a.packageName);
    }

	app.AddLayout(lay);

    app.HideProgress();
}
 */
    
            