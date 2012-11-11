var Helpbar = 
    { 
        mode: null,
        msg_0: "",
        msg_1: "",
        msg_2: "",
        msg_3: "",
        msg_4: "",
        msg_5: "",
        msg_6: "",
		msg_7: "",
		msg_8: "",
		msg_9: "",
		msg_10: "",
		msg_11: "",
		msg_12: "",
		msg_13: ""
    }

Helpbar.init= function(lang)
    {
        alert ("helpbar: "+lang);
        switch (lang) 
            {
                case "7":
                    //CZ
                    Helpbar.msg_0="zpět";
                    Helpbar.msg_1="změn";
                    Helpbar.msg_2="vyber";
                    Helpbar.msg_3="odstraň adresu";
                    Helpbar.msg_4="přidej adresu";
                    Helpbar.msg_5="edituj adresu";
                    Helpbar.msg_6="přesuň";    
                    Helpbar.msg_7="pokračuj v přehrávání"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                   break;

                case "12":
                    //DE
                    Helpbar.msg_0="zurück";
                    Helpbar.msg_1="auswählen";
                    Helpbar.msg_2="öffnen";
                    Helpbar.msg_3="löschen";
                    Helpbar.msg_4="Adresse hinzufügen";
                    Helpbar.msg_5="Adresse editieren";
                    Helpbar.msg_6="bewegen";    
                    Helpbar.msg_7="fortsetzen der Wiedergabe"; 
					Helpbar.msg_8="Zu Favoriten hinzufügen";
                    Helpbar.msg_9="Favoriten";
                    Helpbar.msg_10="auf";
                    Helpbar.msg_11="nach unten";
                    Helpbar.msg_12="entfernen";
                    Helpbar.msg_13="ausführlich";
					
 
                   break;
                
                case "15":
                    //IT
                    Helpbar.msg_0="indietro";
                    Helpbar.msg_1="seleziona";
                    Helpbar.msg_2="apri";
                    Helpbar.msg_3="cancella";
                    Helpbar.msg_4="aggiungi indirizzo";
                    Helpbar.msg_5="modifica indirizzo";
                    Helpbar.msg_6="sposta";
                    Helpbar.msg_7="riprendi la riproduzione";
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                    break;
                    
                case "18":
                    //PL
                    Helpbar.msg_0="powrót";
                    Helpbar.msg_1="wybierz";
                    Helpbar.msg_2="otwórz";
                    Helpbar.msg_3="usuń adres";
                    Helpbar.msg_4="dodaj adres";
                    Helpbar.msg_5="edytuj adres";
                    Helpbar.msg_6="przesuń";
                    Helpbar.msg_7="wznów odtwarzanie"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                    break;
                    
                case "21":
                    //RU
                    Helpbar.msg_0="назад";
                    Helpbar.msg_1="выбрать";
                    Helpbar.msg_2="открыть";
                    Helpbar.msg_3="удалить адрес";
                    Helpbar.msg_4="добавить адрес";
                    Helpbar.msg_5="редактировать адрес";
                    Helpbar.msg_6="перейти";
                    Helpbar.msg_7="продолжить"; 
                    Helpbar.msg_8="добавить в избранное";
                    Helpbar.msg_9="избранное";
                    Helpbar.msg_10="вверх";
                    Helpbar.msg_11="вниз";
                    Helpbar.msg_12="удалить";
                    Helpbar.msg_13="подробно";
                    break;
                    
                case "23":
                    //SK
                    Helpbar.msg_0="späť";
                    Helpbar.msg_1="vyber";
                    Helpbar.msg_2="otvor";
                    Helpbar.msg_3="odstráň adresu";
                    Helpbar.msg_4="pridaj adresu";
                    Helpbar.msg_5="edituj adresu";
                    Helpbar.msg_6="presuň";
                    Helpbar.msg_7="pokračuj v prehrávaní"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                    break;
                    
                case "24":
                    //ES
                    Helpbar.msg_0="Volver";
                    Helpbar.msg_1="Seleccionar";
                    Helpbar.msg_2="Abrir";
                    Helpbar.msg_3="Añadir dirección";
                    Helpbar.msg_4="Editar dirección";
                    Helpbar.msg_5="Editar dirección";
                    Helpbar.msg_6="Mover";    
                    Helpbar.msg_7="Resumir reproducción"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                   break;
   
                 case "26":
                    //TR
                    Helpbar.msg_0="geri";
                    Helpbar.msg_1="seç";
                    Helpbar.msg_2="aç";
                    Helpbar.msg_3="sil";
                    Helpbar.msg_4="adres ekle";
                    Helpbar.msg_5="adres düzenle";
                    Helpbar.msg_6="hareket";
                    Helpbar.msg_7="devam et"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";

                    break; 
                    
                default:
                    Helpbar.msg_0="back";
                    Helpbar.msg_1="select";
                    Helpbar.msg_2="open";
                    Helpbar.msg_3="delete";
                    Helpbar.msg_4="add address";
                    Helpbar.msg_5="edit address";
                    Helpbar.msg_6="move";
                    Helpbar.msg_7="resume playback"; 
					Helpbar.msg_8="Add to Favorites";
                    Helpbar.msg_9="favorites";
                    Helpbar.msg_10="up";
                    Helpbar.msg_11="down";
                    Helpbar.msg_12="remove";
                    Helpbar.msg_13="info";
                     break; 
            } 
            Helpbar.mode=null;
    }
    
Helpbar.add= function(text,src) 
    {
            var row = document.getElementById("helpbar_table").rows[0] ;
            
            var cell = row.insertCell(0);
            cell.setAttribute("width","10");
            var textNode = document.createTextNode("");
            cell.appendChild(textNode);
            
            var cell = row.insertCell(0);
            var el = document.createElement("img");
            el .setAttribute("src",src);
            cell.appendChild(el);
            
            var cell = row.insertCell(0);
            var textNode = document.createTextNode(text);
            cell.appendChild(textNode);
    }

Helpbar.cls=function()
    {
        var td;
        var row = document.getElementById("helpbar_table").rows[0] ;
        while (row.getElementsByTagName('td').length)
            {
                td=row.getElementsByTagName('td')[0];
                td.parentNode.removeChild(td);
            }
    }
    
Helpbar.make=function(index)
    {
        if (this.mode!=index)
        {
           alert ("helpbar: "+index);
           this.mode=index;
            switch(index)
                {
                    case 0:
                        this.cls();
                        Helpbar.add(Helpbar.msg_1, "images/helpbar/help_tb.png");
                        Helpbar.add(Helpbar.msg_2, "images/helpbar/help_enter.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;
           
                    case 1:
                        this.cls();
                        Helpbar.add(Helpbar.msg_1, "images/helpbar/help_tb.png");
                        Helpbar.add(Helpbar.msg_2, "images/helpbar/help_enter.png");
                        Helpbar.add(Helpbar.msg_3, "images/helpbar/help_red.png");
                        Helpbar.add(Helpbar.msg_5, "images/helpbar/help_green.png");
                        Helpbar.add(Helpbar.msg_4, "images/helpbar/help_yellow.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;

                    case 2:
                        this.cls();
                        Helpbar.add(Helpbar.msg_6, "images/helpbar/help_joy.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;
                   
                    case 3:
                        this.cls();
                        Helpbar.add(Helpbar.msg_1, "images/helpbar/help_enter.png");
                        Helpbar.add(Helpbar.msg_6, "images/helpbar/help_joy.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;
                  
                     case 4:
                        this.cls();
                         Helpbar.add("   ", "images/helpbar/help_video.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;
                        
                    case 5:
                        this.cls();
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break; 
                   
                    case 6:
                        this.cls();
                        Helpbar.add(Helpbar.msg_7, "images/helpbar/help_blue.png");
                        Helpbar.add("   ", "images/helpbar/help_video.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break; 
                        
                    case 7:
                        this.cls();
                        Helpbar.add(Helpbar.msg_1, "images/helpbar/help_tb.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;    
                        
                   case 8:
                        this.cls();
                        Helpbar.add(Helpbar.msg_8, "images/helpbar/help_yellow.png");
                        Helpbar.add(Helpbar.msg_2+" "+Helpbar.msg_9, "images/helpbar/help_blue.png");
                        Helpbar.add(Helpbar.msg_13, "images/helpbar/help_i.png");
                        Helpbar.add(Helpbar.msg_6, "images/helpbar/help_joy.png");
                        Helpbar.add(Helpbar.msg_2, "images/helpbar/help_enter.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;    

                   case 9:
                       this.cls();
                       Helpbar.add(Helpbar.msg_12, "images/helpbar/help_red.png");
                       Helpbar.add(Helpbar.msg_11, "images/helpbar/help_green.png");
                       Helpbar.add(Helpbar.msg_10, "images/helpbar/help_yellow.png");
                       Helpbar.add(Helpbar.msg_13, "images/helpbar/help_i.png");
                       Helpbar.add(Helpbar.msg_6, "images/helpbar/help_joy.png");
                       Helpbar.add(Helpbar.msg_2, "images/helpbar/help_enter.png");
                       Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                       break;    
                    
                   case 10:
                        this.cls();
                        Helpbar.add(Helpbar.msg_2+" "+Helpbar.msg_9, "images/helpbar/help_blue.png");
                       Helpbar.add(Helpbar.msg_13, "images/helpbar/help_i.png");
                        Helpbar.add(Helpbar.msg_6, "images/helpbar/help_joy.png");
                        Helpbar.add(Helpbar.msg_2, "images/helpbar/help_enter.png");
                        Helpbar.add(Helpbar.msg_0, "images/helpbar/help_back.png");
                        break;

                }
        }
    }
    
Helpbar.show=function()
    {
         document.getElementById("helpbar").style.visibility="visible";
    }
    
Helpbar.hide=function()
    {
        document.getElementById("helpbar").style.visibility="hidden";
    }
