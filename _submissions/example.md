# Module & Lua Script info

- Name: Skeleton
- Author: AzerothCore
- Module Skeleton:
  + Repository: https://github.com/azerothcore/skeleton-module
  + Download: https://github.com/azerothcore/skeleton-module/archive/master.zip
- Lua_Script Skeleton:
  + Repository: https://github.com/azerothcore/skeleton-lua_script
  + Download: https://github.com/azerothcore/skeleton-lua_script/archive/master.zip
- License: AGPL

# Module integration

- AzerothCore hash/commit compliance: 90ed254
- Includes configuration (.conf)?: Yes, copied by CMake
- Includes SQL patches?: No
- CMake hooks used:
    + AFTER_WORLDSERVER_CMAKE
- Core hooks used:
    + PlayerScript: OnLogin
    + WorldScript: OnBeforeConfigLoad

# Lua Script integration
- Includes configuration (.ext)?: Yes, copied by User
- Includes SQL patches?: No

# Description

A skeleton module where you can start to develop yours
