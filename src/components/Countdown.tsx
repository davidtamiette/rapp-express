import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTarget = () => {
      const now = new Date();
      let year = now.getFullYear();
      let target = new Date(year, 2, 31, 23, 59, 59); // March 31
      if (now > target) {
        target = new Date(year + 1, 2, 31, 23, 59, 59);
      }
      return target;
    };

    const update = () => {
      const target = calculateTarget();
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className="text-center">
      <p className="text-sm font-semibold text-urgent mb-3 animate-pulse-urgent">
        ⏰ Tempo restante para entregar o RAPP deste ano:
      </p>
      <div className="flex gap-2 justify-center">
        {blocks.map((b) => (
          <div key={b.label} className="bg-card/90 backdrop-blur rounded-lg px-3 py-2 min-w-[60px] shadow-card">
            <div className="text-2xl font-bold text-foreground">{String(b.value).padStart(2, "0")}</div>
            <div className="text-xs text-muted-foreground">{b.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
