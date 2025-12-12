import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wand2,
  Code2,
  Terminal,
  Zap,
  Globe,
  ChevronRight,
  LayoutTemplate,
  ShieldCheck,
  Cpu,
  ArrowRight,
  PlayCircle,
  Stars,
  Sparkles
} from 'lucide-react';

export function Home() {
  const [prompt, setPrompt] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/builder', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/20 selection:text-cyan-200 font-sans overflow-x-hidden">
      {/* Subtle Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303]" />
        {/* Spotlight Effect */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] opacity-50" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Struct</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Log in</a>
            <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors">
              Start Building
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-40">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">

          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-cyan-400 mb-8 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>V2.0 is now live</span>
            <div className="w-px h-3 bg-white/20 mx-1" />
            <span className="text-gray-400 flex items-center gap-1 group">
              Read the changelog <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            Design. <span className="text-gray-600">Build.</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              Ship. Instantly.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            The world's most advanced AI software architect. Transform natural language into production-grade React applications in seconds.
          </motion.p>

          {/* Interactive Input "Terminal" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500 ${isFocused ? 'opacity-50' : ''}`} />

            <form onSubmit={handleSubmit} className="relative bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  <span>architect-ai — v2.4.0</span>
                </div>
              </div>

              <div className="relative flex items-center p-2">
                <div className="w-12 h-12 flex items-center justify-center text-cyan-500">
                  <Wand2 className="w-6 h-6" />
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Describe your application..."
                  className="w-full bg-transparent text-lg text-white placeholder-gray-600 resize-none h-[60px] py-4 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 mr-2"
                >
                  Generate
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4 px-2 text-sm text-gray-500">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5"><Code2 className="w-3 h-3" /> React</span>
                <span className="flex items-center gap-1.5"><Stars className="w-3 h-3" /> Tailwind</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Vite</span>
              </div>
              <div>Press <span className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-gray-400 font-mono text-xs">Enter</span> to build</div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Bento Grid Section */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for perfection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every line of code generated is optimized for performance, accessibility, and modern best practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1: Code Quality */}
            <div className="group relative col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Production-Grade Code</h3>
                  <p className="text-gray-400 max-w-md">Generated code that looks hand-written. Clean components, proper hooks usage, and fully typed TypeScript.</p>
                </div>
                {/* Mock Code Preview */}
                <div className="w-full h-32 bg-[#050505] rounded-xl border border-white/5 p-4 font-mono text-xs text-gray-400 overflow-hidden relative mask-gradient-b">
                  <div className="text-pink-400">export function <span className="text-blue-400">Dashboard</span>() {'{'}</div>
                  <div className="pl-4 text-cyan-400">const <span className="text-white">[data, setData]</span> = useState(null);</div>
                  <div className="pl-4 text-purple-400">useEffect(() ={'>'} {'{'}, []);</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Card 2: Speed */}
            <div className="group relative col-span-1 rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Instant Preview</h3>
                  <p className="text-gray-400">Live preview your changes with our WebContainer engine.</p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gradient-to-r from-cyan-500 to-purple-500 animate-shimmer" />
                  </div>
                  <span className="font-mono text-xs text-cyan-400">⚡ 40ms</span>
                </div>
              </div>
            </div>

            {/* Card 3: Deployment */}
            <div className="group relative col-span-1 rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Global Deploy</h3>
                  <p className="text-gray-400">Push to GitHub and deploy to the edge with one click.</p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-green-500/10 rounded-full animate-ping" />
                    <Globe className="w-10 h-10 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: AI Model */}
            <div className="group relative col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                      <Cpu className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Powered by Gemini 1.5 Pro</h3>
                    <p className="text-gray-400 max-w-sm">Leverage the latest in large language model technology. Context-aware, intelligent, and trained on modern UI frameworks.</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono">
                      Model: gemini-1.5-pro
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Struct</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the future of software development, one component at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Playground</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2024 Struct Labs Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Code2 className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}