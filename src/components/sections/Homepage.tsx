import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import Reveal from "@/components/animation/Reveal";
import ScrollProgress from "@/components/animation/ScrollProgress";
import SiteHeader from "@/components/sections/SiteHeader";

const admissionsUrl = "https://admission.tis.edu.in/";

export default function Homepage() {
  return (
    <div className="site-shell">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Boarding and Day School Excellence</p>
            <h1 id="hero-title">
              Let&apos;s <em>do it.</em><br />
              With Tulas
            </h1>
            <p className="hero-description">
              We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.
            </p>
            <div className="hero-actions">
              <ActionLink href={admissionsUrl} target="_blank" rel="noreferrer">
                Explore admissions
              </ActionLink>
              <a className="text-link" href="#learning">
                Discover Tulas <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Tulas International School campus life">
            <span className="vertical-note">GROW INTO YOUR OWN STORY</span>
            <div className="hero-photo">
              <Image
                src="https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp"
                alt="Students enjoying the outdoors at Tulas International School"
                fill
                unoptimized
                loading="eager"
                sizes="(max-width: 680px) 92vw, 52vw"
              />
            </div>
            <div className="photo-caption">
              <span className="caption-number">01</span>
              <p>LET&apos;S DO IT<br />WITH TULAS</p>
            </div>
          </div>
          <a className="scroll-note" href="#school-facts">
            <span aria-hidden="true">&darr;</span> A good place to begin
          </a>
        </section>

        <section className="facts-strip" id="school-facts" aria-label="Tulas at a glance">
          <div className="fact"><strong>22</strong><span>acres of campus to explore</span></div>
          <div className="fact"><strong>16+</strong><span>sports to find your thing</span></div>
          <div className="fact"><strong>24/7</strong><span>medical assistance on campus</span></div>
          <div className="fact"><strong>6:1</strong><span>student-to-teacher ratio</span></div>
        </section>

        <section className="about-section section-pad" id="about">
          <Reveal className="about-photo">
            <Image
              src="https://tis.edu.in/_next/static/media/polo.973ddbae.webp"
              alt="A student taking part in equestrian sport at Tulas"
              fill
              unoptimized
              sizes="(max-width: 680px) 90vw, 42vw"
            />
            <div className="photo-stamp"><strong>2012</strong><span>Established</span></div>
          </Reveal>
          <Reveal className="section-copy">
            <p className="eyebrow">Room to grow</p>
            <h2>A school that feels like somewhere you belong.</h2>
            <p>
              Set in the foothills of Dehradun, Tulas brings academics, sport, creativity, and community together. Since 2012, students have been encouraged to find their strengths and follow them further.
            </p>
            <a className="text-link" href="#campus-life">Meet life at Tulas <span aria-hidden="true">&rarr;</span></a>
          </Reveal>
        </section>

        <section className="learning-section section-pad" id="learning">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">More than a timetable</p>
              <h2>Big days are made of little discoveries.</h2>
            </div>
            <p>Every student gets room to try, support to improve, and the confidence to take their next step.</p>
          </Reveal>
          <div className="program-grid">
            <Reveal className="program-item">
              <span className="program-index">01 / LEARN</span>
              <h3>Strong foundations</h3>
              <p>A CBSE curriculum that pairs academic focus with the skills students need for what comes next.</p>
              <span className="program-arrow" aria-hidden="true">↗</span>
            </Reveal>
            <Reveal className="program-item">
              <span className="program-index">02 / EXPLORE</span>
              <h3>Find your kind of sport</h3>
              <p>From swimming and archery to football and riding, there is always something new to try.</p>
              <span className="program-arrow" aria-hidden="true">↗</span>
            </Reveal>
            <Reveal className="program-item">
              <span className="program-index">03 / BELONG</span>
              <h3>A community that cares</h3>
              <p>Boarding and day-school life built around friendship, care, and growing more independent.</p>
              <span className="program-arrow" aria-hidden="true">↗</span>
            </Reveal>
          </div>
        </section>

        <section className="life-section" id="campus-life">
          <div className="life-photo">
            <Image
              src="https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp"
              alt="Students swimming at Tulas International School"
              fill
              unoptimized
              sizes="(max-width: 680px) 100vw, 50vw"
            />
          </div>
          <Reveal className="life-copy">
            <p className="eyebrow">The Tulas day</p>
            <h2>Room to try. Support to thrive.</h2>
            <p>
              A great school day has more than one kind of win. New ideas in class, a team cheering you on, and the space to discover what makes you, you.
            </p>
            <ActionLink href={admissionsUrl} tone="forest" target="_blank" rel="noreferrer">
              Come see the campus
            </ActionLink>
          </Reveal>
        </section>

        <section className="testimonial section-pad" aria-labelledby="parent-voice">
          <Reveal>
            <p className="eyebrow">From the parents</p>
            <h2 id="parent-voice">Growing, together.</h2>
          </Reveal>
          <Reveal className="quote-copy">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.
            </blockquote>
            <p>Namita Agarwal <span aria-hidden="true">·</span> Parent</p>
          </Reveal>
        </section>

        <section className="admissions-section" id="admissions">
          <div>
            <p className="eyebrow">Your next chapter starts here</p>
            <h2>Come curious.<br />Leave more you.</h2>
          </div>
          <ActionLink href={admissionsUrl} tone="light" target="_blank" rel="noreferrer">
            Begin your admission enquiry
          </ActionLink>
        </section>
      </main>
      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <a className="wordmark" href="#top" aria-label="Tulas International School, back to top">
            <Image className="school-logo" src="/school-logo.png" alt="Tulas International School" width={64} height={64} />
          </a>
        </div>
        <div className="footer-column">
          <h2>Find us</h2>
          <a href="https://maps.app.goo.gl/maBF8syXueQkw31E6" target="_blank" rel="noreferrer">
            Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun 248011, Uttarakhand
          </a>
        </div>
        <div className="footer-column">
          <h2>Say hello</h2>
          <a href="tel:+919837983791">Admissions: +91 98379 83791</a>
          <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
          <a href={admissionsUrl} target="_blank" rel="noreferrer">Admissions website</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tulas International School</span>
          <a href="https://tis.edu.in/" target="_blank" rel="noreferrer">Visit the official TIS website</a>
        </div>
      </footer>
    </div>
  );
}
