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