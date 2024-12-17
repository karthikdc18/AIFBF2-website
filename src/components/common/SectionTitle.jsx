import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionTitle({ title, subtitle }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
    </motion.div>
  );
}