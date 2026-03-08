const FooterSection = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="container max-w-5xl text-center space-y-4">
        <p className="text-muted-foreground text-sm italic mb-6">
          Building the next industrial frontier beyond Earth — together.
        </p>
        <p className="font-display text-lg font-bold">
          <span className="text-primary">SSIP</span> — Space Systems Innovation Platform
        </p>
        <p className="text-muted-foreground text-sm">
          Connecting the orbital infrastructure community worldwide.
        </p>
        <p className="text-muted-foreground text-sm">
          📩 <a href="mailto:contact@ssip-pl.ch" className="text-primary hover:underline">contact@ssip-pl.ch</a>
        </p>
        <div className="flex justify-center gap-6 text-muted-foreground text-sm">
          <a href="https://www.linkedin.com/company/space-systems-innovation-platform-ssip/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter / X</a>
        </div>
        <p className="text-muted-foreground/50 text-xs pt-4">© SSIP 2026. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
