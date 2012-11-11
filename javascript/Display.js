var Display ={visible: false, wait1: 0, wait2: 0, wait3: 0 }
Display.init = function()
    {
        return true;
    }

Display.setTotalTime = function(total) {this.totalTime = total;}
Display.setTime = function(time)
    {
        var timePercent = (100 * time) / this.totalTime;
        
        var timeHTML = "";
        var timeHour = 0; var timeMinute = 0; var timeSecond = 0;
        var totalTimeHour = 0; var totalTimeMinute = 0; var totalTimesecond = 0;
        document.getElementById("progressBar").style.width = timePercent + "%";
        if(Player.state == Player.PLAYING)
            {
                totalTimeHour = Math.floor(this.totalTime/3600000);
                timeHour = Math.floor(time/3600000);
                totalTimeMinute = Math.floor((this.totalTime%3600000)/60000);
                timeMinute = Math.floor((time%3600000)/60000);
                totalTimeSecond = Math.floor((this.totalTime%60000)/1000);
                timeSecond = Math.floor((time%60000)/1000);
                timeHTML = timeHour + ":";
                if(timeMinute == 0)
                    timeHTML += "00:";
                else if(timeMinute <10)
                    timeHTML += "0" + timeMinute + ":";
                else
                    timeHTML += timeMinute + ":";
                if(timeSecond == 0)
                    timeHTML += "00/";
                else if(timeSecond <10)
                    timeHTML += "0" + timeSecond + "/";
                else
                    timeHTML += timeSecond + "/";
                    
                timeHTML += totalTimeHour + ":";
                if(totalTimeMinute == 0)
                    timeHTML += "00:";
                else if(totalTimeMinute <10)
                    timeHTML += "0" + totalTimeMinute+":";
                else
                    timeHTML += totalTimeMinute+":";
                if(totalTimeSecond == 0)
                    timeHTML += "00";
                else if(totalTimeSecond <10)
                    timeHTML += "0" + totalTimeSecond;
                else
                    timeHTML += totalTimeSecond;
            }
        else
            timeHTML = "0:00:00/0:00:00";
        document.getElementById("timeInfo").innerHTML=timeHTML;
    }


Display.showSize = function(sizeTxt)
{
	Display.wait3++;
    alert(sizeTxt);
    document.getElementById("sizeInfo").innerHTML = sizeTxt;
    document.getElementById("sizeInfoBG").style.visibility = "visible";
}

Display.hideSize = function()
{
	Display.wait3--;
    if (Display.wait3 <= 0)  
      {
         Display.wait3 = 0;
         if (document.getElementById("infoMovi").style.visibility =="hidden")
               document.getElementById("sizeInfoBG").style.visibility="hidden";
       }       
}

Display.showVolume = function(volume)
{
	Display.wait1++;
	alert(volume);
    var volHeight = Math.floor((1 - volume/100)*120); 
	document.getElementById("volumeBar").style.height = volHeight + "px";
    document.getElementById("volumeBarBG").style.visibility="visible";
}

Display.hideVolume = function()
{
   Display.wait1--;
    if (Display.wait1 <= 0)  
      {
         Display.wait1 = 0;
         document.getElementById("volumeBarBG").style.visibility="hidden";
       }   
}


Display.hide=function()
{
    Display.wait2--;
    if (Display.wait2 <= 0)  
      {
        Display.wait2 = 0;
        Display.visible=false;
        document.getElementById("infoMovi").style.visibility="hidden";
        document.getElementById("sizeInfoBG").style.visibility="hidden";
        Helpbar.hide();
      }  
}

Display.show=function()
    {
        Display.wait2++;
        Display.visible=true;
        document.getElementById("infoMovi").style.visibility="visible";
        document.getElementById("sizeInfoBG").style.visibility = "visible";
        Helpbar.show();
    }
    
Display.setTitle=function(text) {
    document.getElementById("titleInfo").innerHTML=text;
    }