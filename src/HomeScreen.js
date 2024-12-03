import './HomeScreen.css';

function HomeScreen() {
  return (
    <div className="page">
      <div className='logo'>
        <img src='./logo192.png' alt='reactlogo'></img>
      </div>
      <div className='captchaButtons'>
        <div className='photoButton'>
          <button>photo button</button>
        </div>
        <div className='codeButton'>
          <button>code button</button>
        </div>
      </div>
      <div className='historyButton'>
        <button>history button</button>
      </div>
    </div>
  );
}

export default HomeScreen;