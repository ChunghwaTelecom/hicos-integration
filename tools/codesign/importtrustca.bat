REM %JAVA_HOME%\bin\keytool -import -alias epki -keystore %JAVA_HOME%\jre\lib\security\cacerts -trustcacerts -file .\epki.cer
REM %JAVA_HOME%\bin\keytool -import -alias moica -keystore %JAVA_HOME%\jre\lib\security\cacerts -trustcacerts -file .\pubca.cer
%JAVA_HOME%\bin\keytool -import -alias testGRCA2 -keystore %JAVA_HOME%\jre\lib\security\cacerts -trustcacerts -file .\testGRCA2.cer
%JAVA_HOME%\bin\keytool -import -alias testGTestCA2 -keystore %JAVA_HOME%\jre\lib\security\cacerts -trustcacerts -file .\testGTestCA2.cer