var INITIAL_CARD_ERROR_DLL_NOT_LOAD= 0x7301;//指定的DLL無法載入
var INITIAL_CARD_ERROR_FUNC_NOT_SUPPORT=0x7302;//此功能未提供
var INITIAL_CARD_ERROR_SLOT=0x7303;//SLOT指定錯誤
var INITIAL_CARD_ERROR_NOT_FIND_ID=0x7011;//找不到指定的ID
var INITIAL_CARD_ERROR_CERT_ID_REPEATED= 0x7012;//重覆的憑證ID
var INITIAL_CARD_ERROR_CERT_NOT_FOUND=0x7014;//找不到對應的憑證
var E_PIN_LOCK= 0x6983;//你輸入PIN碼三次都驗證失敗，憑證將會自動鎖卡而無法使用。
// PIN碼驗證錯誤剩N次機會
var E_PIN_ERROR_REMAIN_1 =0x63c1;
var E_PIN_ERROR_REMAIN_2 =0x63c2;
var E_PIN_ERROR_REMAIN_3 =0x63c3;
var E_PIN_ERROR_REMAIN_4 =0x63c4;

var E_TBS_FORMAT_ERROR=0x86101001;//待簽資料輸入格式錯誤
var E_PIN_FORMAT_ERROR_AU=0x86001002;//PIN碼輸入格式錯誤
var E_INITIAL_CARD_ERROR=0x86102001;//初始化卡片錯誤
var E_READ_CARD_CERT_ERROR=0x86103001;//讀取卡片憑證錯誤
var E_SIGN_ERROR=0x86103002;//簽章錯誤
var E_GET_CARD_DATA_ERROR=0x86103003;//讀取卡片錯誤
var E_NOT_SUPPORTING_CARD_TYPE=0x86104001;//不支援的卡片種類
var E_NONCE_FORMAT_ERROR_AU=0x86001003;//Nonce輸入錯誤
var E_AADATA_FORMAT_ERROR_AU=0x86001004;//AAData 輸入錯誤

//補充錯誤訊息
var E_GET_CARD_READER_ERROR=0x8010002e;//找不到智慧卡讀取裝置
var E_GET_CARD_ERROR="8010001d";//讀取智慧卡異常

//CotainerName錯誤
var E_CONTAINERNAME_ERROR_AU=0x86001005
var E_CONTAINERNAME_ERROR_SD=0x89001005
var E_CONTAINERNAME_ERROR_ED=0xE6001005

//ProviderName錯誤
var E_PROVIDERNAME_ERROR_AU=0x86001006;
var E_PROVIDERNAME_ERROR_SD=0x89001006;
var E_PROVIDERNAME_ERROR_ED=0xE6001006;

//PFX 檔案路徑錯誤
var E_PFX_FILE_PATH_IS_NULL_AU=0x86001007;
var E_PFX_FILE_PATH_IS_NULL_SD=0x89001007;
var E_PFX_FILE_PATH_IS_NULL_ED=0xE6001007;
//PFX 密碼錯誤
var E_PFX_PASSWORD_IS_NULL_AU=0x86001008;
var E_PFX_PASSWORD_IS_NULL_SD=0x89001008;
var E_PFX_PASSWORD_IS_NULL_ED=0xE6001008;
//找不到指定的PFX
var E_PFX_NOT_FOUND_AU=0x86001009;
var E_PFX_NOT_FOUND_SD=0x89001009;
var E_PFX_NOT_FOUND_ED=0xE6001009;
//使用者取消
var E_SCARD_W_CANCELLED_BY_USER=0x8010006e;

function getErrorMessage(code)
{
	if(code<0) code=0xffffffff+code+1;
	switch(code)
	{
		case INITIAL_CARD_ERROR_DLL_NOT_LOAD:return "指定的DLL無法載入";
		case INITIAL_CARD_ERROR_FUNC_NOT_SUPPORT:return "此功能未提供";
		case INITIAL_CARD_ERROR_SLOT:return "SLOT指定錯誤";
		case INITIAL_CARD_ERROR_NOT_FIND_ID:return "找不到指定的ID";
		case INITIAL_CARD_ERROR_CERT_ID_REPEATED:return "重覆的憑證ID";
		case INITIAL_CARD_ERROR_CERT_NOT_FOUND:return "找不到對應的憑證";

		case E_PIN_LOCK:return "PIN碼錯誤! (次數3或3次以上)為了安全起見，當你輸入PIN碼3次都驗證失敗，憑證將會自動鎖卡而無法使用。請至自然人憑證管理中心網站上『憑證作業/ 忘記PIN碼鎖卡解碼』輸入用戶代碼來執行鎖卡解碼動作，或請洽客服中心免付費電話:0800-080-117。";
		case E_PIN_ERROR_REMAIN_1:return "PIN碼驗證錯誤剩1次機會";
		case E_PIN_ERROR_REMAIN_2:return "PIN碼驗證錯誤剩2次機會";
		case E_PIN_ERROR_REMAIN_3:return "PIN碼驗證錯誤剩3次機會";
		case E_PIN_ERROR_REMAIN_4:return "PIN碼驗證錯誤剩4次機會";
		case E_TBS_FORMAT_ERROR:return "待簽資料輸入格式錯誤";
		case E_PIN_FORMAT_ERROR_AU:return "PIN碼輸入格式錯誤";
		case E_INITIAL_CARD_ERROR:return "初始化卡片錯誤";
		case E_READ_CARD_CERT_ERROR:return "讀取卡片憑證錯誤";
		case E_SIGN_ERROR:return "簽章錯誤";
		case E_GET_CARD_DATA_ERROR:return "讀取卡片錯誤";
		case E_NOT_SUPPORTING_CARD_TYPE:return "不支援的卡片種類";
		case E_NONCE_FORMAT_ERROR_AU:return "Nonce輸入錯誤";
		case E_AADATA_FORMAT_ERROR_AU:return "AAData 輸入錯誤";


		case E_PFX_FILE_PATH_IS_NULL_AU:
		case E_PFX_FILE_PATH_IS_NULL_SD:
		case E_PFX_FILE_PATH_IS_NULL_ED:
			return "PFX 檔案路徑錯誤";
		case E_PFX_NOT_FOUND_AU:
		case E_PFX_NOT_FOUND_SD:
		case E_PFX_NOT_FOUND_ED:
			return "找不到指定的PFX";
		case E_PFX_PASSWORD_IS_NULL_AU:
		case E_PFX_PASSWORD_IS_NULL_SD:
		case E_PFX_PASSWORD_IS_NULL_ED:
		  return "PFX 密碼錯誤";
		case E_PROVIDERNAME_ERROR_AU:
		case E_PROVIDERNAME_ERROR_SD:
		case E_PROVIDERNAME_ERROR_ED:
			return "ProviderName錯誤";
		case E_CONTAINERNAME_ERROR_AU:
		case E_CONTAINERNAME_ERROR_SD:
		case E_CONTAINERNAME_ERROR_ED:
			return "CotainerName錯誤";
			
		case E_GET_CARD_READER_ERROR:
			return "找不到智慧卡讀取裝置";
			
		case E_GET_CARD_ERROR:
			return "1.先請確認讀卡機驅動程式是否有安裝成功。\r\n2.如果讀卡機驅動程有安裝成功，在確認智慧卡服務是否啟用，檢查方式請按桌面左下角[開始]，選擇[執行]並按一下這時候會跳出小視窗，請在開啟右邊輸入文字地方，輸入[services.msc] 並按下[確定]，請在服務視窗尋找一個叫[Smart Card] 名稱，請確認[Smart Card]服務是否有正常啟用。";
			
		case E_SCARD_W_CANCELLED_BY_USER:
			return "使用者取消";
	}
	return code.toString(16);
}

function onSign(formObject)
{
	var content=formObject.content.value;
	if(formObject.pin==null||formObject.pin.value.length == 0)
	{
		alert("憑證密碼 不能為空白");
		return false;
	}
	else if (formObject.pin.value.length < 6 || formObject.pin.value.length > 8) {
		alert("憑證密碼只允許6-8碼，請確認輸入的憑證密碼是否正確，\n若您的密碼非6-8碼，請至憑證管理中心修改憑證密碼");
		return false;	   
	}
	formObject.signedData.value="";
	var signedDataClient= new ActiveXObject("CHTSecurityClient.SignedData.1");
	var utility=new ActiveXObject("CHTSecurityClient.utility.1");
	var rcode;
	var msg;
	if (typeof signedDataClient == "undefined" || typeof utility == "undefined" )
	{
		alert("請先安裝並執行HiPKI 套件");
		return false;
	}
   
	signedDataClient.content = content;
	rcode = signedDataClient.MakeSignedData(formObject.pin.value);
	if(rcode!=0){
		msg=getErrorMessage(rcode);
		if("找不到智慧卡讀取裝置"==msg){
			alert(msg);
		}else if("使用者取消"==msg){
			//不要顯示錯誤訊息
		}else{
			alert(msg);
		}
		signedDataClient = null;
		utility = null;
		return false;
	}
	//將SignedData 做Base64 Encode
	utility.SetData(signedDataClient.signedData);
	formObject.signedData.value = utility.bstrBase64Data;
	signedDataClient.Reset();
	signedDataClient = null;
	utility = null;
	return true;
   
}
