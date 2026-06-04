import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import ClaudeIcon from '../assets/icons/ClaudeIcon.svg';
import CopilotIcon from '../assets/icons/CopilotIcon.svg';
import OpenAiIcon from '../assets/icons/OpenAiIcon.svg';

const ease = [0.2, 0.8, 0.2, 1];
const vp = { once: true, amount: 0.3 };

const TOOLS = [
  { key: 'claude', name: 'ai.claude', color: 'c-mag', icon: ClaudeIcon },
  { key: 'copilot', name: 'ai.copilot', color: 'c-cyan', icon: CopilotIcon },
  { key: 'codex', name: 'ai.codex', color: 'c-green', icon: OpenAiIcon },
];

export default function AI() {
  const { t } = useTranslation();

  return (
    <section id="ai-section">
      <a id="ai" style={{ position: 'absolute', top: 0 }} aria-hidden="true">{' '}</a>

      <motion.div
        className="ai-strip"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        viewport={vp}
      >
        <div className="ai-strip-head">
          <div className="ai-strip-label">{t('ai.label')}</div>
          <div className="ai-strip-subtitle">{t('ai.subtitle')}</div>
        </div>
        <div className="ai-row">
          {TOOLS.map((tool) => (
            <div key={tool.key} className={`ai-chip ${tool.color}`}>
              <img src={tool.icon} alt="" aria-hidden="true" className="ai-icon" />
              <div className="ai-name">{t(tool.name)}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
