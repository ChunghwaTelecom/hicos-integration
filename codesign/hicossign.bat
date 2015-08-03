REM set JAVA_HOME=C:\Developer\Java\x86\jdk1.7.0_40
%JAVA_HOME%\bin\jarsigner -keystore NONE -storepass cc640607 -storetype PKCS11 -providerClass sun.security.pkcs11.SunPKCS11 -providerArg .\pkcs11.cfg ..\html\HiCOSLoginApplet.jar cert1
%JAVA_HOME%\bin\jarsigner -verbose -verify -certs -keystore %JAVA_HOME%\jre\lib\security\cacerts ..\html\HiCOSLoginApplet.jar
