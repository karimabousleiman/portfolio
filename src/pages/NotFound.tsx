import { Link, useLocation } from "react-router-dom";
import SiteShell, { Closing } from "@/components/SiteShell";

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
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <Link to="/" className="btn btn-primary">BACK TO HOME</Link>
          <Link to="/experience" className="btn btn-secondary">SEE PRODUCT WORK</Link>
        </div>
      </section>
      <Closing variant="product" />
    </SiteShell>
  );
};

export default NotFound;
