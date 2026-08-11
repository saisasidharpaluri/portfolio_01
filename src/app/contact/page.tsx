"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { TechIcon } from '@/components/TechIcons';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get('submitted') === 'true') {
      setSubmitted(true);
    }
  }, [searchParams]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-cyan-500/30">
          <MessageSquare className="w-3.5 h-3.5" /> Direct Contact
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">Extraordinary</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm currently open for AI/ML Engineering, High-Performance Systems, and Full-Stack roles. Reach out directly or send a message below!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info Card */}
        <div className="space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-gray-200/70 dark:border-gray-800/80 shadow-xl">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 border border-blue-200/50 dark:border-cyan-900/50 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email Address</p>
                  <a href="mailto:palurisaisasidhar@gmail.com" className="text-base font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors break-all">
                    palurisaisasidhar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a href="tel:+919494929237" className="text-base font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    +91 9494929237
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-purple-900/50 shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-base font-bold text-gray-900 dark:text-white">Gwalior, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200/60 dark:border-gray-800/60">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Connect Platforms</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/saisasidharpaluri" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-3 rounded-2xl glass-card flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-cyan-400 transition-all hover:scale-105"
                >
                  <TechIcon name="github" className="w-5 h-5 text-purple-500" />
                  GitHub Profile
                </a>

                <a 
                  href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-3 rounded-2xl glass-card flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-cyan-400 transition-all hover:scale-105"
                >
                  <TechIcon name="linkedin" className="w-5 h-5 text-blue-600" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Message Form */}
        <div className="glass-card p-8 rounded-3xl border border-gray-200/70 dark:border-gray-800/80 shadow-xl flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Send a Message</h3>
          
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Message Sent Successfully!</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Thank you! Your message has been sent directly to <span className="font-semibold text-blue-600 dark:text-cyan-400">palurisaisasidhar@gmail.com</span>. I will respond to your email as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                Send Another Message &rarr;
              </button>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/palurisaisasidhar@gmail.com" 
              method="POST" 
              className="space-y-5"
            >
              {/* FormSubmit Configuration Settings */}
              <input type="hidden" name="_subject" value="New Portfolio Inquiry for Sai Sasidhar!" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://portfolio-01-ten-bice.vercel.app/contact?submitted=true" />

              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  placeholder="e.g. Alex Rivera" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  placeholder="alex@company.com" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3.5 rounded-xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none" 
                  placeholder="Let's discuss a role or project..." 
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading Contact...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
