@echo off
:: (c) Copyright Chunghwa Telecom Corp., Ltd. All rights reserved.

java -cp "%~dp0/chttl-sac-uhc-0.0.7.jar;%~dp0/hicos.jar;%~dp0/iaikPkcs11Wrapper.jar;%~dp0/json_simple-1.1.jar;%~dp0/bcpkix-jdk15on-1.49.jar;%~dp0/bcprov-jdk15on-1.49.jar" com.chttl.sac.pki.console.HiCOSLauncher %*