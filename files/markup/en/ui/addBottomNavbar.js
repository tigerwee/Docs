// ------------- HEADER SECTION ------------- 


/** # addBottomNavbar #
 * @abbrev bmn
 * @brief addBottomNavbar
 * 
 * $$ bmn = ui.addBottomNavbar(parent, navs, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the BottomNavbar
 * @param {lst} navs An array whose elements are of the form `[ "Title", "Icon" ]`
 * @param {str_com} options one or a combination of the following: `Hidelabels`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-BottomNavbar Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a bottom navigation bar to your app.

An example of a navs array.
<js>
var navs = [
    [ "Favorites", "favorites" ],
    [ "Groups", "person" ],
    [ "Folder", "folder" ]
]
</js>
 ### Properties
These are the setter and getter properties for the addBottomNavbar Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns whether the bottom navigation is disabled or enabled. All navigation actions must be disabled to return <col nobox #fb8c00>true</col>. Otherwise, it will return <col nobox #fb8c00>false</col>.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the icon color. You can pass color in a hexadecimal format or rgb format.'"</smp>
<smp noinl>iconSize:"num:'Sets or returns the icon font-size. You can also pass string values such as <col nobox #fb8c00>1.2rem</col> or <col nobox #fb8c00>18px</col>.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>labels:"bin:'Sets or returns a boolean whether the labels are shown or hidden on active state.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the navigation actions array. See <col nobox #fb8c00>navs</col> params above for format.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"num:'Sets or returns the current value of the BottomNavbar. This is the index of the corresponding selected action.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ bmn.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-Bottom navigation action text.","num-Bottom navigation action index.","obj-The pointer event object."]}
 */


/** ### setList ###
 * @brief setList
 * Sets the navigation actions list
 * $$ bmn.setList(navs) $$
 * @param {lst} navs The navigation actions array. See `navs` param above for format.
 */


/** ### getList ###
 * @brief getList
 * Returns the navigation actions list
 * $$ bmn.getList() $$
 * @returns lst
 */


/** ### selectItem ###
 * @brief selectItem
 * Sets navigation action to active by its name. If you are providing a wrong name, no action will be active
 * $$ bmn.selectItem(name) $$
 * @param {str} name The name to be set to active
 */


/** ### selectItemByIndex ###
 * @brief selectItemByIndex
 * Sets a botttom navigation action to active by its index
 * $$ bmn.selectItemByIndex(index) $$
 * @param {num} index The index of the bottom navigation action to be selected
 */


/** ### clearSelection ###
 * @brief clearSelection
 * Clears the selected navigation action
 * $$ bmn.clearSelection() $$
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Updates a navigation action by its index
 * $$ bmn.setItemByIndex(index, newName, newIcon) $$
 * @param {num} index The index to update
 * @param {str} newName The name of the navigation action
 * @param {str} newIcon Material icon
 */


/** ### setIcon ###
 * @brief setIcon
 * Updates the icon of the given index
 * $$ bmn.setIcon(index, newIcon) $$
 * @param {num} index The index of the navigation action to update
 * @param {str} newIcon Material icon
 */


/** ### addItem ###
 * @brief addItem
 * Adds a navigation action
 * $$ bmn.addItem(name, icon, index) $$
 * @param {str} name The name of the navigation action
 * @param {str} icon Material icon
 * @param {num} index The index in which to add the action.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes a navigation action by its given index
 * $$ bmn.removeItemByIndex(index) $$
 * @param {num} index The index of the navigation action to be remove
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes a navigation action by its given name
 * $$ bmn.removeItemByName(name) $$
 * @param {str} name The name of the navigation action to be remove.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first navigation action
 * $$ bmn.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last navigation action
 * $$ bmn.popItem() $$
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function to execute when bottom navbar value changes
 * $$ bmn.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index "],"pTypes":["str-Bottom navigation action text.","num-Bottom navigation action index."]}
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a bottom navigation action. If you want to disable the component, use the `disable` property instead
 * $$ bmn.setEnabled(index, value) $$
 * @param {num} index The index of the navigation action.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a navigation action
 * $$ bmn.getEnabled(index) $$
 * @param {num} index The index of the navigation action.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enabled or disable a bottom navigation action by its name
 * $$ bmn.setEnabledByName(name, value) $$
 * @param {str} name The name of the bottom navigation action.
 * @param {bin} value Values can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of the bottom navigation action by its name
 * $$ bmn.getEnabledByName(name) $$
 * @param {str} name The name of the bottom navigation action.
 * @returns bin
 */


/** ### showLabels ###
 * @brief showLabels
 * Shows the text label of the bottom navigation action
 * $$ bmn.showLabels() $$
 */


/** ### hideLabels ###
 * @brief hideLabels
 * Hides the text label of the bottom navigation action
 * $$ bmn.hideLabels() $$
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ bmn.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ bmn.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ bmn.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ bmn.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ bmn.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ bmn.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ bmn.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ bmn.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ bmn.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ bmn.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ bmn.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ bmn.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ bmn.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ bmn.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ bmn.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ bmn.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Sample navs array.
var navs = [
        [ "Favorites", "favorites" ],
        [ "Groups", "person" ],
        [ "Folder", "folder" ]
    ]
 */
    
            
    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample Hide or show labels
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )

        // Button to show the labels
        this.btn = ui.addButton(this.main, "Show Labels")
        this.btn.setOnTouch( this.showLabels )

        // Button to hide the labels
        this.btn1 = ui.addButton(this.main, "Hide Labels")
        this.btn1.setOnTouch( this.hideLabels )
    }

    showLabels( )
    {
        this.bmn.showLabels()
    }

    hideLabels()
    {
        this.bmn.hideLabels()
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Hide the labels when not active
        this.bmn.labels = false

        // Set the color of the text and icons
        this.bmn.textColor = "#673ab7"
        this.bmn.iconColor = "#673ab7"

        // Set the icon size
        this.bmn.iconSize = "2rem"
    }
}
 */
    
            