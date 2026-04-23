import { motion } from 'motion/react';

const ITEMS = ['MongoDB', 'Express', 'React', 'Node.js'];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <motion.div
      className="marquee"
      initial={{ opacity: 0, scaleX: 0.96 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="marquee-track">
        {loop.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`wrap-${i}`} style={{ display: 'inline' }}>
            <span>{item}</span>
            <span className="star">&lt;/&gt;</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
