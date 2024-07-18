/** @jsxImportSource react */
import 'prism-themes/themes/prism-duotone-space.min.css';

import { qwikify$ } from '@builder.io/qwik-react';

import CodeSample from './CodeSample';

export const CodePreview = qwikify$(() => {
  return (
    <div className="flex items-center justify-center rounded-b-2xl bg-stone-700 py-8">
      <CodeSample />
    </div>
  );
});
