/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';

const CODE_SNIPPET = `export default function App(): JSX.Element {
  return <h1 className="text-cyan-400">Hello world asdf</h1>
}`;

interface CodeSandboxProps {
  className?: string;
}

export const CodeSandbox = qwikify$(
  ({ className }: CodeSandboxProps) => {
    return (
      <div className={`text-white ${className}`}>
        CodeSandbox
        <SandpackProvider
          template="react-ts"
          theme="dark"
          files={{ '/App.tsx': CODE_SNIPPET }}
          options={{
            externalResources: ['https://cdn.tailwindcss.com'],
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor readOnly showLineNumbers />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    );
  },
  { eagerness: 'visible' },
);
