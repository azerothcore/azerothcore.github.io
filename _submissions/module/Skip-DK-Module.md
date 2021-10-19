
# Module info

- Name: Skip DK-Starting Area
- Author: Acidmanifesto
- Module:
  + Repository: https://github.com/azerothcore/mod-skip-dk-starting-area
  + Download: https://github.com/azerothcore/mod-skip-dk-starting-area/archive/refs/heads/master.zip
- License: AGPL

# Module integration

- **AzerothCore hash/commit compliance:** [7443937c3](https://github.com/azerothcore/azerothcore-wotlk/commit/db2b380cebf19c014e75be229a7e4057443937c3)
- Includes configuration (.conf)?: Yes, copied by CMake
- Includes SQL patches?: Yes
- Core hooks used:
    + PlayerScript: OnLogin
# Description
A module that that skips the dk starter area on creation of the new player. Configurable for setting preffer level of dk when zone is skipped, Can set
config to instant skip if player, or gm level account on new creation. Also has a optional skip gossip to the first lich king if player choses not to
skip the starter zone, if they do they simply need to speak to the first lich king npc on login after creating a new DK character. All phasing and triggers
are auto applied along with items to ensure nothing is missed out from skipping. Using death gate will take you to the appropiately phased Ebon Hold.