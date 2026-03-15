@echo off
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; $client = New-Object System.Net.WebClient; $client.DownloadFile('https://www.w3schools.com/html/horse.mp3', 'audio.mp3')"
if exist audio.mp3 (
    echo Download completed
) else (
    echo Download failed
)
