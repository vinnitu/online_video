var File ={}

File.test=function()
    {
        alert("File");
    }

File.loadArray=function(fileName,array)
    {
      var tUrl;
      var fileSystemObj = new FileSystem();
         var oFile=fileSystemObj.openCommonFile( fileName, "r");
         if (oFile)
            {
               while(1)
                {
                    tUrl= oFile. readLine();
                    if (tUrl==null) 
                        break;
                    array.push(tUrl);
                 }
                fileSystemObj.closeCommonFile(oFile);
            }
    }

File.saveArray=function(fileName,array)
    {
       var fileSystemObj = new FileSystem();
       var oFile=fileSystemObj.openCommonFile( fileName, "w");
         if (oFile)
            {
                for(var i=0; i < array.length; i++)
                    oFile. writeLine(array[i]);
                fileSystemObj.closeCommonFile(oFile);
             }
    }
    
 File.addUrl=function(fileName,url,index)
    {
        var tempArray=new Array();
         File.loadArray(fileName,tempArray)
        
        tempArray.splice(index,0,url);
        File.saveArray(fileName,tempArray)
    }
 
 File.delUrl=function(fileName,index)
    {
        var tempArray=new Array();
         File.loadArray(fileName,tempArray)
        
        tempArray.splice(index,1);
        File.saveArray(fileName,tempArray)
    }
 
File.moveUrl=function(fileName, index, mov)
    {
        var tempArray=new Array();
         File.loadArray(fileName,tempArray)
        
        var url = tempArray.splice(index,1);
        tempArray.splice(index-mov,0, url.toString());
        File.saveArray(fileName,tempArray)
    }
 
File.changeUrl=function(fileName,url,index)
    {
        alert("change");
        var tempArray=new Array();
         File.loadArray(fileName,tempArray)
        
        tempArray.splice(index,1,url);
        File.saveArray(fileName,tempArray)
    }
    