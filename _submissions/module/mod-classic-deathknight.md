# Module & Lua Script info

- Name: Classic Death Knight
- Author: VenomekPL
- Module:
 + Repository: https://github.com/VenomekPL/mod-classic-deathknight
 + Download: https://github.com/VenomekPL/mod-classic-deathknight/archive/refs/tags/v0.1.0.zip
- License: MIT

# Module integration

- AzerothCore hash/commit compliance: a4ab072
- Includes configuration (.conf)?: Yes, copied by CMake
- Includes SQL patches?: Yes
- CMake hooks used:
 + (standard module build)
- Core hooks used:
 + PlayerScript / WorldScript

# Description

Level 1–60 Classic Death Knight experience: racial starting zones, remapped spell progression, world trainers, level-scaled ability damage, and WotLK-gated Death Gate / Acherus. Requires mod-individual-progression.

```bash
cd modules
git submodule add https://github.com/VenomekPL/mod-classic-deathknight.git mod-classic-deathknight
```
