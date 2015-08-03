:: (c) Copyright Chunghwa Telecom Corp., Ltd. All rights reserved.

:: %~dp0 is the directory containing this bat script and ends with a backslash.
REG ADD "HKLM\Software\Google\Chrome\NativeMessagingHosts\com.chttl.sac.pki.console" /ve /t REG_SZ /d "%~dp0com.chttl.sac.pki.console-win.json" /f

pause