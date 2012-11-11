 var Loading =
    {
        index: 1,
        run: 0,
        percent:-1
    }

//блок отображения процесса загрузки
Loading.show = function () {
    if (this.run == 0) {
        document.getElementById("loading").style.visibility = "visible";
        this.run = 1;
        Loading.step()
    }
}

Loading.hide = function () {
    document.getElementById("loading").style.visibility = "hidden";
    this.run = 0;
}

Loading.step = function () {
    var div = document.getElementById("loading");
    if (this.percent >0) 
    	document.getElementById("percent").innerText = this.percent + "%";
    else
    	document.getElementById("percent").innerText='';
    			
    if (this.index < 10)
        div.style.background = "url('images/loading/loading_0" + this.index + ".png');" 
    else
        div.style.background = "url('images/loading/loading_" + this.index + ".png');" 
    this.index++;
    if (this.index > 12)
        this.index = 1;
    if (this.run){
        setTimeout("Loading.step();", 500)
    }else{
        Loading.hide();
    }
}

Loading.setPercent = function (percent) {
    this.percent = percent;
}