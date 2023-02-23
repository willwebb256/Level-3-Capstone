import React, { useState, useEffect } from 'react';

function MemeGenerator() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [memeImageUrl, setMemeImageUrl] = useState("");
  
    useEffect(() => {
      console.log("Meme image URL updated:", memeImageUrl);
    }, [memeImageUrl]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const memeTemplate = document.getElementById("meme-template");
      domtoimage.toPng(memeTemplate)
        .then((url) => {
          setMemeImageUrl(url);
        })
        .catch((error) => {
          console.error("Error generating meme", error);
        });
    };
  
    return (
      <div>
        <h1>Meme Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={topText}
            onChange={(event) => setTopText(event.target.value)}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={bottomText}
            onChange={(event) => setBottomText(event.target.value)}
          />
          <button>Generate Meme</button>
        </form>
        <div id="meme-template">
          <img src="meme-template.jpg" alt="Meme template" />
          <div className="top-text">{topText}</div>
          <div className="bottom-text">{bottomText}</div>
        </div>
        {memeImageUrl && (
          <div>
            <h2>Generated Meme</h2>
            <img src={memeImageUrl} alt="Generated meme" />
          </div>
        )}
      </div>
    );
  }
  
export default MemeGenerator

  
  
  

