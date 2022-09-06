import { useState } from "react"

const InputShortener = ({ setResult, setLoading }) => {
  const [url, setUrl] = useState({
    originalUrl: ""
  });

  const fetchData = () => {
    setLoading(true);
    setResult("");
    fetch("https://urlo-api.herokuapp.com/api/short-url", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url),
    }).then(res => res.json())
      .then(result => {
        setResult(result.data.shortUrl);
        setLoading(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="top">
      <h1>URL <span>Shortener</span></h1>
      <div className="inputContainer">
        <input type="text" placeholder="Enter a link" className='input' value={url.originalUrl} onChange={e => setUrl({ originalUrl: e.target.value })} />
        <button onClick={fetchData}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener