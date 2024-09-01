import questions from "../data/questions";

function ProgressBar(props) {
  let bars = [];
  for (let i = 0; i < questions.length; i++) {
    if (props.progress >= i) {
      bars.push(<div className="highlight"></div>);
    } else {
      bars.push(<div></div>);
    }
  }

  return <div className="progress-bar">{bars}</div>;
}

export default ProgressBar;
