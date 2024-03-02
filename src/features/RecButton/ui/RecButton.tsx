import styles from './RecButton.module.css';
import { IProps } from '@/features/RecButton/types';
import { Button, Spinner } from 'react-bootstrap';
import { TiMicrophoneOutline } from 'react-icons/ti';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const RecButton = ({ selectedLang, fullWidth }: IProps) => {
  const { listening } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: selectedLang });
  };

  return (
    <Button
      className={`${styles.button} ${fullWidth ? 'w-100' : ''}`}
      variant={listening ? 'danger' : 'success'}
      onTouchStart={startListening}
      onMouseDown={startListening}
      onTouchEnd={SpeechRecognition.stopListening}
      onMouseUp={SpeechRecognition.stopListening}
    >
      {listening ? <Spinner size={'sm'} animation={'grow'} /> : <TiMicrophoneOutline />}
      {listening ? 'Recording in progress' : 'Hold to talk'}
    </Button>
  );
};

export default RecButton;
