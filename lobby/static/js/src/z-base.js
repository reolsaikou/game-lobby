class TankGame {
    constructor(id) {
        this.id = id;
        this.$tank_game = $('#' + id);
        this.menu = new TankGameMenu(this);
        this.playground = new TankGamePlayground(this);
        this.start();
    }

    start() {}
}