# Module & Lua Script info

- Name: Loot Cleanup
- Author: VenomekPL
- Module:
 + Repository: https://github.com/VenomekPL/mod-loot-cleanup
 + Download: https://github.com/VenomekPL/mod-loot-cleanup/archive/refs/tags/v0.1.0.zip
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

Removes non-quest grey (poor) loot and white vendor-trash weapons/armor/food from creature loot tables. Pair with Rate.Drop.Item.Poor = 0.

```bash
cd modules
git submodule add https://github.com/VenomekPL/mod-loot-cleanup.git mod-loot-cleanup
```
