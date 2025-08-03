const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2018, ChocoDelight began as a passion project in our family kitchen. 
                What started as a hobby of creating chocolates for friends and family has grown 
                into a beloved artisan chocolate business.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that great chocolate starts with great ingredients. That's why we source 
                only the finest cacao beans, pure vanilla, and fresh cream to create our handcrafted 
                confections.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every chocolate is made in small batches with love and attention to detail, 
                ensuring that each piece delivers an exceptional taste experience.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">Premium Ingredients</h3>
                <p className="text-muted-foreground">
                  We use only the finest Belgian chocolate, organic vanilla, and locally sourced cream.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">Handcrafted Quality</h3>
                <p className="text-muted-foreground">
                  Each chocolate is carefully crafted by hand in small batches for optimal freshness.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-elegant">
                <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every piece reflects our passion for creating exceptional chocolate experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;