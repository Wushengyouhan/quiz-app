import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainningTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainningTime((prevRemainningTime) => prevRemainningTime - 100);
    }, 100);
  }, []);
  return <progress id="question-time" value={remainningTime} max={timeout} />;
}
