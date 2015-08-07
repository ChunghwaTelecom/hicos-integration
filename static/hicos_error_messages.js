(function (angular) {
    'use strict';

    angular.module("HiCosMessagesModule", []);

    angular.module("HiCosMessagesModule")
        .factory("hiCosMessagesService", function () {

            var hicosMessages = {};

            hicosMessages["0x00000000"] = "CKR_OK";
            hicosMessages["0x00000001"] = "CKR_CANCEL";
            hicosMessages["0x00000002"] = "CKR_HOST_MEMORY";
            hicosMessages["0x00000003"] = "CKR_SLOT_ID_INVALID";
            hicosMessages["0x00000005"] = "CKR_GENERAL_ERROR";
            hicosMessages["0x00000006"] = "CKR_FUNCTION_FAILED";
            hicosMessages["0x00000007"] = "CKR_ARGUMENTS_BAD";
            hicosMessages["0x00000008"] = "CKR_NO_EVENT";
            hicosMessages["0x00000009"] = "CKR_NEED_TO_CREATE_THREADS";
            hicosMessages["0x0000000A"] = "CKR_CANT_LOCK";
            hicosMessages["0x00000010"] = "CKR_ATTRIBUTE_READ_ONLY";
            hicosMessages["0x00000011"] = "CKR_ATTRIBUTE_SENSITIVE";
            hicosMessages["0x00000012"] = "CKR_ATTRIBUTE_TYPE_INVALID";
            hicosMessages["0x00000013"] = "CKR_ATTRIBUTE_VALUE_INVALID";
            hicosMessages["0x00000020"] = "CKR_DATA_INVALID";
            hicosMessages["0x00000021"] = "CKR_DATA_LEN_RANGE";
            hicosMessages["0x00000030"] = "CKR_DEVICE_ERROR";
            hicosMessages["0x00000031"] = "CKR_DEVICE_MEMORY";
            hicosMessages["0x00000032"] = "CKR_DEVICE_REMOVED";
            hicosMessages["0x00000040"] = "CKR_ENCRYPTED_DATA_INVALID";
            hicosMessages["0x00000041"] = "CKR_ENCRYPTED_DATA_LEN_RANGE";
            hicosMessages["0x00000050"] = "CKR_FUNCTION_CANCELED";
            hicosMessages["0x00000051"] = "CKR_FUNCTION_NOT_PARALLEL";
            hicosMessages["0x00000054"] = "CKR_FUNCTION_NOT_SUPPORTED";
            hicosMessages["0x00000060"] = "CKR_KEY_HANDLE_INVALID";
            hicosMessages["0x00000062"] = "CKR_KEY_SIZE_RANGE";
            hicosMessages["0x00000063"] = "CKR_KEY_TYPE_INCONSISTENT";
            hicosMessages["0x00000064"] = "CKR_KEY_NOT_NEEDED";
            hicosMessages["0x00000065"] = "CKR_KEY_CHANGED";
            hicosMessages["0x00000066"] = "CKR_KEY_NEEDED";
            hicosMessages["0x00000067"] = "CKR_KEY_INDIGESTIBLE";
            hicosMessages["0x00000068"] = "CKR_KEY_FUNCTION_NOT_PERMITTED";
            hicosMessages["0x00000069"] = "CKR_KEY_NOT_WRAPPABLE";
            hicosMessages["0x0000006A"] = "CKR_KEY_UNEXTRACTABLE";
            hicosMessages["0x00000070"] = "CKR_MECHANISM_INVALID";
            hicosMessages["0x00000071"] = "CKR_MECHANISM_PARAM_INVALID";
            hicosMessages["0x00000082"] = "CKR_OBJECT_HANDLE_INVALID";
            hicosMessages["0x00000090"] = "CKR_OPERATION_ACTIVE";
            hicosMessages["0x00000091"] = "CKR_OPERATION_NOT_INITIALIZED";
            hicosMessages["0x000000A0"] = "CKR_PIN_INCORRECT";
            hicosMessages["0x000000A1"] = "CKR_PIN_INVALID";
            hicosMessages["0x000000A2"] = "CKR_PIN_LEN_RANGE";
            hicosMessages["0x000000A3"] = "CKR_PIN_EXPIRED";
            hicosMessages["0x000000A4"] = "CKR_PIN_LOCKED";
            hicosMessages["0x000000B0"] = "CKR_SESSION_CLOSED";
            hicosMessages["0x000000B1"] = "CKR_SESSION_COUNT";
            hicosMessages["0x000000B3"] = "CKR_SESSION_HANDLE_INVALID";
            hicosMessages["0x000000B4"] = "CKR_SESSION_PARALLEL_NOT_SUPPORTED";
            hicosMessages["0x000000B5"] = "CKR_SESSION_READ_ONLY";
            hicosMessages["0x000000B6"] = "CKR_SESSION_EXISTS";
            hicosMessages["0x000000B7"] = "CKR_SESSION_READ_ONLY_EXISTS";
            hicosMessages["0x000000B8"] = "CKR_SESSION_READ_WRITE_SO_EXISTS";
            hicosMessages["0x000000C0"] = "CKR_SIGNATURE_INVALID";
            hicosMessages["0x000000C1"] = "CKR_SIGNATURE_LEN_RANGE";
            hicosMessages["0x000000D0"] = "CKR_TEMPLATE_INCOMPLETE";
            hicosMessages["0x000000D1"] = "CKR_TEMPLATE_INCONSISTENT";
            hicosMessages["0x000000E0"] = "CKR_TOKEN_NOT_PRESENT";
            hicosMessages["0x000000E1"] = "CKR_TOKEN_NOT_RECOGNIZED";
            hicosMessages["0x000000E2"] = "CKR_TOKEN_WRITE_PROTECTED";
            hicosMessages["0x000000F0"] = "CKR_UNWRAPPING_KEY_HANDLE_INVALID";
            hicosMessages["0x000000F1"] = "CKR_UNWRAPPING_KEY_SIZE_RANGE";
            hicosMessages["0x000000F2"] = "CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT";
            hicosMessages["0x00000100"] = "CKR_USER_ALREADY_LOGGED_IN";
            hicosMessages["0x00000101"] = "CKR_USER_NOT_LOGGED_IN";
            hicosMessages["0x00000102"] = "CKR_USER_PIN_NOT_INITIALIZED";
            hicosMessages["0x00000103"] = "CKR_USER_TYPE_INVALID";
            hicosMessages["0x00000104"] = "CKR_USER_ANOTHER_ALREADY_LOGGED_IN";
            hicosMessages["0x00000105"] = "CKR_USER_TOO_MANY_TYPES";
            hicosMessages["0x00000110"] = "CKR_WRAPPED_KEY_INVALID";
            hicosMessages["0x00000112"] = "CKR_WRAPPED_KEY_LEN_RANGE";
            hicosMessages["0x00000113"] = "CKR_WRAPPING_KEY_HANDLE_INVALID";
            hicosMessages["0x00000114"] = "CKR_WRAPPING_KEY_SIZE_RANGE";
            hicosMessages["0x00000115"] = "CKR_WRAPPING_KEY_TYPE_INCONSISTENT";
            hicosMessages["0x00000120"] = "CKR_RANDOM_SEED_NOT_SUPPORTED";
            hicosMessages["0x00000121"] = "CKR_RANDOM_NO_RNG";
            hicosMessages["0x00000150"] = "CKR_BUFFER_TOO_SMALL";
            hicosMessages["0x00000160"] = "CKR_SAVED_STATE_INVALID";
            hicosMessages["0x00000170"] = "CKR_INFORMATION_SENSITIVE";
            hicosMessages["0x00000180"] = "CKR_STATE_UNSAVEABLE";
            hicosMessages["0x00000190"] = "CKR_CRYPTOKI_NOT_INITIALIZED";
            hicosMessages["0x00000191"] = "CKR_CRYPTOKI_ALREADY_INITIALIZED";
            hicosMessages["0x000001A0"] = "CKR_MUTEX_BAD";
            hicosMessages["0x000001A1"] = "CKR_MUTEX_NOT_LOCKED";
            hicosMessages["0x00000200"] = "CKR_FUNCTION_REJECTED";
            hicosMessages["0x80000000"] = "CKR_VENDOR_DEFINED";
            hicosMessages["0x80000001"] = "CKR_CHT_AMBIGUOUS_TOKEN_FOUND";

            return {
                getMessage: function (code) {

					var message = "unknown";
					
					if (typeof hicosMessages[code] !== "undefined") { message = hicosMessages[code]; }
				
                    return message;
                }
            };
        });


}(angular));