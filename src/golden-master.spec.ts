import runGoldenMaster from 'jest-golden-master'
import { Item, GildedRose } from '.'

test("Ceci est un test", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", 10, 30);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("Test with quality < 50", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("Test with quality < 50 but sellIn < 6", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", 4, 30);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("Item is a Sulfuras hammer with a positif quality", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Sulfuras, Hand of Ragnaros", 10, 30);

        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test(
    "Sulfuras hammer with a negatif quality / Random Objet with a positif quality",
    async () => {
        runGoldenMaster(async () => {
            const item1 = new Item("Sulfuras, Hand of Ragnaros", 10, -10);
            const item2 = new Item("Random", 10, 10);
            const itemsArray = [item1, item2];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality()
        })
    })

test(
    "Sulfuras hammer with a positif quality / Random Objet with a negatif quality",
    async () => {
        runGoldenMaster(async () => {
            const item1 = new Item("Sulfuras, Hand of Ragnaros", 10, 10);
            const item2 = new Item("Random", 10, -10);
            const itemsArray = [item1, item2];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality()
        })
    })

test("sellIn inférieur à 0", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Aged Brie", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0 et nom != Brie/TAFKAL80ETC/Sulfuras", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Different", -1, 0);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})
test("sellIn inférieur à 0, nom =! sulfuras et quality > 0", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Different", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0, nom = TAFKAL80ETC", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 60);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})

test("sellIn inférieur à 0, nom != TAFKAL80ETC et quality <50", async () => {
    runGoldenMaster(async () => {
        const item1 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40);
        const itemsArray = [item1];
        const gr = new GildedRose(itemsArray)
        gr.updateQuality()
    })
})