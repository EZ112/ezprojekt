/** @jsxImportSource react */
import 'prism-themes/themes/prism-duotone-space.min.css';

import { qwikify$ } from '@builder.io/qwik-react';
import Prism from 'prismjs';
import { useEffect } from 'react';

import codeSampleRaw from './CodeSample?raw';

export const CodeEditor = qwikify$(
  () => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre className="!mb-0 !mt-3 rounded-t-2xl">
        <code className="language-javascript">{codeSampleRaw}</code>
      </pre>
    );
  },
  { eagerness: 'visible' },
);
