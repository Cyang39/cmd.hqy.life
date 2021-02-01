## Introduction 
This script can help you add rules to database easily.

## Usage
```txt
https://cmd.hqy.life/scripts/add?fmt=ddk%20$&tpl=https://duckduckgo.com/?q=${0}&inf=Search%20in%20duckduckgo
```

The parameters are the properties of a rule object:
- fmt
- tpl
- inf

Not support to pass `lnk` yet.

In order to ensure that the parameters are passed correctly, you'd better encode the parameters by `window.encodeURIComponent` method.

[Example](https://cmd.hqy.life/scripts/add/?fmt=ddk%20$&tpl=https://duckduckgo.com/?q=${0}&inf=Search%20in%20duckduckgo), 
Click this Example link will add `ddk $` to your rules, that you can search something in duckduckgo by `ddk something`.

### Tip
If you add a rule like this:
```json
{
  "fmt": "add _ $",
  "tpl": "/scripts/add?fmt=${0}&tpl=${1}",
  "inf": "add a cmd rule",
  "lnk": [
    "cmd add _ $"
  ]
}
```
you can make any short name for long url easily as shown in the screenshot below.

## Screenshot
![screenshot](imgs/screenshot.gif)