'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import RequestWalkthroughModal from './RequestWalkthroughModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const smsHref =
    'sms:+639171853316?body=Hi%20Dan%20Louie,%20I%20would%20like%20to%20request%20a%20plan%20walkthrough.';
  const emailHref =
    'mailto:danlouie.decena@pacificcross.com.ph?subject=Request%20Walkthrough&body=Hi%20Dan%20Louie,%0A%0AI%20would%20like%20to%20request%20a%20plan%20walkthrough.%0A%0AThank%20you.';

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/60 via-white to-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Get in Touch</h2>
          <p className="text-xl text-slate-600">
            Ready to review your options? Reach out and let&apos;s find the right plan together.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-accent"
          >
            Request Plan Walkthrough
          </button>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                <Phone className="text-white" size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">Contact Number</h3>
                <p className="mb-4 text-slate-600">Tap to open your message app on mobile</p>
                <a
                  href={smsHref}
                  className="text-lg font-semibold text-primary transition hover:text-accent"
                >
                  0917 185 3316
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                <Mail className="text-white" size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">Email</h3>
                <p className="mb-4 text-slate-600">Send questions anytime</p>
                <a
                  href={emailHref}
                  className="break-all text-sm font-semibold text-primary transition hover:text-accent"
                >
                  danlouie.decena@pacificcross.com.ph
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                <MessageCircle className="text-white" size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">Viber / WhatsApp</h3>
                <p className="mb-4 text-slate-600">Message for quick responses</p>
                <a
                  href="https://wa.me/639171853316"
                  className="text-lg font-semibold text-primary transition hover:text-accent"
                >
                  0917 185 3316
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                <Clock className="text-white" size={22} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-primary">Response Time</h3>
                <p className="mb-4 text-slate-600">Usually within 24 hours</p>
                <p className="font-semibold text-primary">Reliable and client-focused support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-2xl font-bold text-primary">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/35"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/35"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                placeholder="Tell me more about your inquiry..."
                rows="5"
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/35"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-accent"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-primary p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">Need Help Choosing a Plan?</h3>
          <p className="mb-6 text-blue-100">
            I&apos;m here to help you compare Blue Royale and Select options so you can choose
            coverage with confidence.
          </p>
          <p className="text-sm uppercase tracking-[0.14em] text-blue-100/90">
            Pacific Cross Trusted Advisory
          </p>
        </div>
      </div>

      <RequestWalkthroughModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName="Blue Royale or Select Plan"
      />
    </div>
  );
}
