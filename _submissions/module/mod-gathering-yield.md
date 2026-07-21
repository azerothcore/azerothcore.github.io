# Module & Lua Script info

- Name: Gathering Yield
- Author: VenomekPL
- Module:
 + Repository: https://github.com/VenomekPL/mod-gathering-yield
 + Download: https://github.com/VenomekPL/mod-gathering-yield/archive/refs/tags/v0.1.0.zip
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

Triples mining/herbalism node yields and fishing/skinning loot counts (containers kept at vanilla counts).

```bash
cd modules
git submodule add https://github.com/VenomekPL/mod-gathering-yield.git mod-gathering-yield
```
