import { Link, useLocation } from "react-router-dom";
import SiteShell from "@/components/SiteShell";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <SiteShell title="Not found · Karim Abousleiman">
      <section className="pb-28 pt-16 md:pb-40 md:pt-24">
        <h1 className="serif m-0 text-[4.5rem] leading-[0.9] tracking-[-0.02em] md:text-[10rem]">
          Out of <em className="text-[var(--h-accent)]">frame</em>.
        </h1>
        <p className="m-0 mt-6 text-base text-[var(--h-muted)] md:text-[1.125rem]">
          Nothing lives at <span className="mono text-[var(--h-ink)]">{pathname}</span>.
        </p>
        <Link to="/" className="btn btn-primary mt-8">BACK TO HOME</Link>
      </section>
    </SiteShell>
  );
};

export default NotFound;
