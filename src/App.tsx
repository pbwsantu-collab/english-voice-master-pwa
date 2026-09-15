import { useState, useEffect } from 'react';
import {
  intro, rules194, bengaliGlossary, completeness
} from './data/content';
import './App.css';

type Tab = 'home' | 'learn' | 'rules' | 'examples' | 'practice' | 'exercises' | 'progress';

function App() {
  const [tab, setTab] = useState<Tab>('home');
  const [dark, setDark] = useState(false);
  const [lesson, setLesson] = useState(191);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const comp = completeness();

  return (
    <div className={'app ' + (dark ? 'dark' : '')}>
      <header className="header">
        <div className="header-top">
          <h1>VOICE CHANGE MASTER</h1>
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <p className="subtitle">Learn Active & Passive Voice — Understand. Practise. Master.</p>
      </header>

      <main className="main">
        {tab === 'home' && (
          <section className="home">
            <div className="hero">
              <h2>Master Active & Passive Voice</h2>
              <p>Complete textbook content (Sections 191–206) • বাংলা support • Offline-ready</p>
            </div>
            <div className="cards">
              <button className="card" onClick={() => setTab('learn')}>📘 Learn</button>
              <button className="card" onClick={() => setTab('rules')}>🧠 Rules + বাংলা</button>
              <button className="card" onClick={() => setTab('examples')}>📝 Examples</button>
              <button className="card" onClick={() => setTab('practice')}>⚡ Practice</button>
              <button className="card" onClick={() => setTab('exercises')}>🎯 Exercises</button>
              <button className="card" onClick={() => setTab('progress')}>📊 Progress</button>
            </div>
            <div className="completeness">
              <h3>Content Completeness</h3>
              <ul>
                <li>Sections {comp.sections} ✓</li>
                <li>Bengali glossary & explanations ✓</li>
                <li>Full local content: exercises 20/21/22, all examples ✓</li>
              </ul>
              <p className="bn">সম্পূর্ণ পাঠ্যবইয়ের বিষয়বস্তু স্থানীয় প্রজেক্টে আছে।</p>
            </div>
          </section>
        )}

        {tab === 'learn' && (
          <section>
            <h2>Learn — Sections 191–193</h2>
            <div className="lesson-nav">
              {[191, 192, 193].map(n => (
                <button key={n} className={lesson === n ? 'active' : ''} onClick={() => setLesson(n)}>{n}</button>
              ))}
            </div>
            {lesson === 191 && (
              <div className="lesson-card">
                <h3>{intro[191].title} / {intro[191].titleBn}</h3>
                <pre className="example-box">{intro[191].content}</pre>
                <div className="bn">{intro[191].contentBn}</div>
              </div>
            )}
            {lesson === 192 && (
              <div className="lesson-card">
                <h3>{intro[192].title} / {intro[192].titleBn}</h3>
                <p className="def">{intro[192].content}</p>
                <div className="bn">{intro[192].contentBn}</div>
              </div>
            )}
            {lesson === 193 && (
              <div className="lesson-card">
                <h3>{intro[193].title} / {intro[193].titleBn}</h3>
                <pre>{intro[193].content}</pre>
                <div className="bn">{intro[193].contentBn}</div>
              </div>
            )}
            <div className="lesson-card">
              <h3>{rules194.titleBn}</h3>
              <ol>
                {rules194.points.map((p, i) => (
                  <li key={i}><strong>{p.en}</strong><br /><span className="bn">{p.bn}</span></li>
                ))}
              </ol>
              <div className="formula">
                <div>ACTIVE: Subject + Verb + Object</div>
                <div>↓</div>
                <div>PASSIVE: Object + be + V3 + by + Subject</div>
              </div>
            </div>
          </section>
        )}

        {tab === 'rules' && (
          <section>
            <h2>Key Rules & বাংলা পরিভাষা</h2>
            <div className="formula big">
              <div>ACTIVE → Subject + Verb + Object</div>
              <div className="arrow">↓</div>
              <div>PASSIVE → Object + be + V3 + by + Subject</div>
            </div>
            <div className="lesson-card">
              <h3>সহজ বাংলা পরিভাষা (Glossary)</h3>
              {bengaliGlossary.map((g, i) => (
                <div key={i} className="ex-pair">
                  <strong>{g.en}</strong>
                  <div className="bn">{g.bn}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === 'examples' && (
          <section>
            <h2>Examples</h2>
            <p className="bn">সম্পূর্ণ উদাহরণ ব্যাংক স্থানীয় content.ts-এ আছে। GitHub-এ মূল কাঠামো দেওয়া হয়েছে।</p>
            <div className="ex-pair">
              <div>A: The hunter killed the lion.</div>
              <div className="passive">P: The lion was killed by the hunter.</div>
            </div>
            <div className="ex-pair">
              <div>A: Rani reads a book.</div>
              <div className="passive">P: A book is read by Rani.</div>
            </div>
          </section>
        )}

        {tab === 'practice' && (
          <section>
            <h2>Quick Practice</h2>
            <p className="bn">স্থানীয় প্রজেক্টে সম্পূর্ণ interactive practice আছে।</p>
          </section>
        )}

        {tab === 'exercises' && (
          <section>
            <h2>Exercises 20, 21, 22</h2>
            <p className="bn">Exercise 20 (19), 21 (15), 22A (23), 22B (9 passages) — সব স্থানীয় content.ts-এ উত্তরসহ আছে।</p>
          </section>
        )}

        {tab === 'progress' && (
          <section>
            <h2>Progress</h2>
            <p className="encourage">Keep practising! Mistakes help you master Voice Change.</p>
            <p className="bn">ভুল করে শেখাই সেরা উপায়। চালিয়ে যাও!</p>
          </section>
        )}
      </main>

      <nav className="bottom-nav">
        <button className={tab === 'home' ? 'active' : ''} onClick={() => setTab('home')}>Home</button>
        <button className={tab === 'learn' ? 'active' : ''} onClick={() => setTab('learn')}>Learn</button>
        <button className={tab === 'rules' ? 'active' : ''} onClick={() => setTab('rules')}>Rules</button>
        <button className={tab === 'examples' ? 'active' : ''} onClick={() => setTab('examples')}>Examples</button>
        <button className={tab === 'progress' ? 'active' : ''} onClick={() => setTab('progress')}>Progress</button>
      </nav>
    </div>
  );
}

export default App;
