import './App.css';
import InputShortener from './components/InputShortener';
import Background from './components/Background';
import Result from './components/Result';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false);

  return (
    <div className="body">
      <div className="container">
        <InputShortener setResult={setResult} setLoading={setLoading} />
        {loading && <span className='loading'>Loading...</span>}
        {result && <Result result={result} />}
        <Background />
      </div>
    </div>
  );
}

export default App;
