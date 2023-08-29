import Countdown from "../components/Countdown";

export default function Home() {
  const targetDate = "2023-08-29T23:30:00";

  return (
    <div className="flex justify-center items-center h-screen">
      <Countdown targetDate={targetDate} />
    </div>
  );
}
