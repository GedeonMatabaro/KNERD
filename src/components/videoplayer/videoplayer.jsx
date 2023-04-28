import React, { useEffect, useState } from 'react';

const PlaylistComponent = ({playlistId, ID}) => {
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    // Replace YOUR_API_KEY with your actual YouTube API key
    const API_KEY = 'AIzaSyAl4bim6tSMdODcpiBPyCHdEo5S3l8m8pI';
    //const {playlistId, ID}=props;
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=snippet&playlistId=${playlistId}&maxResults=50`)
      .then(response => response.json())
      .then(data => {
        setPlaylistData(data);
      });
  }, [playlistId]);

  if (!playlistData) {
    return (
        <div>
             Loading...k 
        </div>
    ) ;
  }
  if (!playlistId) {
    return <div></div>;
  }
// console.log("The playlistId is "+playlistId);
return (
    <div style={{ display: 'flex', flexDirection: 'row', border:'5px', borderBlock:'black' }}>
     
      <div style={{ width: '800px', height: '450px' }}>
        
        <iframe id={ID} src={`https://www.youtube.com/embed/${playlistData.items[0].snippet.resourceId.videoId}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style={{ width: '100%', height: '100%' }}></iframe>
      </div>
      <div style={{ height: '450px', overflow: 'scroll', margin: '20px' }}>
        {playlistData.items.slice(1).map((item, index) => (
          <div key={index} onClick={() => { document.querySelector(`#${ID}`).src = `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}` }} style={{ width: '100%', marginRight: '20px', marginBottom: '20px', cursor: 'pointer', display: 'flex' }}>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} style={{ width: '100px', marginRight: '10px', cursor: 'pointer' }}/>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ margin: '0' }}>{item.snippet.title}</p>
              <p style={{ margin: '0', fontSize: '12px' }}>{item.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistComponent;