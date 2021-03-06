@echo off
setlocal enabledelayedexpansion

:: prepare
set d=%APPDATA%\0rez\ocd
if not exist %d% mkdir %d%
:: get arg0
set a="%*"
if not "%a:~1,1%"=="=" set a="%1"
:: remove quotes
set b=%a:~1,-1%
set i=%b:"=%
:: get command and file name
set c=%i:~0,1%
set f=%d%\%i:~1%.ini
:: get optional value
set v=%cd%
if not "%~2"=="" set v=%2

:: options
if "%i%"=="" goto :lend
if "%i%"=="-" endlocal & popd & goto :lls
if "%i%"=="." endlocal & pushd . & goto :lls
if "%c%"=="+" echo %v% > "%f%" & goto :lend
if "%c%"=="-" del "%f%" & goto :lend
if "%c%"=="=" for /f "delims=" %%a in ('type "%f%" 2^>NUL') do endlocal & pushd "%%~a" & goto :lls
endlocal & pushd "%i%"
goto :lls

:: list directory
:lls
ls --color --group-directories-first
echo.

:lend
