import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SiteShell from "@/components/SiteShell";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteShell>
      <section className="py-28 md:py-40">
        <h1 className="text-[2.375rem] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[3.125rem]">Page not found</h1>
        <p className="mt-4 text-[1.0625rem] text-[var(--h-muted)]">
          Nothing lives at <span className="mono">{location.pathname}</span>.
        </p>
        <p className="mt-8">
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </p>
      </section>
    </SiteShell>
  );
};

export default NotFound;
