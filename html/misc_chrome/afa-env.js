  // Customization
  var defaultClass = "label-primary";
  var successClass = "label-success";
  var failClass = "label-danger";
  var detecting = "偵測中 ......"
  var nonInstall = "未安裝";
  var installed = "已安裝";
  var showResult = function(id, condition) {
    if (condition) {
      $("#" + id).removeClass(defaultClass).addClass(successClass);
    } else {
      $("#" + id).removeClass(defaultClass).addClass(failClass);
    }
  }
  
  //瀏覽器版本
  $("#browser").html(bowser.name + " " + bowser.version);
  if (bowser.name == 'Chrome') {
    $("#browserSuggest").html("Chrome 45 以上");
    showResult("browser", bowser.version > 45)
  } else if (bowser.name == 'Internet Explorer' || bowser.name == 'Microsoft Edge') {
    $("#browserSuggest").html("IE 9 以上");
    showResult("browser", bowser.version > 9)
  } else if (bowser.name == 'Firefox') {
    $("#browserSuggest").html("Firefox 40 以上");
    showResult("browser", bowser.version > 40)
  } else {
  }
  
	//解析度
	$("#display").html(window.screen.width + " x " + window.screen.height);
  $("#displaySuggest").html("1024 x 768 以上");
  showResult("display", (window.screen.width >= 1024 && window.screen.height >= 768));
  
  //按瀏覽器種類進行 Java偵測 或是 HiCos讀卡機元件偵測
	if (bowser.name == 'Chrome') {
		$("#cht").show();
    $("#hicos").html(detecting);
    $("#hicosSuggest").html("1.1.1 以上")
    //HiCos偵測
    var correls = {};
    var slotId = 0;
    var handler;
    
    var getVersionInfo = function() {
        message = { "f": "getVersionInfo" };
        dispatchEvent(message);
        // 判斷 5 秒沒有回應就認定沒有安裝元件
        handler = setTimeout(function () {
            $("#hicos").removeClass(defaultClass).addClass(failClass).html(nonInstall);
        }, 5000);        
    }
    
    var dispatchEvent = function(message) {
        message.correlId = randomString();
        var event = new CustomEvent("hicosreq", {
          detail: { message: message },
          bubbles: true,
          cancelable: true
        });

        document.dispatchEvent(event);
        correls[message.correlId] = { f: message.f };
    }
    
    var randomString = function() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 16;
        var result = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum, rnum + 1);
        }

        return result;
    }
    
    document.addEventListener("hicosresp", function(data) { 
        clearTimeout(handler);
        //alert('contentscript said: ' + data);
        //alert("data.type = " + data.type);
        //alert("code = " + data.detail.code + ", desc = " + data.detail.desc + ", rtn = " + data.detail.rtn);
        //alert(data.detail.code + "-" + data.detail.desc);
        if (correls[message.correlId]) {
            var f = correls[message.correlId].f;
            delete correls[message.correlId];
            switch (f) {
                case "getVersionInfo":
                    $("#hicos").html(installed + data.detail.rtn);
					showResult("hicos", (data.detail.rtn >= "1.1.1"));
                    break;
            }
        }
    });
    
		getVersionInfo();    
	} else {
		$("#java").show();
		$("#jre").html(detecting);
		$("#jreSuggest").html("1.7.0 以上");
		//Java偵測
		if (deployJava.versionCheck("1.7+")) {
			var jreList = deployJava.getJREs();
			var jreVersion = jreList[0];
			$("#jre").removeClass(defaultClass).addClass(successClass).html(installed + " " + jreVersion);      
		} else {
			$("#jre").removeClass(defaultClass).addClass(failClass).html(nonInstall);
		}
	}