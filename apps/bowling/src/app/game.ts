export class Game {
    private books: number[] = [];
    private currentBook = 0;
    buy(book: number) {
      this.books[this.currentBook++] = book;
    }
  
    get price() {
        let countDifferent = 0;
        let diff : number[] = [];
        for (let i = 0; i < this.currentBook; i++) {
            let flag = true;
            for (let j = 0; j < countDifferent; j++) {
                if (diff[j] == this.books[i]) {
                    flag = false;
                }
            }
            if (flag) {
                diff[countDifferent] = this.books[i];
                countDifferent++;
            }
        }

        let price = (this.currentBook - countDifferent) * 100;
        let discount = 0;
        if (countDifferent == 2) {
            discount = 5;
        }
        else if (countDifferent == 3) {
            discount = 10;
        }
        else if (countDifferent == 4) {
            discount = 20;
        }
        else if (countDifferent >= 5) {
            discount = 25;
        }
        price += countDifferent * 100 * (100 - discount) / 100;

        return price;
    }

  }