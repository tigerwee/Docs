// ------------- HEADER SECTION ------------- 


/** # AddBackground #
 * @brief Adds a background to the game
 * Adds a static background to your game.
 * $$ gfx.AddBackground(obj) $$ 
 * @param {gvo} obj CreateBackground
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Basic
cfg.Game;

function OnLoad()
{
    sky = gfx.CreateBackground( "/Sys/Img/Sky.jpg", "stretch" );
}

function OnReady()
{
    <b>gfx.AddBackground( sky );</b>
	gfx.Play();
}
 */
    
            