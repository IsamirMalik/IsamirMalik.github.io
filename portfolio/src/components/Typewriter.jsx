import { useEffect, useState, useRef } from "react";

export default function Typewriter({
  text = "Welcome !",
  speed = 80,
  cursor = false,
  pause = 5000,
  loop = true,
}) {
  const [display, setDisplay] = useState("");
  const phase = useRef("typing"); // 'typing' | 'pausing' | 'deleting'
  const index = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const step = () => {
      if (!mounted) return;

      if (phase.current === "typing") {
        if (index.current <= text.length) {
          setDisplay(text.slice(0, index.current));
          index.current += 1;
          timerRef.current = setTimeout(step, speed);
        } else {
          // finished typing
          phase.current = "pausing";
          timerRef.current = setTimeout(() => {
            phase.current = "deleting";
            timerRef.current = setTimeout(step, Math.round(speed * 0.6));
          }, pause);
        }
      } else if (phase.current === "deleting") {
        if (index.current > 0) {
          index.current -= 1;
          setDisplay(text.slice(0, index.current));
          timerRef.current = setTimeout(step, Math.round(speed * 0.6));
        } else {
          // finished deleting
          if (loop) {
            phase.current = "typing";
            timerRef.current = setTimeout(step, speed);
          }
        }
      }
    };

    // start
    clearTimer();
    index.current = 0;
    phase.current = "typing";
    timerRef.current = setTimeout(step, speed);

    return () => {
      mounted = false;
      clearTimer();
    };
  }, [text, speed, pause, loop]);

  return (
    <span className="typewriter" aria-label={text}>
      {display}
      {cursor ? (
        <span className="typewriter-caret" aria-hidden>
          ▌
        </span>
      ) : null}
    </span>
  );
}
