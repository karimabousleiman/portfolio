import SiteShell, { Closing, PageTitle } from "@/components/SiteShell";
import { products } from "@/components/ProductsSection";

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

const Products = () => (
  <SiteShell title="Products · Karim Abousleiman">
    <PageTitle title="Products" lead="Tools I design and build on my own time, from the first idea to something people can use." />

    {products.map((p) => (
      <article key={p.slug} aria-labelledby={`${p.slug}-title`} className="border-b border-[var(--h-line)] pb-12 pt-10 md:pb-16 md:pt-16">
        {/* The product leads: a live capture that opens the tool itself. */}
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="photo-tile block overflow-hidden border border-[var(--h-line)]" aria-label={`Open ${p.name} (opens in a new tab)`}>
          <span className="photo-zoom block">
            <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} className="block h-auto w-full" />
          </span>
        </a>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
          <p className="mono m-0 text-[var(--h-meta)]">{p.kind}</p>
          <div className="min-w-0">
            <h2 id={`${p.slug}-title`} className="serif m-0 text-[2.5rem] leading-[1.02] md:text-[3.25rem]">{p.name}</h2>
            <p className="m-0 mt-4 max-w-[40rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:text-base">
              A reading companion to Simon Sebag Montefiore's <cite className="text-[var(--h-ink)]">{p.book}</cite>. {p.description}
            </p>
            <p className="m-0 mt-3 max-w-[40rem] text-[0.9375rem] leading-[1.6] text-[var(--h-body)]">{p.role}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                OPEN THE TOOL <span aria-hidden="true">↗</span><NewTab />
              </a>
              <span className="mono text-[0.75rem] text-[var(--h-meta)]">{p.domain.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </article>
    ))}

    <Closing variant="product" />
  </SiteShell>
);

export default Products;
