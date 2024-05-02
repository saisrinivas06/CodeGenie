'use client';

import { useState } from 'react';
import Spinner from '@/components/spinner';
import Form from '@/components/form';
import GenerateCode from '@/components/generate-code';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [selectedItem, setSetlectedItem] = useState('');
  const [explanation, setExplanation] = useState('');
  const [radioButtons, setRadioButtons] = useState(() =>
    [
      'C',
      'C++',
      'Python',
      'Java',
      'JavaScript',
      'SQL',
      'Rust',
      'Go Lang',
      'Others',
    ].map((item) => ({
      language: item,
      checked: item === 'Python' ? true : false,
    }))
  );
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!prompt) {
      alert('Please enter text');
      return;
    }
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    let stmt = prompt;
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'assistant',
              content:
                stmt +
                'in' +
                radioButtons.filter((item) => item.checked === true)[0]
                  .language,
            },
          ],
        }),
      });
      const data = await res.json();
      setLoading(false);
      setSubmitted(false);
      setResponse(data.choices[0].message.content);
      const splitted = data.choices[0].message.content.split('```');
      switch (selectedItem) {
        case 'TC SC':
          stmt += 'with only time and space complexities';
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <main className="min-h-screen max-w-[1000px] mx-auto">
      <Form
        handleSubmit={handleSubmit}
        prompt={prompt}
        setPrompt={setPrompt}
        setSetlectedItem={setSetlectedItem}
        radioButtons={radioButtons}
        setRadioButtons={setRadioButtons}
      />
      <Spinner submitted={submitted} loading={loading} />
      {!loading && (
        <div className="font-poppins-800 mt-6">
          <GenerateCode
            response={response}
            explanation={explanation}
            language={
              radioButtons.filter((item) => item.checked === true)[0].language
            }
          />
        </div>
      )}
    </main>
  );
}
