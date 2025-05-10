"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "What is Grid?",
      answer: "Grid is a decentralized computer-sharing network that transforms idle CPU and GPU resources from users into usable compute power for AI, data processing, and Web3 applications."
    },
    {
      question: "How does Grid ensure the security of my device?",
      answer: "All tasks run within secure WebAssembly (WASM) sandboxes, completely isolating execution environments from the device's core operating system and personal data."
    },
    {
      question: "What types of tasks are processed on Grid?",
      answer: "Grid processes a range of real-world tasks including AI model inference, big data cleaning, decentralized transaction validation, and edge computing for dApps."
    },
    {
      question: "How do participants earn rewards in Grid?",
      answer: "Participants accumulate points based on node uptime, task completion rates, and contribution levels, which can be redeemed for $GRID tokens through on-chain mechanisms."
    },
    {
      question: "What is the role of $GRID tokens?",
      answer: "$GRID tokens serve multiple purposes including reward redemption, premium feature access, staking for additional rewards, and participation in DAO governance."
    },
    {
      question: "Why did Grid choose the Solana blockchain?",
      answer: "Solana offers high transaction throughput and low fees, ensuring fast, economical on-chain reward distribution and user authentication processes."
    },
    {
      question: "Can users control when their device participates?",
      answer: "Yes. Users have full control to activate, pause, or stop their Grid nodes at any time through the dashboard without penalty or point loss."
    },
    {
      question: "Will running Grid impact device performance?",
      answer: "Grid dynamically allocates tasks only when sufficient idle resources are available, ensuring that normal device operations remain unaffected."
    },
    {
      question: "How transparent is the reward and task system?",
      answer: "All contributions, points, and token transactions are recorded on-chain and viewable through user dashboards, ensuring full transparency and verifiability."
    },
    {
      question: "What are Grid's future development plans?",
      answer: "Future development plans include full mobile node deployment, cross-chain interoperability, large-scale task marketplace expansion, and establishing Grid as the largest decentralized compute network supporting AI, data, and Web3 ecosystems."
    }
  ];

  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function to open/close FAQ items
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight text-center">
          Frequently Asked Questions
        </h2>
    
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className={`w-full text-left p-6 flex justify-between items-center focus:outline-none rounded-lg ${
                  openIndex === index 
                    ? "bg-white shadow-sm rounded-b-none border-b border-gray-100" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.995 }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-xl">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                  className="w-6 h-6 flex items-center justify-center text-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { 
                          duration: 0.3,
                          ease: "easeOut"
                        },
                        opacity: { 
                          duration: 0.25,
                          delay: 0.05
                        }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { 
                          duration: 0.3,
                          ease: "easeIn"
                        },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden bg-white rounded-b-lg shadow-sm"
                  >
                    <motion.div 
                      className="p-6 pt-4"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 