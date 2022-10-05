---
sidebar_position: 1
title: Hacking without extensions
description: How and why to hack Prodigy without extensions.
---

## Why hack without extensions?
Perhaps your school or organization has blocked one of the following:
- The PHEx Extension
- Extensions in general
- infinitezero.net
- prodigypnp.com
- GitHub

Or maybe you just don't want anyone seeing an obvious extension that's about hacking Prodigy. Fair enough.


## How to hack without extensions?
It's actually pretty simple.

:::tip
<p>
    Don't know how to open the DevTools Console? See the tutorial for your browser:
    <br/>
    <a href="https://developer.chrome.com/docs/devtools/open/#console">Google Chrome</a>&nbsp;•&nbsp;
    <a href="https://community.brave.com/t/javascript-console/6932/4">Brave Browser</a>&nbsp;•&nbsp;
    <a href="https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/">Microsoft Edge</a>&nbsp;•&nbsp;
    <a href="https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#opening-the-web-console">Mozilla Firefox</a>&nbsp;•&nbsp;
    <a href="https://ik4.es/en/how-to-start-the-development-console-in-opera/">Opera</a>
</p>
:::

1. Log into Prodigy
2. Open the DevTools JavaScript Console
3. You can use `Boot.prototype.game._state._current.user.source` just like `_.player` in [cheatGUI](https://github.com/ProdigyPNP/ProdigyMathGameHacking/tree/master/cheatGUI#readme).
    - If you don't know what `_.player` is, it's pretty much how we edit the player's data. For example, `_.player.data.gold` is the amount of gold a player has, `_.player.data.tower` is the tower floor a player is on, etc. etc.
4. Congrats! You can now hack Prodigy without using any extensions.

:::warning
### Warning
Not all hacks can be done without the extension. Basic stuff like editing the player's gold, level, etc. can be done, however, more complex things such as Save Charecter, Dyno Dig Walkspeed, Teleport to Map, Get All Runes, etc. are not possible without the extension.
:::


:::tip
### Example: Set gold to 10,000

JavaScript:
```js
Boot.prototype.game._state._current.user.source.data.gold=10000;
```

Bookmarklet:
```txt
javascript:Boot.prototype.game._state._current.user.source.data.gold=10000;
```

:::