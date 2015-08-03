REM set JAVA_HOME=C:\Developer\Java\x86\jdk1.7.0_25
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\bcpkix-jdk15on-1.49.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\bcprov-jdk15on-1.49.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\chttl-sac-uhc-0.0.7.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\iaikPkcs11Wrapper.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\HiCOSLoginApplet.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\HiCOSPKIApplet.jar cert1
%JAVA_HOME%\bin\jarsigner -keystore NONE -storetype PKCS11 -storepass cc640607 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\test\codesign\json_simple-1.1.jar cert1



