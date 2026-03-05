import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ssipLogo from "@/assets/ssip-logo.png";

const links = ["About", "Agenda", "Themes", "Attend", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/30">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={ssipLogo} alt="SSIP Logo" className="h-9 w-9" />
          <span className="font-display font-bold text-sm tracking-wider text-foreground">Global Orbital Infrastructure Summit</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <Button size="sm" className="gradient-primary text-primary-foreground font-display text-xs tracking-wider rounded-full px-6">
            Pre-Register
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-panel border-t border-border/30 px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary py-2" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button size="sm" className="gradient-primary text-primary-foreground font-display text-xs tracking-wider rounded-full w-full">
            Pre-Register
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
