import type { DependencyContainer } from "tsyringe";

import type { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import type { DatabaseServer } from "@spt/servers/DatabaseServer";
import type { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        const tables: IDatabaseTables = databaseServer.getTables();

        // Grab the quests
        const gettingAcquaintedQuest = tables.templates.quests["625d700cc48e6c62a440fab5"]
        const makeAmendsQuest = tables.templates.quests["6391d90f4ed9512be67647df"]

        // Remove failure conditions
        gettingAcquaintedQuest.conditions.Fail = []
        makeAmendsQuest.conditions.Fail = []
        
    }
}

export const mod = new Mod();
