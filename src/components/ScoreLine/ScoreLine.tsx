import React from "react";

import styles from "./ScoreLine.module.scss";

function ScoreLine({ title, score }: ScoreLineProps) {
  const maxScore = 5;

  const renderScoreLines = () => {
    const scoreLines = [];

    for (let i = 0; i < maxScore; i += 1) {
      if (i < score!) {
        scoreLines.push(<div key={i} className={styles.line} />);
      } else {
        scoreLines.push(<div key={i} className={styles.line_good} />);
      }
    }

    return scoreLines;
  };

  return (
    <div>
      <h4>{title}</h4>
      <div className={styles["score-container"]}>{renderScoreLines()}</div>
    </div>
  );
}

type ScoreLineProps = {
  title?: string;
  score?: number;
};

ScoreLine.defaultProps = {
  title: "Название",
  score: 0,
};

export default ScoreLine;
