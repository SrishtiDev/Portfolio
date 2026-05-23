import React, { useState } from 'react';
import { Mail, Send, MessageSquare, CheckCircle, GraduationCap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-950/40">
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            <MessageSquare size={16} />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Start a Conversation
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded mt-4 mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            I am currently looking for Software Development Engineer (SDE) or Full Stack Developer roles. I’d love to connect regarding job opportunities, collaboration projects, or even just to say hello!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column - Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-left">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                I'm actively responsive to emails and LinkedIn messages. Drop a message through the form or use any of the channels below.
              </p>

              {/* Channels */}
              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:rawat.srishti1010@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism-card border border-gray-800/80 text-gray-400 hover:text-indigo-400 transition-all duration-200"
                >
                  <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-indigo-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Email Address</h4>
                    <p className="text-sm mt-0.5 font-medium break-all">rawat.srishti1010@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/srishtirwt/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism-card border border-gray-800/80 text-gray-400 hover:text-indigo-400 transition-all duration-200"
                >
                  <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-indigo-400 shrink-0">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-xs uppercase tracking-wider">LinkedIn</h4>
                    <p className="text-sm mt-0.5 font-medium">www.linkedin.com/in/srishtirwt/</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/SrishtiDev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism-card border border-gray-800/80 text-gray-400 hover:text-indigo-400 transition-all duration-200"
                >
                  <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-indigo-400 shrink-0">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-xs uppercase tracking-wider">GitHub</h4>
                    <p className="text-sm mt-0.5 font-medium">github.com/SrishtiDev</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Academic Info Badge */}
            <div className="p-5 rounded-2xl glassmorphism border border-indigo-500/10 flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                <GraduationCap size={22} />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-white font-bold text-sm">ABES Engineering College</h4>
                <p className="text-xs text-gray-400 leading-normal">
                  Department of Computer Science & Engineering<br />
                  Ghaziabad, NH-24 Bypass, UP, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glassmorphism border border-gray-800/80 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white text-left mb-6">Send Message</h3>

              {status === 'success' ? (
                <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-white font-bold text-xl">Message Sent Successfully!</h4>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out, Srishti. I will review your message and reply as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-950/80 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="johndoe@email.com"
                      className="w-full bg-gray-950/80 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration"
                      className="w-full bg-gray-950/80 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, job role, or inquiry..."
                      className="w-full bg-gray-950/80 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
