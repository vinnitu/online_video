var Audio = {};

Audio.init = function() {
    this.plugin = document.getElementById("pluginAudio");

    return !!this.plugin;
}

Audio.setRelativeVolume = function(delta) {
    this.plugin.SetVolumeWithKey(delta);
}

Audio.getVolume = function() {
    return this.plugin.GetVolume();
}

