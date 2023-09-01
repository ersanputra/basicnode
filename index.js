const MamaliaController = require("./class/controllers/mamalia.controller");

async function main() {
    try {
        const mamalia = { name: "Lumba-lumba", type: "Mamalia", habitat: "Laut" } 
        const mamaliaController = new MamaliaController();
        mamaliaController.getSuara();

        await mamaliaController.store(mamalia);

        const mamalias = await mamaliaController.getAll();
        console.log(mamalias);
    } catch (error) {
        console.log(error);
    }

    
}

main();