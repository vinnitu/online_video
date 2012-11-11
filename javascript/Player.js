var Player = 
    { 
        plugin : null, 
        SefPlugin: null,
        originalSource : null,
        state : -1,
        size: 0,
        w: 0,
        h: 0,
        STOPPED : 0, 
        PLAYING : 1, 
        PAUSED : 2,
        time: 0,
        setup_time: 0,
        url: "",
        msg_0: "",
        msg_1: "",
        msg_2: "",
        msg_3: "",
        msg_4: "",
        msg_5: ""
    }
Player.hideAlert=function()
  {
	var al=document.getElementById("alert");
	if (al!=null) al.style.visibility="hidden";
  }    
Player.init = function(lang)
    {
        var success = true;
        this.state = this.STOPPED;
        //Временно отключил СЕФ
        this.SefPlugin = null; //document.getElementById("pluginObjectSef");
        if (this.SefPlugin == null){
           this.plugin = document.getElementById("pluginPlayer");
        }

        if (!this.plugin && !this.SefPlugin)
            success = false;
        else
            {
                var wPlugin = document.getElementById("pluginWindow");
                if (!wPlugin)
                    success = false;
                else
                    {
                        this.originalSource =wPlugin.GetSource();
                        wPlugin.SetSource(43);
                    }
                }
        if (this.plugin){
           this.plugin.OnCurrentPlayTime = 'Player.setCurTime';
           this.plugin.OnStreamInfoReady ='Player.onStreamInfoReady';  
           this.plugin.OnBufferingStart = 'Player.onBufferingStart';
           this.plugin.OnBufferingComplete = 'Player.onBufferingComplete';
           this.plugin.OnRenderingComplete='Player.onRenderingComplete';  //'Player.stopVideo';
           this.plugin.OnNetworkDisconnected='Player.onNetworkDisconnected';
           this.plugin.OnBufferingProgress = 'Player.onBufferingProgress';
           this.plugin.OnRenderError='Player.onRenderError'; // numer
           this.plugin.OnStreamNotFound = 'Player.onStreamNotFound';
        }
        
        switch (lang) 
            {
                case "7":
                    //CZ
                    Player.msg_0="Připojení k serveru bylo přerušeno !";
                    Player.msg_1="Nepodporovaný kontejner !";
                    Player.msg_2="Nepodporovaný video kodek !";
                    Player.msg_3="Nepodporovaný audio kodek !";
                    Player.msg_4="Nepodporované rozlišení videa !";
                    Player.msg_5="Stream nenájdený !";
                   break;
                   
                case "12":
                    //DE
                    Player.msg_0="Verbindung zum Server fehlgeschlagen !";
                    Player.msg_1="Nicht unterstuetztes Format !";
                    Player.msg_2="Video codec nicht unterstuetzt !";
                    Player.msg_3="Audio codec nicht unterstuetzt !";
                    Player.msg_4="Aufloesung wird nicht unterstuetzt !";
                    Player.msg_5="Datei nicht gefunden !";
                   break;
                   
                case "15":
                    //IT
                    Player.msg_0="La Connessione al server è stata interrotta !";
                    Player.msg_1="Tipo di contenitore non supportato !";
                    Player.msg_2="Codec video non supportato !";
                    Player.msg_3="Codec audio non supportato !";
                    Player.msg_4="Risoluzione video non supportata !";
                    Player.msg_5="File non trovato !";
                    break;
                               
                case "18":
                    //PL
                    Player.msg_0="Połączenie z serwerem zostało przerwane !";
                    Player.msg_1="Nieobsługiwany format pliku !";
                    Player.msg_2="Nieobsługiwany kodek wideo !";
                    Player.msg_3="Nieobsługiwany kodek audio !";
                    Player.msg_4="Nieobsługiwany format pliku !";
                    Player.msg_5="Nie znaleziono pliku !";
                    break;
                
                case "21":
                    //RU
                    Player.msg_0="Связь с сервером прервана !";
                    Player.msg_1="Неподдерживаемый контейнер !";
                    Player.msg_2="Неподдерживаемый видео кодек !";
                    Player.msg_3="Неподдерживаемый аудио кодек !";
                    Player.msg_4="Неподдерживаемое видео разрешение !";
                    Player.msg_5="Файл отсутствует !";
                    break;
                    
                case "23":
                    //SK
                    Player.msg_0="Sieť sa odpojila počas streamovania!";
                    Player.msg_1="Nepodporovaný kontajner !";
                    Player.msg_2="Nepodporovaný video codec !";
                    Player.msg_3="Nepodporovaný audio codec !";
                    Player.msg_4="Nepodporovaný video rozlíšenie!";
                    Player.msg_5="Stream nenájdený !"; 
                    break;
                                     
               case "24":
                    //ES
                    Player.msg_0="La conexiГіn al servidor fue interrumpida !";
                    Player.msg_1="Contenedor no apoyado !";
                    Player.msg_2="CГіdec de vГ­deo no apoyado !";
                    Player.msg_3="CГіdec de audio no apoyado !";
                    Player.msg_4="ResoluciГіn de vГ­deo no apoyada !";
                    Player.msg_5="Archivo no encontrado !"; 
                    break;
                    
                case "26":
                    //TR
                    Player.msg_0="Sunucu Bağlantısı kesildi!";
                    Player.msg_1="Desteklenmeyen İçerik";
                    Player.msg_2="Desteklenmeyen video codeci";
                    Player.msg_3="Desteklenmeyen ses codeci";
                    Player.msg_4="Desteklenmeyen video çözünürlüğü";
                    Player.msg_5="Dosya bulunamadı!"; 
                    break;
                   
                default:
                    Player.msg_0="Connection to server was interrupted !";
                    Player.msg_1="Unsupported container !";
                    Player.msg_2="Unsupported video codec !";
                    Player.msg_3="Unsupported audio codec !";
                    Player.msg_4="Unsupported video resolution !";
                    Player.msg_5="File not found !";
                    break;
            } 
			//var ret= this.plugin.SetPlayerProperty(3, "User-Agent:", "Mozilla/5.0 (Windows; U; Win 9x 4.90; en-US; rv:1.8.1.12) Gecko/20080201 Firefox/2.0.0.12");
			//alert('SetPlayerProperty='+ret);
        return success;
    }

Player.setCurTime = function(time){
    Display.setTime(time);
    this.time=time;
    }

function DelSpaces(str){
    if (str.toString()!=''){
       str = str.replace(/\s/g, '');
    }
    return str.toString();
};

Player.onStreamInfoReady=function()
    {
        if (this.plugin){
           Display.setTotalTime(this.plugin.GetDuration());
           this.h=this.plugin.GetVideoHeight();
           this.w=this.plugin.GetVideoWidth();
        }else if (this.SefPlugin){
           Display.setTotalTime(this.SefPlugin.Execute('GetDuration'));
           var vRes = this.SefPlugin.Execute('GetVideoResolution');
           if (DelSpaces(vRes) != '' && vRes.indexOf('|') >= 0) {
               vRes = vRes.split('|');
               this.w = vRes[0];
               this.h = vRes[1];
           }else{
               this.w = 0;
               this.h = 0;
           }
        }
        this.setSize(this.size);
    }

Player.onBufferingStart = function() 
    {
        //Для моделей 2012
        document.getElementById("back_rss").style.display="none";
      //document.getElementById("back_rss").style.visibility="hidden";
     /*   Display.show();
        if (this.setup_time)
            Helpbar.make(6);
        else
            Helpbar.make(4);*/
		
		Loading.setPercent(-1);
		Loading.show();
		alert("onBufferingStart");
    }
 Player.onBufferingProgress = function(percent)
{
	alert("onBufferingProgress="+percent+"%");
	Loading.setPercent(percent);
	Loading.show();
}

Player.onBufferingComplete = function() 
    {
	   Loading.setPercent(-1);
	   Loading.hide();
       setTimeout("Display.hide();", 3000);
	   alert("onBufferingComplete");
     }   

     
Player.onRenderingComplete=function()
    {
	alert("onRenderingComplete");
        Player.duration=0;
        Player.stopVideo();
    }

Player.stopVideo = function()
    {
        if (this.state != this.STOPPED)
            {
                this.state = this.STOPPED;
                if (this.plugin){
                   this.plugin.Stop();
                }else if (this.SefPlugin){
                   this.SefPlugin.Execute('Stop');
                   this.SefPlugin.Execute('ClearScreen');
                   this.SefPlugin.Close();
                }
                alert("Stopped");
                pluginAPI.setOnScreenSaver();
                pluginAPI.SetBannerState(0);     
            }
            document.getElementById("alert").style.visibility="hidden";
            //Для моделей 2012
            document.getElementById("back_rss").style.display="block";
          //document.getElementById("back_rss").style.visibility="visible";
            Mode=0;
            Loading.hide();
            Display.hide();
            Helpbar.show();
            Helpbar.make(0);
            var setupArray= new Array();
            setupArray[0]=this.url;
            setupArray[1]=this.time;
            File.saveArray(FILE_SETUP,setupArray);
    }
 
 Player.onNetworkDisconnected=function() 
 {

	//Player.error(0);
	document.getElementById("alert").innerHTML="  "+Player.msg_0+"  ";
	 if (this.time>0)
            {
                var setupArray= new Array();
                setupArray[0]=this.url;
                setupArray[1]=this.time;
                File.saveArray(FILE_SETUP,setupArray);
            }
        setTimeout("Player.hideAlert();", 5000);  
        if (this.plugin){
           this.plugin.Stop();
           this.plugin.ResumePlay(this.url,this.time);
	}else if (this.SefPlugin){
           this.SefPlugin.Execute('Stop');
           this.SefPlugin.Execute('ClearScreen');
           this.SefPlugin.Close();

           this.SEFPlay(this.url,this.time);
	}
 }
 
Player.SEFPlay = function (sUrl, nTime){
    this.SefPlugin.Open('Player', '1.000', 'Player');
    this.SefPlugin.Execute('InitPlayer', sUrl);
    this.SefPlugin.OnEvent = 'Player.SefOnEvent';
    this.setBuffer(2*1024*1024);
    this.setSize(this.size);
    this.SefPlugin.Execute('StartPlayback', nTime);
};

Player.SefOnEvent = function (nEv, sPar) {
    switch (nEv) {
    case 1:
        Player.onNetworkDisconnected();
        break;
    case 3:
        Player.onStreamNotFound();
        break;
    case 4:
        Player.onNetworkDisconnected();
        break;
    case 6:
        Player.onRenderError(sPar);;
    case 9:
        Player.onStreamInfoReady();
        break;
    case 11:
        Player.onBufferingStart();
        break;
    case 13:
        Player.onBufferingProgress(sPar);
        break;
    case 12:
        Player.onBufferingComplete();
        break;
    case 14:
        Player.setCurTime(sPar);
        break;
    }
}

 Player.onRenderError=function(err){ 
	alert("onRenderError="+err);
	Player.error(err);
 }
 Player.onStreamNotFound=function() {
	alert("onStreamNotFound");
	Player.error(5);
 }
 Player.error=function(err)
    {
        Loading.hide();
        Display.hide();
        Helpbar.show();
        Helpbar.make(5);
        //Для моделей 2012
        document.getElementById("back_rss").style.display="none";
      //document.getElementById("back_rss").style.visibility="hidden";
        if (err==0)
            document.getElementById("alert").innerHTML="  "+Player.msg_0+"  ";
        else if (err==1)
            document.getElementById("alert").innerHTML="  "+Player.msg_1+"  ";
        else if (err==2)
            document.getElementById("alert").innerHTML="  "+Player.msg_2+"  ";
        else if (err==3)
            document.getElementById("alert").innerHTML="  "+Player.msg_3+"  ";
        else if (err==4)
            document.getElementById("alert").innerHTML="  "+Player.msg_4+"  ";
        else if (err==5)
            document.getElementById("alert").innerHTML="  "+Player.msg_5+"  ";
        document.getElementById("alert").style.visibility="visible";
        
        if (this.time>0)
            {
                var setupArray= new Array();
                setupArray[0]=this.url;
                setupArray[1]=this.time;
                File.saveArray(FILE_SETUP,setupArray);
            }
        setTimeout("Player.hideAlert();", 5000);    
    }



Player.deinit = function()
    {
        var wPlugin = document.getElementById("pluginWindow");
        if (wPlugin && (this.originalSource != null) )
            {
               wPlugin.SetSource(this.originalSource);
                alert("Restore source to " + this.originalSource);
            }
    }

Player.setVideoURL = function(url) 
{ 
    this.url = url; alert("PLAYER URL = " + this.url); 
    var setupArray= new Array();
    File.loadArray(FILE_SETUP,setupArray);
    alert("setupArray[0]:"+setupArray[0]);
    alert("setupArray[1]:"+setupArray[1]);
    if (setupArray[0]==url)
            this.setup_time=setupArray[1];
    else
            this.setup_time=0;
    }
    
Player.playVideo = function(size) 
    { 
        if (this.url == null) 
            alert("No videos to play");
        else
            { 
                size = parseInt(size, 10);
                if(isNaN(size)) size = 0;  
                if (size <0 || size >3) size = 0;  
                this.size = size;
                this.state = this.PLAYING; 
                if (this.plugin){
                   this.plugin.Play( this.url ); 
                }else if (this.SefPlugin){
                   this.SEFPlay(this.url,0);
                }
                //проверка наличия аудиодорожек
                this.CheckExtAudioTrack();
                pluginAPI.setOffScreenSaver(); 
                pluginAPI.SetBannerState(2); 
                //Loading.hide();
            } 
    }
    

Player.pauseVideo = function()
    {
        if (this.state != this.STOPPED)
            {
                this.state = this.PAUSED;
                if (this.plugin){
                   this.plugin.Pause();
                }if (this.SefPlugin){
                   this.SefPlugin.Execute('Pause');
                }
                pluginAPI.setOnScreenSaver();
                Loading.hide();
            }
    }
    
 Player.setSpeed=function(s)
    {
        this.plugin.SetPlaybackSpeed(s);
    }
    
Player.resumeVideo = function()
    {
         if (this.state != this.STOPPED)
            {
                this.state = this.PLAYING;
                if (this.plugin){
                   this.plugin.Resume();
                }if (this.SefPlugin){
                   this.SefPlugin.Execute('Resume');
                }
                pluginAPI.setOffScreenSaver();
           }
    }

Player.skipForwardVideo = function()
    {
        if (this.state != this.STOPPED)
       	{
            Loading.setPercent(-1);
            Loading.show();
	    if (this.plugin){
               this.plugin.JumpForward(60);
            }else if (this.SefPlugin){
               this.SefPlugin.Execute('JumpForward', 60);
            }
	    Loading.hide();
	}
    }

Player.skipBackwardVideo = function()
    {
        if (this.state != this.STOPPED)
	{
           Loading.setPercent(-1);
           Loading.show();
           if (this.plugin){
              this.plugin.JumpBackward(60);
           }else if (this.SefPlugin){
              this.SefPlugin.Execute('JumpBackward', 60);
           }
           Loading.hide();
	}
    }

Player.bigSkipForwardVideo = function()
    {
        if (this.state != this.STOPPED)
	{
           Loading.setPercent(-1);
           Loading.show();
           if (this.plugin){
              this.plugin.JumpForward(500);
           }else if (this.SefPlugin){
              this.SefPlugin.Execute('JumpForward', 500);
           }
           Loading.hide();
	}
    }

Player.bigSkipBackwardVideo = function()
    {
        if (this.state != this.STOPPED)
	{
           Loading.setPercent(-1);
           Loading.show();
           if (this.plugin){
              this.plugin.JumpBackward(500);
           }else if (this.SefPlugin){
              this.SefPlugin.Execute('JumpBackward', 500);
           }
           Loading.hide();
	}
    }

Player.jumpSetupTime=function()
{
    if (this.state == this.PLAYING)
        {
            if (this.setup_time>this.time)
            {
                alert("jump; "+(this.setup_time-this.time)/1000)
                if (this.plugin){
                   this.plugin.JumpForward((this.setup_time-this.time)/1000);
                }else if (this.SefPlugin){
                   this.SefPlugin.Execute('JumpForward', (this.setup_time-this.time)/1000);
                }
            }
        }
}

Player.getState = function()
    {
        return this.state;
    }
    
Player.setBuffer = function(len)
    {
       if (this.plugin){
          this.plugin.SetTotalBufferSize(len);
       }else if (this.SefPlugin){
          this.SefPlugin.Execute('SetTotalBufferSize', len);
       }
       alert("BUFFER: "+len);
    }
    
    
Player.setSize=function(mode)
    {
        if (this.state == this.PLAYING)
        {
            this.size=mode;
            if (this.plugin){
               this.plugin.SetCropArea(0, 0, 0, 0);
            }else if (this.SefPlugin){
               this.SefPlugin.Execute('SetCropArea', 0, 0, 0, 0);
            }
           // var h=this.plugin.GetVideoHeight();
           // var w=this.plugin.GetVideoWidth();
            var w=this.w;
            var h=this.h
            var l;
            var t;
        
            switch(mode)
                {
                    case 0 :
                        var l=(960-w)/2;
                        var t=(540-h)/2;
                        if (this.plugin){
                           this.plugin.SetDisplayArea(l, t,w,h);
                        }else if (this.SefPlugin){
                           this.SefPlugin.Execute('SetDisplayArea', l, t,w,h);
                        }
                        Display.showSize("Default Size");
                        setTimeout("Display.hideSize();", 3000);
                        break;
           
                    case 1 :
                        var z = 960/w;
                        var m = parseInt(z*h);
                        var y = parseInt((540-m)/2);
                        if(w/h>1.777)
                          {
                               if (this.plugin){
                                  this.plugin.SetDisplayArea(0, y, 960, m);
                               }else if (this.SefPlugin){
                                  this.SefPlugin.Execute('SetDisplayArea', 0, y, 960, m);
                               }
                           }
                           else
                           {
                               if (this.plugin){
                                  this.plugin.SetCropArea(0, 70, w, 436);
                                  this.plugin.SetDisplayArea(0, 0, 960, 540);
                               }else if (this.SefPlugin){
                                  this.SefPlugin.Execute('SetCropArea', 0, 70, w, 436);
                                  this.SefPlugin.Execute('SetDisplayArea', 0, 0, 960, 540);
                               }
                            }
                        Display.showSize("Fit to window");
                        setTimeout("Display.hideSize();", 3000);
                        break;

                    case 2 :
                       if (this.plugin){
                           this.plugin.SetCropArea(0, 0, w, h);
                           this.plugin.SetDisplayArea(120,0,720,540);
                       }else if (this.SefPlugin){
                           this.SefPlugin.Execute('SetCropArea', 0, 0, w, h);
                           this.SefPlugin.Execute('SetDisplayArea', 120,0,720,540);
                        }
                        Display.showSize("4 x 3");
                        setTimeout("Display.hideSize();", 3000);
                       break;

                    case 3 :    
                        if (this.plugin){
                           this.plugin.SetDisplayArea(0, 0, 960, 540);
                        }else if (this.SefPlugin){
                           this.SefPlugin.Execute('SetDisplayArea', 0, 0, 960, 540);
                        }
                        Display.showSize("16 x 9");
                        setTimeout("Display.hideSize();", 3000);
                        break;
                }
        }
    }

Player.getSize=function() {return this.size;}

Player.CheckExtAudioTrack = function () {
    if (this.SefPlugin != null){
        var allTrack = this.SefPlugin.Execute('GetTotalNumOfStreamID', 1);
        if (allTrack > 1){
           Display.showSize("AD/SUBT - Audio Track");
           setTimeout("Display.hideSize();", 3000);
        }
    }
}

Player.SetNextAudioTrack = function (){
    if (this.state != this.STOPPED && 
        this.SefPlugin != null){

        var allTrack = this.SefPlugin.Execute('GetTotalNumOfStreamID', 1) - 1;
        var nexTrack = this.SefPlugin.Execute('GetCurrentStreamID', 1) + 1;

        if (nexTrack > allTrack || nexTrack < 0){
            nexTrack = 0;
        }

        this.SefPlugin.Execute('SetStreamID', 1, nexTrack);
        Display.showSize("Audio Track #" + nexTrack.toString());
        setTimeout("Display.hideSize();", 3000);
            
    }
}