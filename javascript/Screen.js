var Screen ={plugin : null}
alert("Screen");

Screen.init = function()
    {
       
       var success = true;
        this.plugin = document.getElementById("pluginScreen");
        if (!this.plugin)
            success = false;
        return success;
    }

Screen.changeMode = function()
    {
       if ( 1 == pluginScreen.Flag3DEffectSupport() )
                {
                    var m= pluginScreen.Get3DEffectMode();
                    var k;
                    for (var i = 0; i < 7; ++i) 
                        {
                            k=(m+i+1)%8;
                            
                            if( 1 == pluginScreen.Check3DEffectMode(k))
                                {
                                       pluginScreen.Set3DEffectMode(k);
                                       break;
                                }
                        }
                  
                }
    }

