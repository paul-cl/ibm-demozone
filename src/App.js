import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <p>Test</p>
      <p onClick={()=>handleClick('en')}>English</p>
      <p onClick={()=>handleClick('ko')}>Korean</p>      
      <p>{t('Language.1')}</p>
      <p>{t('Summary.1')}</p>
    </div>
  );
}

export default App;
