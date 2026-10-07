import React from 'react';
import { CTAMarquee } from './CTAMarquee';
import { LetsTalk } from './LetsTalk';

export { CTAMarquee } from './CTAMarquee';
export { LetsTalk } from './LetsTalk';

export const CTA: React.FC = () => {
  return (
    <>
      <CTAMarquee />
      <LetsTalk />
    </>
  );
};

export default CTA;
