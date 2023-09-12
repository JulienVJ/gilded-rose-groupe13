import runGoldenMaster from 'jest-golden-master'
import { GildedRose } from '.'
import Item from './Item'


describe('GildedRose', () => {

    it('NORMAL ITEM -> should decrease SellIn and Quality by 1', () => {
        runGoldenMaster(async () => {
            const item1 = new Item('Random Item', 10, 20)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(9);
            expect(gr.items[0].quality).toBe(19);
        });
    });

    it('SULFURA -> should be untouchable', () => {
        runGoldenMaster(async () => {
            const item1 = new Item('Sulfuras, Hand of Ragnaros', 10, 30)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(10);
            expect(gr.items[0].quality).toBe(30);
        });
    });

    it('AGED BRIE -> should increase Quality by 1', () => {
        runGoldenMaster(async () => {
            const item1 = new Item('Aged Brie', 10, 20)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(9);
            expect(gr.items[0].quality).toBe(21);
        });
    });

    it('AGED BRIE -> should increase Quality by 2 if sellIn negative', () => {
        runGoldenMaster(async () => {
            const item1 = new Item('Aged Brie', -2, 20)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(-3);
            expect(gr.items[0].quality).toBe(22);
        });
    });

    it('CONJURED -> should decrease SellIn and Quality by 2', () => {
        runGoldenMaster(async () => {
            const item1 = new Item('Conjured', 10, 20)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(9);
            expect(gr.items[0].quality).toBe(18);
        });
    });


    it('BK_pass -> should increase Quality by 1', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("BK_pass", 11, 20)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(10);
            expect(gr.items[0].quality).toBe(21);
        });
    });

    it('BK_pass -> should increase Quality by 3 because sellIn between 5 and 10', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("BK_pass", 9, 31)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(8);
            expect(gr.items[0].quality).toBe(34);
        });
    });

    it('BK_pass -> should increase Quality because sellIn between 0 and 5 by 6', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("BK_pass", 4, 31)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(3);
            expect(gr.items[0].quality).toBe(37);
        });
    });

    it('BK_pass -> should stop SellIn and Quality by 0 because sellIn is 0', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("BK_pass", 0, 42)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(-1);
            expect(gr.items[0].quality).toBe(0);
        });
    });

    it('QUALITY TOO HIGH -> should refuse the update', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("Aged Brie", 4, 52)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(4);
            expect(gr.items[0].quality).toBe(52);
        });
    });

    it('QUALITY TOO LOW -> should refuse the update', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("Aged Brie", 4, -3)
            const itemsArray = [item1];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(4);
            expect(gr.items[0].quality).toBe(-3);
        });
    });


    it('QUALITY -> should stop the quality to 50 and quality to 0 for the other item', () => {
        runGoldenMaster(async () => {
            const item1 = new Item("Aged Brie", 1, 50)
            const item2 = new Item("Conjured", 10, 1)
            const itemsArray = [item1, item2];
            const gr = new GildedRose(itemsArray)
            gr.updateQuality();
            expect(gr.items[0].sellIn).toBe(0);
            expect(gr.items[0].quality).toBe(50);
            expect(gr.items[1].sellIn).toBe(9);
            expect(gr.items[1].quality).toBe(0);
        });
    });

})