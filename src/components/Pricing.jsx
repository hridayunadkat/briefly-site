import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Check, Star, Zap } from 'lucide-react';

    const Pricing = () => {
      const [isYearly, setIsYearly] = useState(false);

      const plans = [
        {
          name: 'Starter',
          description: 'Perfect for solo attorneys and small firms getting started',
          monthlyPrice: 99,
          yearlyPrice: 999,
          onboardingFee: 149,
          calendlyUrl: 'https://calendly.com/usebriefly/kickoff-meeting-starter-plan',
          features: [
            'Up to 3 team members',
            'Unlimited AI intake calls',
            'CRM integration (Clio, HubSpot, etc.)',
            'Call summaries & lead logs',
            'Email support',
            'Monthly report from the Briefly Team'
          ],
          color: 'from-slate-500 to-slate-700',
          popular: false
        },
        {
          name: 'Professional',
          description: 'Most popular for growing firms looking to scale intake',
          monthlyPrice: 249,
          yearlyPrice: 2490,
          onboardingFee: 299,
          calendlyUrl: 'https://calendly.com/usebriefly/kickoff-meeting-starter-plan-clone',
          features: [
            'Up to 10 team members',
            'Unlimited AI intake calls',
            'CRM integration (Clio, HubSpot, etc.)',
            'Call summaries & lead logs',
            'Private text chat support',
            'Biweekly report from the Briefly Team',
            'Advanced analytics & lead scoring',
            'Custom call scripts and workflows',
            'Custom API access and advanced CRM sync',
            'Call recording and transcription search'
          ],
          color: 'from-brand-600 to-brand-400',
          popular: true
        },
        {
          name: 'Enterprise',
          description: 'For large firms with custom needs and security requirements',
          monthlyPrice: 'Custom',
          yearlyPrice: 'Custom',
          onboardingFee: 'Custom',
          calendlyUrl: 'https://calendly.com/usebriefly/kickoff-meeting-professional-plan-clone',
          features: [
            'Custom number of team members',
            'Unlimited AI intake calls',
            'CRM integration (Clio, HubSpot, etc.)',
            'Call summaries & lead logs',
            'Private text chat support',
            'Weekly report from the Briefly Team',
            'Advanced analytics and lead scoring',
            'Custom call scripts and workflows',
            'Custom API access and advanced CRM sync',
            'Call recording and transcription search',
            'Custom security and compliance',
            'Custom integrations and automations',
            'Training and onboarding included',
          ],
          color: 'from-brand-400 to-brand-600',
          popular: false
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

      return (
        <section id="pricing" className="py-24 bg-gradient-to-br from-brand-50 via-white to-brand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 font-playfair">
                Simple, Transparent
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent"> Pricing</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-12">
                Choose the perfect plan for your team. All plans include our core features with no hidden fees.
              </p>

              {/* Billing Toggle */}
              <motion.div
                className="inline-flex items-center bg-slate-100 rounded-full p-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    !isYearly ? 'bg-white text-brand-600 shadow-sm' : 'text-zinc-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 relative ${
                    isYearly ? 'bg-white text-brand-600 shadow-sm' : 'text-zinc-600'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-brand-400 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular 
                      ? 'border-blue-200 scale-105' 
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-gradient-to-r from-brand-600 to-brand-400 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                    <p className="text-zinc-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <motion.div
                        className="text-5xl font-bold text-zinc-900"
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {typeof (isYearly ? plan.yearlyPrice : plan.monthlyPrice) === 'string' 
                          ? (isYearly ? plan.yearlyPrice : plan.monthlyPrice)
                          : `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                        }
                      </motion.div>
                      <div className="text-zinc-500">
                        {typeof (isYearly ? plan.yearlyPrice : plan.monthlyPrice) !== 'string' && `per ${isYearly ? 'year' : 'month'}`}
                        {isYearly && typeof plan.monthlyPrice === 'number' && typeof plan.yearlyPrice === 'number' && (
                          <span className="block text-sm text-brand-400 font-medium">
                            Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <div className="text-sm text-zinc-500">One-time onboarding</div>
                        <div className="text-xl font-semibold text-zinc-900">
                          {typeof plan.onboardingFee === 'string' 
                            ? plan.onboardingFee
                            : `$${plan.onboardingFee}`
                          }
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href={plan.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 block text-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white hover:shadow-xl'
                          : 'bg-slate-100 text-zinc-900 hover:bg-slate-200'
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </motion.a>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-zinc-900 mb-4">Everything included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" />
                        <span className="text-zinc-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-zinc-600 mb-6">
                All plans include a 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('features');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-brand-600 hover:text-brand-700 font-medium underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Compare all features
                </motion.button>
                <span className="text-zinc-400">•</span>
                <motion.button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-brand-600 hover:text-brand-700 font-medium underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact sales for custom pricing
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Pricing;