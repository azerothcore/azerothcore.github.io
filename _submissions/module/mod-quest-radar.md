# Module info

- Name: QuestRadar
- Author: warblups
- Module:
  + Repository: https://github.com/warblups/mod-quest-radar
  + Download: https://github.com/warblups/mod-quest-radar/archive/refs/heads/master.zip
- License: AGPL
- Language: English

# Module integration

- **AzerothCore hash/commit compliance:** [413bea61a](https://github.com/azerothcore/azerothcore-wotlk/commit/413bea61a85e20d9caef7d66fc601a661fdddd9d)
- Includes configuration (.conf)?: Yes, copied by CMake
- Includes SQL patches?: No
- Core hooks used:
    + WorldScript: OnBeforeConfigLoad
    + PlayerScript: OnPlayerQuestAccept, OnPlayerBeforeSendChatMessage
    + CommandScript: GetCommands

# Description

Shows quest objective locations on the minimap, something WotLK 3.3.5 never had natively (only the world map shows quest POIs). The server computes objective positions from the existing `quest_poi` / `quest_poi_points` data (no new tables, no SQL import) and reports them in chat via the `.questradar` / `.qr` command, or via an automatic announce on quest accept.

A companion client addon (included, `client-addon/QuestRadar/`) talks to the module over a `CHAT_MSG_ADDON` bridge and draws a numbered icon per objective directly on the minimap — the same number shown in the native yellow circle on the world map — plus a translucent area for objectives that aren't a single precise spot. The addon has no third-party Lua library dependency, and is configurable in-game via `/qr` commands or a native options panel.
