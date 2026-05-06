import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: 'span' | 'div';
  once?: boolean;
}

const RevealText = ({ text, delay = 0, className = '', as = 'span', once = true }: RevealTextProps) => {
  const words = text.split(' ');
  const Tag = as === 'div' ? motion.div : motion.span;

  return (
    <Tag
      className={`reveal-text ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'top',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            paddingBottom: '0.12em',
            marginBottom: '-0.12em',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%' },
            }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;
