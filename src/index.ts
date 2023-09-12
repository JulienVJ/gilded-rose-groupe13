export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`BEFORE // name: ${this.items[i].name}, quality: ${this.items[i].quality}, sellIn: ${this.items[i].sellIn}`)
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        console.log(`${this.items[i].name} is different of a Aged Brie and TAFKAL80ETC concert`)
        if (this.items[i].quality > 0) {
          console.log(`Quality ${this.items[i].quality} > 0`)
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
            console.log(`${this.items[i].name} Is not Sulfuras Weapon, quality has decrease of 1 it's now ${this.items[i].quality}`)
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          console.log(`${this.items[i].quality} Quality is less than 50', 'Quality win 1`)
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            console.log(`${this.items[i].name} Is TAFKAL80ETC concert part`)
            if (this.items[i].sellIn < 11) {
              console.log("sell In under 11")
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                console.log(`${this.items[i].quality} Quality is less than 50 Quality win 1 from 11 sell In`)
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log("sell In under 6")
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
                console.log(`${this.items[i].quality} Quality is less than 50 Quality win 1 from 6 sell in`)
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        console.log(`${this.items[i].name} is Not Sulfuras item, sellIn has decrease of 1 it's now ${this.items[i].sellIn} `)
      }
      if (this.items[i].sellIn < 0) {
        console.log("sell In inferior than 0")
        if (this.items[i].name != "Aged Brie") {
          console.log("Is not Brie")
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            console.log("Is not also TAFKAL80ETC concert")
            if (this.items[i].quality > 0) {
              console.log("quality is more than 0")
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log('Is also not Sulfuras weapon')
                this.items[i].quality = this.items[i].quality - 1;
                console.log("the quality decrease of 1 because is something else")
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
            console.log("else quality - quality")
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            console.log('quality is under 50', 'quality win + 1')
          }
        }
      }
      console.log(`AFTER // name: ${this.items[i].name}, quality: ${this.items[i].quality}, sellIn: ${this.items[i].sellIn}`)
      console.log("______")
    }

    return this.items;
  }
}
