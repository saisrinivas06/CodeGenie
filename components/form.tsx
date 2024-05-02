import RadioButton from "./radio-buttons";
import DropDown from "./dropdown-menu";
import Button from "./button";

interface FormProps {
  prompt: string;
  setPrompt: React.Dispatch<string>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setSetlectedItem: React.Dispatch<React.SetStateAction<string>>;
  radioButtons: { language: string; checked: boolean }[];
  setRadioButtons: React.Dispatch<
    React.SetStateAction<{ language: string; checked: boolean }[]>
  >;
}

export default function Form({
  handleSubmit,
  prompt,
  setPrompt,
  setSetlectedItem,
  radioButtons,
  setRadioButtons,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} className="ml-[15%]">
      <h2 className="ml-[25%] mt-4 text-lg ">Choose a Programming language</h2>
      <div className="mt-8 ml-20 columns-3 gap-4 mb-4">
        <RadioButton
          radioButtons={radioButtons}
          setRadioButtons={setRadioButtons}
        />
      </div>
      <input
        className="rounded-lg placeholder:ml-4 px-2 py-2 w-[400px] bg-zinc-800 mt-2 text-white"
        value={prompt}
        placeholder="Problem Statement"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <DropDown setSetlectedItem={setSetlectedItem} />
      <Button />
    </form>
  );
}
