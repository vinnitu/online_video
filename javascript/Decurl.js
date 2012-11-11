var Decurl = {};

function parser(str, left, right) {
       var res = '';
       var tmp = str;
       var i = tmp.indexOf(left);
        if ( i > 0 )   {
            tmp = tmp.substr(i + left.length);
            i = tmp.indexOf(right);
            if ( i > 0 )   res = tmp.substr(0, i);
        }
    return res;    
}

//Экранирование строки
RegExp.escape = function (text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}


Decurl.checkUrl=function(url)
   {
     result = 0;
	alert("checkUrl:"+url);
     if ((url.indexOf("igru-film.net") > 0) && (url.indexOf("md5hash") > 0)) 
       result = 1;
     else
     if ((url.indexOf("/vkontakte.php?video") > 0) || (url.indexOf("vkontakte.ru/video_ext.php") > 0) ||
	 (url.indexOf("/vkontakte/vk_kinohranilishe.php?id=") > 0) || (url.indexOf("vk.com/video_ext.php?") > 0 ))
       result = 2;
     else
     if ((url.indexOf("kino-dom.tv") > 0) && (url.indexOf("md5hash") > 0)) 
       result = 3;
     else
     if ((url.indexOf("linecinema.org") > 0) && (url.indexOf("md5hash") > 0)) 
       result = 4;
     else
     if (url.indexOf("/io.ua/") > 0)
       result = 5;
     else
     if (url.indexOf("sovok.tv") > 0)
       result = 6;
     else
     if ((url.indexOf("datalock.ru") > 0) && (url.indexOf("md5hash") > 0))  // seasonvar.ru
       result = 7;
     else
     if ((url.indexOf("/fs.ua/") > 0) && (url.indexOf("fileredirect=") > 0)) // fs.ua 
       result = 8;
     else
     if (url.indexOf("/igru.net.ua/proverka-frame.php") > 0) 
       result = 9;
     /*else
     if(url.toLowerCase().indexOf("arjlover.net") >= 0)
       result = 10;*/




    alert("checkUrl : "+ result);
    return result;
}

Decurl.getUrl=function(url)
   {
   
     switch (Decurl.checkUrl(url)) 
      {
        case 1: //  igru.net.ua, serialu.net
            result = "http://igru.net.ua/game/retrum/";
    		 break;
    	case 2:
	     result = url.replace(/#038;/g, '');
    		 break;
    	case 3: //  kino-dom.tv
             result = "http://kino-dom.tv/697-skarlett-scarlett-onlajn.html";
            break;
    	case 4: //  linecinema.org
             result = "http://www.linecinema.org/500293-l.html";
            break;
        case 7: //  seasonvar.ru
             result = "http://seasonvar.ru/serial-2428-Bombila.html";
            break;
        case 8: //  fs.ua
             result = url.replace('&amp;', '&');
            break;
        /*case 10: //  arjlover.net
             result = URLtoXML.GetFinalUrl(url);
            break;*/
        default:
             result = url;
      }      
    return result;
}

var serialuUrl=''; //Для igru.net.ua, serialu.net делаемa два запроса, поэтому запоминаемa исходный адрес
Decurl.MakeUrl = function (url, responseText) {
		
    switch (Decurl.checkUrl(url)) {
		case 1: //  igru.net.ua, serialu.net
			serialuUrl=url;
			result="http://igru.net.ua/proverka-frame.php?name=/film/mp41/Retrum.2010.flv&serv=1";
			break;
        case 9: //  igru.net.ua, serialu.net
			//alert('MakeUrl:'+url);
			//alert('responseText:'+responseText);
            hash = parser(responseText, "file=http://s1.igru-film.net/s/", "/");
            result = serialuUrl.replace("md5hash", hash);
            break;

        case 2: // vkontakte.ru
            //alert(responseText);
            video_host = parser(responseText, "var video_host = '", "'");
            video_uid = parser(responseText, "var video_uid = '", "'");
            video_vtag = parser(responseText, "var video_vtag = '", "'");
            video_no_flv = parser(responseText, "video_no_flv =", ";");
            video_max_hd = parser(responseText, "var video_max_hd = '", "'");
            alert("video_no_flv " + video_no_flv);
            if (video_no_flv == 1) {
                switch (video_max_hd) {
                    case "0": fname = "240.mp4"; break;
                    case "1": fname = "360.mp4"; break;
                    case "2": fname = "480.mp4"; break;
                    case "3": fname = "720.mp4"; break;
                }
                result = video_host + "u" + video_uid + "/video/" + video_vtag + "." + fname;
            }
            else {
                vkid = parser(responseText, "vkid=", "&");
                fname = "vk.flv";
                result = "http://" + video_host + "/assets/videos/" + video_vtag + vkid + "." + fname;
            }
            break;

        case 3: //  kino-dom.tv
            hash = parser(responseText, "file=http://kino-dom.tv/", "/");
            result = url.replace("md5hash", hash);
            break;

        case 4: //  linecinema.org
            hash = parser(responseText, "file=http://st2.linecinema.org/s/", "/");
            result = url.replace("md5hash", hash);
            break;

        case 5: //  io.ua
            result = parser(responseText, "so.addVariable('file','", "'");
            break;

        case 6: //  sovok.tv
            result = parser(responseText, '"url":"', '"');
            break;

        case 7: //  seasonvar.ru
            hash = parser(responseText, '"pl":"/playls/', '/');
            result = url.replace("md5hash", hash);
            break;

        case 8: //  fs.ua
            //alert('responseText'+responseText);
            result = url;
            var left = '&fileredirect=';
            var i = url.indexOf(left);


            if (i > 0) {
                var fileredirect = url.substr(i + left.length);
                alert('fileredirect=' + fileredirect);
                fileredirect = RegExp.escape(fileredirect);
                template = '(http://fs\\.ua/get/dl/)(\\S+)(' + fileredirect + ')';
                alert('template' + template);
                match = responseText.match(template);
                if (match != null) {
                    result = match[0];
                }
                else
                    result = '';
            }


            else
                result = '';
            alert("Decurl: " + result);

            break;


        default:
            result = url;
    }      

    return result;
}
