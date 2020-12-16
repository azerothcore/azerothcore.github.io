# Module info
- **Name:** kargatum-system
- **Author:** Winfidonarleyan
- **Repository:** https://github.com/Winfidonarleyan/kargatum-system
- **Download:** https://github.com/Winfidonarleyan/kargatum-system/archive/master.zip
- **License:** MIT
- **Language:** Russian and English

# List modules in system
- mod-anti-advertisment
- mod-auto-revive
- mod-bg-reward
- mod-buff-command
- mod-faction-icons-channel
- mod-gm-chat-color
- mod-level-reward
- mod-notify-muted
- mod-online-reward
- mod-player-info-login

# Modules integration
- **AzerothCore hash/commit compliance:** [6aeab39a](https://github.com/azerothcore/azerothcore-wotlk/commit/6aeab39af30d6a9e296a73820b9a7d9adde15c1d)
- **Includes configuration (.conf)?:** Yes, copied by CMake
- **Includes SQL patches?:** Yes
- **CMake hooks used:**
    + AFTER_LOAD_CONF
    + AFTER_LOAD_CMAKE_MODULES
- **Core hooks used:**
    + BGScript: OnBattlegroundEndReward
    + CommandScript: GetCommands
    + PlayerScript: OnLogin, OnLogout, OnChat, OnBeforeUpdate, OnLevelChanged, 
    + WorldScript: OnAfterConfigLoad, OnStartup

# Description
The system consists of several modules
