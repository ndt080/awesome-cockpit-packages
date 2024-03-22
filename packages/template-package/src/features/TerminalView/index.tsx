import './TerminalView.scss';

import { CodeBlock, CodeBlockCode } from '@patternfly/react-core/dist/esm/components/CodeBlock';
import { useEffect, useRef } from 'react';

type TerminalViewProps = {
  code: string | string[];
};

function normalizeCodeString(text: string) {
  return `$: ${text.split('\n').filter(Boolean).join('\n   ')}`;
}

function TerminalView({ code, ...rest }: TerminalViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const texts = (Array.isArray(code) ? code : [code]).map(normalizeCodeString);

  useEffect(() => {
    const viewport = containerRef.current?.firstElementChild as HTMLElement;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  }, [code]);

  return (
    <div ref={containerRef}>
      <CodeBlock {...rest} className="er-terminal-view">
        {texts.map((text, i) => (
          <CodeBlockCode key={`code-${i}`} children={text} />
        ))}
      </CodeBlock>
    </div>
  );
}

export { TerminalView };
