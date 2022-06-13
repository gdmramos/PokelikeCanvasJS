import { drawBackground } from "./drawers/backgroundDrawer";
import { drawPlayer } from "./drawers/playerDrawer";

export default class MainGame {
    constructor() {
    }

    async draw(ctx) {
        await drawBackground(ctx)
        await drawPlayer(ctx)
    }
}