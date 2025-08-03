import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-card py-16">
      <div className="container-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Celestine</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Handcrafted chocolates made with love and the finest ingredients. 
              Taste the magic of moon with our exceptional chocolate experiences.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
              <span>by Celestine</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">hello@celestine.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300">123 Sweet Street, Chocolate City, CC 12345</span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-smooth">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Celestine. All rights reserved. | Made with passion for chocolate lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;