import { Alert } from 'react-bootstrap';
import { useSpeechRecognition } from 'react-speech-recognition';

const MicroAvailableAlert = () => {
  const { browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <Alert variant={'danger'}>Browser doesn't support speech recognition.</Alert>;
  }

  if (isMicrophoneAvailable) {
    return (
      <Alert variant={'success'}>
        Microphone found <b>successfully</b>!
      </Alert>
    );
  } else {
    return <Alert variant={'danger'}>Microphone access is denied, please change your access settings!</Alert>;
  }
};

export default MicroAvailableAlert;
