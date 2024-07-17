/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import clsx from 'clsx';

import githubIcon from '@/public/icons/github.svg?raw';
import bonsaiImage from '@/public/images/bonsai.jpg?raw';

import Sample from './sandbox/Sample?raw';

interface CodeSandboxProps {
  className?: string;
}

export const CodeSandbox = qwikify$(
  ({ className }: CodeSandboxProps) => {
    return (
      <div className={clsx('text-white', className)}>
        <div className="flex flex-row items-center gap-2 font-logo">
          <div className="size-5 bg-white" />I am Izzi BTW
        </div>
        <SandpackProvider
          className="!mb-16 !mt-3"
          template="react-ts"
          theme="dark"
          files={{
            '/App.tsx': Sample,
          }}
          options={{
            experimental_enableServiceWorker: true,
            externalResources: ['https://cdn.tailwindcss.com'],
          }}
        >
          <SandpackFileExplorer />
          <SandpackLayout className="flex h-[36rem] flex-col">
            <SandpackCodeEditor
              className="!rounded-t-lg"
              showLineNumbers
              showReadOnly={false}
            />
            <SandpackPreview
              className="!bg-red !rounded-b-lg"
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    );
  },
  { eagerness: 'load' },
);
