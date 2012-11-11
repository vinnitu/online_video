var Screen = {};

Screen.init = function() {
    this.plugin = document.getElementById("pluginScreen");

    return !!this.plugin;
}

Screen.changeMode = function() {
   if (1 == pluginScreen.Flag3DEffectSupport()) {
        var m = pluginScreen.Get3DEffectMode();

        for (var i = 0; i < 7; ++i) {
            var k = (m + i + 1) % 8;
            if (1 == pluginScreen.Check3DEffectMode(k)) {
                pluginScreen.Set3DEffectMode(k);
                break;
            }
        }
    }
}
