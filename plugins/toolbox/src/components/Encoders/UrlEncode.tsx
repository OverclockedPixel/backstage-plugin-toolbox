import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor';

export const UrlEncode = () => {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [mode, setMode] = React.useState('Encode');

  useEffect(() => {
    let url = '';
    let errorMessage = '';
    try {
      switch (mode) {
        case 'Encode':
          url = encodeURI(input)
          break;
        case 'Decode':
          url = decodeURI(input)
          break;
        case 'Full Encode':
          url = encodeURIComponent(input)
          break;
        case 'Full Decode':
          url = decodeURIComponent(input)
          break;
        default:
          url = encodeURI(input)
          break;
      }
    } catch (error) {
      errorMessage = `couldn't ${mode.toLowerCase()} URL...`;
    }
    setOutput(url || errorMessage);
  }, [input, mode]);

  return (
    <DefaultEditor
      input={input}
      mode={mode}
      setInput={setInput}
      setMode={setMode}
      output={output}
      modes={['Encode', 'Decode', 'Full Encode', 'Full Decode']}
      sample={
        mode === 'Encode' || mode === 'Full Encode'
          ? 'https://backstage.io/?query= hello\\world{}'
          : 'https://backstage.io/?query=%20hello%5Cworld%7B%7D'
      }
    />
  );
};

export default UrlEncode;
