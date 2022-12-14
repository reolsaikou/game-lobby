class TankGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="tank-game-menu">
    <div class="tank-game-menu-field">
        <div class="tank-game-menu-field-item tank-game-menu-field-item-single-mode">
            Single Mode
        </div>
        <br>
        <div class="tank-game-menu-field-item tank-game-menu-field-item-ladder-mode">
            Ladder Mode
        </div>
        <br>
        <div class="tank-game-menu-field-item tank-game-menu-field-item-settings">
            Settings
        </div>
    </div>
</div>
`);
        this.root.$tank_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.tank-game-menu-field-item-single-mode');
        this.$ladder_mode = this.$menu.find('.tank-game-menu-field-item-ladder-mode');
        this.$settings = this.$menu.find('.tank-game-menu-field-item-settings')

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let that = this;
        this.$single_mode.click(function() {
            that.hide();
            that.root.playground.show();
        });
        this.$multi_mode.click(function() {
            console.log("click multi mode");
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}class TankGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>Game Interface</div>`);

        this.hide();
        this.root.$ac_game.append(this.$playground);

        this.start();
    }

    start() {}

    show() {
        this.$playground.show();
    }
    hide() {
        this.$playground.hide();
    }
}class TankGame {
    constructor(id) {
        this.id = id;
        this.$tank_game = $('#' + id);
        this.menu = new TankGameMenu(this);
        this.playground = new TankGamePlayground(this);
        this.start();
    }

    start() {}
}