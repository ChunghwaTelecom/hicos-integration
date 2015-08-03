:: (c) Copyright Chunghwa Telecom Corp., Ltd. All rights reserved.

:: Deletes the entry created by install_host_admin.bat
REG DELETE "HKCU\Software\Google\Chrome\NativeMessagingHosts\com.chttl.sac.pki.console" /f
REG DELETE "HKLM\Software\Google\Chrome\NativeMessagingHosts\com.chttl.sac.pki.console" /f

pause