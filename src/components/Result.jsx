import React, { useEffect, useState } from 'react'

const Result = ({ result }) => {
  const [clipboard, setClipboard] = useState(false);

  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(data);
    setClipboard(true);
  }

  useEffect(() => {
    let clearCopied = setTimeout(() => {
      setClipboard(false);
    }, 1000)
    return () => clearInterval(clearCopied);
  }, [clipboard])

  return (
    <div className='bottom resultContainer'>
      <p>{result}</p>
      <button className={clipboard && "copied"} onClick={() => copyToClipboard(result)}>Copy to Clipboard</button>
    </div>
  )
}

export default Result