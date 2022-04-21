@echo off
setlocal enabledelayedexpansion

:: prepare
set d=%USERPROFILE%\.config\npm\extra-cd
if not exist %d% mkdir %d%
:: Get arg0
set a="%*"
if not "%a:~1,1%"=="=" set a="%1"
:: Remove quotes
set b=%a:~1,-1%
set i=%b:"=%
:: Get command and file name
set c=%i:~0,1%
set f=%d%\%i:~1%.ini
:: Get optional value
set v=%cd%
if not "%~2"=="" set v=%2

:: Options
if "%i%"=="--help" more %~dp0README.md & goto :eof
if "%i%"==""  goto :eof
if "%i%"=="-" endlocal & endlocal & popd    & goto :list
if "%i%"=="." endlocal & endlocal & pushd . & goto :list
if "%c%"=="+" echo %v% > "%f%"   & goto :eof
if "%c%"=="-" del "%f%"          & goto :eof
if "%c%"=="=" for /f "delims=" %%a in ('type "%f%" 2^>NUL') do endlocal & endlocal & pushd "%%~a" & goto :list
endlocal & endlocal & pushd "%i%"
goto :list

:: List directory
:list
dir
echo.

:eof
