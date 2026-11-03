import { Link, useLocation } from "react-router-dom";
import Shell, { Arrow } from "@/site/Shell";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <Shell title="Not found · Karim Abousleiman" active={null}>
      <section className="wrap" style={{ paddingTop: 80 }}>
        <h1 className="d" style={{ fontSize: "clamp(64px, 14vw, 200px)" }}>Out of <span className="mark">frame.</span></h1>
        <p className="muted" style={{ margin: "24px 0 0", fontSize: 20 }}>Nothing lives at {pathname}.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link className="cta" to="/">Back to home <Arrow /></Link>
          <Link className="ghost" to="/work/tf1">See the work</Link>
        </div>
      </section>
    </Shell>
  );
};

export default NotFound;
