// ------------- HEADER SECTION ------------- 


/** # CreateToggle #
 * @abbrev tgl
 * @brief Returns a new Toggle object
 * 
 * $$ tgl = app.CreateToggle(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options Monospace,Custom,NoPad,FillX/Y,NoSound
 * @returns dso-Toggle
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Toggle buttons are basically [Buttons](CreateButton.htm) with an additional light bar indicating if it is activated or not. The user can toggle this state by pressing on it.
%c
You can allow the toggle button to auto-size by leaving out the dimensions or you can specify a **width** and **height** as decimal fractions of the screen's width and height.

Use the **SetOnTouch** method of your button object to set the name of a function you want to be called when the button is touched.

You can get the state of the toggle button at any time using the **GetChecked** method. The button state is also passed into your OnTouch callback function as a parameter every time the button is touched.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetChecked ###
 * @brief Checks if toggle is activated
 * Returns whether the toggle is currently activated
 * $$ tgl.GetChecked() $$
 * @returns bin
 */


/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetText */

/** @extern GetTextSize */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ tgl.GetType() $$
 * @returns str-Toggle
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** ### SetChecked ###
 * @brief Change the checked state
 * Change the current checked state of the toggle.
 * $$ tgl.SetChecked(checked) $$
 * @param {bin} checked 
 */


/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetMargins */

/** ### SetOnTouch ###
 * @brief Called when user touched the control
 * Called when the control has been clicked by the user.
 * $$ tgl.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["bin"]}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetStyle ###
 * @brief Customize the button looks
 * Costomize the look of the toggle.
 * $$ tgl.SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {num_pxl} radius 
 * @param {str_col} strokeClr 
 * @param {num_pxl} strokeWidth 
 * @param {num_frc} shadow 
 */


/** @extern SetText */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>tgl = app.CreateToggle( "Toggle Me" );
    tgl.SetOnTouch( ShowState );
    lay.AddChild( tgl );</b>

    app.AddLayout( lay );
}

function ShowState( isChecked )
{
    app.ShowPopup( "Checked = " + isChecked, "Short" );
}
 */
    
            