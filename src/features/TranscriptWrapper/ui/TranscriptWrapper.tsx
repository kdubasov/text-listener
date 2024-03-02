import styles from './TranscriptWrapper.module.css';
import { Button } from 'react-bootstrap';
import { useSpeechRecognition } from 'react-speech-recognition';

const TranscriptWrapper = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  return (
    <div className={styles.wrapper}>
      <p>{transcript || 'No transcript text found!'}</p>
      <Button onClick={resetTranscript}>Reset transcript</Button>
    </div>
  );
};

export default TranscriptWrapper;
