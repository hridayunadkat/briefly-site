import React from 'react';
    import { motion } from 'framer-motion';
    import { Filter, Database, Clock, MessageSquare, Mic, TrendingUp } from 'lucide-react';

    const Features = () => {
      const features = [
        {
          icon: Filter,
          title: 'Smart Lead Qualification',
          description:
            'Automatically screens callers for case relevance, urgency, and fit—so attorneys only spend time on clients who truly matter.',
          color: 'from-brand-600 to-brand-400'
        },
        {
          icon: Database,
          title: 'Seamless CRM Integration',
          description:
            'Connect instantly with leading legal CRMs like Clio and MyCase to sync client data, notes, and transcripts in real time.',
          color: 'from-brand-600 to-brand-400'
        },
        {
          icon: Clock,
          title: '24/7 Client Coverage',
          description:
            'Never miss a call again. Briefly handles after-hours, overflow, and weekend calls with consistent professionalism and accuracy.',
          color: 'from-brand-600 to-brand-400'
        },
        {
          icon: MessageSquare,
          title: 'Continuous Learning AI',
          description:
            'Gets smarter with every conversation—adapting to your firm’s tone, intake preferences, and client needs over time.',
          color: 'from-brand-600 to-brand-400'
        },
        {
          icon: Mic,
          title: 'Call Recording & Transcription',
          description:
            'Automatically record and transcribe every client conversation for review, compliance, and training—all securely stored in your CRM.',
          color: 'from-brand-600 to-brand-400'
        },
        {
          icon: TrendingUp,
          title: 'Built-in Performance Analytics',
          description:
            'Track intake success rates, missed-call recovery, and ROI directly from your dashboard to make smarter operational decisions.',
          color: 'from-brand-600 to-brand-400'
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
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 font-playfair">
                Powerful Features for
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"> Modern Law Firms</span>
              </h2> */}
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 font-playfair">
                Powerful Features for
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent"> Modern Law Firms</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                We provide everything you need to focus on the billable work that matters and scale your firm efficiently.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-brand-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
              {/* <motion.button
                className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Features
              </motion.button> */}
            </motion.div>
          </div>
        </section>
      );
    };

    export default Features;