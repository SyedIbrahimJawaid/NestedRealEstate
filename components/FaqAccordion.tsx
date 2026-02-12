"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  link?: { text: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    question: "What is BabyHomePlan?",
    answer:
      "BabyHomePlan is a family-focused real estate agency serving Southern California. We help growing families buy, sell, and prepare homes with a coordinated, calm approach.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve San Diego County, Orange County, and Los Angeles County, with deep knowledge of family-friendly neighborhoods in each region.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the intake form. We\u2019ll review your situation and reach out within 24 hours with a clear recommendation and next steps.",
  },
  {
    question: "How long does it take to buy a home?",
    answer:
      "A typical home purchase takes 60–90 days from offer to close. Our Express pathway can compress this to 33 days for qualified buyers in time-sensitive situations.",
    link: { text: "Express", href: "/33-day-express" },
  },
  {
    question: "Does everyone qualify for Express?",
    answer:
      "No. Express requires pre-approved financing, decision readiness, and a due diligence plan. We\u2019ll be honest about whether it\u2019s right for you.",
  },
  {
    question: "Does Express mean cutting corners?",
    answer:
      "No. Inspections, due diligence, and negotiation still happen\u2014just on a compressed, tightly coordinated schedule.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqItems.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl border border-border overflow-hidden transition-shadow duration-200 hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
            >
              {/* Question mark icon */}
              <span className="w-8 h-8 rounded-lg bg-clay/10 flex items-center justify-center flex-shrink-0">
                <span className="text-clay font-serif text-lg font-semibold">?</span>
              </span>
              <span className="flex-1 text-base md:text-lg font-semibold text-primary">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-body-secondary/50 transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pl-[4.5rem]">
                  <p className="text-body-secondary leading-relaxed">
                    {item.link
                      ? item.answer.split(item.link.text).map((part, i, arr) =>
                          i < arr.length - 1 ? (
                            <span key={i}>
                              {part}
                              <Link
                                href={item.link!.href}
                                className="text-clay underline hover:text-clay-dark"
                              >
                                {item.link!.text}
                              </Link>
                            </span>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )
                      : item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
