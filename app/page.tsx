import Image from 'next/image';
import Link from 'next/link';
import ActivityWall from '@/components/home/ActivityWall';
import CopyEmail from '@/components/home/CopyEmail';
import { COMPANY_EMAIL } from '@/lib/company';
import { products, shipped } from '@/lib/home-content';

const stack = [
  { step: 'Plan', text: 'Every feature starts as a written plan in BlackOps before any code.' },
  { step: 'Build', text: 'Agents open pull requests. Each one merges only when every check passes.' },
  { step: 'Ship', text: 'Releases, posts and demos go out the same day, from the same tools.' },
  { step: 'Show', text: 'Each product keeps its own demos and walkthroughs up to date on its site.' },
];

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="pulse" id="hero-pulse" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Product studio · St. Petersburg, Florida</p>
            <h1>
              Four live products. <span className="blue">One builder.</span>
            </h1>
            <p className="lede">
              Blulyne Group makes <b>VitalWall</b>, <b>BlackOps Center</b>, <b>Hey Spotter</b> and{' '}
              <b>VoiceCommit</b>. Each one is designed, built and shipped by one frontend architect working
              with AI agents every day.
            </p>
            <div className="ctas">
              <a className="btn primary" href="#products">
                See the products
              </a>
              <a className="btn ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <ActivityWall pulseId="hero-pulse" />
        </div>
      </div>

      <div className="wrap facts" aria-label="At a glance">
        <div>
          <b>4</b>
          <span>products live today</span>
        </div>
        <div>
          <b>1</b>
          <span>person behind all of them</span>
        </div>
        <div>
          <b>~30</b>
          <span>years building large commerce frontends</span>
        </div>
      </div>

      <section id="products">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">The products</p>
            <h2>Real software you can open right now.</h2>
            <p>Every product below has its own site. These are screenshots from each one.</p>
          </div>

          <div className="track">
            {products.map((p, i) => (
              <article key={p.key} className={`prod${i % 2 ? ' flip' : ''}`}>
                <div>
                  <p className="kicker">
                    <i className={`sw ${p.key}`} />
                    {p.kicker}
                  </p>
                  <h3>{p.name}</h3>
                  <p className="line1">{p.line}</p>
                  <p className="desc">{p.description}</p>
                  <ul>
                    {p.facts.map((f) => (
                      <li key={f.label}>
                        <b>{f.label}</b>
                        {f.code ? <code>{f.value}</code> : <span>{f.value}</span>}
                      </li>
                    ))}
                  </ul>
                  <div className="links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
                <figure className="shot">
                  <div className="bar">
                    <i />
                    <i />
                    <i />
                    <span>{p.shot.host}</span>
                  </div>
                  <Image src={p.shot.src} alt={p.shot.alt} width={p.shot.width} height={p.shot.height} />
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="built" id="built">
        <div className="wrap built-grid">
          <div>
            <p className="eyebrow">Who&apos;s behind it</p>
            <h2>Built by Ben Newton, with a team of agents.</h2>
            <div className="body">
              <p>
                Blulyne is a one-person company. Ben has spent about thirty years building large-scale commerce
                frontends, and he now builds his own products with AI agents doing much of the coding, testing
                and publishing.
              </p>
              <p>
                <b>The agents don&apos;t replace the judgment.</b> Ben decides what gets built and what ships. The
                agents do the legwork, and the products above are the proof that the approach works.
              </p>
            </div>
            <div className="links">
              <a href="https://benenewton.com/" target="_blank" rel="noopener noreferrer">
                Read how it&apos;s built on benenewton.com ↗
              </a>
            </div>
          </div>
          <div className="stack" aria-label="How the studio works">
            {stack.map((s) => (
              <div key={s.step}>
                <b>{s.step}</b>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shipped">
        <div className="wrap">
          <div className="ship-head">
            <div>
              <p className="eyebrow">Shipping log</p>
              <h2>Recently shipped</h2>
            </div>
          </div>
          <div className="ship" tabIndex={0} aria-label="Recent releases, scrolls sideways">
            {shipped.map((s) => (
              <article key={s.title}>
                <div className="meta">
                  <em>
                    <i className={`sw ${s.product}`} />
                    {s.name}
                  </em>
                  <span>{s.date}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h2>Have something worth building?</h2>
          <div className="contact-row">
            <CopyEmail email={COMPANY_EMAIL} />
            <Link className="btn ghost" href="/contact">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
