---
sidebar_position: 3
title: "[Hack] Set Gold"
description: "Set your Prodigy gold amount"
---

Bookmarklet to set your gold to 9 million:
```txt
javascript:!function(t){const e=Boot.prototype.game._state._current.user.source,o=parseInt(9e6);o>1e7||(e.data.gold=o)}();
```

<br/>

Source Code:
```js
function setGold (amt) {

    /** Player variable */
    const player = Boot.prototype.game._state._current.user.source;

    /** Amount of gold to get */
    const amount = parseInt(amt);

    // We cannot set the amount of gold above 10m without throwing 418s.
    if (amount > 10000000) return;
    
    // Set the player's gold to the amount
    player.data.gold = amount;
}

setGold(9000000);
```
