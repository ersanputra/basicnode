const MamaliaController = require("./class/controllers/mamalia.controller");

function main() {
    const mamaliaController = new MamaliaController();
    mamaliaController.getSuara();
}

main();