import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chocolates.jpg";

interface HeroProps {
  onShopNowClick: () => void;
}

const Hero = ({ onShopNowClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground bg-opacity-40"></div>
      </div>
      
      <div className="container-desktop relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Handcrafted Chocolates.
            <br />
            <span className="text-accent">From Our Kitchen to Yours.</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Experience the finest artisan chocolates, carefully crafted with premium ingredients 
            and love. Each piece tells a story of tradition, quality, and pure indulgence.
          </p>
          
          <Button 
            onClick={onShopNowClick}
            size="lg"
            className="bg-primary hover:bg-hover text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth shadow-lg hover:shadow-xl"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;