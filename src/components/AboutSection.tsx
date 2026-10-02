import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => (
  <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-16">
    <div className="max-w-[38rem] space-y-5 text-[1.0625rem] leading-[1.7] text-[var(--h-muted)]">
      <p className="m-0">
        Product Manager with a background in cinema who made the leap into tech — driven by a love for building
        things and a curiosity for how technology can shape the world for the better. I bring a creative,
        problem-solving mindset to every product I work on.
      </p>
      <p className="m-0">
        Multi-instrumentalist who plays 10+ instruments — from keys and guitar to brass, woodwinds, and percussion.
        Art and science aren't opposites to me; they're two lenses on the same world. Whether I'm composing a track,
        designing a product, or diving into a new side project, I'm happiest when I'm making something from scratch.
      </p>
    </div>
    <figure className="order-first m-0 w-40 md:order-none md:w-full">
      <img
        src={aboutPhoto}
        alt="Karim Abousleiman playing an electric guitar"
        width={864}
        height={1184}
        className="aspect-[4/5] w-full rounded-xl object-cover object-[30%_center] shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_32px_-12px_rgb(0_0_0/0.18)]"
      />
    </figure>
  </div>
);

export default AboutSection;
