import ProductCard, { Product } from "./ProductCard";
import darkTruffles from "@/assets/dark-chocolate-truffles.jpg";
import milkBonbons from "@/assets/milk-chocolate-bonbons.jpg";
import whitePralines from "@/assets/white-chocolate-pralines.jpg";
import giftBox from "@/assets/chocolate-gift-box.jpg";
import saltedCaramel from "@/assets/salted-caramel-chocolates.jpg";
import raspberryHearts from "@/assets/raspberry-chocolate-hearts.jpg";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Dark Chocolate Truffles",
      price: 24.99,
      image: darkTruffles,
      description: "Rich 70% dark chocolate truffles dusted with premium cocoa powder. A sophisticated treat for true chocolate connoisseurs."
    },
    {
      id: 2,
      name: "Milk Chocolate Bonbons",
      price: 19.99,
      image: milkBonbons,
      description: "Creamy milk chocolate bonbons filled with golden caramel. The perfect balance of smooth chocolate and sweet caramel."
    },
    {
      id: 3,
      name: "White Chocolate Pralines",
      price: 22.99,
      image: whitePralines,
      description: "Delicate white chocolate pralines with roasted hazelnuts. Elegantly crafted for a luxurious chocolate experience."
    },
    {
      id: 4,
      name: "Artisan Gift Box",
      price: 49.99,
      image: giftBox,
      description: "A curated selection of our finest chocolates beautifully presented in an elegant gift box. Perfect for special occasions."
    },
    {
      id: 5,
      name: "Salted Caramel Squares",
      price: 18.99,
      image: saltedCaramel,
      description: "Gourmet chocolate squares with salted caramel centers and sea salt crystals. A delightful sweet and salty combination."
    },
    {
      id: 6,
      name: "Raspberry Hearts",
      price: 26.99,
      image: raspberryHearts,
      description: "Heart-shaped dark chocolates filled with real raspberry ganache. Romantic and delicious, perfect for sharing."
    }
  ];

  return (
    <section id="shop" className="py-16 bg-background">
      <div className="container-desktop">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Chocolates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of handcrafted chocolates, each made with the finest ingredients 
            and attention to detail that makes every bite extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;