// Building our own Array[]

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(idx) {
    return this.data[idx];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(idx) {
    const item = this.data[idx];
    this.shiftItems(idx);
  }
  shiftItems(idx) {
    //loop - O(n), always ✅
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.push("whatver");
newArray.push("whatver1");
newArray.pop();
newArray.delete(2);
console.log(newArray); //MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': 'whatver' } }
console.log(newArray.get(2)); //whatver
