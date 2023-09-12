import Item from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      console.log(`BEFORE // name: ${item.name}, quality: ${item.quality}, sellIn: ${item.sellIn}`)

      const qualityTooMuch = item.quality > 50
      const qualityTooBad = item.quality < 0

      if (qualityTooBad || qualityTooMuch) {
        console.log("The quality doesn't respect the rules")
      } else {
        switch (item.name) {
          case "Aged Brie":
            console.log('Item is Aged Brie');
            this.updateAgedBrie(item);
            item.sellIn -= 1;
            break;
          case "BK_pass":
            console.log('Item is concert pass');
            this.updateConcertPass(item);
            item.sellIn -= 1;
            break;
          case "Sulfuras, Hand of Ragnaros":
            console.log('Sulfura is untouchable');
            break;
          case "Conjured":
          default:
            console.log('Item is a regular item');
            this.updateRandomItem(item);
            item.sellIn -= 1;
            break
        }
      }


      console.log(`AFTER // name: ${item.name}, quality: ${item.quality}, sellIn: ${item.sellIn}`)
      console.log("______")
    })

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    if (item.sellIn < 0) {
      console.log('SellIn is negative, increasing quality by 2 again for Aged Brie');
      item.quality += 2;
    } else {
      console.log('Increasing quality by 1 for Aged Brie');
      item.quality++;
    }
    if (item.quality > 50) {
      item.quality = 50
    }
  }

  private updateConcertPass(item: Item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      console.log('SellIn is between 10 and 5, increasing quality by 3 again for concert');
      item.quality += 3;
    } else if (item.sellIn <= 5 && item.sellIn > 0) {
      console.log('SellIn is between 10 and 5, increasing quality by 6 again for concert');
      item.quality += 6;
    } else if (item.sellIn <= 0) {
      console.log('SellIn is negatif or zero, quality is done for concert');
      item.quality = 0;
    } else {
      console.log('Increasing quality by 1 for concert');
      item.quality++;
    }
    if (item.quality > 50) {
      item.quality = 50
    }
  }

  private updateRandomItem(item: Item) {
    const isConjured = item.name === "Conjured"
    if (isConjured) {
      console.log(`It's a conjured Item`);
    }
    if (item.sellIn < 0) {
      console.log('SellIn is negative, decrease quality by 2 again for Random item');
      item.quality -= isConjured ? 4 : 2;
    } else {
      console.log('decrease quality by 1 for Random item');
      item.quality -= isConjured ? 2 : 1;
    }
    if (item.quality < 0) {
      item.quality = 0
    }
  }
}
