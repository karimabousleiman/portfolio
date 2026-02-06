import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-lg text-primary">Karim Abousleiman</p>
          <p className="text-sm text-muted-foreground">Senior Product Manager · Paris, France</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/karim-abousleiman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:abousleiman70@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+33673148636"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            +33 6 73 14 86 36
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
