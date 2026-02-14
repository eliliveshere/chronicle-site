// app/page.tsx — Chronicle 1-page Splash
// Branding Applied: Dark Cinematic Fantasy
import React from 'react';
import Image from 'next/image';

const KICKSTARTER_URL =
  "https://www.kickstarter.com/projects/1597657716/1604270687?ref=aaj4uf&token=354fd94b";

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm font-bold uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050505]";
  // Primary: Gold background, Black text, Cinzel font
  const primary =
    "bg-[#cfb53b] text-black font-cinzel hover:bg-[#bfa32a] hover:shadow-[0_0_20px_rgba(207,181,59,0.3)] focus:ring-[#cfb53b]";
  // Secondary: Bordered, White text
  const secondary =
    "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-[#cfb53b]/50 focus:ring-white/50";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${variant === "primary" ? primary : secondary}`}
    >
      {children}
      <span className="ml-2 text-lg leading-none">→</span>
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#cfb53b]/30 bg-[#cfb53b]/10 px-3 py-1 text-xs font-medium text-[#cfb53b] backdrop-blur">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#cfb53b] selection:text-black">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image src="/logo.png" alt="Chronicle" width={40} height={40} className="object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-cinzel text-lg font-bold tracking-wide">Chronicle</div>
              <div className="hidden md:block text-[10px] uppercase tracking-widest text-white/50">
                A Legend Only You Will Live
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <a
              href={KICKSTARTER_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-medium text-white/60 hover:text-[#cfb53b] transition md:inline"
            >
              View Kickstarter
            </a>
            <Button href={KICKSTARTER_URL}>Back Now</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#cfb53b]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-24 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-6">
              <Pill>Choose Your Own Adventure</Pill>
              <Pill>RPG-Inspired</Pill>
              <Pill>AI Story Engine</Pill>
            </div>
            <h1 className="font-cinzel text-4xl font-bold tracking-tight md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Your legend. Your choice.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              Chronicle generates a fresh scene in your story each day — complete
              with beautiful artwork, cinematic narration, and sound. You decide
              what happens next… <span className="text-white font-semibold">and the world remembers.</span>
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/60">
              <li className="flex gap-3 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cfb53b] shadow-[0_0_8px_#cfb53b]" />
                Create your character, world, and tone in minutes.
              </li>
              <li className="flex gap-3 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cfb53b] shadow-[0_0_8px_#cfb53b]" />
                Return tomorrow to a new scene shaped by your choices.
              </li>
              <li className="flex gap-3 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cfb53b] shadow-[0_0_8px_#cfb53b]" />
                Your story, unbound. No endings, just consequences.
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={KICKSTARTER_URL}>Begin Your Chronicle</Button>
              <Button href={KICKSTARTER_URL} variant="secondary">
                View Rewards
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/30">
              Launch content & production funding live on Kickstarter.
            </p>
          </div>

          {/* Right visual block */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl border border-white/10 bg-[#111111] shadow-2xl overflow-hidden group">
              {/* Card Background Art */}
              <Image
                src="/todays-card-art.png"
                alt="Today's Scene Art"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] z-0 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505] z-0 pointer-events-none" />

              <div className="absolute inset-0 p-6 z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-auto">
                  <div className="bg-black/60 border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-md shadow-lg">
                    Today’s Scene
                  </div>
                  <div className="bg-black/50 border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#cfb53b] backdrop-blur font-mono">
                    00:42 Audio
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg transform transition duration-500 hover:scale-[1.02] hover:border-[#cfb53b]/30">
                  <div className="font-cinzel text-lg font-bold text-[#cfb53b]">The Blackened Sky</div>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed font-inter">
                    You wake beneath a sky like ash. A faint mark glows on your
                    palm — proof of a vow you don’t remember making…
                  </p>
                  <div className="mt-5 grid gap-2">
                    {["Follow the distant torchlight", "Examine the symbol on your hand", "Call out into the darkness"].map((opt, i) => (
                      <div key={i} className="group/opt flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm cursor-pointer hover:border-[#cfb53b] hover:bg-[#cfb53b]/10 transition-colors">
                        <span className="text-[#cfb53b] font-bold font-mono">{String.fromCharCode(65 + i)})</span>
                        <span className="text-white/80 group-hover/opt:text-white transition-colors">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    { label: "Artwork", val: "Generated" },
                    { label: "Sound", val: "Cinematic" },
                    { label: "Memory", val: "Persistent" }
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur">
                      <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
                      <div className="mt-1 text-xs font-bold text-white/90">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements behind card */}
            <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-[#cfb53b]/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Not a journaling app. A daily ritual. Your choices build a legend.
            </p>
          </div>

          {/* Step 1: Worlds */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#cfb53b] text-black font-cinzel font-bold text-lg">1</div>
              <h3 className="font-cinzel text-2xl font-bold text-white">Choose Your World</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Medieval", img: "/medieval.png", desc: "Steel & Sorcery" },
                { name: "Cyberpunk", img: "/cyberpunk.png", desc: "High Tech, Low Life" },
                { name: "Modern", img: "/modern.png", desc: "The Unseen Real" },
                { name: "Custom", img: "/custom.png", desc: "Anything You Imagine" },
              ].map((world) => (
                <div key={world.name} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
                  <Image
                    src={world.img}
                    alt={world.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12">
                    <div className="font-cinzel font-bold text-white/90">{world.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#cfb53b]">{world.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/50">
              Pick a preset or define your own universe. Your character&apos;s origin shapes every scene that follows.
            </p>
          </div>

          {/* Steps 2 & 3 */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                step: "2",
                title: "Get today’s scene",
                body: "Each morning, receive a fresh story moment with generated art, professional narration, and sound.",
              },
              {
                step: "3",
                title: "Choose your path",
                body: "One decision. The story branches. Tomorrow, the world has changed based on what you did.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative flex gap-6 rounded-2xl border border-white/10 bg-[#111111] p-8 hover:border-[#cfb53b]/50 transition-colors"
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 text-xl font-cinzel font-bold text-[#cfb53b] group-hover:bg-[#cfb53b] group-hover:text-black transition-colors">
                  {c.step}
                </div>
                <div>
                  <div className="font-cinzel text-xl font-bold text-white group-hover:text-[#cfb53b] transition-colors mb-2">{c.title}</div>
                  <p className="text-sm text-white/60 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Rewards */}
      <section className="border-t border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">Founder Rewards</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Unlock the full potential of Chronicle by backing us on Kickstarter.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Custom Worlds",
                hook: "Create your own universe.",
                restriction: "Demo: 3 preset worlds only.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                color: "bg-purple-500/10 border-purple-500/20",
              },
              {
                title: "Custom Characters",
                hook: "Create any character role you can imagine.",
                restriction: "Demo: 3 preset roles only.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                color: "bg-white/5 border-white/10",
              },
              {
                title: "Custom Start Scenarios",
                hook: "Define exactly how your story begins.",
                restriction: "Demo: 3 preset openings only.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                color: "bg-white/5 border-white/10",
              },
              {
                title: "Multiple Chronicles",
                hook: "Run parallel stories.",
                restriction: "Demo: One active story loop.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                color: "bg-blue-500/10 border-blue-500/20",
              },
              {
                title: "Narrator / Sound FX",
                hook: "Immersive audio experience.",
                restriction: "Demo: Text & Image only.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                ),
                color: "bg-emerald-500/10 border-emerald-500/20",
              },
              {
                title: "Become Your Hero",
                hook: "Target your face onto the hero.",
                restriction: "Exclusive Feature",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                ),
                color: "bg-orange-500/10 border-orange-500/20",
              },
              {
                title: "Printed Hero Portrait",
                hook: 'Physical 8x10" glossy print.',
                restriction: "Exclusive Feature",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                color: "bg-indigo-500/10 border-indigo-500/20",
              },
              {
                title: "Founder Badge",
                hook: "Exclusive profile flair & recognition.",
                restriction: "Forever marks you as a pioneer.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.549.043.773.681.366 1.054l-4.252 3.896a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.252-3.896c-.407-.373-.183-1.01.366-1.054l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
                color: "bg-yellow-500/10 border-yellow-500/20",
              },
              {
                title: "Direct Dev Access",
                hook: "Vote on features & roadmap.",
                restriction: "Shape the future of Chronicle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                color: "bg-rose-500/10 border-rose-500/20",
              },
            ].map((reward) => (
              <a
                key={reward.title}
                href={KICKSTARTER_URL}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex flex-col justify-between rounded-xl border p-6 transition-all hover:scale-[1.02] ${reward.color} hover:border-white/30`}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 backdrop-blur-sm">
                    {reward.icon}
                  </div>
                  <h3 className="mb-2 font-cinzel text-lg font-bold text-white group-hover:text-[#cfb53b] transition-colors">
                    {reward.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    {reward.hook}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
                  {reward.restriction}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={KICKSTARTER_URL}>View All Rewards on Kickstarter</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="font-cinzel text-3xl font-bold mb-10">FAQ</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                q: "Is Chronicle a journaling app?",
                a: "No. It’s a daily quest. You don't write; you decide. Your choices drive an evolving narrative engine.",
              },
              {
                q: "Do I need to know D&D?",
                a: "No. While inspired by TTRPGs, the mechanics are invisible. It's about story and immersion.",
              },
              {
                q: "What do I get as a backer?",
                a: "Exclusive access tiers, founder badges, and unique starting scenarios listed on our Kickstarter.",
              },
              {
                q: "Where do I support it?",
                a: "Kickstarter is our home base. Click the button below to join the founding members.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/5 bg-[#111111] p-6 hover:bg-[#161616] transition-colors"
              >
                <div className="text-base font-bold text-white mb-2">{item.q}</div>
                <p className="text-sm text-white/50">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 relative overflow-hidden rounded-3xl border border-[#cfb53b]/30 bg-gradient-to-r from-[#111111] to-[#0a0a0a] px-8 py-12 md:flex md:items-center md:justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            {/* Texture replacement: subtle noisy radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
            <div className="relative z-10 mb-8 md:mb-0">
              <div className="font-cinzel text-2xl md:text-3xl font-bold text-white">Back Chronicle on Kickstarter</div>
              <div className="mt-2 text-sm text-white/60">
                Help bring the ultimate custom quest app to life.
              </div>
            </div>
            <div className="relative z-10">
              <Button href={KICKSTARTER_URL}>Go to Kickstarter</Button>
            </div>
          </div>

          <footer className="mt-20 flex flex-col items-center gap-4 text-center text-[10px] uppercase tracking-widest text-white/30">
            <div>© {new Date().getFullYear()} Chronicle</div>
            <div className="max-w-md">
              A daily ritual of imagination.
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
