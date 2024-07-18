/** @jsxImportSource react */
import 'prism-themes/themes/prism-duotone-space.min.css';

import { qwikify$ } from '@builder.io/qwik-react';
import { clsx } from 'clsx';
import Prism from 'prismjs';
import { useEffect } from 'react';

import codeSampleRaw from './CodeSample?raw';

interface CodeEditorProps {
  className?: string;
}

export const CodeEditor = qwikify$(
  ({ className }: CodeEditorProps) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre className={clsx('!m-0 rounded-t-2xl', className)}>
        <code className="language-javascript">{codeSampleRaw}</code>
      </pre>
    );
  },
  { eagerness: 'visible' },
);
