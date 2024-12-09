import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainningTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainningTime((prevRemainningTime) => prevRemainningTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" value={remainningTime} max={timeout} />;
}
