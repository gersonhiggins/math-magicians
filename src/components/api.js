import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const resp = await fetch('https://api.api-ninjas.com/v1/quotes?category=cool', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'S3gujp9fVL7lpSoYeJhAew==50ilgePyB46JRsd8',
          },
          contentType: 'application-json',
        });
        const json = await resp.json();
        setData(json);
      } catch {
        setHasError(true);
      }
      setIsloading(false);
    };
    fetchData();
  }, []);
  if (isLoading) return <div className="quote"><p>Is loading...</p></div>;
  if (hasError) return <div className="quote"><p>Something went wrong</p></div>;
  return (
    <div>
      {data.map((item) => (
        <div key="1" className="quote">
          <p>{item.quote}</p>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Api;
