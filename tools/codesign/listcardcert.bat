REM set JAVA_HOME=C:\Developer\Java\x86\jdk1.7.0_25
%JAVA_HOME%\bin\keytool -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg -keystore NONE -storetype PKCS11 -list -alias cert1