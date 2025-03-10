// ------------- HEADER SECTION ------------- 


/** # SendIntent #
 * 
 * $$ app.SendIntent(packageName, className, action, category, uri, type, extras, options, callback) $$ 
 * @param {str} packageName 
 * @param {str} className 
 * @param {str} action android.intent.action.*
 * @param {str} category android.intent.category.*
 * @param {str_uri} uri 
 * @param {str_mim} type 
 * @param {lst} extras [{ name:str&comma; type:str-"string|float|int|long|bool|list|file|uri|keydown|keyup"&comma; value:str }]
 * @param {str_com} options result,cleartask
 * @param {fnc_json} callback {"pNames":["resultCode","data"],"pTypes":["num_int--1|0|1","obj-{ action:string, type:str, data:string, flags:integer, extras:object }"]}
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Intens can be used to perform an operation between different applications or activities. _It is basically a passive data structure holding an abstract description of an action to be performed_.

**package name** and **class name** can specify the intent target, but you can also leave them null and define a **category** instead to let the user choose an application of that categoy.

If you expect a **callback** you have to pass the “result” **option**. The **result code** can be
	-1: _operation succeeded_
	1: _user-defined activity results_
	0: _operation canceled_

You can find some common used examples for that in the [DroidScript Wiki]( https://droidscript.org/wiki/doku.php?id=intents:start)
For more information visit the [Android Developer Page](https://developer.android.com/reference/android/content/Intent.html). There you can find informations about the [activity](https://developer.android.com/reference/android/content/Intent.html#standard-activity-actions), [category](https://developer.android.com/reference/android/content/Intent.html#standard-categories) and [extra](https://developer.android.com/reference/android/content/Intent.html#standard-extra-data).

See Also: @GetIntent
 */



// ------------- SAMPLES ------------- 

