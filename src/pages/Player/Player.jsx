import React, { useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/arrow_back.png'
import { useNavigate } from 'react-router-dom'

const Player = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }
  const getYoutubeEmbedUrl = () => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.match(/^[a-zA-Z0-9_-]{11}$/)) {
      
      videoId = url;
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : 'https://www.youtube.com/embed/oqxAJKy0ii4';
  };

  const embedUrl = getYoutubeEmbedUrl('https://www.youtube.com/embed/oqxAJKy0ii4');

  return (
    <div className='Player'>
      <img src={back_arrow} alt="Back" onClick={handleBackClick} style={{cursor: 'pointer'}} />
      
      <div className="url-input-container" style={{position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(0,0,0,0.8)', padding: '10px', borderRadius: '5px', zIndex: '100'}}>
        <input
          type="text"
          placeholder="Paste YouTube URL or Video ID here..."
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '3px',
            border: 'none',
            width: '250px',
            fontSize: '14px'
          }}
        />
      </div>

      {embedUrl ? (
        <iframe
          width='90%'
          height='90%'
          src={embedUrl}
          title='trailer'
          frameBorder={0}
          allowFullScreen
        ></iframe>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          height: '90%',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '18px',
          borderRadius: '5px'
        }}>
          Paste a YouTube URL above to watch
        </div>
      )}
      
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
