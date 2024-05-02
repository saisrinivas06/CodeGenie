import { atomOneDark, CodeBlock } from "react-code-blocks";

interface GenerateCodeProps {
  response: string;
  explanation: string;
  language: string;
}

export default function GenerateCode({
  response,
  explanation,
  language,
}: GenerateCodeProps) {
  return (
    <div className="mb-4">
      {response?.length > 0 ? (
        <>
          <CodeBlock language={language} text={response} theme={atomOneDark} />
          {explanation !== "Normal" && <div>{explanation}</div>}
        </>
      ) : (
        <h1 className="flex items-center justify-center">
          Please enter Programming related concept..
        </h1>
      )}
    </div>
  );
}
