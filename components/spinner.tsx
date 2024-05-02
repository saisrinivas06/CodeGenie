import { SyncLoader } from "react-spinners";
import { facts } from "@/lib/facts";

interface SpinnerProps {
  submitted: boolean;
  loading: boolean;
}

export default function Spinner({ submitted, loading }: SpinnerProps) {
  const randomNum = Math.floor(Math.random() * facts.length);
  return (
    <div className="flex items-center justify-center mt-16">
      {submitted && loading && (
        <div className="flex items-center justify-center flex-col gap-8">
          <SyncLoader color="#fff" />
          <h1 className="font-serif">{facts[randomNum]}</h1>
        </div>
      )}
    </div>
  );
}
