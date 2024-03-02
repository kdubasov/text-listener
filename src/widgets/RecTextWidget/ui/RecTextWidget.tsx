import styles from './RecTextWidget.module.css';
import LangSelect from '@/features/LangSelect';
import RecButton from '@/features/RecButton';
import TranscriptWrapper from '@/features/TranscriptWrapper';
import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

const RecTextWidget = () => {
  const [selectedLang, setSelectedLang] = useState<string>('ru');
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) return;

  return (
    <div className={styles.wrapper}>
      <LangSelect selected={selectedLang} onSelect={setSelectedLang} />
      <RecButton selectedLang={selectedLang} fullWidth />
      <TranscriptWrapper />
    </div>
  );
};

export default RecTextWidget;
