interface Product {
  id: number;
  name: string;
  price: number;
}

class Cart {
  private items: Product[] = [];

  addProduct(product: Product): void {
    this.items.push(product);
  }

  removeProduct(id: number): void {
    this.items = this.items.filter(p => p.id !== id);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  showCart(): void {
    console.log("Cart Items:");
    this.items.forEach(i => console.log(`${i.name} - ₹${i.price}`));
    console.log("Total:", this.getTotal());
  }
}

const cart = new Cart();
cart.addProduct({ id: 1, name: "Laptop", price: 50000 });
cart.addProduct({ id: 2, name: "Mouse", price: 500 });

cart.showCart();
