var Megavideo={};

function hexdec (hex_string) {
    hex_string = (hex_string+'').replace(/[^a-f0-9]/gi, '');
    return parseInt(hex_string, 16);
}

function dechex (number)
    {
        if (number < 0) 
            {
                number = 0xFFFFFFFF + number + 1;
            }
        return parseInt(number, 10).toString(16);
}

function bindec (binary_string) {
    binary_string = (binary_string+'').replace(/[^01]/gi, '');
    return parseInt(binary_string, 2);
}

Megavideo.decrypt=function(str_hex, key1, key2)
    {
      var i;
      var temp;
      var s;
      str_bin = new Array;
      for (i=0; i < 128; i++) 
        str_bin[i]=Math.floor(hexdec(str_hex[Math.floor(i/4)])  /Math.pow(2,(3-(i%4))))%2
 
        var key = new Array();
        for (i=0; i < 384; i++) 
            {
                key1 = (key1 * 11 + 77213) % 81371;
                key2 = (key2 * 17 + 92717) % 192811;
                key[i] = (key1 + key2) % 128;
            }
        
        
        for (i = 256; i >= 0; i--)
            {
                temp = str_bin[key[i]];
                str_bin[key[i]] = str_bin[i%128];
                str_bin[i%128] = temp;
            }
            
            for (i = 0; i < 128; i++)
                    str_bin[i] =str_bin[i] ^ key[i+256] & 1;
            
            str_hex = "";
            for(i = 0; i < 32; i++)
                {
                    s="";
                    s=s+str_bin[4*i]+str_bin[4*i+1]+str_bin[4*i+2]+str_bin[4*i+3]
                    str_hex += dechex(bindec(s));
                }
            return str_hex;
    }