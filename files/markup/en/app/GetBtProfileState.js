// ------------- HEADER SECTION ------------- 


/** # GetBtProfileState #
 * @brief Returns Bluetooth type connected state
 * Returns the Bluetooth State of a given Bt connection type.
 * 
 * See Also: @CreateBluetoothSerial
 * $$ app.GetBtProfileState(type) $$ 
 * @param {str} type a2dp|headset|gatt|health
 * @returns str-Connected|Disconnected
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Bluetooth Profile State
function OnStart()
{
    var states = "a2dp|headset|gatt|health".split( "|" );
    var lst = [];

    for( var i in states )
    {
        <b>var state = app.GetBtProfileState( states[i] );</b>
        lst.push( states[i] +  + ": " + state);
    }

    app.Alert( lst.join( "\n" ) );
}
 */
    
            