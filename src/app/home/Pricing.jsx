"use client";

import React from 'react';

const PricingSection = () => {
    const pricingPlans = [
        {
            name: "Starter AI",
            price: 25,
            features: [
                "~ 4 hours of call time",
                "AI call handling",
                "SMS & email automations",
                "Cal & GoogleSheets sync",
                "Basic customer support"
            ],
            popular: false
        },
        {
            name: "Growth AI",
            price: 58,
            features: [
                "~ 9 hours of call time",
                "Everything in Starter",
                "Call transcriptions",
                "Outbound campaigns",
                "Priority customer support"
            ],
            popular: false
        },
        {
            name: "Pro AI",
            price: 140,
            features: [
                "~ 25 hours of call time",
                "Everything in Growth",
                "Zoho CRM integration",
                "Advanced analytics",
                "Priority customer support"
            ],
            popular: true
        },
        {
            name: "Elite AI",
            price: 1395,
            features: [
                "~ 312 hours of call time",
                "Everything in Pro",
                "Onboarding consultation",
                "Full AI setup & training",
                "24/7 customer support"
            ],
            popular: false
        }
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        AI Personal Assistant for Calling |
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Flexible Pricing For Everyone
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                        Start <span className="text-blue-400">risk-free</span> and try out our premium features with a free trial today—
                        <span className="font-semibold">no credit card required!</span>
                    </p>
                    <p className="text-gray-400 mb-8">
                        Switch plans or cancel anytime. All prices are in USD.
                    </p>
                    <button className="text-pink-400 hover:text-pink-300 font-medium text-lg transition-colors duration-300">
                        Learn More About Our Pricing
                    </button>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="relative">
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium transform rotate-12 z-20">
                                    BEST VALUE
                                </div>
                            )}

                            {/* Card */}
                            <div className={`relative bg-gray-900 rounded-2xl p-8 h-full transition-all duration-300 hover:transform hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 shadow-2xl shadow-purple-500/20' : 'hover:shadow-xl'
                                }`}>
                                {/* Plan Name */}
                                <h4 className="text-xl font-semibold text-white mb-6 text-center">
                                    {plan.name}
                                </h4>

                                {/* Price */}
                                <div className="text-center mb-8">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    <span className="text-gray-400 text-lg">/month</span>
                                </div>

                                {/* Start Free Trial Button */}
                                <button className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all duration-300 cursor-pointer ${plan.popular
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                    }`}>
                                    Start Free Trial
                                </button>

                                {/* Features */}
                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-wave-flow {
          animation: wave-flow 6s ease-in-out infinite;
        }
        
        @keyframes wave-flow {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </section>
    );
};

export default PricingSection;