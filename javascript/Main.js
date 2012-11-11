var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();


var _g_tigger = {
    PL_APPCOMMON_MESSAGE_IME_INPUT : 45,
	PL_APPCOMMON_MESSAGE_QWERTY_KEY_INPUT : 50,
	PL_APPCOMMON_MESSAGE_INPUT_OCCUR : 23,    
	pluginAppCommon : null
};

var XHRExample = { XHRObj : null };
var frame_top=new Array('252px','292px','332px','372px','412px','452px');

var Mode=""; 
var helpBarSave = null;
var keybMode=false;
var xmlMode=false;
var ajaxMode=0;
var webTop=0;
var webLeft=0;
var langTv;
var run=false;
var camCmd;

var modeTools = false;

var nodeArray=new Array();
var returnArray=new Array();
var retNode; 
var channel=new channel();
var folder_title;
var baseUrl;

function rssNode()
    {
        this.title=""; 
        this.date="";  
        this.text="";
        this.img=null;
        this.video="";
        this.xml="";
        this.web="";
        this.ico="";
        this.arg="";
        this.app=null;
        this.psize="";
   }

function returnNode()
    {
        this.url="";
        this.title_index=0;
        this.frame_index=0;
		this.mode="xml";
    }
 
 function channel()
    {  
        this.title="";
        this.text="";
        this.img="";
        this.date=""; 
    }

var APP_NAME="Online Video 2.77";    
var FILE_URL_VIDEO="V_NetPlayer_url.dat";
var FILE_URL_AUDIO="A_NetPlayer_url.dat";
var FILE_URL_TV="T_NetPlayer_url.dat";
var FILE_URL_FOTO="F_NetPlayer_url.dat";
var FILE_URL_RSS="R_NetPlayer_url.dat";
var FILE_URL_MAIL="M_NetPlayer_url.dat";
var FILE_URL_USENET="U_NetPlayer_url.dat";
var FILE_SETUP="NetPlayer_setup.dat";
var FILE_FAV="Fav_NetPlayer.dat";

//var frame_index=0;
//var title_index=0;
var url_index;
var langTv=0;



var Main = 
    {
        mute : 0,
        NMUTE : 0,
        YMUTE : 1,
	search:''
    }
        
Main.onLoad = function()
{
try
{
	alert("START");
	
    widgetAPI.sendReadyEvent();

    document.getElementById("anchor").focus();
    
    _g_tigger.pluginAppCommon = document.getElementById('pluginObjectAppCommon_IME');
    if (_g_tigger.pluginAppCommon != null){
       _g_tigger.pluginAppCommon.OnMessage = _tigger_remoteInput;
       _g_tigger.pluginAppCommon.SubscribeEvent(_g_tigger.PL_APPCOMMON_MESSAGE_IME_INPUT);
       _g_tigger.pluginAppCommon.SubscribeEvent(_g_tigger.PL_APPCOMMON_MESSAGE_QWERTY_KEY_INPUT);
    }

    langTv=getLang();  
    alert(Player.init(langTv));
    alert(Audio.init());
    alert(Display.init());
    alert(Screen.init());
    baseUrl=window.location.toString();
    baseUrl= baseUrl.substr(0, baseUrl.lastIndexOf("/")+1);

	setTitle(APP_NAME);
    Keyboard.init(Keyboard_callback);
   
    Helpbar.init(langTv);
    Helpbar.make(10);
    
   run=true;
   retNode=new returnNode();
  
   retNode.title_index=0;
   retNode.frame_index=0;
   retNode.url = "XML/start.xml";
   setInterval ("showTime();", 1000 );
   xmlMode=true;
   XHRExample.getXml(retNode.url);
   }
   catch(exp)
   {
     var elem = document.getElementById('lblHeaderText');
	 elem.innerHTML = 'Error Message: ' + exp.message+'<br/>Error Name: ' + exp.name;
	
   }
}

Main.onUnload = function()
{
   //alert("unload orugnal source: "+orginalSource);
   if (Mode=="PLAYER")    Player.stopVideo();
   Player.deinit();
    //document.getElementById("pluginWindow").SetSource(orginalSource);
}

//*************************************************************************************************
//                  KLAWIATURA
//*************************************************************************************************
Main.MainKeyHandler = function () {
    var keyCode = event.keyCode;

    if (Mode == "INFO" && keyCode != tvKey.KEY_DOWN && keyCode != tvKey.KEY_UP)
        hideHeaderInfo();
    else
        switch (keyCode) {
        /* 
        case tvKey.KEY_2:
        break;
         
        */ 
        case tvKey.KEY_LEFT:
            if (Mode == "WEB") {
                if (webLeft > 0) {
                    webLeft = webLeft - 50;
                    document.getElementById("iframe").style.left = "-" + webLeft + "px";
                    document.getElementById("iframe").style.width = 960 + webLeft + "px";
                }
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.setLeft();
            }
            else if (Mode == "CAM") {
                camCmd = "left";
                Loading.setPercent(-1);
                Loading.show();
                setTimeout("Loading.hide();", 2000);
            }
            else if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                Player.bigSkipBackwardVideo();
            }
            else if (Mode == "")
                upPageFrame();
            break;

        case tvKey.KEY_RIGHT:
            if (Mode == "WEB") {
                webLeft = webLeft + 50;
                document.getElementById("iframe").style.left = "-" + webLeft + "px";
                document.getElementById("iframe").style.width = 960 + webLeft + "px";
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.setRight();
            }
            else if (Mode == "CAM") {
                camCmd = "right";
                Loading.setPercent(-1);
                Loading.show();
                setTimeout("Loading.hide();", 2000);
            }
            else if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                Player.bigSkipForwardVideo();
            }
            else if (Mode == "")
                downPageFrame();
            break;

        case tvKey.KEY_UP:
            if (Mode == "")
                upFrame()
            else if (Mode == "WEB") {
                if (webTop > 0) {
                    webTop = webTop - 100;
                    document.getElementById("iframe").style.top = "-" + webTop + "px";
                    document.getElementById("iframe").style.height = 505 + webTop + "px";
                }
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.setUp();
            }
            else if (Mode == "PLAYER") {
                alert("size");
                if (Player.getSize() >= 3)
                    Player.setSize(0);
                else
                    Player.setSize(Player.getSize() + 1);
            }
            else if (Mode == "CAM") {
                camCmd = "up";
                Loading.setPercent(-1);
                Loading.show();
                setTimeout("Loading.hide();", 2000);
            }
            else if (Mode == "INFO") {
                document.getElementById('header').scrollTop = document.getElementById('header').scrollTop - 60;
            }
            break;

        case tvKey.KEY_DOWN:
            if (Mode == "")
                downFrame();
            else if (Mode == "WEB") {
                webTop = webTop + 100;
                document.getElementById("iframe").style.top = "-" + webTop + "px";
                document.getElementById("iframe").style.height = 505 + webTop + "px";
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.setDown();
            }
            else if (Mode == "CAM") {
                camCmd = "down";
                Loading.setPercent(-1);
                Loading.show();
                setTimeout("Loading.hide();", 2000);
            }
            else if (Mode == "PLAYER") {
                alert("size");
                if (Player.getSize() == 0)
                    Player.setSize(3);
                else
                    Player.setSize(Player.getSize() - 1);
            }
            else if (Mode == "INFO") {
                document.getElementById('header').scrollTop = document.getElementById('header').scrollTop + 60;
            }
            break;
        case 75:     // TOOLS
            alert("KEY_TOOLS");
            if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.shiftChange();
            }
            else if (Mode == "PLAYER") {
                if (modeTools)
                    pluginAPI.ShowTools(1); // VIDEO 
                else
                    pluginAPI.ShowTools(0); // AUDUO 

                modeTools = !modeTools;
            }
            break;
        case 84:     //CH_LIST 
        case 259:  //  PRE_CH
            if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.backSpace();
            }
            break;
        case 262:  // MENU
            if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.callback(Keyboard.str);
            }
            else if (Mode == "PLAYER") {
                Display.wait2 = 0;
                Display.hide();
            }
            else
                openFav();
            break;
        case tvKey.KEY_ENTER:
            if (Mode == "") {
                //              if (returnArray.length )
                {
                    if ((retNode.title_index + retNode.frame_index == 0) && (returnArray.length))
                        selectReturn();
                    else {
                        alert("retNode.title_index+retNode.frame_index" + retNode.title_index + retNode.frame_index);
                        switch (nodeArray[retNode.title_index + retNode.frame_index].app) {
                            case "parser":
                                var url = nodeArray[retNode.title_index + retNode.frame_index].xml;
                                returnArray.push(retNode);
                                retNode = new returnNode;

                                alert(url);
                                if (url.substr(0, 3) == "XML")
                                    retNode.mode = "xml";
                                else
                                    retNode.mode = "parser";
                                retNode.url = url;
                                selectParser(url);
                                alert("push: " + retNode.title_index + "/" + retNode.frame_index + "  " + retNode.url);
                                var url = nodeArray[retNode.title_index + retNode.frame_index].xml;


                                break;
                            case "user":
                                folder_title = nodeArray[retNode.frame_index + retNode.title_index].title;
                                setTitle(folder_title);
                                returnArray.push(retNode);
                                retNode = new returnNode();
                                retNode.title_index = 0;
                                retNode.frame_index = 1;
                                openFolder(1);
                                break;

                            case "input":
                                selectInput("INPUT");
                                break;

							case "searchparser":
                                selectInput("SEARCHPARSER");
                                break;
                            case "xml":
                                selectXml();
                                break;

                            case "video":
                                selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                                break;

                            case "flash":
                                selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                                break;

                            case "audio":
                                selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                                break;

                            case "img":
                                selectWeb();
                                break;

                            case "web":
                                selectWeb();
                                break;

                            case "cam":
                                selectCam();
                                break;
                        }
                    }
                }
                //                  else   selectFolder();
            }
            else if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                this.handlePauseKey();
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER")
                Keyboard.addKey();

            break;

        case tvKey.KEY_RETURN:
            if (returnArray.length) {
                if (Mode == "")
                    selectReturn();
                else if (Mode == "CAM") {
                    document.getElementById("imgCam").src = "";
                    document.getElementById("imgCam").style.visibility = "hidden";
                    document.getElementById("back_rss").style.visibility = "visible";
                    Helpbar.make(0);
                }
                else if (Mode == "WEB" || Mode == "FLASH") {
                    document.getElementById("iframe").src = "";
                    document.getElementById("iframe").style.visibility = "hidden";
                    Helpbar.show();

                }
                else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER")
                    Keyboard.hide();
                else if (Mode == "PLAYER")
                    Player.stopVideo()

                Mode = "";
                widgetAPI.blockNavigation(event);
            }
            break;

        case tvKey.KEY_PLAY:
            if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                this.handlePlayKey();
            }
            else if (Mode == "FLASH")
                document.getElementById('iframe').contentDocument.getElementById('swf').SetVariable("player:jsPlay", "");
            break;

        case tvKey.KEY_STOP:
            if (Mode == "PLAYER")
                Player.stopVideo();
            else if (Mode == "FLASH")
                document.getElementById('iframe').contentDocument.getElementById('swf').SetVariable("player:jsStop", "");
            break;

        case tvKey.KEY_PAUSE:
            if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                this.handlePauseKey();
            }
            else if (Mode == "FLASH")
                document.getElementById('iframe').contentDocument.getElementById('swf').SetVariable("player:jsPause", "");
            break;

        case tvKey.KEY_FF:
            if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                Player.skipForwardVideo();
            }
            else if (Mode == "")
                downPageFrame();
            break;

        case tvKey.KEY_RW:
            if (Mode == "PLAYER") {
                Display.show();
                setTimeout("Display.hide();", 3000);
                Player.skipBackwardVideo();
            }
            else if (Mode == "")
                upPageFrame();
            break;

        case tvKey.KEY_BLUE:
            if (Mode == "PLAYER")
                Player.jumpSetupTime();
            else {
                openFav();
            }
            break;

        case tvKey.KEY_RED:
            if (Helpbar.mode == 1) {
                if (retNode.title_index + retNode.frame_index) {
                    File.delUrl(retNode.url, retNode.title_index + retNode.frame_index - 1);
                    if (retNode.frame_index)
                        retNode.frame_index--;
                    else
                        retNode.title_index
                    makeNodeArray(retNode.url);
                }

            }
            else if (Helpbar.mode == 9) {
                if (retNode.title_index + retNode.frame_index) {
                    File.delUrl(FILE_FAV, retNode.title_index + retNode.frame_index - 1);
                    upFrame();
                    openFav(true);
                }
            }
            else
                Screen.changeMode();
            break;

        case tvKey.KEY_GREEN:
            if (Helpbar.mode == 1) {
                keybMode = true;
                Keyboard.cyr = false;
                Keyboard.show();
                Keyboard.setText(nodeArray[retNode.title_index + retNode.frame_index].xml);
                Helpbar.make(3);
                Mode = "KEYB";
            }
            else if (Helpbar.mode == 9) {
                if ((retNode.title_index + retNode.frame_index) < (nodeArray.length - 1)) {
                    File.moveUrl(FILE_FAV, retNode.title_index + retNode.frame_index - 1, -1);
                    openFav(true);
                    downFrame();
                }
            }
            break;

        case tvKey.KEY_YELLOW:
            if (Helpbar.mode == 1) {
                keybMode = false;
                Keyboard.cyr = false;
                Keyboard.show();
                Keyboard.setText("http://");
                Helpbar.make(3);
                Mode = "KEYB";
            }
            if (Helpbar.mode == 9) {
                if (retNode.title_index + retNode.frame_index > 1) {
                    File.moveUrl(FILE_FAV, retNode.title_index + retNode.frame_index - 1, 1);
                    openFav(true);
                    upFrame();
                }
            }
            else
                if (returnArray.length)
                    if (retNode.title_index + retNode.frame_index > 0 && Helpbar.mode != 3)  // if no Return node
                        addFav(nodeArray[retNode.title_index + retNode.frame_index]);
            break;

        case tvKey.KEY_VOL_UP:
        case tvKey.KEY_PANEL_VOL_UP:
            alert("VOL_UP");
            if (this.mute == 0)
                Audio.setRelativeVolume(0);
            if (Mode == "PLAYER") {
                // TestPlayerPlugin();  
                Display.showVolume(Audio.getVolume());
                setTimeout("Display.hideVolume();", 3000);
            }
            break;

        case tvKey.KEY_VOL_DOWN:
        case tvKey.KEY_PANEL_VOL_DOWN:
            alert("VOL_DOWN");
            if (this.mute == 0)
                Audio.setRelativeVolume(1);
            if (Mode == "PLAYER") {
                Display.showVolume(Audio.getVolume());
                setTimeout("Display.hideVolume();", 3000);
            }
            break;

        case tvKey.KEY_MUTE:
            alert("MUTE");
            this.muteMode();
            break;

        case tvKey.KEY_INFO:
            if (Mode == "PLAYER") {
                if (Display.visible)
                    Display.hide()
                else
                    Display.show();
            }
            else if (Mode == "KEYB" || Mode == "INPUT" || Mode == "SEARCHPARSER") {
                Keyboard.langChange();
            }
            else if (Mode == "") {
                if (nodeArray)
                    switch (nodeArray[retNode.title_index + retNode.frame_index].app) {
                    case "xml":
                    case "video":
                    case "flash":
                    case "audio":
                    case "parser":
                    case "searchparser":
                        showHeaderInfo();
                        break;
                }
            }

            break;

        case 1249:   //FULL SCREEN
        case 653:   //P.SIZE
            alert("size");
            if (Player.getSize() >= 3)
                Player.setSize(0);
            else
                Player.setSize(Player.getSize() + 1);
            break;

        case 147: //INTERNET
            widgetAPI.blockNavigation(event);
            break;

        case 1219: //3D
            Screen.changeMode();
            break;

        case 68: // P UP
            if (Mode == "PLAYER") {
                Player.stopVideo();
                upFrame();
                switch (nodeArray[retNode.title_index + retNode.frame_index].app) {
                    case "video":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;

                    case "flash":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;

                    case "audio":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;
                }
            }
            break;

        case 65: // P DOWN
            if (Mode == "PLAYER") {
                Player.stopVideo();
                downFrame();
                switch (nodeArray[retNode.title_index + retNode.frame_index].app) {
                    case "video":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;

                    case "flash":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;

                    case "audio":
                        selectVideo(nodeArray[retNode.title_index + retNode.frame_index].video);
                        break;
                }
            }
            break;

        case tvKey.KEY_SUBTITLE:
            Player.SetNextAudioTrack();
            break;

        default:
            alert("KEY: " + keyCode);
            testkey = keyCode;
            break;
    }
}


    
Main.handlePlayKey = function()
    {
        switch ( Player.getState() )
        {
            case Player.STOPPED:
                Player.playVideo();
                break;

            case Player.PAUSED:
                Player.resumeVideo();
                break;
       }
    }
    
Main.handlePauseKey = function()
    {
        
        switch ( Player.getState() )
            {
                case Player.PLAYING:
                    Player.pauseVideo();
                    break;
                    
                case Player.PAUSED:
                    Player.resumeVideo();
                    break;
            }
    }


function callback_AV_Settings() {
    alert("callback_AV_Settings");
}

function showHeaderInfo()  {
  switch (Helpbar.mode) {
   case 8:
   case 9:
   case 10: {
       alert("InfoFull");
       Mode="INFO";
       document.getElementById('header').className = 'b_header';
	//   document.getElementById('imgHeader').width='920px';
	 //  document.getElementById('imgHeader').height='438px';
       helpBarSave = Helpbar.mode;
       Helpbar.make(5);
     }  
  }   
}

function hideHeaderInfo()  {
  Mode="";
  document.getElementById('header').className = 's_header';
  document.getElementById('header').scrollTop=0;
  Helpbar.make(helpBarSave);
  widgetAPI.blockNavigation(event);
}


function selectWeb()
    {
        Loading.setPercent(-1);
		Loading.show();
        Mode="WEB";
        webLeft=0;
        webTop=0;
        document.getElementById("iframe").style.width="960px";
        document.getElementById("iframe").style.height="505px";
        if (nodeArray[retNode.title_index+retNode.frame_index].web==nodeArray[retNode.title_index+retNode.frame_index].img)
            {
                var ifrm = document.getElementById('iframe');
                ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
                ifrm.document.open();
                ifrm.document.write('<html><body bgcolor="white" style="text-align: center; "><img src="')
                ifrm.document.write( nodeArray[retNode.title_index+retNode.frame_index].img);
                 ifrm.document.write('"></img></body></html>');
               ifrm.document.close();
            }
        else
			document.getElementById("iframe").src=nodeArray[retNode.title_index+retNode.frame_index].web;
        //   if (returnArray[1].url==FILE_URL_MAIL)
         //       document.getElementById("iframe").src=nodeArray[retNode.title_index+retNode.frame_index].web;
         //  else
         //       document.getElementById("iframe").src="http://tvwidget.pl/web.php?url="+nodeArray[retNode.title_index+retNode.frame_index].web;

        
        alert("selectWeb:"+ nodeArray[retNode.title_index+retNode.frame_index].web);
    }

function setTitle(title)
{
	alert('setTitle:'+title);
	if (title==null || title==='undefined') 
		document.getElementById('title').innerHTML='Загрузка...';
		else
		document.getElementById('title').innerHTML=title;
		
}    
function selectReturn()
    {
        //Сбрасываем открытие плейлиста, если идет
        Loading.hide();
        URLtoXML.outFmt='rss';
        URLtoXML.stopRequest();
        //отсчитываем обратный переход страницы в плейлисте
        URLtoXML.NoP = URLtoXML.NoP - 2;

        xmlMode=true;
        alert("return len: "+returnArray.length);
        alert("return url: " + retNode.url.substr(0,9));
        retNode=returnArray.pop();
        if (retNode.url.substr(0,9)=="XML/start")
            document.getElementById('title').innerHTML=APP_NAME;
        else
			setTitle(folder_title);
		 alert(retNode.mode);
        alert("pop: "+retNode.title_index+"/"+retNode.frame_index+"  "+ retNode.url);
         switch(retNode.url.substr(0,4))
            {
                case "http" :
                    if (returnArray.length)
                        Helpbar.make(8);
                    else    
                        Helpbar.make(10);
						
      			if (retNode.mode=="parser")
        			selectParser(retNode.url);
      			else
      				XHRExample.getXml(retNode.url);
                    break;
                                        
                case "V_Ne":
                    openFolder(1);
                    break;
               
                case "A_Ne":
                    openFolder(2);
                    break;
               
               case "T_Ne":
                    openFolder(3);
                    break;
                    
                case "F_Ne":
                    openFolder(4);
                     break;
               
               case "R_Ne":
                    openFolder(5);
                    break;
               
               case "M_Ne":
                    openFolder(6);
                    break;
                
                case "U_Ne":
                    openFolder(7);
                    break;
                
                case "Fav_":
                    openFav();
                    break;
                    
                case "XML/":
                    Helpbar.make(0);
                    XHRExample.getXml(retNode.url);
                    break;
            }
    }

function selectCam()
    {
        Mode="CAM";
        document.getElementById("imgCam").style.visibility="visible";
        document.getElementById("back_rss").style.visibility="hidden";
        Helpbar.make(2);
        camPic();      
    }
    
 function selectInput(mode)
    {
         alert(mode);
         keybMode=true;
         Keyboard.cyr= true;
         Mode=mode;
         Helpbar.make(3);
         Keyboard.setText(Main.search);
         Keyboard.show();
    }
    
 function selectXml()
    {
        alert("xml" + returnArray.length);
         xmlMode=false;
        var i=retNode.frame_index+retNode.title_index;
        alert("push: "+retNode.title_index+"/"+retNode.frame_index+"  "+ retNode.url);
        returnArray.push(retNode);
        retNode=new returnNode;
        retNode.url=nodeArray[i].xml;
		retNode.mode="xml";
        if (returnArray.length)
           Helpbar.make(8);
        else    
           Helpbar.make(10);
        XHRExample.getXml(retNode.url);
    }
 
 //Если в xml type="parser", значит отправляем на обработку в внутрений парсер сайтов
 function selectParser(url)
 {
	alert("selectParser:"+url);
	Loading.setPercent(-1);
	Loading.show();
	url=url.replace(/&amp;/g,'&');

	URLtoXML.StartParseRSS(url);
 }
 
 
 function selectVideo(url)
    {
        alert("video");
		url=url.replace(/&amp;/g,'&');
        Mode="PLAYER";
        Display.setTitle(nodeArray[retNode.title_index+retNode.frame_index].title);
        Helpbar.make(5);
           Loading.setPercent(-1);
		   Loading.show();
         //var url=nodeArray[retNode.title_index+retNode.frame_index].video
        alert("selectVideo:"+url);
		
        if ( Decurl.checkUrl(url) > 0)
           {
                ajaxMode=2;
                XHRExample.getXml(url, 2);
            }
       else  if (url.indexOf("http://www.megavideo.com")==0)
           {
                ajaxMode=1;
                XHRExample.getXml("http://www.megavideo.com/xml/videolink.php"+url.substr(24),1);
            }
       else if(nodeArray[retNode.title_index+retNode.frame_index].app=="flash")
            {
                 Mode="FLASH";
                alert ("FLV");
                var h=520;
                var w=944;
                
                webLeft=0;
                webTop=0;
                document.getElementById("iframe").style.width="960px";
                document.getElementById("iframe").style.height="530px";
                
                 var p;
                 var stream="";
                if (url.substr(0,4).toLowerCase()=="rtmp" )
                    {
                        var m= url.lastIndexOf("&id="); 
                        if (m>0)
                             stream="netconnection="+url.substr(0,m)+"/&amp;flv="+url.substr(m+4);
                        else
                            stream=url;
                    }
                else
                  stream="flv="+url;
              alert (stream);         
               p='<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><base href="'+baseUrl+'" /></head>';
               p=p+'<body bgcolor="black"><object id="swf" type="application/x-shockwave-flash" data="player.swf" width="' + w + '" height="'+h+'">';
               p=p+'<param name="movie" value="player.swf" />';
               p=p+'<param name="allowFullScreen" value="true" /><param name="FlashVars" value="' + stream + '&amp;height=' + h + '&amp;width='+w+'&amp;autoplay=1&amp;showfsbutton=false&amp;margin=0" /></object></body></html>'+"\r\n"; 
                   
                alert ("selectVideo: " + p);
              
                var ifrm = document.getElementById('iframe');
                ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
                ifrm.document.open();
                ifrm.document.write(p);
               ifrm.document.close();
           
            }
        else if(url.substr(0,4).toLowerCase()=="rtmp")
            {
                 Mode="FLASH";
                alert ("RTMP");
                var h=520;
                var w=944;
                
                webLeft=0;
                webTop=0;
                document.getElementById("iframe").style.width="960px";
                document.getElementById("iframe").style.height="530px";
                
                 var p;
                 var stream=url;
                var m= url.lastIndexOf("/");
                if (url.indexOf("&id=")==-1)
                    {
                        if (m>0)
                            {
                                stream="&id="+url.substr(m+1);
                                stream=url.substr(0,m+1)+stream;
                            }
                   }
                
                p='<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><base href="'+baseUrl+'" /></head>';
                p=p+'<body bgcolor="black"><object type="application/x-shockwave-flash" data="mediaplayer.swf" width="' + w + '" height="'+h+'">';
                p=p+'<param name="movie" value="mediaplayer.swf" />';
                p=p+'<param name="allowFullScreen" value="true" /><param name="FlashVars" value="height=' + h + '&width='+w+'&file=' + stream + '&autostart=true" /></object></body></html>'+"\r\n"; 
                
                alert ("selectVideo: " + p);
              
                var ifrm = document.getElementById('iframe');
                ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
                ifrm.document.open();
                ifrm.document.write(p);
               ifrm.document.close();
           
            }
        else
            {
               Player.setVideoURL(url);
               if (nodeArray[retNode.title_index+retNode.frame_index].app=="audio")
                    Player.setBuffer(2*1024*1024);
//               if (nodeArray[retNode.title_index+retNode.frame_index].app=="video")
 //                   Player.setBuffer(25*1024*1024);
  //             if(url.substr(0,6).toLowerCase()=="udp://")
   //                 Player.setBuffer(1*1024*1024);
               
            var _size = 1;
            var _str =  nodeArray[retNode.title_index+retNode.frame_index].psize.toLowerCase();
            
            if (_str.indexOf("fit",0) >= 0) _size = 1;
            else
            if (_str.indexOf("4x3",0) >= 0) _size = 2;
            else
            if (_str.indexOf("16x9",0) >= 0) _size = 3;
                    
            Player.playVideo(_size);
            }     
    }
    
 function selectFolder()
    {
        var i=retNode.frame_index+retNode.title_index;
        folder_title=nodeArray[i].title;
        folder_title(folder_title);
        returnArray.push(retNode);
        retNode=new returnNode();
      if (i)
            {
                retNode.title_index=0;
                retNode.frame_index=1;
                openFolder(i);
            }
    else
           switch (langTv) 
                        {
                            case "7":
                                //CZ
                                 XHRExample.getXml("XML/help_cz.xml");
                                 break;
                            case "12":
                                    //DE
                                     XHRExample.getXml("XML/help_de.xml");
                                    break;    
                            case "15":
                                    //IT
                                     XHRExample.getXml("XML/help_it.xml");
                                    break;
                            case "18":
                                    //PL
                                     XHRExample.getXml("XML/help_pl.xml");
                                    break;
                             case "21":
                                    //RU
                                     XHRExample.getXml("XML/help_ru.xml");
                                    break;       
                            case "23":
                                    //SK
                                     XHRExample.getXml("XML/help_sk.xml");
                                    break;
                            case "24":
                                    //ES
                                     XHRExample.getXml("XML/start_es.xml");
                                    break;
                            case "26":
                                    //TR
                                     XHRExample.getXml("XML/help_tr.xml");
                                    break;        
                            default:
                                     XHRExample.getXml("XML/help_en.xml");
                        }      
    }
    
function parserTags(str, tag, def) 
{
       var res = def;
       var tmp = str; 
       var i = tmp.indexOf("<"+tag+">");
        if ( i >= 0 )   {
            tmp = tmp.substr(i + tag.length+2);
            i = tmp.indexOf("</"+tag+">");
            if ( i > 0 )   res = tmp.substr(0, i);
        }
    return res;    
}    

function trim(str)
{
  return str.replace(/(^\s+)|(\s+$)/g, "");
}

function makeTags(str, tag) {
       var res = "";
       if  ((str != null) && (str != "")) 
          res = "<"+tag+">"+trim(str.replace(/[\n\r\t]/g,"")) +"</"+tag+">"; 
      return res;        
  }
    
function addFav(node)  
  {
        alert ("folder: FAV");
        var url = makeTags(node.title+" | "+ channel.title,"title")
                     + makeTags(node.date,"date")
                     + makeTags(node.text,"text")
                     + makeTags(node.img,"img")
                     + makeTags(node.video,"video")
                     + makeTags(node.xml,"xml")
                     + makeTags(node.web,"web")
                     + makeTags(node.ico,"ico")
                     + makeTags(node.arg,"arg")
                     + makeTags(node.app,"app")
                     + makeTags(node.psize,"psize");

         File.addUrl(FILE_FAV, url, 0)
         openFav();
   }      


function openFav(noret)    
  {
        alert ("folder: FAV");
        setTitle(Helpbar.msg_9.toUpperCase());
        var i = retNode.title_index + retNode.frame_index;
        if (noret) 
        {   
           retNode= returnArray.pop();
           returnArray.push(retNode);
         }
        else 
        {
           returnArray.push(retNode);
           retNode=new returnNode();
           retNode.url=nodeArray[i].xml;
           retNode.title_index=0;
           retNode.frame_index=1;
         }  
        Helpbar.make(9);
     
         var line;
         var node;
         nodeArray = new Array();
       
         node=new rssNode();
         node.ico="images/icon/undo.png";
         node.title= Helpbar.msg_0;
         node.app="xml";
         nodeArray.push(node);
        
        var fileSystemObj = new FileSystem();
        var oFile=fileSystemObj.openCommonFile( FILE_FAV, "r");
        if (oFile)
            {
               while(1)
                {
                    line= oFile. readLine();
                    if (line==null) 
                        break;
                   node=new rssNode();
                   node.title= parserTags(line,"title", "none");
                   node.date=parserTags(line,"date", "");
                   node.text= parserTags(line,"text", "");
                   node.img= parserTags(line,"img", null);
                   node.video= parserTags(line,"video", "");
                   node.xml= parserTags(line,"xml", "");
                   node.web= parserTags(line,"web", "");
                   node.ico= parserTags(line,"ico", "");
                   node.arg= parserTags(line,"arg", "");
                   node.app=parserTags(line,"app", null);
                   node.psize=parserTags(line,"psize", "");
                   nodeArray.push(node);
                 }
                fileSystemObj.closeCommonFile(oFile);
            }
            
             document.getElementById('imgFrame').style.top=frame_top[retNode.frame_index];
             alert("FAV Param: "+ retNode.title_index+" "+retNode.frame_index+" "+nodeArray.length);
                            
             if (retNode.title_index + retNode.frame_index > nodeArray.length)
                 {
                     retNode.title_index=0;
                     retNode.frame_index=0;
                 }
             showTitles(retNode.title_index);
             showNode(retNode.title_index+retNode.frame_index);
          
   }    
   
function openFolder(index)
    {
        alert ("folder: "+index);
         Helpbar.make(1);
        switch(index)
            {
                                    
                 case 1:
                        retNode.url=FILE_URL_VIDEO;   
                       makeNodeArray(FILE_URL_VIDEO);
                        break;
                                    
                 case 2:
                        retNode.url=FILE_URL_AUDIO;    
                        makeNodeArray(FILE_URL_AUDIO);
                        break;
                  
                   case 3:
                        retNode.url=FILE_URL_TV;    
                        makeNodeArray(FILE_URL_TV);
                        break;
                        
                  case 4:
                        retNode.url=FILE_URL_FOTO;    
                        makeNodeArray(FILE_URL_FOTO);
                        break;
                                        
                  case 5:
                        retNode.url=FILE_URL_RSS;    
                        makeNodeArray(FILE_URL_RSS);
                        break;
            
                 case 6:
                        retNode.url=FILE_URL_MAIL;    
                        makeNodeArray(FILE_URL_MAIL);
                        break;
                 
                 case 7:
                        retNode.url=FILE_URL_USENET;    
                        makeNodeArray(FILE_URL_USENET);
                        break;
            }
    }

function makeNodeArray(fileName)
    {

        var l;
        var node;
        nodeArray=new Array();
        
        node=new rssNode();
        //node.img="images/folder_big.png";
        node.ico="images/icon/undo.png";
        node.title= Helpbar.msg_0;
        node.app="xml";
        nodeArray.push(node);
        
        var fileSystemObj = new FileSystem();
        var oFile=fileSystemObj.openCommonFile( fileName, "r");
        if (oFile)
            {
               while(1)
                {
                    l= oFile. readLine();
                    if (l==null) 
                        break;
                    node=new rssNode();
                    node.xml=l;
                    node.img="images/big/xml.png";
                     node.ico="images/icon/xml.png";
                     node.app="xml";
                     node.title=l;
                    nodeArray.push(node);
                 }
                fileSystemObj.closeCommonFile(oFile);
            }
            //title_index= retNode.title_index;
            //frame_index= retNode.frame_index;
            if (nodeArray.length<2)
                retNode.frame_index=0;
            showTitles(retNode.title_index);
            showNode(retNode.frame_index);
            document.getElementById('imgFrame').style.top=frame_top[retNode.frame_index];
    }
 
 
XHRExample.getXml=function (url, mode)
    {
       	url=url.replace(/&amp;/g,'&'); //Trv 21.10.11

       	document.getElementById("update").innerHTML = ''; 

        if (typeof Decurl.getUrl != 'undefined')
            vurl = Decurl.getUrl(url)
         else
            vurl = url;
			
         alert ("AjaxUrl:"+url);
         alert ("AjaxvUrl:"+vurl);
					
        if (mode==null)
            ajaxMode=0;
        else
            ajaxMode=mode;
        
           Loading.setPercent(-1);
		   Loading.show();
         widgetAPI.sendReadyEvent(); 
        if (this.XHRObj != null) this.XHRObj.destroy(); 
        this.XHRObj = new XMLHttpRequest();
        
        if (this.XHRObj) 
            { 
			
		this.XHRObj.onreadystatechange = function ()
                {    if (XHRExample.XHRObj.readyState == 4)
                            { XHRExample.recieveData(url); } 
                }; 
                this.XHRObj.open("GET", vurl, true); 
                this.XHRObj.setRequestHeader("User-Agent","Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51"); 
                this.XHRObj.send();
				
            }
    }

XHRExample.recieveData = function (url) 
    {  
         Loading.hide();
         alert("Status: "+XHRExample.XHRObj.status);
         alert("ajaxMode=="+ajaxMode);
         if (XHRExample.XHRObj.status != 200)
               {
                   switch (langTv) 
                        {
                            case "7":
                                //CZ
                                XHRExample.getXml("XML/error_noack_cz.xml");
                                break;
  
                             case "12":
                                    //DE
                                    XHRExample.getXml("XML/error_noack_de.xml");
                                    break;
                      
                             case "15":
                                    //IT
                                    XHRExample.getXml("XML/error_noack_it.xml");
                                    break;
                                    
                            case "18":
                                    //PL
                                    XHRExample.getXml("XML/error_noack_pl.xml");
                                    break;
                             
                             case "21":
                                    //RU
                                    XHRExample.getXml("XML/error_noack_ru.xml");
                                    break;
                                    
                            case "23":
                                    //SK
                                    XHRExample.getXml("XML/error_noack_sk.xml");
                                    break;
                                    
                            case "24":
                                    //ES
                                    XHRExample.getXml("XML/error_noack_es.xml");
                                    break;
                                    
                            case "26":
                                    //TR
                                    XHRExample.getXml("XML/error_noack_tr.xml");
                                    break;        
                            default:
                                    XHRExample.getXml("XML/error_noack_en.xml");
                        }      
                }
         else 
           {
             /*   if (ajaxMode==0)
                    parseXml_Rss(this.XHRObj);
                else if (ajaxMode==1)
                    parseXml_MegaVideo(this.XHRObj);
                else if (ajaxMode==2) 
                 {
                    if (typeof Decurl.MakeUrl != 'undefined')
                     url = Decurl.MakeUrl(url,this.XHRObj.responseText); 
                     alert("Decurl: "+url);
                    selectVideo(url);
                  }     */
		 if (ajaxMode==0)
                    Main.parseXml_Rss(this.XHRObj.responseXML);
                else if (ajaxMode==1)
                    parseXml_MegaVideo(this.XHRObj.responseXML);
                else if (ajaxMode==2) 
                 {
                    if (typeof Decurl.MakeUrl != 'undefined')
                     url = Decurl.MakeUrl(url,this.XHRObj.responseText); 
                     alert("Decurl: "+url);
                    selectVideo(url);
                  }            
            }
     }

function parseXml_MegaVideo(resp)
    {
        var i;
        var j;
        var k1;
        var k2;
        var un;
        var s;
        var doc=resp.responseText;
        alert(doc);
          Loading.setPercent(-1);
		  Loading.show();
       
       j=doc.indexOf(' k1=');
       i=doc.indexOf('"',j)+1;
       j=doc.indexOf('"',i);
       k1=doc.substr(i,j-i);
       
        j=doc.indexOf(' k2=');
       i=doc.indexOf('"',j)+1;
       j=doc.indexOf('"',i);
       k2=doc.substr(i,j-i);
       
        j=doc.indexOf(' un=');
       i=doc.indexOf('"',j)+1;
       j=doc.indexOf('"',i);
       un=doc.substr(i,j-i);
       
        j=doc.indexOf(' s=');
       i=doc.indexOf('"',j)+1;
       j=doc.indexOf('"',i);
       s=doc.substr(i,j-i);
       
       alert(k1);
       alert(k2);
       alert(un);
       var d=Megavideo.decrypt(un,k1,k2);
        var url="http://www"+s+".megavideo.com/files/"+d+"/";
        urlMega=url;
        selectVideo(url);
        //alert(url);
        //Player.setVideoURL(url);
        //Player.playVideo();
}



Main.parseXml_Rss = function(resp){
   Loading.hide();
   try{
                    {
                        var titles;
                        var descriptions;
                        var pubdate;
                        var enclosures;
                        var icons;
                        var rssnode;
                        var links;
                        var args;
                        while ( nodeArray.length)
                            nodeArray.pop();
                        
                       channel.title="";
                       channel.text="";
                       channel.img="";
                       channel.date=""; 
                        
                        //var node=resp.responseXML.documentElement; 
			var node=resp.documentElement;
                        var ch = node.getElementsByTagName("channel").item(0);  

                        if (ch.getElementsByTagName("title").length)
                               if (ch.getElementsByTagName("title")[0].childNodes.length)
                                   channel.title = ch.getElementsByTagName("title").item(0).firstChild.data; 

                        if (ch.getElementsByTagName("description").length)
                                if (ch.getElementsByTagName("description")[0].childNodes.length)
                                    channel.text=ch.getElementsByTagName("description")[0].firstChild.nodeValue;  

                        if (ch.getElementsByTagName("pubDate").length)
                                if (ch.getElementsByTagName("pubDate")[0].childNodes.length)
                                    channel.date=ch.getElementsByTagName("pubDate")[0].firstChild.nodeValue;  

                        var chimgs=ch.getElementsByTagName("image");
                         if (chimgs.length)
                                if (chimgs[0].getElementsByTagName("url").length)
                                    if (chimgs[0].getElementsByTagName("url")[0].firstChild)
                                        channel.img=chimgs[0].getElementsByTagName("url")[0].firstChild.nodeValue;
                        
                      
                         var ti=ch.getElementsByTagName("textinput");
                          for (var i = 0; i < ti.length; ++i) 
                            {
                                titles=ti[i].getElementsByTagName("title");
                                descriptions = ti[i].getElementsByTagName("description");
                                links=ti[i].getElementsByTagName("link");
                                args=ti[i].getElementsByTagName("name");
                                rssnode=new rssNode();
                                 if (titles.length)
                                    if (titles[0].childNodes.length)
                                        rssnode.title=titles[0].firstChild.nodeValue;
                                 if (descriptions.length)
                                    if (descriptions[0].childNodes.length)
                                        rssnode.text=descriptions[0].firstChild.nodeValue;
                                if (links.length)
                                    if (links[0].childNodes.length)
                                        rssnode.xml=links[0].firstChild.nodeValue;
                                if (args.length)
                                    if (args[0].childNodes.length)
                                        rssnode.arg=args[0].firstChild.nodeValue; 
                                rssnode.ico="images/icon/doc_input.png";
                                rssnode.app="input";
                                nodeArray.push(rssnode);        
                            }
                        
                        
                        var items = ch.getElementsByTagName("item"); 
                        for (var i = 0; i < items.length; ++i) 
                            {
                                titles=items[i].getElementsByTagName("title");
                                descriptions = items[i].getElementsByTagName("description");
                                pubdate = items[i].getElementsByTagName("pubDate");
                                enclosures=items[i].getElementsByTagName("enclosure");
                                icons=items[i].getElementsByTagName("icon");
                                links=items[i].getElementsByTagName("link");
                                rssnode=new rssNode();
                                if (titles.length)
                                     if (titles[0].childNodes.length)
                                        rssnode.title=titles[0].firstChild.nodeValue;
                                        
                                if (descriptions.length)
                                    if (descriptions[0].childNodes.length)
                                        rssnode.text=descriptions[0].firstChild.nodeValue;
                                if (!rssnode.text)  rssnode.text = channel.text;
                                
                                if (pubdate.length)
                                   if (pubdate[0].childNodes.length)
                                        rssnode.date=pubdate[0].firstChild.nodeValue;
                                if (!rssnode.date)  rssnode.date = channel.date;

                                rssnode.img=getImgUrl(rssnode.text);

                                rssnode.text=delTag(rssnode.text,"<a", "</a>");
                                rssnode.text=delTag(rssnode.text,"<img",">");
                                rssnode.text=delBr(rssnode.text);
                                
                                if (links.length)
                                    {    
                                        if (links[0].childNodes.length)
                                            {
                                                rssnode.web=links[0].firstChild.nodeValue;
                                                rssnode.ico="images/icon/doc_web.png";
                                                rssnode.app="web";
                                            }
                                    }
                                else
                                    rssnode.ico="images/icon/doc_text.png";
                                    
                                if (enclosures.length)
                                    {
                                        if (enclosures[0].getAttribute("type"))
                                            {
                                                //image
                                                if (enclosures[0].getAttribute("type").substr(0,5)=="image")
                                                    {
                                                        if (!rssnode.app)
                                                            {
                                                                rssnode.ico="images/icon/doc_image.png";
                                                                rssnode.img=enclosures[0].getAttribute("url");
                                                                rssnode.web=rssnode.img;
                                                                rssnode.app="img";
                                                            }
                                                    }
                                                //video
                                                if (enclosures[0].getAttribute("type").substr(0,5)=="video")
                                                    {
                                                        rssnode.video=enclosures[0].getAttribute("url");

                                                        rssnode.app="video";
                                                        if (rssnode.video) 
                                                            rssnode.ico="images/icon/doc_video.png";
                                                            if  (!rssnode.img)
                                                                rssnode.img="images/big/doc_video.png";
                                                    }
                                                //text/xml
                                                if (enclosures[0].getAttribute("type").substr(0,8)=="text/xml")
                                                    {
                                                        rssnode.ico="images/icon/folder.png";
                                                        rssnode.xml=enclosures[0].getAttribute("url");
                                                        rssnode.app="xml";
                                                    }
												 //parser
                                                if (enclosures[0].getAttribute("type").substr(0,8)=="parser")
                                                    {
                                                        rssnode.ico="images/icon/folder.png";
                                                        rssnode.xml=enclosures[0].getAttribute("url");
                                                        rssnode.app="parser";
                                                    }
                                                //user
                                                if (enclosures[0].getAttribute("type").substr(0,8)=="user")
                                                    {
                                                        rssnode.ico="images/icon/xml.png";
                                                        rssnode.img="images/big/xml.png";
                                                        rssnode.xml=enclosures[0].getAttribute("url");
                                                        rssnode.app="user";
                                                    }
                                               //search
                                                if (enclosures[0].getAttribute("type").substr(0,8)=="input")
                                                    {
                                                        rssnode.ico="images/icon/find.png";
                                                        rssnode.xml=enclosures[0].getAttribute("url");
                                                        rssnode.arg="search";
                                                        rssnode.app="input";
                                                    }
												//search
                                                if (enclosures[0].getAttribute("type").substr(0,12)=="searchparser")
                                                    {
                                                        rssnode.ico="images/icon/find.png";
                                                        rssnode.xml=enclosures[0].getAttribute("url");
                                                        rssnode.arg="search";
                                                        rssnode.app="searchparser";
                                                    }   
                                                //audio
                                                if (enclosures[0].getAttribute("type").substr(0,5)=="audio")
                                                    {
                                                        rssnode.ico="images/icon/doc_audio.png";
                                                        rssnode.app="audio";
                                                        if  (!rssnode.img)
                                                            rssnode.img="images/big/doc_audio.png";
                                                        rssnode.video=enclosures[0].getAttribute("url");
                                                    }
                                               //application/cam
                                               if (enclosures[0].getAttribute("type").substr(0,15)=="application/cam")
                                                    {
                                                        alert("application/cam");
                                                        rssnode.ico="images/icon/doc_cam.png";
                                                        rssnode.url=enclosures[0].getAttribute("url");
                                                        rssnode.app="cam";
                                                    }
                                                if (enclosures[0].getAttribute("type").substr(0,11)=="video/flash")
                                                    {
                                                        rssnode.app="flash";
                                                    }
                                               if (enclosures[0].getAttribute("type").substr(0,9)=="video/flv")
                                                    {
                                                        rssnode.app="flash";
                                                    }
                                            }
                                       if  (enclosures[0].getAttribute("psize"))
                                           rssnode.psize=enclosures[0].getAttribute("psize");     
                                    }
                                    if (icons.length)
                                        rssnode.ico=icons[0].getAttribute("url");
                                    //nodeArray[i]=rssnode; 
                                    alert("rssnode.app: "+rssnode.app);
                                    nodeArray.push(rssnode);   
                            }
                            if (returnArray.length)
                                {
                                    rssnode=new rssNode();
                                    rssnode.ico="images/icon/undo.png";
                                    rssnode.title= Helpbar.msg_0;
                                    nodeArray.unshift(rssnode);
                               }
                           else
                                {
                                   alert(""+channel.title);
                                    channel.img= nodeArray[0].img;
                                    channel.title=nodeArray[0].title;
                                    channel.text=nodeArray[0].text;
                                }
                             if (!xmlMode)
                                {
                                    retNode.frame_index=1;
                                    retNode.title_index=0;
                                }
                            document.getElementById('imgFrame').style.top=frame_top[retNode.frame_index];
                            alert("Param: "+ retNode.title_index+" "+retNode.frame_index+" "+nodeArray.length);
                            
                            if (retNode.title_index+retNode.frame_index>nodeArray.length)
                                {
                                    retNode.title_index=0;
                                    retNode.frame_index=0;
                               }
                            showTitles(retNode.title_index);
                            showNode(retNode.title_index+retNode.frame_index);
                            if (returnArray.length)
								setTitle(channel.title);
                            else
								setTitle(APP_NAME);
                    } 
              } 
          catch (e)
                { 
                    switch (langTv) 
                        {
                            case "7":
                                //CZ
                                XHRExample.getXml("XML/error_xml_cz.xml");
                                break;
                             
                             case "15":
                                    //IT
                                    XHRExample.getXml("XML/error_xml_it.xml");
                                    break;
                                    
                            case "18":
                                    //PL
                                    XHRExample.getXml("XML/error_xml_pl.xml");
                                    break;
                             
                             case "21":
                                    //SK
                                    XHRExample.getXml("XML/error_xml_ru.xml");
                                    break; 
                                    
                             case "23":
                                    //SK
                                    XHRExample.getXml("XML/error_xml_sk.xml");
                                    break; 
                             case "26":
                                    //TR
                                    XHRExample.getXml("XML/error_xml_tr.xml");
                                    break; 
                            default:
                                    XHRExample.getXml("XML/error_xml_en.xml");
                        }
                            
                }
                xmlMode=false; 
    }


       
function delTag(str,tagstart,tagstop)
{
   var _str=str.toLowerCase();
   var i=_str.indexOf(tagstart,0);
    var j=_str.indexOf(tagstop,i);
    if ((i>-1) && (j>-1))
  		{ return str.substr(0,i)+str.substr(j+tagstop.length);}
    else
        {return str;}
}

function delBr(str)
{
    var s="<br />";
    var i;
    var j=1;
    var a;
    while(1)
        {
            i=str.indexOf(s,j);
            if (i==-1)
                break;
            j=str.indexOf(s,i+1);
           if (j==-1)
               break;
            a=str.substr(i+s.length,j-i-s.length);
            if ((a=="")||(a=="\r\n"))
                {
                    str=str.substr(0,j)+str.substr(j+s.length);
                    j=i;
                }
          }
           return str;
}

function getImgUrl(str)
    {
        var _str=str.toLowerCase();
        var i=_str.indexOf("<img",0);
        if (i>-1)
            {
                var i=_str.indexOf("src=",i);
                if (i>-1)
                    {
                        var h=_str.substr(i+4,1);
                        i=i+5;
                        var j=_str.indexOf(h,i);
                        if (j>-1)
                            return str.substr(i,j-i);
                    }
            }
    }

 function showTitles(index)
    {
          for (var i = 0; i < 6; ++i) 
            {
                if (index+i<nodeArray.length)
                    {
                        document.getElementById('imgTitle_'+i).src=nodeArray[index+i].ico;
                        document.getElementById('imgTitle_'+i).style.visibility="visible";
                        document.getElementById('lblTitle_'+i).style.visibility="visible";
                        if (nodeArray[index+i].title.length >80)
                            document.getElementById('lblTitle_'+i).innerHTML=nodeArray[index+i].title.substring(0,80)+ "  ...";
                        else
                            document.getElementById('lblTitle_'+i).innerHTML=nodeArray[index+i].title;
                    }
                else
                    {
                        document.getElementById('imgTitle_'+i).style.visibility="hidden";
                        document.getElementById('lblTitle_'+i).style.visibility="hidden";
                    }
            }
    }
 
  function downPageFrame()
    {
        for (var i = 0; i < 5; ++i)
            downFrame()
    }

 function downFrame()
    {
        if (retNode.frame_index<5)
            {
                if (retNode.frame_index<nodeArray.length-1)
                    retNode.frame_index++;
            }
        else
            {
                if (retNode.title_index<nodeArray.length-6)
                    {
                        retNode.title_index++;
                        showTitles(retNode.title_index)
                     }
            }
        document.getElementById('imgFrame').style.top=frame_top[retNode.frame_index];
        showNode(retNode.title_index+retNode.frame_index);
    }

function upPageFrame()
    {
        for (var i = 0; i < 5; ++i)
            upFrame()
    }
    
function upFrame()
    {
        if (retNode.frame_index>0)
            retNode.frame_index--;
        else
            {
                 if (retNode.title_index>0)
                    {
                        retNode.title_index--;
                        showTitles(retNode.title_index);
                     }
            }
        document.getElementById('imgFrame').style.top=frame_top[retNode.frame_index];
        showNode(retNode.title_index+retNode.frame_index);
    }
    
function showNode(index)
    {
        alert("index: "+index);
		alert(nodeArray[index].title);
        document.getElementById('lblHeaderTitle').innerHTML=nodeArray[index].title;
       
        if (nodeArray[index].date)
            document.getElementById('lblHeaderTime').innerHTML=nodeArray[index].date;
        else
            document.getElementById('lblHeaderTime').innerHTML="";
     
        document.getElementById('lblHeaderText').innerHTML=nodeArray[index].text;
 //     setHeaderText(nodeArray[index].text);

        if (index==0)
            {
                if (returnArray.length)
                    document.getElementById('header').style.visibility="hidden";
                else
                    {
                        document.getElementById('header').style.visibility="visible";
                        document.getElementById('imgHeader').src=channel.img;
                        document.getElementById('lblHeaderTitle').innerHTM=channel.title;
                        document.getElementById('lblHeaderText').innerHTML=channel.text;
                        document.getElementById('lblHeaderTime').innerHTML=channel.date;
                    }
            }
        else
            {
                 document.getElementById('header').style.visibility="visible";
                 document.getElementById('imgHeader').style.visibility="visible";
                 document.getElementById('imgHeader').style.width="";
                 document.getElementById('imgHeader').style.border="solid 2px #404040";
                if (nodeArray[index].img)
                    document.getElementById('imgHeader').src=nodeArray[index].img;
                else    
                    switch(nodeArray[index].app)
                        {
	                                            
                            case "xml":
                                document.getElementById('imgHeader').src="images/big/folder.png";
                                break;
                                                
                            case "video":
                               document.getElementById('imgHeader').src="images/big/doc_video.png";
                                break;
                                                
                            case "audio":
                                document.getElementById('imgHeader').src="images/big/doc_audio.png";
                                break;
                                
                           default:
                                document.getElementById('imgHeader').style.width="0px";
                                document.getElementById('imgHeader').style.border="none";
                                document.getElementById('imgHeader').style.visibility="hidden";
                                break;
                        }
                }
             if ((Helpbar.mode!=1) && (Helpbar.mode!=9))
                {
                    if (nodeArray[index].xml=="" && nodeArray[index].web=="" && nodeArray[index].video=="" && index !=0)
                        Helpbar.make(7);
                    else 
                    if (returnArray.length)
                        Helpbar.make(8);
                    else    
                        Helpbar.make(10);
               }
            setScrollBar(index,nodeArray.length);
   }

function setHeaderText(text)
    {
       var l=text.length;
      document.getElementById('lblHeaderText').innerHTML=text;
     while (document.getElementById('lblHeaderText').scrollHeight>190)
          {
            l=0.95*l;
            document.getElementById('lblHeaderText').innerHTML=text.substr(0,l)+ "  [...]";
           }
    }
 
Main.setMuteMode = function()
    {
        if (this.mute != this.YMUTE)
            {
                Audio.plugin.SetSystemMute(true);
                this.mute = this.YMUTE;
            }
    }
    
Main.noMuteMode = function()
    {
        if (this.mute != this.NMUTE)
            {
                Audio.plugin.SetSystemMute(false);
                this.mute = this.NMUTE;
            }
    }

Main.muteMode = function()
    {
        switch (this.mute)
            {
                case this.NMUTE:
                    this.setMuteMode();
                    break;
                    
                case this.YMUTE:
                    this.noMuteMode();
                    break;
            }
    }
   
 iframe_onLoad= function () 
    {
      if (Mode=="WEB")
            {
                Loading.hide();
                Helpbar.make(2);
                document.getElementById("iframe").style.width="960px";
                document.getElementById("iframe").style.height="505px"
                setTimeout('document.getElementById("iframe").style.visibility="visible";',200);
            }
         else if (Mode=="FLASH")
            {
                Loading.hide();
                Helpbar.hide();
                document.getElementById("iframe").style.width="960px";
                document.getElementById("iframe").style.height="530px"
                setTimeout('document.getElementById("iframe").style.visibility="visible";',200);
            }
        else
            {
                Helpbar.make(0);
                setTimeout('document.getElementById("iframe").style.visibility="hidden";',200);
            }
    }
 
 imgCam_onLoad=function()
    {
         if (Mode=="CAM")
            setTimeout("camPic();",500);
    }
 
 function camPic()
    {
        var d = new Date();
        var rnd=d.getTime();
        if (camCmd)
            document.getElementById("imgCam").src=nodeArray[retNode.title_index+retNode.frame_index].url +"&cmd="+camCmd+"&rnd="+rnd;
        else
            document.getElementById("imgCam").src=nodeArray[retNode.title_index+retNode.frame_index].url +"&rnd="+rnd;
        camCmd=null;
    }
 
 Keyboard_callback=function(text)
    {
        Keyboard.hide();
        if (Mode=="KEYB")
            {
                Helpbar.make(1);
                Mode="";
        
                if (keybMode)
                    File.changeUrl(retNode.url, text, retNode.title_index+retNode.frame_index-1)
                else
                    {
                        File.addUrl(retNode.url, text, retNode.title_index+retNode.frame_index);
                        if (retNode.title_index+retNode.frame_index<5)
                            retNode.frame_index++;
                        else
                            retNode.title_index++
                    }
                makeNodeArray(retNode.url);
            }
        else if(Mode=="INPUT" || Mode=="SEARCHPARSER")
            {
			   var typeSerach=Mode;
               Mode="";
               xmlMode=false;
               if (text != '') 
               {
			   Main.search=text;
                var i=retNode.frame_index+retNode.title_index;
                alert("push: "+retNode.title_index+"/"+retNode.frame_index+"  "+ retNode.url);
                returnArray.push(retNode);
                retNode=new returnNode;
                retNode.url=nodeArray[i].xml;
                Helpbar.make(0);
               if (retNode.url.indexOf("?")  > 0)
                 delim = "&";
               else
                 delim = "?";
				 
				 if (typeSerach=="INPUT")
					XHRExample.getXml(retNode.url+delim+nodeArray[i].arg+"="+text);
				 else
		  {
                     retNode.url=retNode.url.replace(/&amp;/g,'&');
                     //блок вынесен в парсер

                     retNode.mode = "parser";
                     selectParser(retNode.url);
                  }
               } 
            }
    }

    
function setScrollBar(n,m)
    {
        var h=document.getElementById("scrollBar").offsetHeight;
        if (m>1)
            {
                document.getElementById("scrollBarPos").style.visibility="visible";
                var dh=h/m;
                if (dh<8)
                    dh=8;
                document.getElementById("scrollBarPos").style.height=dh+"px";
                document.getElementById("scrollBarPos").style.top=n*h/m+"px";
            }
        else
            {
                document.getElementById("scrollBarPos").style.visibility="hidden";
            }
    }

function getLang() 
    {
        var l;
        var vars = window.location.search;
        if (vars.charAt(0) == "?")
            vars = vars.slice(1, vars.length);
	
        vars = vars.split("&");
        for (var i=0; i < vars.length; i++) 
            {
                var data = vars[i].split("=");
                if (data.length == 2)
                    {
                        switch (data[0])
                            {
                                case "country":
                                    //this.countryCode = data[1];
                                    break;
                                case "language":
                                    //this.languageCode = data[1];
                                    alert("lang="+data[1]);
                                    l=data[1];
                                    break;
                                case "modelid":
                                    //this.modelID = data[1];
                                    break;
                                case "server":
                                    break;
                                case "id":
                                    //this.picasaID = data[1];
                                    break;
                                case "pw":
                                    //this.picasaPW = data[1];
                                    break;
                                default :
                                break;
                        }
                }
           }
           return l;
    }
    
function showTime() {    
	var timePlugin = document.getElementById("pluginTime");
	var now=timePlugin.GetEpochTime();
	now=timePlugin.ConvertEpochToLocalTime(now);
	//now='2011/08/05/07/05/22';
	var arTime=now.split("/");
	if (arTime.length!=6) return;
	//var timeValue = arTime[2]+'.'+arTime[1]+'.'+arTime[0].substr(2,2)+' '+arTime[3]+':'+arTime[4]+':'+arTime[5];
	var timeValue = arTime[2]+'.'+arTime[1]+'.'+arTime[0].substr(2,2)+' '+arTime[3]+':'+arTime[4]+'&nbsp;';
    document.getElementById('helpbar_time').innerHTML=timeValue;                   
}

function _tigger_remoteInput(str){
//alert(str);
if (Mode=="KEYB")
    Keyboard.setText(str.toString().substr(9));
}                
 