import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './Resizable';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErrorMsg(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const initialValue = `import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello Cruel World!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));`;

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={initialValue}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} errorMsg={errorMsg} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
