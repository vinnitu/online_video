var URLtoXML = {
    flagDebug: true,
    rssTypeList: 'parser',
    MacAddr: '',
    fInit: null,
    dInit: '',
    NoP: 1,
    icoFolder: 'http://tr-41.narod.ru/widget/logo/folder.png',
    icoMedia: 'http://tr-41.narod.ru/widget/logo/media.png',
    icoPList: 'http://tr-41.narod.ru/widget/logo/plist.png',
    icoUSB: 'http://tr-41.narod.ru/widget/logo/usb.png',
    itemsOnPage: 20,
    maskNumPage: '?page=',
    searchBlockLines: 0,
    shiftLnStartBlock: 0,
    ScreenSize: -1,
    Audiotrack_num: -1,
    Buffer: -1,
    IBuffer: -1,
    title: '',
    sHeader: '',
    prefixURL: '',
    kBUrl: '',
    kEUrl: '',
    kBImg: '',
    kEImg: '',
    kBDes: '',
    kEDes: '',
    kBTit: '',
    kETit: '',
    kLogo: '',
    kyPos: '',
    kBNeP: '',
    kENeP: '',
    kBPrP: '',
    kEPrP: '',
    kPStm: '',
    kPBDs: '',
    kPEDs: '',
    prefixSRL: '',
    kPBUr: '',
    kPEUr: '',
    kUAdd: '',
    kEAdd: '',
    kPBTt: '',
    kPETt: '',
    prefixXML: '<![CDATA[',
    endedXML: ']]>',
    prefixTAG: '<a href=\'',
    endedTAG: '\'>',
    prefixImg: '<img src=\'',
    endedImg: '\' width=\'150\' align=\'left\'/>',
    endedIco: '',
    prefixTBL: '<table cellspacing=\'2\' cellpadding=\'0\' border=\'0\' align=\'center\' width=\'100%\'><tr><td align=\'left\' valign=\'top\'>',
    endedTBL: '</td></tr></table>',
    outTXT: '',
    sNextPage: '\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
    sPrevPage: '\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
    mURL: '',
    mSecReq: 60000,
    fMode: false,
    fCancel: false,
    fComplete: false,
    nStart: 0,
    outFmt: 'xml',
    xmlEncoding: 'UTF-8',
    keyUSB: 'http://local',
    mntUSB: '/dtv/usb',
    arrUSB: ['sda1', 'sdb1', 'sdc1', 'sdd1', 'sda', 'sdb', 'sdc', 'sdd'],
    arrVideoExt: ['.avi', '.asf', '.asx', '.3gp', '.3g2', '.3gp2', '.3gpp', '.flv', '.mp4', '.mp4v', '.m4v', '.m2v', '.m2ts', '.m2t', '.mp2v', '.mov', '.mpg', '.mpe', '.mpeg', '.mkv', '.swf', '.mts', '.wm', '.wmx', '.wmv', '.vob', '.iso', '.f4v', '.ts', '?feature=player_embedded'],
    arrImageExt: ['.png', '.gif', '.jpg', '.jpeg', '.bmp', '.ico', '.fpx', '.ilbm', '.jbig', '.pcx', '.pnm', '.psd', '.raw', '.tga', '.wbmp', '.xcf', '.exr', '.icer', '.jp2', '.pgf', '.tiff', '.webp', '.apng', '.mng', '.ai', '.cdr', '.emf', '.eps', '.ps', '.svg', '.wmf', '.xps', '.swf', '.3ds', '.vrml', '.x3d'],
    arrAudioExt: ['.mp3', '.dts', '.ac3', '.wav', '.wma', '.aiff', '.ape', '.au', '.dsd', '.dxd', '.mlp', '.flac'],
    arrTrashExt: ['.srt', '.rar', '.arj', '.txt', '.doc', '.docx', '.xls', '.xlsx'],
    arrPListExt: ['.xml', '.m3u'],
    arrReplWordsFrwd: [
        ['', '']
    ],
    arrReplWordsBkwd: [
        ['', '']
    ],
    arrReplWordsTitl: [
        ['', '']
    ],
    arrReplWordsImge: [
        ['', '']
    ],
    arrReplWordsDesc: [
        ['', '']
    ],
    arrReplWordsFile: [
        ['', '']
    ],
    arrDelWords: [''],
    preReplWords: [
        ['', '']
    ],
    sPatTag: '<[^<^>]*>',
    xmlHTTP: null,
    timeout: null,
    fHasXML: null,
    xmlObjt: null
};
URLtoXML['InitParsePortal'] = function (_0x7d93x2) {
    var _0x7d93x3 = '';
    this['mURL'] = _0x7d93x2;
    this['endedIco'] = '\' align=\'left\'/>';
    this['kUAdd'] = '';
    this['kEAdd'] = '';
    this['Buffer'] = -1;
    this['IBuffer'] = -1;
    if (this['NoP'] <= 0) {
        this['NoP'] = 1;
    };
    this['arrReplWordsBkwd'] = [
        ['&amp;', '&'],
        ['&lt;', '<'],
        ['&gt;', '>'],
        ['&apos;', '\''],
        ['&quot;', '"']
    ];
    this['arrReplWordsFrwd'] = [
        ['&', '&amp;'],
        ['<', '&lt;'],
        ['>', '&gt;'],
        ['\'', '&apos;'],
        ['"', '&quot;']
    ];
    this['arrReplWordsTitl'] = [
        ['&', '&amp;'],
        ['<', '&lt;'],
        ['>', '&gt;'],
        ['\'', '&apos;'],
        ['"', '&quot;']
    ];
    this['arrReplWordsDesc'] = [
        ['h\d+>', 'b>'],
        ['<\s*/*\s*p[^>]*>', '<br>'],
        ['\s*<b>\s*</b>', ''],
        ['\s*<\s*/*\s*br[^>]*>\s*<\s*/*\s*br[^>]*>', '<br>']
    ];
    this['arrReplWordsImge'] = [];
    this['arrReplWordsFile'] = [
        ['[^/]*/', '']
    ];
    this['arrDelWords'] = ['<\s*a[^<^>]*>', '<\s*/\s*a\s*>', '<\s*input[^<^>]*>', '<\s*/*\s*span[^>]*>', '<\s*/*\s*div[^>]*>', '<\s*/*\s*img[^>]*>', '<\s*/*\s*strong[^>]*>', '<\s*/*\s*ul[^>]*>', '<!--.*-->'];
    _0x7d93x3 = _0x7d93x2['match'](new RegExp('.*://[^/]*', 'im'));
    if (_0x7d93x3 == null) {
        _0x7d93x3 = '';
    };
    if (_0x7d93x2['toLowerCase']()['indexOf']('fex.net') >= 0) {
        this['title'] = 'FEX.NET';
    } else {
        if (_0x7d93x2['toLowerCase']()['indexOf']('ex.ua') >= 0) {
            this['title'] = 'EX.UA';
        } else {
            if (_0x7d93x2['toLowerCase']()['indexOf']('fs.ua') >= 0) {
                this['title'] = 'FS.UA';
            } else {
                if (_0x7d93x2['toLowerCase']()['indexOf']('uakino.net') >= 0) {
                    this['title'] = 'UAKINO.NET';
                } else {
                    if (_0x7d93x2['toLowerCase']()['indexOf']('filmy.net.ua') >= 0) {
                        this['title'] = 'FILMY.NET.UA';
                    } else {
                        if (_0x7d93x2['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0) {
                            this['title'] = 'KINO-V-ONLINE.RU';
                        } else {
                            if (_0x7d93x2['toLowerCase']()['indexOf']('megogo.net') >= 0) {
                                this['title'] = 'MEGOGO.NET';
                            } else {
                                if (_0x7d93x2['toLowerCase']()['indexOf']('film-online.su') >= 0) {
                                    this['title'] = 'FILM-ONLINE.SU';
                                } else {
                                    if (_0x7d93x2['toLowerCase']()['indexOf']('vkfilm.com') >= 0) {
                                        this['title'] = 'VKFILM.COM';
                                    } else {
                                        if (_0x7d93x2['toLowerCase']()['indexOf']('filmix.net') >= 0) {
                                            this['title'] = 'FILMIX.NET';
                                        } else {
                                            if (_0x7d93x2['toLowerCase']()['indexOf']('ualand.com.ua') >= 0) {
                                                this['title'] = 'UALAND.COM.UA';
                                            } else {
                                                if (_0x7d93x2['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
                                                    this['title'] = 'ARJLOVER.NET';
                                                } else {
                                                    if (_0x7d93x2['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                                                        this['title'] = 'KINOFILMS.TV';
                                                    } else {
                                                        if (_0x7d93x2['toLowerCase']()['indexOf']('hdserials.ru') >= 0) {
                                                            this['title'] = 'HDSERIALS.RU';
                                                        } else {
                                                            if (_0x7d93x2['toLowerCase']()['indexOf']('mediaserver') >= 0) {
                                                                this['title'] = 'HomeMediaServer';
                                                                this['Buffer'] = 20;
                                                                this['IBuffer'] = 5;
                                                            } else {
                                                                if (_0x7d93x2['toLowerCase']()['indexOf'](this['keyUSB']['toLowerCase']()) >= 0) {
                                                                    this['title'] = 'USB-Drive';
                                                                    this['Buffer'] = 20;
                                                                    this['IBuffer'] = 5;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    this['sHeader'] = '';
    if (_0x7d93x2['toLowerCase']()['indexOf']('fex.net') >= 0 || _0x7d93x2['toLowerCase']()['indexOf']('ex.ua') >= 0) {
        this['prefixURL'] = _0x7d93x3 + '/';
        this['kBUrl'] = '<td><a href=\'/';
        this['kEUrl'] = '\'>';
        this['kBImg'] = '<img src=\'';
        this['kEImg'] = '\'';
        this['kBDes'] = '';
        this['kEDes'] = '</td>';
        this['kBTit'] = 'alt=\'';
        this['kETit'] = '\'>';
        this['kLogo'] = '';
        this['kyPos'] = '';
        this['kBNeP'] = '<td><a href=\'/';
        this['kENeP'] = '\'><img src=\'/t3/arr_r.gif\' border=0 width=20 height=20 alt=\'\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, Ctrl &rarr;\'>';
        this['kBPrP'] = '<td><a href=\'/';
        this['kEPrP'] = '\'><img src=\'/t3/arr_l.gif\' border=0 width=20 height=20 alt=\'\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, Ctrl &larr;\'>';
        this['kPStm'] = 'filelist';
        this['kPBIm'] = '<table width=100% cellpadding=0 cellspacing=0 border=0><tr><td valign=top> <img src=\'';
        this['kPEIm'] = '\'';
        this['kPBDs'] = '<table width=100% cellpadding=0 cellspacing=0 border=0><tr><td valign=top>';
        this['kPEDs'] = '</td>';
        this['prefixSRL'] = _0x7d93x3 + '/get/';
        this['kPBUr'] = '<a href=\'/get/';
        this['kPEUr'] = '\'';
        this['kPBTt'] = 'title=\'';
        this['kPETt'] = '\'';
        this['arrReplWordsFrwd']['unshift'](['\?r=2&rv=1,0', '?v=1,0&per=20']);
        this['arrReplWordsTitl']['unshift']([' \u0421\u0442\u0430\u0442\u0435\u0439: \d+', '']);
        this['arrReplWordsTitl']['unshift'](['\s*\d+\.\.\d*\s*', '']);
        this['arrReplWordsTitl']['unshift'](['\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443', '']);
        this['arrReplWordsTitl']['unshift'](['\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0432\u0441\u0435\u0433\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0439 - \d+', '']);
        this['arrReplWordsDesc']['unshift'](['\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, Ctrl &rarr;', '']);
        this['arrReplWordsDesc']['unshift'](['\u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, Ctrl &larr;', '']);
        this['arrReplWordsImge']['unshift'](['/t2/arr_', _0x7d93x3 + '/t2/arr_']);
    } else {
        if (_0x7d93x2['toLowerCase']()['indexOf']('fs.ua') >= 0) {
            this['prefixURL'] = _0x7d93x3 + '/';
            if (_0x7d93x2['toLowerCase']()['indexOf']('search.aspx?search') >= 0) {
                this['kBUrl'] = '<td class="image-wrap"> <a href="/';
                this['kEUrl'] = '"';
                this['kBImg'] = '<img src="';
                this['kEImg'] = '"';
                this['kBDes'] = 'class="title">';
                this['kEDes'] = '</div>';
                this['kBTit'] = '\'>';
                this['kETit'] = '</a>';
            } else {
                this['kBUrl'] = '<a class="subject-link m-themed" href="/';
                this['kEUrl'] = '">';
                this['kBImg'] = '<img src="';
                this['kEImg'] = '"';
                this['kBDes'] = '';
                this['kEDes'] = '</td>';
                this['kBTit'] = 'alt=\'';
                this['kETit'] = '\'';
            };
            this['kLogo'] = '';
            this['kyPos'] = '';
            this['kBNeP'] = '<a class="next-link"href="/';
            this['kENeP'] = '">';
            this['kBPrP'] = '<a class="previous-link" href="/';
            this['kEPrP'] = '">';
            this['kPStm'] = 'b-files-folders';
            this['kPBIm'] = 'href="#"> <img src="';
            this['kPEIm'] = '"';
            this['kPBDs'] = '<div class="item-info">';
            this['kPEDs'] = '</div>';
            this['prefixSRL'] = _0x7d93x3 + '/';
            this['kPBUr'] = '<div class="item"> <a href="/';
            this['kPEUr'] = '"';
            this['kPBTt'] = '">';
            this['kPETt'] = '</a>';
            this['arrReplWordsTitl']['unshift'](['\u041D\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C', ''], ['\u0421\u043F\u0438\u0441\u043E\u043A \u0444\u0430\u0439\u043B\u043E\u0432', ''], ['<\s*/*\s*span[^>]*>', '']);
            this['arrReplWordsDesc']['unshift'](['<\s*tr[^>]*>', '']);
            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*td[^>]*>', '']);
            this['arrReplWordsDesc']['unshift'](['<\s*/+\s*tr[^>]*>', '<br>']);
            this['arrDelWords']['push']('<\s*/*\s*table[^>]*>');
        } else {
            if (_0x7d93x2['toLowerCase']()['indexOf']('uakino.net') >= 0) {
                this['prefixURL'] = _0x7d93x3 + '/';
                this['kBUrl'] = '<div class="media_line_item odd"> <a href="';
                this['kEUrl'] = '" class="fleft thumb">';
                this['kBImg'] = '<img src="';
                this['kEImg'] = '"';
                this['kBDes'] = '">';
                this['kEDes'] = '</ul>';
                this['kBTit'] = this['endedTAG'];
                this['kETit'] = '</a>';
                this['kLogo'] = '';
                this['kyPos'] = '';
                this['kBNeP'] = '<a href="';
                this['kENeP'] = '" class="nav_button">&gt;<span></span></a>';
                this['kBPrP'] = '<a href="';
                this['kEPrP'] = '" class="nav_button">&lt;<span></span></a>';
                this['kPStm'] = '<meta property="og:video" content="';
                this['kPBIm'] = '<meta property="og:image" content="';
                this['kPEIm'] = '">';
                this['kPBDs'] = '<meta property="og:description" content="';
                this['kPEDs'] = '">';
                this['prefixSRL'] = _0x7d93x3;
                this['kPBUr'] = '<meta property="og:video" content="';
                this['kPEUr'] = '">';
                this['kPBTt'] = '<meta property="og:video:type" content="';
                this['kPETt'] = '">';
                this['arrReplWordsDesc']['unshift'](['<\s*/*\s*li[^>]*>', '<br>']);
                this['arrReplWordsTitl']['unshift'](['/', '.'], [this['sPatTag'], '']);
                this['arrReplWordsImge']['unshift'](['/media/categories', _0x7d93x3 + '/media/categories']);
                this['preReplWords']['push'](['<div class="media_line_item even">', '<div class="media_line_item odd">']);
                this['preReplWords']['push'](['<div class="media_line_item">', '<div class="media_line_item odd">']);
            } else {
                if (_0x7d93x2['toLowerCase']()['indexOf']('filmy.net.ua') >= 0) {
                    this['prefixURL'] = _0x7d93x3;
                    this['kBUrl'] = '<td> <a href="';
                    this['kEUrl'] = '"';
                    this['kBImg'] = '<img src="/images/resize';
                    this['kEImg'] = '"';
                    this['kBDes'] = '<div id="mainfilm1">';
                    this['kEDes'] = '</div> </td>';
                    this['kBTit'] = 'class="tfilm">';
                    this['kETit'] = '</a>';
                    this['kLogo'] = '';
                    this['kyPos'] = '<font style="color:#000000;font-weight:bold;font-size:11px;">';
                    this['kBNeP'] = '<td width="17" height="16" align="center" > <a href="';
                    this['kENeP'] = '"';
                    this['kBPrP'] = '<td width="17" height="16" align="center" > <a href="';
                    this['kEPrP'] = '"';
                    this['kPStm'] = '<p id="filmtext1" style="padding: 6px 0px 0px 0px;">';
                    this['kPBIm'] = '"><img src="/images/resize';
                    this['kPEIm'] = '"';
                    this['kPBDs'] = '<td height="15" width="150"><p id="filmtext1">';
                    this['kPEDs'] = '<table cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0 0;border: 1px solid #333333">';
                    this['prefixSRL'] = _0x7d93x3;
                    this['kPBUr'] = '//www.filmy.net.ua';
                    this['kPEUr'] = '"';
                    this['kPBTt'] = '" >';
                    this['kPETt'] = '</a>';
                    this['arrReplWordsDesc']['unshift'](['<\s*tr[^>]*>', '']);
                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*td[^>]*>', '']);
                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*p[^>]*>', '']);
                    this['arrReplWordsDesc']['unshift'](['<\s*/+\s*tr[^>]*>', '<br>']);
                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*table[^>]*>', '']);
                    this['arrReplWordsImge']['unshift'](['/', _0x7d93x3 + '/images/resize/']);
                } else {
                    if (_0x7d93x2['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0) {
                        this['prefixURL'] = '';
                        this['kBUrl'] = '<td class="contentheading" width="100%"><a href="';
                        this['kEUrl'] = '"';
                        this['kBImg'] = '<img src="';
                        this['kEImg'] = '"';
                        this['kBDes'] = ' <a href="http://kino-v-online.ru/';
                        this['kEDes'] = '.html';
                        this['kBTit'] = '';
                        this['kETit'] = '';
                        this['kLogo'] = '';
                        this['kyPos'] = '';
                        this['kBNeP'] = '</a> <a href="';
                        this['kENeP'] = '">' + unescape('%u0120%uB965') + '</a></div>';
                        this['kBPrP'] = '<div class="navigation" align="center" style="margin-bottom:10px; margin-top:10px;"><a href="';
                        this['kEPrP'] = '">' + unescape('%u0360%u7824') + '</a> <a';
                        this['kPStm'] = '?st=';
                        this['kPBIm'] = '<div align="justify"> <img src="';
                        this['kPEIm'] = '"';
                        this['kPBDs'] = 'id="dle-comments-form" action="/';
                        this['kPEDs'] = '.html';
                        this['prefixSRL'] = '';
                        this['kPBUr'] = '&amp;file=';
                        this['kPEUr'] = '?st=';
                        this['kUAdd'] = '{\'file\':\'';
                        this['kEAdd'] = this['kPEUr'];
                        this['kPBTt'] = '';
                        this['kPETt'] = '';
                        this['arrReplWordsTitl']['unshift'](['\d{3,}-', '']);
                        this['arrReplWordsTitl']['unshift'](['online-', '']);
                        this['arrReplWordsDesc']['unshift'](['\d{3,}-', '']);
                        this['arrReplWordsDesc']['unshift'](['online-', '']);
                        this['endedIco'] = '\' width=\'250\' align=\'left\'/>';
                    } else {
                        if (_0x7d93x2['toLowerCase']()['indexOf']('megogo.net') >= 0) {
                            this['prefixURL'] = _0x7d93x3;
                            this['kBUrl'] = '<div class="b-list_poster"> <a href="';
                            this['kEUrl'] = '"';
                            this['kBImg'] = '<img src="';
                            this['kEImg'] = '"';
                            this['kBDes'] = '<p class="b-list_title">';
                            this['kEDes'] = '</div> </div> </div>';
                            this['kBTit'] = '">';
                            this['kETit'] = '</a>';
                            this['kLogo'] = '';
                            this['kyPos'] = '';
                            this['kBNeP'] = '<a class="btn btn-light e-paging-item e-paging_item-next" href="';
                            this['kENeP'] = '">';
                            this['kBPrP'] = '<a class="btn btn-light e-paging-item e-paging_item-prev" href="';
                            this['kEPrP'] = '">';
                            this['kPStm'] = '$.playervideoid';
                            this['kPBIm'] = '<a id="view_poster" href="javascript:void(0)" onclick=""> <img src="';
                            this['kPEIm'] = '"';
                            this['kPBDs'] = '<div class="b-view_wide">';
                            this['kPEDs'] = '</div><!-- /#view-info -->';
                            this['prefixSRL'] = _0x7d93x3;
                            this['kPBUr'] = '{"url":"http:\/\/megogo.net';
                            this['kPEUr'] = '","';
                            this['kPBTt'] = 'quality":"';
                            this['kPETt'] = '"}';
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*dt[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*dl[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*li[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*p[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*dd[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/+\s*dd[^>]*>', '<br>']);
                            this['arrReplWordsDesc']['unshift'](['<!-- /#view-series -->', '']);
                            this['arrReplWordsDesc']['unshift'](['<!-- /.b-series -->', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043B\u0435\u0435\u0440', '']);
                            this['arrReplWordsDesc']['unshift'](['\u041A\u0430\u0434\u0440\u044B \u0438\u0437 \u0444\u0438\u043B\u044C\u043C\u0430:', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0444\u0438\u043B\u044C\u043C\u0435', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F', '']);
                            this['arrReplWordsDesc']['unshift'](['\u041E\u0442\u0437\u044B\u0432\u044B\s*\d+', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0421\u0435\u0440\u0438\u044F\s*\d+', '']);
                            this['arrReplWordsDesc']['unshift'](['\u0421\u0435\u0437\u043E\u043D\u044B \u0438 \u0441\u0435\u0440\u0438\u0438', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*span[^>]*>', ' ']);
                            this['arrReplWordsDesc']['unshift'](['<h4 class="b-pp_title">', '<br><b>']);
                            this['arrReplWordsDesc']['unshift'](['<\s*tr[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*td[^>]*>', '']);
                            this['arrReplWordsDesc']['unshift'](['<\s*/+\s*tr[^>]*>', '<br>']);
                            this['arrReplWordsImge']['unshift'](['/s/data', _0x7d93x3 + '/s/data']);
                            this['arrReplWordsFrwd']['unshift'](['\\', '']);
                            this['arrDelWords']['push']('<\s*/*\s*table[^>]*>');
                        } else {
                            if (_0x7d93x2['toLowerCase']()['indexOf']('film-online.su') >= 0) {
                                this['prefixURL'] = '';
                                this['kBUrl'] = 'news-header"><h3><a href="';
                                this['kBImg'] = '<img src="/uploads/p';
                                this['kEImg'] = '"';
                                if (_0x7d93x2['toLowerCase']()['indexOf']('search') >= 0) {
                                    this['kEUrl'] = '" >';
                                    this['kBDes'] = '<img src="/uploads/p';
                                    this['kEDes'] = '"';
                                    this['kBTit'] = this['prefixTAG'];
                                    this['kETit'] = this['endedTAG'];
                                } else {
                                    this['kEUrl'] = '">';
                                    this['kBDes'] = '<li><a href="http://film-online.su/';
                                    this['kEDes'] = '">';
                                    this['kBTit'] = this['endedTAG'];
                                    this['kETit'] = '#comment';
                                };
                                this['kLogo'] = '';
                                this['kyPos'] = '';
                                this['kBNeP'] = '<span class="nav-next"><a rel="next" href="';
                                this['kENeP'] = '">';
                                this['kBPrP'] = '<span class="nav-prev"><a rel="prev" href="';
                                this['kEPrP'] = '">';
                                this['kPStm'] = '<!--dle_iframe_begin-->';
                                this['kPBIm'] = '<img src="/uploads/p';
                                this['kPEIm'] = '"';
                                this['kPBDs'] = '<img src="/uploads/p';
                                this['kPEDs'] = '"';
                                this['prefixSRL'] = '';
                                this['kPBUr'] = '<!--dle_iframe_begin--><iframe src="';
                                this['kPEUr'] = '"';
                                this['kUAdd'] = '&file=';
                                this['kEAdd'] = this['kPEUr'];
                                this['kPBTt'] = '';
                                this['kPETt'] = '';
                                this['arrReplWordsDesc']['unshift'](['[^<a' + '^' + this['endedTAG'] + '^/]*/', '']);
                                this['arrReplWordsDesc']['unshift'](['\d{3,}-', '']);
                                this['arrReplWordsDesc']['unshift'](['\d{4,}_', '']);
                                this['arrReplWordsDesc']['unshift'](['.html', '']);
                                this['arrReplWordsDesc']['unshift'](['.jpg', '']);
                                this['arrReplWordsDesc']['unshift'](['#comment', '']);
                                this['arrReplWordsTitl']['unshift'](['\d{3,}-', '']);
                                this['arrReplWordsTitl']['unshift'](['\.html', '']);
                                this['arrReplWordsImge']['unshift'](['osts/', _0x7d93x3 + '/uploads/posts/']);
                                this['endedIco'] = '\' width=\'250\' align=\'left\'/>';
                            } else {
                                if (_0x7d93x2['toLowerCase']()['indexOf']('vkfilm.com') >= 0) {
                                    this['prefixURL'] = '';
                                    this['kBUrl'] = '<td rowspan="6" id="img"><a href="';
                                    this['kEUrl'] = '">';
                                    this['kBImg'] = '<img src="';
                                    this['kEImg'] = '"';
                                    this['kBDes'] = '<td colspan="2" id="head">';
                                    this['kEDes'] = '<td id="td3" colspan="2">';
                                    this['kBTit'] = this['endedTAG'];
                                    this['kETit'] = '</a>';
                                    this['kLogo'] = '';
                                    this['kyPos'] = '';
                                    this['kBNeP'] = '<a href= "';
                                    this['kENeP'] = '">></a>';
                                    this['kBPrP'] = '<a href= "';
                                    this['kEPrP'] = '"><</a>';
                                    this['kPStm'] = '<iframe src="';
                                    this['kPBIm'] = '<img class="t-img" src="';
                                    this['kPEIm'] = '"';
                                    this['kPBDs'] = '<div class="t-row">';
                                    this['kPEDs'] = '<div id="goplay">';
                                    this['prefixSRL'] = '';
                                    this['kPBUr'] = '<iframe src="';
                                    this['kPEUr'] = '"';
                                    this['kPBTt'] = '';
                                    this['kPETt'] = '';
                                    this['arrReplWordsDesc']['unshift'](['<\s*tr[^>]*>', '']);
                                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*td[^>]*>', '']);
                                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*p[^>]*>', '']);
                                    this['arrReplWordsDesc']['unshift'](['<\s*/+\s*tr[^>]*>', '<br>']);
                                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*table[^>]*>', '']);
                                    this['arrReplWordsDesc']['unshift'](['</div> </div>', '<br>']);
                                    this['arrReplWordsDesc']['unshift'](['\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435', '']);
                                    this['arrReplWordsDesc']['unshift'](['\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435', '']);
                                    this['arrReplWordsTitl']['unshift']([' \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D', '']);
                                    this['arrReplWordsTitl']['unshift'](['<\s*/*\s*a[^<^>]*>', '']);
                                    this['arrReplWordsFrwd']['unshift'](['/category', _0x7d93x3 + '/category']);
                                } else {
                                    if (_0x7d93x2['toLowerCase']()['indexOf']('filmix.net') >= 0) {
                                        this['prefixURL'] = '';
                                        this['kBUrl'] = '<div class="block"> <h2><a href="';
                                        this['kEUrl'] = '"';
                                        this['kBImg'] = ' src="';
                                        this['kEImg'] = '"';
                                        this['kBDes'] = '<br/> <a href="http://filmix.net/';
                                        this['kEDes'] = '"';
                                        this['kBTit'] = '';
                                        this['kETit'] = '';
                                        this['kLogo'] = '';
                                        this['kyPos'] = '';
                                        this['kBNeP'] = '</a> <a href="';
                                        this['kENeP'] = '">' + unescape('%u0120%uB965') + '</a></div>';
                                        this['kBPrP'] = '<div class="pages"><a href="';
                                        this['kEPrP'] = '">' + unescape('%u0360%u7824') + '</a> <a';
                                        this['kPStm'] = '.txt';
                                        this['kPBIm'] = '<img align="left" src="';
                                        this['kPEIm'] = '"';
                                        this['kPBDs'] = '<li class="comments"><a href="http://filmix.net/';
                                        this['kPEDs'] = '">';
                                        this['prefixSRL'] = '';
                                        this['kPBUr'] = '&amp;file=';
                                        this['kPEUr'] = '"';
                                        this['kUAdd'] = '"file":"';
                                        this['kEAdd'] = this['kPEUr'];
                                        this['kPBTt'] = '';
                                        this['kPETt'] = '';
                                        this['arrReplWordsDesc']['unshift']([this['sPatTag'], '']);
                                        this['arrReplWordsDesc']['unshift'](['[^/]*/', '']);
                                        this['arrReplWordsDesc']['unshift'](['\d{4,}-', '']);
                                        this['arrReplWordsDesc']['unshift'](['.html', '']);
                                        this['arrReplWordsImge']['unshift'](['/uploads', _0x7d93x3 + '/uploads']);
                                        this['arrReplWordsImge']['unshift']([_0x7d93x3 + '/uploads', '/uploads']);
                                        this['preReplWords']['push'](['#\d+: ', '']);
                                        this['endedIco'] = '\' width=\'250\' align=\'left\'/>';
                                    } else {
                                        if (_0x7d93x2['toLowerCase']()['indexOf']('ualand.com.ua') >= 0) {
                                            this['prefixURL'] = '';
                                            this['kBUrl'] = '<span class="ntitle"> <a href="';
                                            this['kEUrl'] = '"';
                                            this['kBImg'] = '--><a href="';
                                            this['kEImg'] = '"';
                                            this['kBDes'] = 'class="abl42"><a href="http://ualand.com.ua';
                                            this['kEDes'] = '"';
                                            this['kBTit'] = '';
                                            this['kETit'] = '';
                                            this['kLogo'] = '';
                                            this['kyPos'] = '';
                                            this['kBNeP'] = '</a> <a href="';
                                            this['kENeP'] = '">' + unescape('%u0120%uB965') + '</a></div>';
                                            this['kBPrP'] = '<div class="navigation" align="center" style="margin:0px 0px 20px 0px;"><a href="';
                                            this['kEPrP'] = '">' + unescape('%u0360%u7824') + '</a> <a';
                                            this['kPStm'] = '.txt';
                                            this['kPBIm'] = '--><a href="';
                                            this['kPEIm'] = '"';
                                            this['kPBDs'] = '<a id="dle-comm-link" href="http://ualand.com.ua';
                                            this['kPEDs'] = '#comment">';
                                            this['prefixSRL'] = '';
                                            this['kPBUr'] = 'location = \'';
                                            this['kPEUr'] = '\'';
                                            this['kUAdd'] = '"file":"';
                                            this['kEAdd'] = '"';
                                            this['kPBTt'] = '';
                                            this['kPETt'] = '';
                                            this['arrReplWordsDesc']['unshift'](['[^/]*/', '']);
                                            this['arrReplWordsDesc']['unshift'](['\d{3,}-', '']);
                                            this['arrReplWordsDesc']['unshift'](['.html', '']);
                                            this['endedIco'] = '\' width=\'250\' align=\'left\'/>';
                                        } else {
                                            if (_0x7d93x2['toLowerCase']()['indexOf']('mediaserver') >= 0) {
                                                this['prefixURL'] = _0x7d93x3;
                                                this['kBUrl'] = '<a class="medialist" href="';
                                                this['kEUrl'] = '"';
                                                this['kBImg'] = '<img class="imagelist" src="';
                                                this['kEImg'] = '"';
                                                this['kBDes'] = '>';
                                                this['kEDes'] = '</a>';
                                                this['kBTit'] = '';
                                                this['kETit'] = '';
                                                this['kLogo'] = '';
                                                this['kyPos'] = '';
                                                this['kBNeP'] = '<a class="navigate" href="';
                                                this['kENeP'] = '"> <img class="imagenavigate" src="/presentation/images/next24_h.png" alt="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430" hspace=2/>';
                                                this['kBPrP'] = '<a class="navigate" href="';
                                                this['kEPrP'] = '"> <img class="imagenavigate" src="/presentation/images/previous24_h.png" alt="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430" hspace=2/>';
                                                this['kPStm'] = '\u0434\u043B\u044F \u041C\u0435\u0434\u0438\u0430\u0421\u0435\u0440\u0432\u0435\u0440\u0430 \u0437\u0434\u0435\u0441\u044C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0430\u0440\u0441\u0435\u0440 \u043D\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0442\u0440\u0438\u043C\u0430';
                                                this['kPBIm'] = '';
                                                this['kPEIm'] = '';
                                                this['kPBDs'] = '';
                                                this['kPEDs'] = '';
                                                this['prefixSRL'] = '';
                                                this['kPBUr'] = '';
                                                this['kPEUr'] = '';
                                                this['kUAdd'] = '';
                                                this['kEAdd'] = this['kPEUr'];
                                                this['kPBTt'] = '';
                                                this['kPETt'] = '';
                                                this['arrReplWordsImge']['unshift'](['/presentation/images', _0x7d93x3 + '/presentation/images']);
                                                this['preReplWords']['push'](['\s*title="[^"]*"', '']);
                                            } else {
                                                if (_0x7d93x2['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
                                                    this['searchBlockLines'] = 12;
                                                    this['shiftLnStartBlock'] = -7;
                                                    this['prefixURL'] = _0x7d93x3;
                                                    this['kBUrl'] = '<td><a href="';
                                                    this['kEUrl'] = '"';
                                                    this['kBImg'] = '';
                                                    this['kEImg'] = '';
                                                    this['kBDes'] = '<td><font';
                                                    this['kEDes'] = '<td><a';
                                                    this['kBTit'] = this['prefixTAG'];
                                                    this['kETit'] = this['endedTAG'];
                                                    this['kLogo'] = '';
                                                    this['kyPos'] = '';
                                                    this['kBNeP'] = '';
                                                    this['kENeP'] = '';
                                                    this['kBPrP'] = '';
                                                    this['kEPrP'] = '';
                                                    this['kPStm'] = '\u0434\u043B\u044F ArjLover.net \u0437\u0434\u0435\u0441\u044C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0430\u0440\u0441\u0435\u0440 \u043D\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0442\u0440\u0438\u043C\u0430';
                                                    this['kPBIm'] = '';
                                                    this['kPEIm'] = '';
                                                    this['kPBDs'] = '';
                                                    this['kPEDs'] = '';
                                                    this['prefixSRL'] = '';
                                                    this['kPBUr'] = '';
                                                    this['kPEUr'] = '';
                                                    this['kUAdd'] = '';
                                                    this['kEAdd'] = this['kPEUr'];
                                                    this['kPBTt'] = '';
                                                    this['kPETt'] = '';
                                                    this['arrReplWordsDesc']['unshift'](['\s*color=[^>]*>', '']);
                                                    this['arrReplWordsDesc']['unshift'](['<\s*/*\s*font[^>]*>', '']);
                                                    this['arrReplWordsDesc']['unshift'](['<\s*td[^>]*>', '']);
                                                    this['arrReplWordsDesc']['unshift'](['<\s*/+\s*td[^>]*>', '<br>']);
                                                    this['arrReplWordsTitl']['unshift'](['[^/]*/', '']);
                                                    this['endedIco'] = '\' width=\'250\' align=\'left\'/>';
                                                } else {
                                                    if (_0x7d93x2['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                                                        this['prefixURL'] = '';
                                                        this['kBUrl'] = ');"> <a href="';
                                                        this['kEUrl'] = '"';
                                                        this['kBImg'] = 'onmouseout="UnTip()" href="';
                                                        this['kEImg'] = '"';
                                                        this['kBDes'] = '<a onmouseover="Tip(\'';
                                                        this['kEDes'] = '\')"';
                                                        this['kBTit'] = '<b>';
                                                        this['kETit'] = '</b>';
                                                        this['kLogo'] = '';
                                                        this['kyPos'] = '] ';
                                                        this['kBNeP'] = '<a href=\'';
                                                        this['kENeP'] = '\' class=\'pages\'>';
                                                        this['kBPrP'] = '<a href=\'';
                                                        this['kEPrP'] = '\' class=\'pages\'>';
                                                        this['kPStm'] = '<iframe ';
                                                        this['kPBIm'] = '<table width="100%"><tr><td style="padding-right: 10px; padding-bottom: 10px"> <img src="';
                                                        this['kPEIm'] = '"';
                                                        this['kPBDs'] = '<td width="100%" height="100%" align="left" valign="top" id="posterArea">';
                                                        this['kPEDs'] = '</p> <br><br>';
                                                        this['prefixSRL'] = '';
                                                        this['kPBUr'] = '<iframe src="';
                                                        this['kPEUr'] = '"';
                                                        this['kUAdd'] = '<iframe width="640" height="360" src="';
                                                        this['kEAdd'] = this['kPEUr'];
                                                        this['kPBTt'] = '';
                                                        this['kPETt'] = '';
                                                        this['arrReplWordsDesc']['unshift'](['<\s*tr[^>]*>', '']);
                                                        this['arrReplWordsDesc']['unshift'](['<\s*/*\s*td[^>]*>', '']);
                                                        this['arrReplWordsDesc']['unshift'](['<\s*/+\s*tr[^>]*>', '<br>']);
                                                        this['arrReplWordsDesc']['unshift'](['<\s*/*\s*table[^>]*>', '']);
                                                        this['arrReplWordsTitl']['unshift'](['<br />', '']);
                                                        this['preReplWords']['push'](['<div class="art-blockcontent-body">.*', '']);
                                                        this['endedIco'] = '\' width=\'200\' align=\'left\'/>';
                                                    } else {
                                                        if (_0x7d93x2['toLowerCase']()['indexOf']('hdserials.ru') >= 0) {
                                                            this['prefixURL'] = _0x7d93x3;
                                                            this['kBUrl'] = '<h2> <a href="';
                                                            this['kEUrl'] = '"';
                                                            this['kBImg'] = '<img src="';
                                                            this['kEImg'] = '"';
                                                            this['kBDes'] = '>';
                                                            this['kEDes'] = '<div class="clr">';
                                                            this['kBTit'] = '>';
                                                            this['kETit'] = '</a>';
                                                            this['kLogo'] = '';
                                                            this['kyPos'] = '';
                                                            this['kBNeP'] = '<a href="';
                                                            this['kENeP'] = '" title="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F">';
                                                            this['kBPrP'] = '<a href="';
                                                            this['kEPrP'] = '" title="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F">';
                                                            this['kPStm'] = '<div class="itembody">';
                                                            this['kPBIm'] = '<span class="itemimage"> <a class="modal" href="';
                                                            this['kPEIm'] = '"';
                                                            this['kPBDs'] = '<div class="itemfulltext">';
                                                            this['kPEDs'] = '</p> <p style="text-align: center;">';
                                                            this['prefixSRL'] = '';
                                                            this['kPBUr'] = '<iframe src="';
                                                            this['kUAdd'] = '';
                                                            this['kPEUr'] = '"';
                                                            this['kPBTt'] = '<p style="text-align: center;">';
                                                            this['kPETt'] = '</p>';
                                                            this['arrReplWordsDesc']['unshift'](['<\s*strong[^>]*>', '<b>']);
                                                            this['arrReplWordsDesc']['unshift'](['<\s*/+\s*strong[^>]*>', '</b>']);
                                                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*p[^>]*>', '']);
                                                            this['arrReplWordsDesc']['unshift'](['<\s*br[^>]*><\s*br[^>]*>', '<br>']);
                                                            this['arrReplWordsDesc']['unshift'](['<\s*/*\s*h\d+\s*>', '']);
                                                            this['arrReplWordsDesc']['unshift'](['\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B...', '']);
                                                            this['arrReplWordsTitl']['unshift']([this['sPatTag'], '']);
                                                            this['arrReplWordsTitl']['unshift'](['\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D', '']);
                                                            this['arrReplWordsTitl']['unshift'](['\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438', '']);
                                                            this['arrReplWordsTitl']['unshift'](['\u0432 \u0445\u043E\u0440\u043E\u0448\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435', '']);
                                                            this['arrReplWordsTitl']['unshift'](['\u0444\u0438\u043B\u044C\u043C', '']);
                                                            this['preReplWords']['push'](['<h3 class="catItemTitle">', '<h2>']);
                                                            this['endedIco'] = '\' width=\'200\' align=\'left\'/>';
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
URLtoXML['CheckActivation'] = function () {
    var _0x7d93x4 = null;
    if (this['fInit'] == null) {
        _0x7d93x4 = document['getElementById']('pluginNetwork');
        if (_0x7d93x4) {
            this['MacAddr'] = _0x7d93x4.GetMAC();
        };
//        if (URLtoXML['trim'](this.MacAddr) != '') {
//            var _0x7d93x5 = URLtoXML.GetPage(this['icoPList'], '', '');
//            _0x7d93x5 = _0x7d93x5['split'](/\r\n/);
//            for (var _0x7d93x6 in _0x7d93x5) {
//                _0x7d93x5[_0x7d93x6] = _0x7d93x5[_0x7d93x6]['split'](/\s+/);
//            };
//            for (var _0x7d93x6 in _0x7d93x5) {
//                if (URLtoXML['trim'](this['MacAddr']['toLowerCase']()) == URLtoXML['trim'](_0x7d93x5[_0x7d93x6][0]['toLowerCase']())) {
//                    this['dInit'] = ' \u0434\u043E <font color="skyblue">' + URLtoXML['trim'](_0x7d93x5[_0x7d93x6][1]) + '</font>';
                    this['dInit'] = ' \u0434\u043E <font color="skyblue">cracked by vinnitu</font>';
                    this['title'] = this['title'] + this['dInit'];
                    this['fInit'] = true;
                    return true;
//                };
//            };
//        };
//        this['fInit'] = false;
//        return false;
    } else {
        this['title'] = this['title'] + this['dInit'];
        return this['fInit'];
    };
};
URLtoXML['InfoAccess'] = function () {
    var _0x7d93x7 = this['prefixXML'] + '<table align="center" border="0" cellspacing="0" cellpadding="0" width="95%">\x0A' + '   <tr><td align="left" valign="top">\x0A' + '      <center>\x0A' + '         <div style="font-size: 20px;">\u0414\u043E\u0441\u0442\u0443\u043F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D.</div>\x0A';
    _0x7d93x7 = _0x7d93x7 + '      </center>\x0A' + '      <hr/>\x0A' + '         <center>\u0412\u0430\u0448 \u043C\u0430\u043A-\u0430\u0434\u0440\u0435\u0441:\x0A' + '         <font color="skyblue">\x0A' + this['MacAddr'] + '         </font>\x0A' + '         </center>\x0A' + '      <hr/>\x0A' + '      \u0412\u0441\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:<br/><font color="skyblue">http://78.159.49.183</font>\x0A' + '      <br/>\u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u043A\u0430\u043A\u0438\u0435-\u0442\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043D\u0430 e-mail:<br/><font color="skyblue">tsnakeman@mail.ru</font>\x0A' + '   </td></tr>\x0A' + '</table>\x0A' + this['endedXML'];
    return _0x7d93x7;
};
URLtoXML['Proceed'] = function (_0x7d93x2, _0x7d93x8) {
    _0x7d93x2 = URLtoXML['trim'](_0x7d93x2);
    URLtoXML.InitParsePortal(_0x7d93x2);
    this['outFmt'] = _0x7d93x8;
    this['outTXT'] = '';
    this['fComplete'] = false;
    if (!URLtoXML.CheckActivation()) {
        URLtoXML['outTXT'] = URLtoXML['getHeadXML']();
        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['addBlockXML']('No access', 'http://', URLtoXML.InfoAccess(), 0, '', false);
        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['getBottomXML']();
        URLtoXML['fComplete'] = true;
    } else {
        if (_0x7d93x2['toLowerCase']()['indexOf'](this['keyUSB']['toLowerCase']()) == 0) {
            URLtoXML['outTXT'] = URLtoXML.GetUSBMedia(_0x7d93x2);
            URLtoXML['fComplete'] = true;
        } else {
            if (this['xmlHTTP'] != null) {
                this['xmlHTTP'] = null;
            };
            this['xmlHTTP'] = new XMLHttpRequest();
            this['xmlHTTP']['open']('GET', _0x7d93x2, this['fMode']);
            this['xmlHTTP']['onreadystatechange'] = function () {
                if (URLtoXML['xmlHTTP']['readyState'] == 4) {
                    if (URLtoXML['fCancel']) {
                        URLtoXML['fCancel'] = false;
                        URLtoXML['outTXT'] = URLtoXML['getHeadXML']();
                        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['addBlockXML']('Timeout', '', 'End of time for server response: ' + URLtoXML['mSecReq'] / 1000 + ' seconds', 0, '', false);
                        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['getBottomXML']();
                        URLtoXML['fComplete'] = true;
                    } else {
                        if (URLtoXML['fMode']) {
                            clearTimeout(URLtoXML['timeout']);
                        };
                        URLtoXML['outTXT'] = URLtoXML['getHeadXML']();
                        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML.ParseXMLData();
                        URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['getBottomXML']();
                        URLtoXML['fComplete'] = true;
                    };
                };
            };
            this['xmlHTTP']['setRequestHeader']('User-Agent', 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51');
            this['xmlHTTP']['send']();
        };
    };
    if (this['fMode']) {
        this['timeout'] = setTimeout('URLtoXML.stopTimeOut()', this['mSecReq']);
        this['fHasXML'] = setInterval('URLtoXML.checkReadyXML()', 300);
    } else {
        if (!this['flagDebug']) {
            if (this['fComplete']) {
                return URLtoXML.GetResult();
            };
        } else {
            frm['xml_text']['value'] = frm['xml_text']['value'] + this['outTXT'];
        };
    };
};
URLtoXML['checkReadyXML'] = function () {
    if (this['fComplete']) {
        clearInterval(this['fHasXML']);
        clearTimeout(this['timeout']);
        if (this['fMode']) {
            var _0x7d93x9 = URLtoXML.GetResult();
            if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
                API['getChannel_list'](_0x7d93x9);
            } else {
                if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
                    Main['parseXml_Rss'](_0x7d93x9);
                };
            };
        };
    };
};
URLtoXML['GetResult'] = function () {
    if (this['xmlObjt'] != null) {
        this['xmlObjt'] = null;
    };
    if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0 || this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
        var _0x7d93xa = new DOMParser();
        this['xmlObjt'] = _0x7d93xa['parseFromString'](this['outTXT'], 'text/xml');
        if (!this['xmlObjt']['documentElement']['hasChildNodes']()) {
            alert('Generated XML playlist is empty.');
            return null;
        } else {
            return this['xmlObjt'];
        };
    } else {
        return this['outTXT'];
    };
};
URLtoXML['PostXML'] = function (_0x7d93xb, _0x7d93x2) {
    if (_0x7d93x2 != '') {
        if (this['xmlHTTP'] != null) {
            this['xmlHTTP'] = null;
        };
        this['xmlHTTP'] = new XMLHttpRequest();
        this['xmlHTTP']['open']('POST', _0x7d93x2, true);
        this['xmlHTTP']['send'](_0x7d93xb);
    };
};
URLtoXML['stopRequest'] = function () {
    clearTimeout(URLtoXML['timeout']);
    clearInterval(URLtoXML['fHasXML']);
    if (URLtoXML['xmlHTTP'] != null) {
        URLtoXML['xmlHTTP']['abort']();
        URLtoXML['xmlHTTP']['destroy']();
    };
    if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
        API['XML_URL'] = Main['pre_pl_url'];
        Main['prev_pl_array']['pop']();
        API['loadComplete']();
    };
};
URLtoXML['stopTimeOut'] = function () {
    this['fCancel'] = true;
    if (this['xmlHTTP'] != null) {
        this['xmlHTTP']['abort']();
        setTimeout('URLtoXML.xmlHTTP.destroy()', 500);
        if (URLtoXML['xmlHTTP']['readyState'] != 4) {
            URLtoXML['fCancel'] = false;
            URLtoXML['outTXT'] = URLtoXML['getHeadXML']();
            URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['addBlockXML']('Timeout', '', 'End of time for server response: ' + URLtoXML['mSecReq'] / 1000 + ' seconds', 0, '', false);
            URLtoXML['outTXT'] = URLtoXML['outTXT'] + URLtoXML['getBottomXML']();
            URLtoXML['fComplete'] = true;
        };
    };
};
URLtoXML['ParseXMLData'] = function () {
    var _0x7d93xc, _0x7d93x7, _0x7d93xd, _0x7d93xe, _0x7d93xf, _0x7d93x10, _0x7d93x11, _0x7d93x12, _0x7d93x13, _0x7d93x14, _0x7d93x15, _0x7d93x16, _0x7d93x17, _0x7d93x18, _0x7d93x19, _0x7d93x1a, _0x7d93x1b, _0x7d93x1c, _0x7d93x1d, _0x7d93x1e, _0x7d93x1f;
    var _0x7d93x20 = [];
    _0x7d93x16 = '';
    _0x7d93x7 = '';
    _0x7d93x1f = '';
    _0x7d93x1a = 0;
    _0x7d93x1b = false;
    if (this['xmlHTTP']['status'] == 200) {
        if (this['mURL']['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
            _0x7d93x18 = this['mURL']['toLowerCase']()['lastIndexOf'](this['maskNumPage']);
            _0x7d93x19 = _0x7d93x18;
            if (_0x7d93x18 >= 0) {
                _0x7d93x18 = _0x7d93x18 + this['maskNumPage']['length'];
                _0x7d93x1a = this['mURL']['substr'](_0x7d93x18);
                if (isNaN(_0x7d93x1a)) {
                    _0x7d93x1a = 0;
                } else {
                    _0x7d93x1a = parseInt(_0x7d93x1a);
                };
                this['mURL'] = this['mURL']['substring'](0, _0x7d93x19);
            };
            _0x7d93x1c = this['xmlHTTP']['responseText']['split']('\x0A');
            this['xmlHTTP'] = null;
            for (_0x7d93x1d in _0x7d93x1c) {
                URLtoXML.FindVal(_0x7d93x1c[_0x7d93x1d], 0, this['kBUrl'], this['kEUrl'], false);
                if (this['nStart'] >= 0) {
                    _0x7d93x1d = parseInt(_0x7d93x1d) + parseInt(this['shiftLnStartBlock']);
                    if (_0x7d93x1a > 0) {
                        _0x7d93x1d = _0x7d93x1d + _0x7d93x1a * (this['itemsOnPage'] * this['searchBlockLines']);
                    };
                    _0x7d93x1e = (this['itemsOnPage'] * this['searchBlockLines']);
                    if (_0x7d93x1d > (_0x7d93x1c['length'] - 1)) {
                        _0x7d93x1d = (_0x7d93x1c['length'] - 1);
                    };
                    if ((_0x7d93x1d + _0x7d93x1e) > _0x7d93x1c['length']) {
                        _0x7d93x1e = _0x7d93x1c['length'] - _0x7d93x1d;
                    };
                    this['nStart'] = -1;
                    for (var _0x7d93x6 = (_0x7d93x1d + _0x7d93x1e);
                    (_0x7d93x6 < (_0x7d93x1d + _0x7d93x1e * 2) && _0x7d93x6 < _0x7d93x1c['length']); _0x7d93x6++) {
                        if (_0x7d93x1c[_0x7d93x6] != undefined) {
                            URLtoXML.FindVal(_0x7d93x1c[_0x7d93x6], 0, this['kBUrl'], this['kEUrl'], false);
                        };
                        if (this['nStart'] >= 0) {
                            _0x7d93x1b = true;
                            break;
                        };
                    };
                    _0x7d93x1c = _0x7d93x1c['splice'](_0x7d93x1d, _0x7d93x1e);
                    _0x7d93x7 = _0x7d93x1c['join']('\x0A');
                    if (_0x7d93x7 == '') {
                        _0x7d93x7 = '<html>';
                    };
                    _0x7d93x1c = null;
                    break;
                };
            };
        };
        if (_0x7d93x7 == '') {
            _0x7d93x7 = URLtoXML.DelTrash(this['xmlHTTP']['responseText']);
            this['xmlHTTP'] = null;
        } else {
            _0x7d93x7 = URLtoXML.DelTrash(_0x7d93x7);
        };
        for (var _0x7d93x6 in this['preReplWords']) {
            _0x7d93x7 = _0x7d93x7['replace'](new RegExp(this['preReplWords'][_0x7d93x6][0], 'gim'), this['preReplWords'][_0x7d93x6][1]);
        };
        this['nStart'] = 0;
        this['NoP'] = this['NoP'] + 1;
        if (_0x7d93x7['toLowerCase']()['indexOf'](this['kPStm']) < 0) {
            while (this['nStart'] >= 0) {
                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBUrl'], this['kEUrl'], false));
                if (_0x7d93xd != '') {
                    _0x7d93xd = this['prefixURL'] + _0x7d93xd;
                    if (this['mURL']['toLowerCase']()['indexOf']('ex.ua') >= 0 && _0x7d93xd['toLowerCase']()['indexOf']('?v=1,0&per=20') < 0) {
                        _0x7d93xd = _0x7d93xd + '?v=1,0&per=20';
                    };
                    _0x7d93xd = URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsFrwd']);
                    _0x7d93xc = this['nStart'];
                    if (this['mURL']['toLowerCase']()['indexOf']('mediaserver') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                        _0x7d93x11 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBImg'], this['kEImg'], true));
                    } else {
                        _0x7d93x11 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBImg'], this['kEImg'], false));
                    };
                    _0x7d93x12 = this['nStart'];
                    this['nStart'] = _0x7d93xc;
                    if (_0x7d93x11 != '') {
                        _0x7d93x11 = URLtoXML.ReplWords(_0x7d93x11, this['arrReplWordsImge']);
                    };
                    if (this['mURL']['toLowerCase']()['indexOf']('arjlover.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                        _0x7d93x13 = URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBDes'], this['kEDes'], true);
                        if (this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                            this['nStart'] = _0x7d93xc;
                        };
                    } else {
                        _0x7d93x13 = URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBDes'], this['kEDes'], false);
                    };
                    if (_0x7d93x13 != '') {
                        if (_0x7d93x12 > this['nStart']) {
                            _0x7d93x11 = '';
                        };
                        _0x7d93x13 = this['prefixTAG'] + _0x7d93xd + this['endedTAG'] + _0x7d93x13;
                        _0x7d93x13 = URLtoXML.ReplWords(_0x7d93x13, this['arrReplWordsDesc']);
                        _0x7d93xc = this['nStart'];
                        _0x7d93x14 = URLtoXML.FindVal(_0x7d93x13, 0, this['kBTit'], this['kETit'], false);
                        this['nStart'] = _0x7d93xc;
                        if (_0x7d93x14 != '') {
                            _0x7d93x14 = URLtoXML['trim'](_0x7d93x14);
                        } else {
                            _0x7d93x14 = _0x7d93x13;
                            while (_0x7d93x14 != _0x7d93x14['replace'](new RegExp(this['sPatTag'], 'gim'), ' ')) {
                                _0x7d93x14 = _0x7d93x14['replace'](new RegExp(this['sPatTag'], 'gim'), ' ');
                            };
                            _0x7d93x14 = URLtoXML.DelTrash(_0x7d93x14);
                        };
                        _0x7d93x13 = URLtoXML.DelWords(_0x7d93x13);
                        _0x7d93x13 = URLtoXML.DelTrash(_0x7d93x13);
                        _0x7d93x14 = URLtoXML.ReplWords(_0x7d93x14, this['arrReplWordsTitl']);
                        if (this['mURL']['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
                            _0x7d93x11 = this['prefixURL'] + '/ap/' + _0x7d93x14 + '/' + _0x7d93x14 + '.image1.jpg';
                        };
                        if (_0x7d93x11 != '') {
                            _0x7d93x15 = URLtoXML.ReplWords(_0x7d93x11, this['arrReplWordsFrwd']);
                            _0x7d93x11 = this['prefixImg'] + _0x7d93x11 + this['endedIco'];
                            _0x7d93x13 = _0x7d93x11 + _0x7d93x13;
                        } else {
                            _0x7d93x15 = '';
                        };
                        _0x7d93x13 = this['sHeader'] + _0x7d93x13;
                        if (this['outFmt']['toLowerCase']()['indexOf']('rss') < 0) {
                            _0x7d93x13 = this['prefixTBL'] + _0x7d93x13 + this['endedTBL'];
                        };
                        _0x7d93x13 = this['prefixXML'] + _0x7d93x13 + this['endedXML'];
                        if (_0x7d93x14 != '' && _0x7d93xd != '') {
                            if (URLtoXML['checkNameExt'](_0x7d93xd, this['arrVideoExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrAudioExt'])) {
                                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, _0x7d93x13, 0, _0x7d93x15, true);
                            } else {
                                if (!URLtoXML['checkNameExt'](_0x7d93xd, this['arrImageExt']) && !URLtoXML['checkNameExt'](_0x7d93xd, this['arrTrashExt'])) {
                                    _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, _0x7d93x13, 0, _0x7d93x15, false);
                                };
                            };
                        };
                    };
                } else {
                    if (this['nStart'] >= 0) {
                        _0x7d93x13 = URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBDes'], this['kEDes'], false);
                    };
                };
            };
            if (this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                _0x7d93x7 = URLtoXML.FindVal(_0x7d93x7, 0, '<div class=\'pages\'>', '</html>', false);
            };
            if (this['mURL']['toLowerCase']()['indexOf']('uakino.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0 || this['mURL']['toLowerCase']()['indexOf']('vkfilm.com') >= 0 || this['mURL']['toLowerCase']()['indexOf']('filmix.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('ualand.com.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('mediaserver') >= 0 || this['mURL']['toLowerCase']()['indexOf']('ex.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('hdserials.ru') >= 0) {
                _0x7d93xd = URLtoXML.FindVal(_0x7d93x7, 0, this['kEPrP'], '', false);
                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBPrP'], this['kEPrP'], true));
            } else {
                if (this['mURL']['toLowerCase']()['indexOf']('filmy.net.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                    _0x7d93xd = URLtoXML.FindVal(_0x7d93x7, 0, this['kyPos'], '', false);
                    if (this['nStart'] >= 0) {
                        _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'] - 1, this['kBPrP'], this['kEPrP'], true));
                    };
                } else {
                    if (this['mURL']['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
                        if (_0x7d93x1a >= 1) {
                            _0x7d93xd = this['mURL'] + this['maskNumPage'] + (_0x7d93x1a - 1).toString();
                            _0x7d93xd = _0x7d93xd['replace'](new RegExp(this['prefixURL'], 'i'), '');
                        } else {
                            _0x7d93xd = '';
                        };
                    } else {
                        _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, this['kBPrP'], this['kEPrP'], false));
                    };
                };
            };
            if (_0x7d93xd != '') {
                _0x7d93xd = this['prefixURL'] + _0x7d93xd;
                _0x7d93x15 = 'http://www.ex.ua/t2/arr_lg.gif';
                if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
                    if (Main['ver'] > 2.1) {
                        _0x7d93x16 = '<prev_page_url text=\'\u041D\u0430\u0437\u0430\u0434\'><![CDATA[' + _0x7d93xd + ']]></prev_page_url>\x0A' + _0x7d93x16;
                    } else {
                        _0x7d93x16 = '<next_page_url text=\'\u041D\u0430\u0437\u0430\u0434\'><![CDATA[' + _0x7d93xd + ']]></next_page_url>\x0A' + _0x7d93x16;
                    };
                } else {
                    if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {};
                };
            };
            if (this['mURL']['toLowerCase']()['indexOf']('uakino.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0 || this['mURL']['toLowerCase']()['indexOf']('vkfilm.com') >= 0 || this['mURL']['toLowerCase']()['indexOf']('filmix.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('ualand.com.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('mediaserver') >= 0 || this['mURL']['toLowerCase']()['indexOf']('ex.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('hdserials.ru') >= 0) {
                _0x7d93xd = URLtoXML.FindVal(_0x7d93x7, 0, this['kENeP'], '', false);
                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBNeP'], this['kENeP'], true));
            } else {
                if (this['mURL']['toLowerCase']()['indexOf']('filmy.net.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                    _0x7d93xd = URLtoXML.FindVal(_0x7d93x7, 0, this['kyPos'], '', false);
                    if (this['nStart'] >= 0) {
                        _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kBNeP'], this['kENeP'], false));
                    };
                } else {
                    if (this['mURL']['toLowerCase']()['indexOf']('arjlover.net') >= 0) {
                        if (_0x7d93x1b) {
                            _0x7d93xd = this['mURL'] + this['maskNumPage'] + (_0x7d93x1a + 1).toString();
                            _0x7d93xd = _0x7d93xd['replace'](new RegExp(this['prefixURL'], 'i'), '');
                        } else {
                            _0x7d93xd = '';
                        };
                    } else {
                        _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, this['kBNeP'], this['kENeP'], false));
                    };
                };
            };
            if (_0x7d93xd != '') {
                _0x7d93xd = this['prefixURL'] + _0x7d93xd;
                _0x7d93x15 = 'http://www.ex.ua/t2/arr_rg.gif';
                if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
                    if (Main['ver'] > 2.1) {
                        _0x7d93x16 = '<next_page_url text=\'\u0414\u0430\u043B\u0435\u0435\'><![CDATA[' + _0x7d93xd + ']]></next_page_url>\x0A' + _0x7d93x16;
                    } else {
                        _0x7d93x16 = '<prev_page_url text=\'\u0414\u0430\u043B\u0435\u0435\'><![CDATA[' + _0x7d93xd + ']]></prev_page_url>\x0A' + _0x7d93x16;
                    };
                } else {
                    if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
                        _0x7d93xd = URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsFrwd']);
                        _0x7d93xd = URLtoXML['addBlockXML'](this['sNextPage'] + ' - ' + this['NoP'].toString(), _0x7d93xd, this['sNextPage'], 0, _0x7d93x15, false);
                        _0x7d93x16 = _0x7d93xd + _0x7d93x16 + _0x7d93xd;
                    };
                };
            };
            if (_0x7d93x16 == '') {
                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML']('PlayList data not found.', '', this['prefixXML'] + '<font color=\'red\'><b>Not found any correct data for generate PlayList!</b></font>' + this['endedXML'], 0, '', false);
            };
        } else {
            _0x7d93xc = this['nStart'];
            _0x7d93x11 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kPBIm'], this['kPEIm'], false));
            _0x7d93x12 = this['nStart'];
            this['nStart'] = _0x7d93xc;
            if (_0x7d93x11 != '') {
                _0x7d93x11 = URLtoXML.ReplWords(_0x7d93x11, this['arrReplWordsImge']);
            };
            _0x7d93x15 = '';
            _0x7d93x13 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kPBDs'], this['kPEDs'], false));
            if (_0x7d93x13 != '') {
                if (_0x7d93x12 > this['nStart'] && this['mURL']['toLowerCase']()['indexOf']('uakino.net') < 0 && this['mURL']['toLowerCase']()['indexOf']('ualand.com.ua') < 0) {
                    _0x7d93x11 = '';
                };
                _0x7d93x13 = URLtoXML.ReplWords(_0x7d93x13, this['arrReplWordsDesc']);
                _0x7d93x13 = URLtoXML.DelWords(_0x7d93x13);
                _0x7d93x13 = URLtoXML.DelTrash(_0x7d93x13);
                if (_0x7d93x11 != '') {
                    _0x7d93x15 = URLtoXML.ReplWords(_0x7d93x11, this['arrReplWordsFrwd']);
                    _0x7d93x11 = this['prefixImg'] + _0x7d93x11 + this['endedImg'];
                    _0x7d93x13 = _0x7d93x11 + _0x7d93x13;
                };
                _0x7d93x13 = this['sHeader'] + _0x7d93x13;
                if (this['outFmt']['toLowerCase']()['indexOf']('rss') < 0) {
                    _0x7d93x13 = this['prefixTBL'] + _0x7d93x13 + this['endedTBL'];
                };
            } else {
                _0x7d93x13 = 'Description not found';
                this['nStart'] = _0x7d93xc;
            };
            if (this['mURL']['toLowerCase']()['indexOf']('filmy.net.ua') >= 0 || this['mURL']['toLowerCase']()['indexOf']('filmix.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0) {
                this['nStart'] = _0x7d93xc;
            };
            _0x7d93x17 = false;
            if (this['mURL']['toLowerCase']()['indexOf']('filmix.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('ualand.com.ua') >= 0) {
                _0x7d93xc = this['nStart'];
                _0x7d93xf = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, 'pl=', this['kPStm'], false));
                this['nStart'] = _0x7d93xc;
                if (_0x7d93xf != '') {
                    _0x7d93xf = _0x7d93xf + this['kPStm'];
                    if (this['mURL']['toLowerCase']()['indexOf']('filmix.net') >= 0) {
                        _0x7d93x7 = URLtoXML.GetPage(_0x7d93xf, 'http://filmix.net', '');
                    } else {
                        if (this['mURL']['toLowerCase']()['indexOf']('ualand.com.ua') >= 0) {
                            _0x7d93x7 = URLtoXML.GetPage('http://ualand.com.ua' + _0x7d93xf, 'http://ualand.com.ua', '');
                        };
                    };
                    _0x7d93x7 = URLtoXML.DelTrash(_0x7d93x7);
                    this['nStart'] = 0;
                };
            };
            if (this['mURL']['toLowerCase']()['indexOf']('kinofilms.tv') >= 0) {
                _0x7d93xc = this['nStart'];
                _0x7d93xf = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0441\u0435\u0440\u0438\u0430\u043B\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430', '<select', false));
                while (this['nStart'] >= 0) {
                    _0x7d93x20['push'](URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], '<option value=\'', '\'>', false)));
                };
                if (_0x7d93xf != '') {
                    _0x7d93x1f = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], 'file_data=\'', '\';', false));
                    _0x7d93xf = 'data_pi=' + URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], 'data_pi=\'', '\';', false));
                    _0x7d93xf = _0x7d93xf + '&idfilm=' + URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], 'idfilm=', ';', false));
                    for (var _0x7d93x6 in _0x7d93x20) {
                        if (_0x7d93x20[_0x7d93x6] != '') {
                            _0x7d93x7 = URLtoXML.GetPage(_0x7d93x1f, 'http://kinofilms.tv', _0x7d93xf + '&id=' + _0x7d93x20[_0x7d93x6]);
                            _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, this['kPBUr'], this['kPEUr'], false));
                            if (_0x7d93xd == '' && this['kUAdd'] != '') {
                                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, this['kUAdd'], this['kEAdd'], false));
                            };
                            if (_0x7d93xd != '' && (_0x7d93xd['toLowerCase']()['indexOf']('vkontakte') >= 0 || _0x7d93xd['toLowerCase']()['indexOf']('vk.com') >= 0)) {
                                if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
                                    _0x7d93xd = URLtoXML.GetVKurl(_0x7d93xd);
                                };
                            };
                            if (_0x7d93xd['toLowerCase']()['indexOf']('youtube.com') >= 0) {
                                _0x7d93xd = _0x7d93xd['replace'](new RegExp('\?.*', 'gim'), '');
                            };
                            _0x7d93x14 = '\u0421\u0435\u0440\u0438\u044F ' + (1 + parseInt(_0x7d93x20[_0x7d93x6]));
                            _0x7d93xd = URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsFrwd']);
                            _0x7d93x14 = URLtoXML['trim'](URLtoXML.ReplWords(_0x7d93x14, this['arrReplWordsTitl']));
                            if (URLtoXML['checkNameExt'](_0x7d93xd, this['arrVideoExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrAudioExt']) || _0x7d93xd['toLowerCase']()['indexOf']('vkontakte') >= 0 || _0x7d93xd['toLowerCase']()['indexOf']('vk.com') >= 0) {
                                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, this['prefixXML'] + _0x7d93x13 + this['endedXML'], 0, _0x7d93x15, true);
                            } else {
                                if (!URLtoXML['checkNameExt'](_0x7d93xd, this['arrImageExt']) && !URLtoXML['checkNameExt'](_0x7d93xd, this['arrTrashExt'])) {
                                    _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, this['prefixXML'] + _0x7d93x13 + this['endedXML'], 0, '', false);
                                };
                            };
                            this['nStart'] = -1;
                        };
                    };
                } else {
                    this['nStart'] = _0x7d93xc;
                };
            };
            while (this['nStart'] >= 0) {
                _0x7d93xc = this['nStart'];
                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], 'href="http://fs.ua/', '"', false));
                if (_0x7d93xd != '') {
                    _0x7d93xd = this['prefixSRL'] + _0x7d93xd;
                    _0x7d93x17 = true;
                } else {
                    this['nStart'] = _0x7d93xc;
                    _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], '<a href="?folder=', '"', false));
                    if (_0x7d93xd != '') {
                        _0x7d93xd = this['mURL']['substring'](0, this['mURL']['indexOf']('?')) + '?folder=' + _0x7d93xd;
                        _0x7d93x17 = true;
                    } else {
                        if (!_0x7d93x17) {
                            this['nStart'] = _0x7d93xc;
                            _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kPBUr'], this['kPEUr'], false));
                            if (_0x7d93xd == '' && this['kUAdd'] != '') {
                                this['nStart'] = _0x7d93xc;
                                _0x7d93xd = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kUAdd'], this['kEAdd'], false));
                            };
                            if (_0x7d93xd != '') {
                                _0x7d93xd = this['prefixSRL'] + _0x7d93xd;
                            };
                        };
                    };
                };
                if (_0x7d93xd != '' && (_0x7d93xd['toLowerCase']()['indexOf']('vkontakte') >= 0 || _0x7d93xd['toLowerCase']()['indexOf']('vk.com') >= 0)) {
                    if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
                        _0x7d93xe = URLtoXML.GetVKurl(_0x7d93xd);
                        _0x7d93xd = _0x7d93xe;
                    };
                };
                if (_0x7d93xd['toLowerCase']()['indexOf']('youtube.com') >= 0) {
                    _0x7d93xd = _0x7d93xd['replace'](new RegExp('\?.*', 'gim'), '');
                };
                if (_0x7d93xd != '' && _0x7d93xd != _0x7d93x10) {
                    _0x7d93x10 = _0x7d93xd;
                    _0x7d93xd = URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsFrwd']);
                    _0x7d93xc = this['nStart'];
                    if (this['mURL']['toLowerCase']()['indexOf']('uakino.net') >= 0 || this['mURL']['toLowerCase']()['indexOf']('kino-v-online.ru') >= 0 || this['mURL']['toLowerCase']()['indexOf']('film-online.su') >= 0 || this['mURL']['toLowerCase']()['indexOf']('vkfilm.com') >= 0) {
                        _0x7d93x14 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, 0, this['kPBTt'], this['kPETt'], false));
                    } else {
                        if (this['mURL']['toLowerCase']()['indexOf']('hdserials.ru') >= 0) {
                            _0x7d93x14 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kPBTt'], '', true));
                            _0x7d93x14 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'] - this['kPBTt']['length'] - 1, this['kPBTt'], this['kPETt'], true));
                        } else {
                            _0x7d93x14 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x7, this['nStart'], this['kPBTt'], this['kPETt'], false));
                        };
                    };
                    this['nStart'] = _0x7d93xc;
                    _0x7d93x14 = URLtoXML['trim'](URLtoXML.ReplWords(_0x7d93x14, this['arrReplWordsTitl']));
                    if (_0x7d93x14 == '') {
                        _0x7d93x14 = URLtoXML['trim'](URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsFile']));
                        if (_0x7d93xd['toLowerCase']()['indexOf']('youtube.com') >= 0) {
                            _0x7d93x14 = 'youtube.avi';
                        } else {
                            if (_0x7d93xd['toLowerCase']()['indexOf']('rtmp://') >= 0) {
                                _0x7d93x14 = 'rtmp.avi';
                            } else {
                                if (_0x7d93xd['toLowerCase']()['indexOf']('onlykino.net') >= 0) {
                                    _0x7d93x14 = 'onlykino.avi';
                                } else {
                                    if (_0x7d93xd['toLowerCase']()['indexOf']('vkontakte') >= 0) {
                                        _0x7d93x14 = 'vkontakte.avi';
                                    } else {
                                        if (_0x7d93xd['toLowerCase']()['indexOf']('vk.com') >= 0) {
                                            _0x7d93x14 = 'vk.avi';
                                        };
                                    };
                                };
                            };
                        };
                        if (!URLtoXML['checkNameExt'](_0x7d93x14, this['arrVideoExt']) && !URLtoXML['checkNameExt'](_0x7d93x14, this['arrAudioExt']) && !URLtoXML['checkNameExt'](_0x7d93x14, this['arrPListExt'])) {
                            _0x7d93x14 = '';
                        };
                    };
                    if (_0x7d93x14 != '') {
                        if (URLtoXML['checkNameExt'](_0x7d93x14, this['arrVideoExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrVideoExt']) || URLtoXML['checkNameExt'](_0x7d93x14, this['arrAudioExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrAudioExt']) || _0x7d93xd['toLowerCase']()['indexOf']('vkontakte') >= 0 || _0x7d93xd['toLowerCase']()['indexOf']('vk.com') >= 0) {
                            _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, this['prefixXML'] + _0x7d93x13 + this['endedXML'], 0, _0x7d93x15, true);
                        } else {
                            if (!URLtoXML['checkNameExt'](_0x7d93x14, this['arrImageExt']) && !URLtoXML['checkNameExt'](_0x7d93x14, this['arrTrashExt'])) {
                                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, this['prefixXML'] + _0x7d93x13 + this['endedXML'], 0, '', false);
                            };
                        };
                    };
                };
            };
            if (_0x7d93x16 == '') {
                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML']('Video files not found.', '', this['prefixXML'] + _0x7d93x13 + '<br><font color=\'red\'><b>Not found any files with video extentions!</b></font>' + this['endedXML'], 0, '', false);
            };
        };
    } else {
        _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML']('Error response server status.', '', this['prefixXML'] + '<font color=\'red\'><b>Not correct server response status: ' + this['xmlHTTP']['status'] + '!</b></font>' + this['endedXML'], 0, '', false);
    };
    return _0x7d93x16;
};
URLtoXML['GetUSBMedia'] = function (_0x7d93x21) {
    var _0x7d93xd, _0x7d93x14, _0x7d93x13, _0x7d93x15, _0x7d93x22;
    var _0x7d93x16 = '';
    var _0x7d93x23 = false;
    var _0x7d93x24 = URLtoXML['trim'](_0x7d93x21);
    var _0x7d93x25 = new FileSystem();
    if (_0x7d93x24['toLowerCase']() == URLtoXML['trim'](this['keyUSB']['toLowerCase']())) {
        _0x7d93x24 = this['mntUSB'];
        if (_0x7d93x24['charAt'](_0x7d93x24['length'] - 1) != '/') {
            _0x7d93x24 = _0x7d93x24 + '/';
        };
        for (var _0x7d93x6 = 0; _0x7d93x6 < this['arrUSB']['length']; _0x7d93x6++) {
            _0x7d93x22 = _0x7d93x25['readDir'](_0x7d93x24 + this['arrUSB'][_0x7d93x6]);
            if (_0x7d93x22) {
                _0x7d93x24 = _0x7d93x24 + this['arrUSB'][_0x7d93x6];
                _0x7d93x23 = true;
                break;
            };
        };
    } else {
        _0x7d93x24 = _0x7d93x24['replace'](new RegExp(this['keyUSB'], 'i'), this['mntUSB']);
        _0x7d93x23 = true;
    };
    if (_0x7d93x16 == '' && _0x7d93x23) {
        _0x7d93x22 = _0x7d93x25['readDir'](_0x7d93x24);
        if (_0x7d93x22) {
            _0x7d93x22 = URLtoXML.SortFiles(_0x7d93x22);
            _0x7d93x22 = URLtoXML.DelDoubleFiles(_0x7d93x22);
            if (_0x7d93x24['charAt'](_0x7d93x24['length'] - 1) != '/') {
                _0x7d93x24 = _0x7d93x24 + '/';
            };
            this['title'] = this['title'] + ' (' + _0x7d93x24 + ')';
            for (var _0x7d93x6 = 0; _0x7d93x6 < _0x7d93x22['length']; _0x7d93x6++) {
                if (_0x7d93x22[_0x7d93x6]['isDir']) {
                    _0x7d93xd = URLtoXML['trim'](_0x7d93x22[_0x7d93x6]['name']);
                    _0x7d93x14 = this['prefixXML'] + '<font color=\'lightgreen\'>' + _0x7d93xd['toUpperCase']() + '</font>' + this['endedXML'];
                    _0x7d93x13 = 'dir: <font color=\'lightgreen\'>' + _0x7d93xd['toUpperCase']() + '</font>';
                    if (_0x7d93xd != '.' && _0x7d93xd != '..') {
                        _0x7d93x13 = _0x7d93x13 + '<br/>create: <i>' + _0x7d93x22[_0x7d93x6]['mtime'] + '</i>';
                    };
                    _0x7d93x15 = this['icoFolder'];
                    if (_0x7d93xd != '.' && _0x7d93xd != '..') {
                        _0x7d93xd = _0x7d93x24['replace'](new RegExp(this['mntUSB'], 'i'), this['keyUSB']) + _0x7d93xd;
                        _0x7d93x13 = this['sHeader'] + _0x7d93x13;
                        _0x7d93x13 = this['prefixXML'] + _0x7d93x13 + this['endedXML'];
                        _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, _0x7d93x13, 0, _0x7d93x15, false);
                    };
                };
            };
            for (var _0x7d93x6 = 0; _0x7d93x6 < _0x7d93x22['length']; _0x7d93x6++) {
                if (!_0x7d93x22[_0x7d93x6]['isDir']) {
                    _0x7d93xd = URLtoXML['trim'](_0x7d93x22[_0x7d93x6]['name']);
                    if (URLtoXML['checkNameExt'](_0x7d93xd, this['arrPListExt'])) {
                        _0x7d93x14 = this['prefixXML'] + '<font color=\'pink\'>' + _0x7d93xd + '</font>' + this['endedXML'];
                        _0x7d93x13 = 'file: <font color=\'pink\'>' + _0x7d93xd + '</font>' + '<br/>size: <b>' + URLtoXML.DynamicSize(_0x7d93x22[_0x7d93x6]['size']) + '</b>' + '<br/>create: <i>' + _0x7d93x22[_0x7d93x6]['mtime'] + '</i>';
                        _0x7d93x15 = this['icoFolder'];
                        _0x7d93xd = _0x7d93x24 + _0x7d93xd;
                        _0x7d93x13 = this['sHeader'] + _0x7d93x13;
                        _0x7d93x13 = this['prefixXML'] + _0x7d93x13 + this['endedXML'];
                        this['rssTypeList'] = 'text/xml';
                        _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, _0x7d93x13, 0, _0x7d93x15, false);
                        this['rssTypeList'] = 'parser';
                    };
                };
            };
            for (var _0x7d93x6 = 0; _0x7d93x6 < _0x7d93x22['length']; _0x7d93x6++) {
                if (!_0x7d93x22[_0x7d93x6]['isDir']) {
                    _0x7d93xd = URLtoXML['trim'](_0x7d93x22[_0x7d93x6]['name']);
                    if (URLtoXML['checkNameExt'](_0x7d93xd, this['arrVideoExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrAudioExt']) || URLtoXML['checkNameExt'](_0x7d93xd, this['arrImageExt'])) {
                        _0x7d93x14 = this['prefixXML'] + '<font color=\'cyan\'>' + _0x7d93xd + '</font>' + this['endedXML'];
                        _0x7d93x13 = 'file: <font color=\'cyan\'>' + _0x7d93xd + '</font>' + '<br/>size: <b>' + URLtoXML.DynamicSize(_0x7d93x22[_0x7d93x6]['size']) + '</b>' + '<br/>create: <i>' + _0x7d93x22[_0x7d93x6]['mtime'] + '</i>';
                        _0x7d93x15 = this['icoMedia'];
                        _0x7d93xd = _0x7d93x24 + _0x7d93xd;
                        _0x7d93x13 = this['sHeader'] + _0x7d93x13;
                        _0x7d93x13 = this['prefixXML'] + _0x7d93x13 + this['endedXML'];
                        _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML'](_0x7d93x14, _0x7d93xd, _0x7d93x13, 0, _0x7d93x15, true);
                    };
                };
            };
            if (_0x7d93x16 == '') {
                _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML']('Directory is empty', '', this['prefixXML'] + 'Directory: <font color=\'lightgreen\'>' + _0x7d93x24 + '</font><br/> does not contain media data!' + this['endedXML'], 0, this['icoFolder'], false);
            };
        };
    };
    if (_0x7d93x16 == '') {
        _0x7d93x16 = _0x7d93x16 + URLtoXML['addBlockXML']('USB-drive absent or empty', '', this['prefixXML'] + '<font color=\'red\'><b>USB drive not found OR does not contain media data!</b></font>' + this['endedXML'], 0, this['icoUSB'], false);
        this['title'] = this['title'] + ' (' + URLtoXML['trim'](_0x7d93x21) + ')';
    };
    _0x7d93x16 = URLtoXML['getHeadXML']() + _0x7d93x16 + URLtoXML['getBottomXML']();
    return _0x7d93x16;
};
URLtoXML['DynamicSize'] = function (_0x7d93x26) {
    var _0x7d93x27 = '';
    if (_0x7d93x26 < 0) {
        _0x7d93x27 = '>1.5 GBytes';
    } else {
        if (_0x7d93x26 >= 0 && _0x7d93x26 <= 1024) {
            _0x7d93x27 = _0x7d93x26 + ' Bytes';
        } else {
            if (_0x7d93x26 > 1024 && _0x7d93x26 <= 1048576) {
                _0x7d93x27 = Math['round']((_0x7d93x26 / 1024) * 100) / 100 + ' KBytes';
            } else {
                if (_0x7d93x26 > 1048576 && _0x7d93x26 <= 1073741824) {
                    _0x7d93x27 = Math['round']((_0x7d93x26 / 1048576) * 100) / 100 + ' MBytes';
                } else {
                    if (_0x7d93x26 > 1073741824) {
                        _0x7d93x27 = Math['round']((_0x7d93x26 / 1073741824) * 100) / 100 + ' GBytes';
                    };
                };
            };
        };
    };
    return _0x7d93x27;
};
URLtoXML['SortFiles'] = function (_0x7d93x22) {
    var _0x7d93x28;
    var _0x7d93x29 = false;
    for (var _0x7d93x6 = 1; _0x7d93x6 < _0x7d93x22['length']; _0x7d93x6++) {
        if (URLtoXML['trim'](_0x7d93x22[_0x7d93x6 - 1]['name']) > URLtoXML['trim'](_0x7d93x22[_0x7d93x6]['name'])) {
            _0x7d93x28 = _0x7d93x22[_0x7d93x6];
            _0x7d93x22[_0x7d93x6] = _0x7d93x22[_0x7d93x6 - 1];
            _0x7d93x22[_0x7d93x6 - 1] = _0x7d93x28;
            _0x7d93x29 = true;
        };
    };
    if (_0x7d93x29) {
        _0x7d93x22 = URLtoXML.SortFiles(_0x7d93x22);
    };
    return _0x7d93x22;
};
URLtoXML['DelDoubleFiles'] = function (_0x7d93x22) {
    var _0x7d93x2a = new Array();
    for (var _0x7d93x6 = 1; _0x7d93x6 < _0x7d93x22['length']; _0x7d93x6++) {
        if (URLtoXML['trim'](_0x7d93x22[_0x7d93x6 - 1]['name']) != URLtoXML['trim'](_0x7d93x22[_0x7d93x6]['name'])) {
            _0x7d93x2a['push'](_0x7d93x22[_0x7d93x6 - 1]);
        };
    };
    _0x7d93x2a['push'](_0x7d93x22[_0x7d93x22['length'] - 1]);
    return _0x7d93x2a;
};
URLtoXML['getHeadXML'] = function () {
    if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
        return '' + '<?xml version="1.0" encoding="' + this['xmlEncoding'] + '" ?>\x0A' + '<items>\x0A' + '<playlist_name>' + URLtoXML.ReplWords(this['title'], this['arrReplWordsFrwd']) + '</playlist_name>\x0A';
    } else {
        if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
            return '' + '<?xml version="1.0" encoding="' + this['xmlEncoding'] + '" ?>\x0A' + '<rss version="2.0">\x0A' + '<channel>\x0A' + '<title>' + URLtoXML.ReplWords(this['title'], this['arrReplWordsFrwd']) + '</title>\x0A';
        } else {
            return '' + '#EXTM3U\x0A';
        };
    };
};
URLtoXML['addBlockXML'] = function (_0x7d93x14, _0x7d93xd, _0x7d93x13, _0x7d93x2b, _0x7d93x15, _0x7d93x17) {
    var _0x7d93x2c;
    _0x7d93x2c = '';
    _0x7d93x15 = URLtoXML['trim'](_0x7d93x15);
    if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
        _0x7d93x2c = '' + '<channel>\x0A' + '   <title>' + _0x7d93x14 + '</title>\x0A';
        if (_0x7d93x17) {
            _0x7d93x2c = _0x7d93x2c + '   <stream_url>' + _0x7d93xd + '</stream_url>\x0A';
            if (this['ScreenSize'] != -1) {
                _0x7d93x2c = _0x7d93x2c + '   <size>' + this['ScreenSize'] + '</size>\x0A';
            };
            if (this['Audiotrack_num'] != -1) {
                _0x7d93x2c = _0x7d93x2c + '   <audiotrack_num>' + this['Audiotrack_num'] + '</audiotrack_num>\x0A';
            };
            if (this['Buffer'] != -1) {
                _0x7d93x2c = _0x7d93x2c + '   <buffer>' + this['Buffer'] + '</buffer>\x0A';
                if (this['IBuffer'] != -1) {
                    _0x7d93x2c = _0x7d93x2c + '   <ibuffer>' + this['IBuffer'] + '</ibuffer>\x0A';
                };
            };
        } else {
            _0x7d93x2c = _0x7d93x2c + '   <playlist_url>' + _0x7d93xd + '</playlist_url>\x0A';
        };
        if (_0x7d93x15 != '') {
            _0x7d93x2c = _0x7d93x2c + '   <logo_30x30>' + _0x7d93x15 + '</logo_30x30>\x0A';
        };
        _0x7d93x2c = _0x7d93x2c + '   <description>' + _0x7d93x13 + '</description>\x0A' + '</channel>\x0A';
    } else {
        if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
            _0x7d93x2c = '' + '<item>\x0A' + '   <title>' + _0x7d93x14 + '</title>\x0A' + '   <description>' + _0x7d93x13 + '</description>\x0A';
            if (_0x7d93x17) {
                _0x7d93x2c = _0x7d93x2c + '   <enclosure url="' + _0x7d93xd + '" type="video/avc1"/>\x0A';
            } else {
                _0x7d93x2c = _0x7d93x2c + '   <enclosure url="' + _0x7d93xd + '" type="' + this['rssTypeList'] + '"/>\x0A';
            };
            if (_0x7d93x15 != '') {
                _0x7d93x2c = _0x7d93x2c + '   <icon url="' + _0x7d93x15 + '"/>\x0A';
            };
            _0x7d93x2c = _0x7d93x2c + '</item>\x0A';
        } else {
            _0x7d93x2c = '' + '#EXTINF:0,' + _0x7d93x14 + '\x0A' + URLtoXML.ReplWords(_0x7d93xd, this['arrReplWordsBkwd']) + '\x0A';
        };
    };
    return _0x7d93x2c;
};
URLtoXML['getBottomXML'] = function () {
    if (this['outFmt']['toLowerCase']()['indexOf']('xml') >= 0) {
        return '' + '</items>';
    } else {
        if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
            return '' + '</channel>\x0A' + '</rss>\x0A';
        } else {
            return '';
        };
    };
};
URLtoXML['FindVal'] = function (_0x7d93x7, _0x7d93x2d, _0x7d93x2e, _0x7d93x2f, _0x7d93x30) {
    var _0x7d93x31, _0x7d93x16;
    _0x7d93x16 = _0x7d93x7['toLowerCase']();
    if (_0x7d93x30) {
        _0x7d93x2d = _0x7d93x16['lastIndexOf'](_0x7d93x2e['toLowerCase'](), _0x7d93x2d);
    } else {
        _0x7d93x2d = _0x7d93x16['indexOf'](_0x7d93x2e['toLowerCase'](), _0x7d93x2d);
    };
    if (_0x7d93x2d >= 0) {
        _0x7d93x2d = _0x7d93x2d + _0x7d93x2e['length'];
        _0x7d93x31 = _0x7d93x16['indexOf'](_0x7d93x2f['toLowerCase'](), _0x7d93x2d);
        if (_0x7d93x31 < 0) {
            _0x7d93x31 = _0x7d93x16['length'];
            this['nStart'] = _0x7d93x31;
        } else {
            this['nStart'] = _0x7d93x31 + _0x7d93x2f['length'];
        };
        _0x7d93x16 = _0x7d93x7['substring'](_0x7d93x2d, _0x7d93x31);
    } else {
        _0x7d93x16 = '';
        this['nStart'] = _0x7d93x2d;
    };
    return _0x7d93x16;
};
URLtoXML['DelTrash'] = function (_0x7d93x32) {
    _0x7d93x32 = _0x7d93x32['replace'](new RegExp('&nbsp;', 'gim'), ' ');
    _0x7d93x32 = _0x7d93x32['replace'](new RegExp('&mdash;', 'gim'), ' ');
    _0x7d93x32 = _0x7d93x32['replace'](new RegExp('	', 'gim'), ' ');
    _0x7d93x32 = _0x7d93x32['replace'](new RegExp('\x0A', 'gim'), ' ');
    _0x7d93x32 = _0x7d93x32['replace'](new RegExp('\x0D', 'gim'), ' ');
    while (_0x7d93x32['indexOf']('  ') >= 0) {
        _0x7d93x32 = _0x7d93x32['replace'](new RegExp('  ', 'gim'), ' ');
    };
    return URLtoXML['trim'](_0x7d93x32);
};
URLtoXML['DelWords'] = function (_0x7d93x33) {
    var _0x7d93x34, _0x7d93x16;
    _0x7d93x16 = _0x7d93x33;
    for (var _0x7d93x6 in this['arrDelWords']) {
        _0x7d93x34 = this['arrDelWords'][_0x7d93x6];
        _0x7d93x16 = _0x7d93x16['replace'](new RegExp(_0x7d93x34, 'gim'), '');
    };
    return _0x7d93x16;
};
URLtoXML['ReplWords'] = function (_0x7d93x33, _0x7d93x35) {
    var _0x7d93x34, _0x7d93x16;
    _0x7d93x16 = _0x7d93x33;
    for (var _0x7d93x6 in _0x7d93x35) {
        _0x7d93x34 = _0x7d93x35[_0x7d93x6][0];
        _0x7d93x16 = _0x7d93x16['replace'](new RegExp(_0x7d93x34, 'gim'), _0x7d93x35[_0x7d93x6][1]);
    };
    return _0x7d93x16;
};
URLtoXML['checkNameExt'] = function (_0x7d93x36, _0x7d93x37) {
    var _0x7d93x34;
    for (var _0x7d93x6 in _0x7d93x37) {
        _0x7d93x34 = _0x7d93x37[_0x7d93x6];
        if (_0x7d93x36['toLowerCase']()['lastIndexOf'](_0x7d93x34['toLowerCase']()) == _0x7d93x36['length'] - _0x7d93x34['length'] && _0x7d93x36['length'] >= _0x7d93x34['length']) {
            return true;
        };
    };
    return false;
};
URLtoXML['trim'] = function (_0x7d93x32) {
    while (_0x7d93x32['charAt'](_0x7d93x32['length'] - 1) == ' ') {
        _0x7d93x32 = _0x7d93x32['substring'](0, _0x7d93x32['length'] - 1);
    };
    while (_0x7d93x32['charAt'](0) == ' ') {
        _0x7d93x32 = _0x7d93x32['substring'](1);
    };
    return _0x7d93x32;
};
URLtoXML['GetPage'] = function (_0x7d93xd, _0x7d93x38, _0x7d93x39) {
    var _0x7d93x3a = '';
    var _0x7d93x3b = '';
    if (this['xmlHTTP'] != null) {
        this['xmlHTTP'] = null;
    };
    this['xmlHTTP'] = new XMLHttpRequest();
    if (_0x7d93x39 == '') {
        this['xmlHTTP']['open']('GET', _0x7d93xd, false);
    } else {
        this['xmlHTTP']['open']('POST', _0x7d93xd, false);
    };
    this['xmlHTTP']['onreadystatechange'] = function () {
        if (URLtoXML['xmlHTTP']['readyState'] == 4) {
            if (URLtoXML['xmlHTTP']['status'] == 200) {
                _0x7d93x3a = URLtoXML['xmlHTTP']['responseText'];
            };
        };
    };
    if (_0x7d93x39 == '') {
        this['xmlHTTP']['setRequestHeader']('User-Agent', 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51');
        this['xmlHTTP']['send']();
    } else {
        this['xmlHTTP']['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
        this['xmlHTTP']['setRequestHeader']('Content-length', _0x7d93x39['length']);
        this['xmlHTTP']['setRequestHeader']('Connection', 'close');
        this['xmlHTTP']['send'](_0x7d93x39);
    };
    if (this['xmlHTTP']['status'] == 301 || this['xmlHTTP']['status'] == 302 || this['xmlHTTP']['status'] == 303 || this['xmlHTTP']['status'] == 307) {
        if (URLtoXML['xmlHTTP']['getResponseHeader']('Location') != null) {
            _0x7d93x3b = URLtoXML['trim'](URLtoXML['xmlHTTP']['getResponseHeader']('Location'));
            if (_0x7d93x3b['toLowerCase']()['substr'](0, 4) != 'http') {
                if (_0x7d93x3b['charAt'](0) != '/') {
                    _0x7d93x3b = _0x7d93x38 + '/' + _0x7d93x3b;
                } else {
                    _0x7d93x3b = _0x7d93x38 + _0x7d93x3b;
                };
            };
            _0x7d93x3a = URLtoXML.GetPage(_0x7d93x3b, _0x7d93x38, _0x7d93x39);
        };
    };
    return _0x7d93x3a;
};
URLtoXML['GetFinalUrl'] = function (_0x7d93xd) {
    var _0x7d93x3c = '';
    var _0x7d93x3d = _0x7d93xd;
    var _0x7d93x38 = _0x7d93xd['match'](new RegExp('.*://[^/]*', 'i'));
    if (_0x7d93x38 == null) {
        _0x7d93x38 = '';
    };
    if (this['xmlHTTP'] != null) {
        this['xmlHTTP'] = null;
    };
    this['xmlHTTP'] = new XMLHttpRequest();
    this['xmlHTTP']['open']('GET', _0x7d93xd, false);
    this['xmlHTTP']['onreadystatechange'] = function () {
        if (URLtoXML['xmlHTTP']['readyState'] == 0 || URLtoXML['xmlHTTP']['readyState'] == 1 || URLtoXML['xmlHTTP']['readyState'] == 2 || URLtoXML['xmlHTTP']['readyState'] == 3 || URLtoXML['xmlHTTP']['readyState'] == 4) {
            this['xmlHTTP']['abort']();
        };
    };
    this['xmlHTTP']['setRequestHeader']('User-Agent', 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51');
    this['xmlHTTP']['send']();
    if (this['xmlHTTP']['status'] == 301 || this['xmlHTTP']['status'] == 302 || this['xmlHTTP']['status'] == 303 || this['xmlHTTP']['status'] == 307) {
        if (URLtoXML['xmlHTTP']['getResponseHeader']('Location') != null) {
            _0x7d93x3c = URLtoXML['trim'](URLtoXML['xmlHTTP']['getResponseHeader']('Location'));
            if (_0x7d93x3c['toLowerCase']()['substr'](0, 4) != 'http' && _0x7d93x38 != '') {
                if (_0x7d93x3c['charAt'](0) != '/') {
                    _0x7d93x3c = _0x7d93x38 + '/' + _0x7d93x3c;
                } else {
                    _0x7d93x3c = _0x7d93x38 + _0x7d93x3c;
                };
            };
            _0x7d93x3d = URLtoXML.GetFinalUrl(_0x7d93x3c);
        };
    };
    return _0x7d93x3d;
};
URLtoXML['GetVKurl'] = function (_0x7d93xd) {
    var _0x7d93x3a = URLtoXML.GetPage(_0x7d93xd, 'http://vk.com', '');
    var _0x7d93x3e = URLtoXML.GetVKSubUrl(_0x7d93x3a);
    return _0x7d93x3e;
};
URLtoXML['GetVKSubUrl'] = function (_0x7d93x3a) {
    var _0x7d93xc = this['nStart'];
    var _0x7d93x3f = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'var video_host = \'', '\'', false));
    var _0x7d93x40 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'var video_uid = \'', '\'', false));
    var _0x7d93x41 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'var video_vtag = \'', '\'', false));
    var _0x7d93x42 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'video_no_flv =', ';', false));
    var _0x7d93x43 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'var video_max_hd = \'', '\'', false));
    if (this['outFmt']['toLowerCase']()['indexOf']('rss') >= 0) {
        if (_0x7d93x43 > '2') {
            _0x7d93x43 = '2';
        };
    };
    var _0x7d93x44 = '';
    var _0x7d93x45 = '240.mp4';
    if (_0x7d93x42 == 1) {
        switch (_0x7d93x43) {
            case '0':
                _0x7d93x45 = '240.mp4';
                break;;
            case '1':
                _0x7d93x45 = '360.mp4';
                break;;
            case '2':
                _0x7d93x45 = '480.mp4';
                break;;
            case '3':
                _0x7d93x45 = '720.mp4';
                break;;
        };
        if (_0x7d93x3f != '' && _0x7d93x40 != '' && _0x7d93x41 != '') {
            _0x7d93x44 = _0x7d93x3f + 'u' + _0x7d93x40 + '/videos/' + _0x7d93x41 + '.' + _0x7d93x45;
        };
    } else {
        var _0x7d93x46 = URLtoXML['trim'](URLtoXML.FindVal(_0x7d93x3a, 0, 'vkid=', '&', false));
        _0x7d93x45 = 'vk.flv';
        if (_0x7d93x3f != '' && _0x7d93x41 != '' && _0x7d93x46 != '') {
            _0x7d93x44 = 'http://' + _0x7d93x3f + '/assets/videos/' + _0x7d93x41 + _0x7d93x46 + '.' + _0x7d93x45;
        };
    };
    this['nStart'] = _0x7d93xc;
    return _0x7d93x44;
};
URLtoXML['StartParseRSS'] = function (_0x7d93x47) {
    if (Main['search'] != '' && _0x7d93x47['toLowerCase']()['slice'](-1) == '=') {
        if (_0x7d93x47['toLowerCase']()['indexOf']('ex.ua') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('fex.net') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('fs.ua') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('uakino.net') >= 0) {
            _0x7d93x47 = _0x7d93x47 + Main['search']['replace'](new RegExp(' ', 'gim'), '+');
        } else {
            _0x7d93x47 = _0x7d93x47 + escape(Utf2Win(Main['search']['replace'](new RegExp(' ', 'gim'), '+')));
        };
    };
    URLtoXML['fMode'] = true;
    URLtoXML.Proceed(_0x7d93x47, 'rss');
};

function StartParseTsnake(_0x7d93x47) {
    if (_0x7d93x47['toLowerCase']()['indexOf']('http://www.ex.ua') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://fs.ua') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://film-online.su') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://www.filmy.net.ua') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://megogo.net') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://kino-v-online.ru') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://uakino.net') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://fex.net') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://vkfilm.com') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://filmix.net') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://ualand.com.ua') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('mediaserver') >= 0 || _0x7d93x47['match'](new RegExp('http://[^.]*.arjlover.net', 'i')) != null || _0x7d93x47['toLowerCase']()['indexOf']('http://kinofilms.tv') == 0 || _0x7d93x47['toLowerCase']()['indexOf']('http://www.hdserials.ru') == 0 || _0x7d93x47['toLowerCase']()['indexOf'](URLtoXML['keyUSB']['toLowerCase']()) == 0) {
        if (API['search_string'] != '' && _0x7d93x47['toLowerCase']()['slice'](-1) == '=') {
            if (_0x7d93x47['toLowerCase']()['indexOf']('ex.ua') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('fex.net') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('fs.ua') >= 0 || _0x7d93x47['toLowerCase']()['indexOf']('uakino.net') >= 0) {
                _0x7d93x47 = _0x7d93x47 + API['search_string']['replace'](new RegExp(' ', 'gim'), '+');
            } else {
                _0x7d93x47 = _0x7d93x47 + escape(Utf2Win(API['search_string']['replace'](new RegExp(' ', 'gim'), '+')));
            };
        };
        URLtoXML['fMode'] = true;
        URLtoXML.Proceed(_0x7d93x47, 'xml');
    } else {
        return false;
    };
};

function Utf2Win(_0x7d93x32) {
    var _0x7d93x4a = [];
    for (var _0x7d93x6 = 0x410; _0x7d93x6 <= 0x44F; _0x7d93x6++) {
        _0x7d93x4a[_0x7d93x6] = _0x7d93x6 - 0x350;
    };
    _0x7d93x4a[0x401] = 0xA8;
    _0x7d93x4a[0x451] = 0xB8;
    var _0x7d93x4b = [];
    for (var _0x7d93x6 = 0; _0x7d93x6 < _0x7d93x32['length']; _0x7d93x6++) {
        var _0x7d93x4c = _0x7d93x32['charCodeAt'](_0x7d93x6);
        if (typeof _0x7d93x4a[_0x7d93x4c] != 'undefined') {
            _0x7d93x4c = _0x7d93x4a[_0x7d93x4c];
        };
        if (_0x7d93x4c <= 0xFF) {
            _0x7d93x4b['push'](_0x7d93x4c);
        };
    };
    return String['fromCharCode']['apply'](null, _0x7d93x4b);
};