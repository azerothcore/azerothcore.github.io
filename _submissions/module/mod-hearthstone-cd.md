# Module & Lua Script info

- Name: Hearthstone Cooldown
- Author: VenomekPL
- Module:
 + Repository: https://github.com/VenomekPL/mod-hearthstone-cd
 + Download: https://github.com/VenomekPL/mod-hearthstone-cd/archive/refs/tags/v0.1.0.zip
- License: MIT

# Module integration

- AzerothCore hash/commit compliance: a4ab072
- Includes configuration (.conf)?: Yes, copied by CMake
- Includes SQL patches?: Yes
- CMake hooks used:
 + (standard module build)
- Core hooks used:
 + WorldScript: OnAfterConfigLoad

# Description

Sets Hearthstone (and related hearth items) to a 5-minute cooldown via world SQL, plus an optional client Spell.dbc patch tool so the UI timer matches.

```bash
cd modules
git submodule add https://github.com/VenomekPL/mod-hearthstone-cd.git mod-hearthstone-cd
```
