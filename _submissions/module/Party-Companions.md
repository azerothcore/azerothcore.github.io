# Module info

- Name: Party Companions
- Author: walsin98
- Repository: https://github.com/walsin98/party-companions
- Download: https://github.com/walsin98/party-companions/releases/download/v1.0.0/party-companions-v1.0.0.zip
- License: GPL-2.0 (server module); MIT (client addon)

# Module integration

- AzerothCore hash/commit compliance: Playerbots core `93333d6a9eb00fdf0179adde30da3c17618207d6`. Requires the Playerbots fork, mod-playerbots, and mod-transmog; stock AzerothCore alone is not supported. The underlying companion implementation has been deployed on a private realm; the renamed public release bundle has not received a separate clean-build compatibility matrix.
- Includes configuration (.conf)?: Yes. Copy `mod-party-companions/conf/party_companions.conf.dist` manually to the server installation as `etc/modules/party_companions.conf`.
- Includes SQL patches?: No separate SQL migrations. Uses existing character settings and the mod-transmog account collection.
- CMake hooks used: None. Uses the module script loader (`Addmod_party_companionsScripts`).
- Core hooks used:
  - PlayerScript: `OnPlayerCanUseChat`, `OnPlayerGiveXP`, `OnPlayerMoneyChanged`.
  - WorldScript: `OnAfterConfigLoad`, `OnUpdate`.

# Description

Party Companions lets a player summon up to four other same-faction characters from their own account as Playerbots altbot companions. The accompanying WoW 3.3.5a addon adds a Party pane to the Character window and a wardrobe interface.

Features include companion level locking, full solo kill XP, shared bags and gold, equipping companions from the owner's bags, party stances/orders, role-aware engagement, regrouping, idle behavior and delayed out-of-combat revival. The wardrobe uses mod-transmog's account-wide collection, locked/unlocked appearance previews, remembered slot looks and five outfits per character. Applying a new appearance requires proximity to its Transmogrifier NPC.

Server/client communication uses addon whispers to self with the `PMGR` prefix. `AddonChannel` must be enabled. `Playerbots.AllowAccountBots = 1` and `Transmogrification.UseCollectionSystem = 1` are required.

The repository is a two-component release bundle: install only its `mod-party-companions` subdirectory into the server `modules` directory, and `addon/PartyCompanions` into the client `Interface/AddOns` directory. No Blizzard game assets or compiled server binaries are included.

Release: https://github.com/walsin98/party-companions/releases/tag/v1.0.0
