import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import GitHubCalendarSection from './components/GitHubCalendar';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex-1">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <GitHubCalendarSection />
        <Achievements />
        <Education />
      </main>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <Footer />
      </div>
    </div>
  );
}
