"use client";

interface RadioButtonProps {
  radioButtons: { language: string; checked: boolean }[];
  setRadioButtons: React.Dispatch<
    React.SetStateAction<{ language: string; checked: boolean }[]>
  >;
}

export default function RadioButton({
  radioButtons,
  setRadioButtons,
}: RadioButtonProps) {
  const handleChange = (idx: number) => {
    radioButtons = radioButtons.map((item) => ({ ...item, checked: false }));
    radioButtons[idx].checked = true;
    setRadioButtons((prev) => radioButtons.map((item) => ({ ...item })));
  };

  return (
    <>
      <div className="grid grid-col-3">
        {radioButtons.map((item, idx) => (
          <div key={item.language}>
            <input
              type="radio"
              id={item.language}
              checked={item.checked}
              onChange={(e) => handleChange(idx)}
              value={item.language}
            />
            <label htmlFor={item.language} className="mr-14 ml-2">
              {item.language}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
