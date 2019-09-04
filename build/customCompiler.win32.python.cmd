@echo off
REM pip3 install auto-py-to-exe 
pyinstaller --noconfirm --debug=all -F --distpath %2 %1
REM https://pyinstaller.readthedocs.io/en/stable/usage.html
REM EXIT /B 1

REM EXIT /B 2 = file exists
REM EXIT /B 3 = error while creating
