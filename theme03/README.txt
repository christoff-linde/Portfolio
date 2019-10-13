Firefox recently changed a default setting that prevents the browser from reading the website unless it is hosted on a actual server.
However, there is a easy workaround that can be used to re-enable the old setting so that the website can be viewed.
To view the website, please follow the instructions:
1. Run in Firefox
2. In the URL bar, search about:config
   Firefox will bring up a prompt to warm that you are changing settings. Just click accept (the setting can be changed back, and no harm will come from changing the setting) 
3. Search for the setting security.fileuri.strict_origin_policy
4. Right click on the setting, and click Toggle in the menu that appears. It's value should be changed to false.
5. Restart Firefox

After completing these steps, just open index.html and everything will be working fine.
The steps can be repeated to change the setting back to True when done.

Alternatively, I have included video exports of both the mainMenu and the lyricVideo.