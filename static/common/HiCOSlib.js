(function() {
    var app = angular.module("HiCOSmodule", []);
    app.factory('HiCOSLogin', function(){
        return {
            //==============參考testHiCOSLoginApplet.html start=======
            attributes: {
                id : 'loginApplet',
                code : 'com.chttl.sac.pki.applet.HiCOSLoginApplet',
                width : 10,
                height : 10
            },
            parameters: {
                jnlp_href : 'HiCOSLoginApplet.jnlp', //(必要)
                separate_jvm : 'true',
                java_status_events : 'true',
                permissions : 'all-permissions'
            },
            cAlerter:null,//(必要)
            targetAlerts:null,
            doError: function(s) {
                this.cAlerter.fatal(s, this.targetAlerts, true);
            },
            doAlert: function(s) {
                // this.cAlerter.info(s, this.targetAlerts, true);
                console.log(s);
            },
            MOEACA:"OU=工商憑證管理中心, O=行政院, C=TW",
            MOICA:"OU=內政部憑證管理中心, O=行政院, C=TW",
            READY:2,
            loginApplet:null, //applet物件(必要)
            //讀取卡片
            getTokenSlotId: function() {
                try {
                    var slots = JSON.parse(this.loginApplet.getSlotIdListWithToken());
                    if (slots != null) {
                        if (slots.length == 0) {
                            this.doError("無卡片存在");
                        }else {
                            if (slots.length > 1) {
                                this.doError("有兩張以上的卡片存在");
                            }else {
                                this.doAlert("卡片讀取成功。");
                                return slots[0];
                            }
                        }
                    }else {
                        this.doError("沒有安裝讀卡機或沒有插入卡片。");
                    }
                } catch (e) {
                    this.doError("getTokenSlotId error:" + e);
                }
                return -1;
            },           
            
            //簽章憑證資訊
            getSignatureCertficate: function(password) {
                var signcert = {};
                try {
                    var slotId = this.getTokenSlotId(this.loginApplet);
                    if (slotId != -1) {
                        var signcertx509 = this.loginApplet.getPemX509Certificate(password, 1);
                        var code = this.loginApplet.getHandleCode();
                        var message = this.loginApplet.getHandleMessage();
                        this.doAlert("getSignatureCertficate code:"+code + "-" + message);
                        signcert.code = code;
                        signcert.message = message;
                        signcert.signcert = signcertx509;
                    }else{
                        this.doError("slotId == -1");
                    }
                } catch (e) {
                    this.doError(e);
                }
                return signcert;
            },

            checkLoginValid: function(password, id) {
                try {
                    var valid = false;
                    var slotId = this.getTokenSlotId();
                    if (slotId != -1) {
                        valid = this.loginApplet.checkLoginValid(password, id);
                        var code = this.loginApplet.getHandleCode();
                        var message = this.loginApplet.getHandleMessage();
                        this.doAlert("code: " + code + "-" + message);
                        this.doAlert("loginValid: " + valid);
                    }
                    return valid;
                    
                } catch (e) {
                    this.doAlert(e);
                    return false;
                }       
            },

            // 取得使用者 pkcs7 簽章資訊
            makePemLoginSignedMessage: function(password) {
                var logininfo = {};
                try {
                    var slotId = this.getTokenSlotId();
                    if (slotId != -1) {
                        var loginsign = this.loginApplet.makePemLoginSignedMessage(password, slotId);
                        var code = this.loginApplet.getHandleCode();
                        var message = this.loginApplet.getHandleMessage();
                        this.doAlert("makePemLoginSignedMessage : " + code + "-" + message);
                        logininfo.code = code;
                        logininfo.message = message;
                        logininfo.loginsign = loginsign;
                    }
                    return logininfo;

                } catch (e) {
                    this.doAlert(e);
                    return false;
                }
            }
            //==============參考testHiCOSLoginApplet.html end=======
        };
    });
})();
