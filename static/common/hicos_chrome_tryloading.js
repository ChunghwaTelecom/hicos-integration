/*! Bowser - a browser detector | https://github.com/ded/bowser | MIT License | (c) Dustin Diaz 2015 */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split(".")[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split(".")[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split(".")[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n})

if (bowser.name == 'Chrome' && bowser.version > 45) {
    window.name = "NG_DEFER_BOOTSTRAP!";

    var randomString = function () {

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 16;
        var result = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum, rnum + 1);
        }

        return result;
    }

    function downloadJSAtOnload() {

        var jsInitChecktimer = setInterval(checkForJS_Finish, 1000);

        function checkForJS_Finish() {

            console.log("test ....");

            var correls = {};

            var getVersionInfo = function () {
                message = {
                    "f": "getVersionInfo"
                };
                dispatchEvent(message);
            }

            var dispatchEvent = function (message) {

                message.correlId = randomString();
                var event = new CustomEvent("hicosreq", {
                    detail: {
                        message: message
                    },
                    bubbles: true,
                    cancelable: true
                });

                document.dispatchEvent(event);
                correls[message.correlId] = {
                    f: message.f
                };
            }

            document.addEventListener("hicosresp", function (data) {

                //alert('contentscript said: ' + data);
                //alert("data.type = " + data.type);
                //alert("code = " + data.detail.code + ", desc = " + data.detail.desc + ", rtn = " + data.detail.rtn);
                //alert(data.detail.code + "-" + data.detail.desc);
                if (correls[message.correlId]) {
                    var f = correls[message.correlId].f;
                    delete correls[message.correlId];
                    switch (f) {
                        case "getVersionInfo":
                            clearInterval(jsInitChecktimer);
                            console.log(data.detail.rtn);
                            angular.resumeBootstrap();
                            break;
                    }
                }
            });

            getVersionInfo();
        }
    }
    
    if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
    else window.onload = downloadJSAtOnload;
}
