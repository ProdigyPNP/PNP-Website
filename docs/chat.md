---
sidebar_position: 6
title: "Custom Chat Messages"
---

## How to do custom chat messages in Prodigy

:::warning
Be responsible.
:::

```js
_.functions.customChat = function (text) {

    if (_.instance == false) return alert("You need the extension for this.");

    const dialogue = _.instance.prodigy.dialogue.create();
    dialogue.setText(10);
    const key = "noot";

    dialogue.eventQueue[0].dialogueData = dialogue.dataProvider.getLegacy(
        key,
        dialogue.eventQueue[0].legacyData.index
    );

    dialogue.eventQueue [0] = Object.assign(
        {
            type: undefined,
            windowPosition: undefined,
            blockInput: !undefined,
        },
        dialogue.eventQueue [0]
    );

    dialogue.eventQueue [0] = window._.pickBy(dialogue.eventQueue [0], x => x !== undefined);
    dialogue.closeDialogue(false);
    dialogue.onClose = function () {};


    _instance.prodigy.notifications.setPaused(true);


    const next = function () {
        dialogue.current = dialogue.eventQueue.splice(0, dialogue.skipCounter + 1)[dialogue.skipCounter];
        dialogue.skipCounter = 0;

        if (Object.keys (dialogue.current ?? {}).length > 0) {
            const item = [dialogue.current.dialogueData.avatar.atlas];

            if (dialogue. currentDialogue?.game) {
                dialogue.currentDialogue.updateSchema(dialogue. current, item);
            } else {
                dialogue.currentDialogue = _.instance.prodigy.open.characterDialogue(
                    dialogue.current,
                    next.bind (dialogue),
                    item
                );
            }
    };


    next();
};


```