# Module & Lua Script info

- Name: Tier-0 Profession Trainers
- Author: VenomekPL
- Module:
 + Repository: https://github.com/VenomekPL/mod-tier0-trainers
 + Download: https://github.com/VenomekPL/mod-tier0-trainers/archive/refs/tags/v0.1.0.zip
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

Remaps classic-continent profession trainers so Tier 0 / level-60 progression can train professions to skill 300. Designed for Individual Progression Tier 0.

```bash
cd modules
git submodule add https://github.com/VenomekPL/mod-tier0-trainers.git mod-tier0-trainers
```
