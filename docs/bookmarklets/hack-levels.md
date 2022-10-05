---
sidebar_position: 2
title: "[Hack] Set Level"
description: "Set your Prodigy level"
---

Bookmarklet to set your level to 100:
```txt
javascript:!function(e){const t=Boot.prototype.game._state._current.user.source,a=parseInt(100);if(a>100)return void(t.getLevel=()=>a);if(1===a)return t.data.stars=0,t.data.level=1,void(t.getLevel=()=>1);const r=a-2;t.data.stars=Math.round((1-Math.pow(1.042,r))/(1-1.042)*20+10),t.data.level=+a,t.getLevel=()=>t.data.level}();
```

<br/>

Source Code:
```js
/** A function to set the player's level in Prodigy Math Game */
function setLevel (lvl) {

    /** Player variable */
    const player = Boot.prototype.game._state._current.user.source;

    /** Level that we're trying to set to */
    const level = parseInt(lvl);

    // We cannot set the level above 100, but we can temporarilly override it
    if (level > 100) {
        player.getLevel = () => level;
        return;
    };

    // Setting the level to 1 works better when you don't run xpConstant calculations
    if (level === 1) {
        player.data.stars = 0;
        player.data.level = 1;
        player.getLevel = () => 1;
        return;
    }

    // now we calculate how many stars the level *should* have
    // from 3-16-1.js:8382
    const i = level - 2;

    /** xpConstant from 3-16-1.js:8528 */
    const xpConstant = 1.042;

    // Math time lmao
    player.data.stars = Math.round((1 - Math.pow(xpConstant, i)) / (1 - xpConstant) * 20 + 10);
    player.data.level = +level;

    // Override the getLevel function to return the player.data.level that we overrwrote
    player.getLevel = () => player.data.level;

}

setLevel(100);
```
