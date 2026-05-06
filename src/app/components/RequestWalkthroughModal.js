'use client';

import { useEffect } from 'react';
import { MessageSquareText, Mail, X } from 'lucide-react';

const CONTACT_NUMBER = '+639171853316';
const CONTACT_EMAIL = 'danlouie.decena@pacificcross.com.ph';

export default function RequestWalkthroughModal({ isOpen, onClose, planName }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const targetPlan = planName || 'your medical insurance plan';
  const smsBody = encodeURIComponent(
    `Hi Dan Louie, I would like to request a walkthrough for ${targetPlan}.`
  );
  const emailSubject = encodeURIComponent(`Request Walkthrough - ${targetPlan}`);
  const emailBody = encodeURIComponent(
    `Hi Dan Louie,\n\nI would like to request a walkthrough for ${targetPlan}.\n\nThank you.`
  );

  const smsHref = `sms:${CONTACT_NUMBER}?body=${smsBody}`;
  const emailHref = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="walkthrough-title"
        className="w-full max-w-md rounded-2xl border border-primary/15 bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
              Request Walkthrough
            </p>
            <h3 id="walkthrough-title" className="mt-1 text-2xl font-bold text-primary">
              Contact Options
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close request walkthrough modal"
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mb-5 text-sm text-slate-600">
          Choose how you want to connect. On mobile devices, the number action opens your message
          app automatically.
        </p>

        <div className="space-y-3">
          <a
            href={smsHref}
            className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            <MessageSquareText size={18} />
            Message 0917 185 3316
          </a>
          <a
            href={emailHref}
            className="flex items-center gap-3 rounded-xl border border-primary/20 px-4 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            <Mail size={18} />
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
