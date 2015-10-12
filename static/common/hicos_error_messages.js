(function (angular) {
    'use strict';

    angular.module("HiCosMessagesModule", []);

    angular.module("HiCosMessagesModule")
        .factory("hiCosMessagesService", function () {

            var messages = {};

            messages["0x00000000"] = {"name": "CKR_OK", "description": "執行成功"};
            messages["0x00000001"] = {"name": "CKR_CANCEL", "description": "作業取消"};
            messages["0x00000002"] = {"name": "CKR_HOST_MEMORY", "description": "記憶體不足"};
            messages["0x00000003"] = {"name": "CKR_SLOT_ID_INVALID", "description": "讀卡機識別碼錯誤"};
            messages["0x00000005"] = {"name": "CKR_GENERAL_ERROR", "description": "卡片或程式內部發生錯誤"};
            messages["0x00000006"] = {"name": "CKR_FUNCTION_FAILED", "description": "作業執行失敗"};
            messages["0x00000007"] = {"name": "CKR_ARGUMENTS_BAD", "description": "參數錯誤"};
            messages["0x00000008"] = {"name": "CKR_NO_EVENT", "description": "沒有新事件"};
            messages["0x00000009"] = {"name": "CKR_NEED_TO_CREATE_THREADS", "description": "需要建立執行緒"};
            messages["0x0000000A"] = {"name": "CKR_CANT_LOCK", "description": "無法鎖定資源"};
            messages["0x00000010"] = {"name": "CKR_ATTRIBUTE_READ_ONLY", "description": "無法異動唯讀屬性"};
            messages["0x00000011"] = {"name": "CKR_ATTRIBUTE_SENSITIVE", "description": "無法取得敏感資料"};
            messages["0x00000012"] = {"name": "CKR_ATTRIBUTE_TYPE_INVALID", "description": "資料型別錯誤"};
            messages["0x00000013"] = {"name": "CKR_ATTRIBUTE_VALUE_INVALID", "description": "資料值錯誤"};
            messages["0x00000020"] = {"name": "CKR_DATA_INVALID", "description": "此卡片無法解密資料，請更換其他張卡片"};
            messages["0x00000021"] = {"name": "CKR_DATA_LEN_RANGE", "description": "資料長度錯誤"};
            messages["0x00000030"] = {"name": "CKR_DEVICE_ERROR", "description": "裝置錯誤"};
            messages["0x00000031"] = {"name": "CKR_DEVICE_MEMORY", "description": "裝置記憶體不足"};
            messages["0x00000032"] = {"name": "CKR_DEVICE_REMOVED", "description": "裝置已移除"};
            messages["0x00000040"] = {"name": "CKR_ENCRYPTED_DATA_INVALID", "description": "加密資料錯誤"};
            messages["0x00000041"] = {"name": "CKR_ENCRYPTED_DATA_LEN_RANGE", "description": "加密資料長度錯誤"};
            messages["0x00000050"] = {"name": "CKR_FUNCTION_CANCELED", "description": "作業取消"};
            messages["0x00000051"] = {"name": "CKR_FUNCTION_NOT_PARALLEL", "description": "沒有併行業"};
            messages["0x00000054"] = {"name": "CKR_FUNCTION_NOT_SUPPORTED", "description": "不支援的作業"};
            messages["0x00000060"] = {"name": "CKR_KEY_HANDLE_INVALID", "description": ""};
            messages["0x00000062"] = {"name": "CKR_KEY_SIZE_RANGE", "description": ""};
            messages["0x00000063"] = {"name": "CKR_KEY_TYPE_INCONSISTENT", "description": ""};
            messages["0x00000064"] = {"name": "CKR_KEY_NOT_NEEDED", "description": ""};
            messages["0x00000065"] = {"name": "CKR_KEY_CHANGED", "description": ""};
            messages["0x00000066"] = {"name": "CKR_KEY_NEEDED", "description": ""};
            messages["0x00000067"] = {"name": "CKR_KEY_INDIGESTIBLE", "description": ""};
            messages["0x00000068"] = {"name": "CKR_KEY_FUNCTION_NOT_PERMITTED", "description": ""};
            messages["0x00000069"] = {"name": "CKR_KEY_NOT_WRAPPABLE", "description": ""};
            messages["0x0000006A"] = {"name": "CKR_KEY_UNEXTRACTABLE", "description": ""};
            messages["0x00000070"] = {"name": "CKR_MECHANISM_INVALID", "description": ""};
            messages["0x00000071"] = {"name": "CKR_MECHANISM_PARAM_INVALID", "description": ""};
            messages["0x00000082"] = {"name": "CKR_OBJECT_HANDLE_INVALID", "description": ""};
            messages["0x00000090"] = {"name": "CKR_OPERATION_ACTIVE", "description": ""};
            messages["0x00000091"] = {"name": "CKR_OPERATION_NOT_INITIALIZED", "description": ""};
            messages["0x000000A0"] = {"name": "CKR_PIN_INCORRECT", "description": "PIN 碼錯誤"};
            messages["0x000000A1"] = {"name": "CKR_PIN_INVALID", "description": ""};
            messages["0x000000A2"] = {"name": "CKR_PIN_LEN_RANGE", "description": "PIN 碼長度不足 (不計入驗證次數)"};
            messages["0x000000A3"] = {"name": "CKR_PIN_EXPIRED", "description": ""};
            messages["0x000000A4"] = {"name": "CKR_PIN_LOCKED", "description": "PIN 碼已鎖死，請解鎖後再使用"};
            messages["0x000000B0"] = {"name": "CKR_SESSION_CLOSED", "description": ""};
            messages["0x000000B1"] = {"name": "CKR_SESSION_COUNT", "description": ""};
            messages["0x000000B3"] = {"name": "CKR_SESSION_HANDLE_INVALID", "description": ""};
            messages["0x000000B4"] = {"name": "CKR_SESSION_PARALLEL_NOT_SUPPORTED", "description": ""};
            messages["0x000000B5"] = {"name": "CKR_SESSION_READ_ONLY", "description": ""};
            messages["0x000000B6"] = {"name": "CKR_SESSION_EXISTS", "description": ""};
            messages["0x000000B7"] = {"name": "CKR_SESSION_READ_ONLY_EXISTS", "description": ""};
            messages["0x000000B8"] = {"name": "CKR_SESSION_READ_WRITE_SO_EXISTS", "description": ""};
            messages["0x000000C0"] = {"name": "CKR_SIGNATURE_INVALID", "description": ""};
            messages["0x000000C1"] = {"name": "CKR_SIGNATURE_LEN_RANGE", "description": ""};
            messages["0x000000D0"] = {"name": "CKR_TEMPLATE_INCOMPLETE", "description": ""};
            messages["0x000000D1"] = {"name": "CKR_TEMPLATE_INCONSISTENT", "description": ""};
            messages["0x000000E0"] = {"name": "CKR_TOKEN_NOT_PRESENT", "description": "沒有插入卡片"};
            messages["0x000000E1"] = {"name": "CKR_TOKEN_NOT_RECOGNIZED", "description": "卡片無法辨視"};
            messages["0x000000E2"] = {"name": "CKR_TOKEN_WRITE_PROTECTED", "description": "卡片無法寫入"};
            messages["0x000000F0"] = {"name": "CKR_UNWRAPPING_KEY_HANDLE_INVALID", "description": ""};
            messages["0x000000F1"] = {"name": "CKR_UNWRAPPING_KEY_SIZE_RANGE", "description": ""};
            messages["0x000000F2"] = {"name": "CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT", "description": ""};
            messages["0x00000100"] = {"name": "CKR_USER_ALREADY_LOGGED_IN", "description": ""};
            messages["0x00000101"] = {"name": "CKR_USER_NOT_LOGGED_IN", "description": ""};
            messages["0x00000102"] = {"name": "CKR_USER_PIN_NOT_INITIALIZED", "description": ""};
            messages["0x00000103"] = {"name": "CKR_USER_TYPE_INVALID", "description": ""};
            messages["0x00000104"] = {"name": "CKR_USER_ANOTHER_ALREADY_LOGGED_IN", "description": ""};
            messages["0x00000105"] = {"name": "CKR_USER_TOO_MANY_TYPES", "description": ""};
            messages["0x00000110"] = {"name": "CKR_WRAPPED_KEY_INVALID", "description": ""};
            messages["0x00000112"] = {"name": "CKR_WRAPPED_KEY_LEN_RANGE", "description": ""};
            messages["0x00000113"] = {"name": "CKR_WRAPPING_KEY_HANDLE_INVALID", "description": ""};
            messages["0x00000114"] = {"name": "CKR_WRAPPING_KEY_SIZE_RANGE", "description": ""};
            messages["0x00000115"] = {"name": "CKR_WRAPPING_KEY_TYPE_INCONSISTENT", "description": ""};
            messages["0x00000120"] = {"name": "CKR_RANDOM_SEED_NOT_SUPPORTED", "description": ""};
            messages["0x00000121"] = {"name": "CKR_RANDOM_NO_RNG", "description": ""};
            messages["0x00000150"] = {"name": "CKR_BUFFER_TOO_SMALL", "description": ""};
            messages["0x00000160"] = {"name": "CKR_SAVED_STATE_INVALID", "description": ""};
            messages["0x00000170"] = {"name": "CKR_INFORMATION_SENSITIVE", "description": ""};
            messages["0x00000180"] = {"name": "CKR_STATE_UNSAVEABLE", "description": ""};
            messages["0x00000190"] = {"name": "CKR_CRYPTOKI_NOT_INITIALIZED", "description": ""};
            messages["0x00000191"] = {"name": "CKR_CRYPTOKI_ALREADY_INITIALIZED", "description": ""};
            messages["0x000001A0"] = {"name": "CKR_MUTEX_BAD", "description": ""};
            messages["0x000001A1"] = {"name": "CKR_MUTEX_NOT_LOCKED", "description": ""};
            messages["0x00000200"] = {"name": "CKR_FUNCTION_REJECTED", "description": ""};

            messages["0x000063C1"] = {"name": "CKR_FUNCTION_REJECTED", "description": "PIN 碼驗證錯誤，剩一次機會"};
            messages["0x000063C2"] = {"name": "CKR_FUNCTION_REJECTED", "description": "PIN 碼驗證錯誤，剩兩次機會"};
            messages["0x00006983"] = {"name": "CKR_FUNCTION_REJECTED", "description": "PIN 碼已鎖死，請解鎖後再使用"};
  
            messages["0x80000000"] = {"name": "CKR_VENDOR_DEFINED", "description": ""};
            messages["0x80000001"] = {"name": "CKR_CHT_AMBIGUOUS_TOKEN_FOUND", "description": "偵測到兩張以上卡片，請退出所有不必要之卡片"};
            messages["0x80000002"] = {"name": "CKR_CHT_BAD_REQUEST", "description": "格式錯誤，HiCOS 無法識別"};

            var normalizeCode = function (code) {
                if (typeof code === "string") {
                    code = code.toUpperCase().replace("X", "x");
                }
                return code;
            };

            var hasCode = function (code) {
                code = normalizeCode(code);
                return (typeof messages[code] !== "undefined");
            };

            var getMessage = function (code) {
                var message = "無法取得 " + code + " 的代碼訊息";
                if (hasCode(code)) {
                    code = normalizeCode(code);

                    var name = messages[code].name;
                    var description = messages[code].description;

                    if (description) {
                        message = description + " [" + name + "]";
                    } else {
                        message = name;
                    }

                    return message;
                }
            };

            return {
                hasCode: hasCode,
                getMessage: getMessage
            };
        });

}(angular));
