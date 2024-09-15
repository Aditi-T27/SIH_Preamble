// //First App.js

// import React, { useState } from 'react';
// import './App.css';
// import video from './assets/video.mp4';

// function App() {
//   const [modal, setModal] = useState(null);

//   const openModal = (modalId) => {
//     setModal(modalId);
//   };

//   const closeModal = () => {
//     setModal(null);
//   };

//   return (
//     <div className="App">
//       <div className="preamble-container">
//         <h1>Preamble of the Constitution of India</h1>

//         <p>
//           <span>WE, THE PEOPLE OF INDIA</span>, having solemnly resolved to constitute India into a 
//           <span className="clickable" onClick={() => openModal('sovereign')}>SOVEREIGN</span>, 
//           <span className="clickable" onClick={() => openModal('socialist')}>SOCIALIST</span>, 
//           <span className="clickable" onClick={() => openModal('secular')}>SECULAR</span>, 
//           <span className="clickable" onClick={() => openModal('democratic')}>DEMOCRATIC</span>, 
//           <span className="clickable" onClick={() => openModal('republic')}>REPUBLIC</span>,and to secure to all its citizens:
//         </p>

//         <p>
//           <span className="clickable" onClick={() => openModal('justice')}>JUSTICE</span>, social, economic and political;
//           <span className="clickable" onClick={() => openModal('liberty')}>LIBERTY</span> of thought, expression, belief, faith, and worship;
//           <span className="clickable" onClick={() => openModal('equality')}>EQUALITY</span> of status and of opportunity;
//           and to promote among them all
//           <span className="clickable" onClick={() => openModal('fraternity')}>FRATERNITY</span>, assuring the dignity of the individual and the
//           unity and integrity of the Nation;
//         </p>

//         <p>
//           IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.
//         </p>
//       </div>

//       {/* Modals */}
//       {modal === 'sovereign' && <Modal title="Sovereign" content="Sovereignty means that India is free from any external control, with the power to legislate, govern, and make decisions independently." closeModal={closeModal} />}
//       {modal === 'socialist' && <Modal title="Socialist" content="Socialism emphasizes reducing inequality in society and ensuring that wealth is distributed more equally among citizens." closeModal={closeModal} />}
//       {modal === 'secular' && <Modal title="Secular" content="Secularism ensures that all religions are treated equally by the state, with no favoritism to any particular religion." closeModal={closeModal} />}
//       {modal === 'democratic' && <Modal title="Democratic" content="Democracy means that the people have the power to elect their representatives and have a voice in governance." closeModal={closeModal} />}
//       {modal === 'republic' && <Modal title="Republic" content="Republic means that the head of the state is elected, not a hereditary monarch." closeModal={closeModal} />}
//       <div class="btn">
//         <button><a href={video}>We, the People: An Animated Guide</a></button>
//       </div>
  
//       {/* <div className="video-container">
//         <video width="600" controls>
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div> */}
//     </div>
//   );
// }

// function Modal({ title, content, closeModal }) {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>&times;</span>
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// 2nd App.js

import React, { useState } from 'react';
import './App.css';
// import video from './assets/video.mp4';

function App() {
  const [modal, setModal] = useState(null);
  const [language, setLanguage] = useState('english'); // Track selected language

  const openModal = (modalId) => {
    setModal(modalId);
  };

  const closeModal = () => {
    setModal(null);
  };

  // Texts in English and Hindi
  const content = {
    english: {
      heading: ' Preamble of the Constitution of India',
      sovereign: ' Sovereignty means that India is free from any external control, with the power to legislate, govern, and make decisions independently.',
      socialist: ' Socialism emphasizes reducing inequality in society and ensuring that wealth is distributed more equally among citizens.',
      secular: ' Secularism ensures that all religions are treated equally by the state, with no favoritism to any particular religion.',
      democratic: 'Democracy means that the people have the power to elect their representatives and have a voice in governance.',
      republic: 'Republic means that the head of the state is elected, not a hereditary monarch.',
      justice: 'JUSTICE,',
      liberty: ' LIBERTY ',
      equality: ' EQUALITY ',
      fraternity: ' FRATERNITY,',
      constitution: 'IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
      button: 'We, the People: An Animated Guide',
    },
    hindi: {
      heading: 'भारत के संविधान की प्रस्तावना',
      sovereign: 'सार्वभौमिकता का अर्थ है कि भारत किसी बाहरी नियंत्रण से मुक्त है, और स्वतंत्र रूप से कानून, शासन और निर्णय लेने की शक्ति रखता है।',
      socialist: 'समाजवाद समाज में असमानता को कम करने और नागरिकों के बीच संपत्ति का समान वितरण सुनिश्चित करने पर जोर देता है।',
      secular: 'धर्मनिरपेक्षता यह सुनिश्चित करती है कि राज्य सभी धर्मों के साथ समान व्यवहार करे, और किसी भी धर्म का पक्ष न ले।',
      democratic: 'लोकतंत्र का अर्थ है कि लोगों को अपने प्रतिनिधियों का चुनाव करने और शासन में अपनी आवाज रखने की शक्ति है।',
      republic: 'गणराज्य का अर्थ है कि राज्य का प्रमुख वंशानुगत सम्राट नहीं है, बल्कि वह चुना गया होता है।',
      justice: 'न्याय, सामाजिक, आर्थिक और राजनीतिक;',
      liberty: 'विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता;',
      equality: 'स्थिति और अवसर की समानता;',
      fraternity: 'व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता को सुनिश्चित करते हुए बंधुत्व;',
      constitution: 'हमारे संविधान सभा में इस छब्बीस नवंबर, १९४९ को हम इस संविधान को अंगीकृत, अधिनियमित और आत्मार्पित करते हैं।',
      button: 'हम, भारत के लोग: एक एनिमेटेड मार्गदर्शिका',
    },
  };

  return (
    <div className="App">
      {/* Language Toggle Buttons */}
      <div className="language-switch">
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('hindi')}>Hindi</button>
      </div>

      <div className="preamble-container">
        <h1>{content[language].heading}</h1>

        <p>
          <span>{language === 'english' ? 'WE, THE PEOPLE OF INDIA' : 'हम, भारत के लोग'}</span>,having solemnly resolved to constitute India into a
          <span className="clickable" onClick={() => openModal('sovereign')}>{language === 'english' ? 'SOVEREIGN' : 'सार्वभौमिक'}</span>, 
          <span className="clickable" onClick={() => openModal('socialist')}>{language === 'english' ? 'SOCIALIST' : 'समाजवादी'}</span>, 
          <span className="clickable" onClick={() => openModal('secular')}>{language === 'english' ? 'SECULAR' : 'धर्मनिरपेक्ष'}</span>, 
          <span className="clickable" onClick={() => openModal('democratic')}>{language === 'english' ? 'DEMOCRATIC' : 'लोकतांत्रिक'}</span>, 
          <span className="clickable" onClick={() => openModal('republic')}>{language === 'english' ? 'REPUBLIC' : 'गणराज्य'}</span>,and to secure to all its citizens:
        </p>

        <p>
          <span className="clickable" onClick={() => openModal('justice')}>{content[language].justice}</span> social, economic and political;<br />
          <span  className="clickable" onClick={() => openModal('liberty')}>{content[language].liberty}</span> of thought, expression, belief, faith, and worship;<br />
          <span className="clickable" onClick={() => openModal('equality')}>{content[language].equality}</span> of status and of opportunity and to promote among them all
          <span  className="clickable" onClick={() => openModal('fraternity')}>{content[language].fraternity}</span> assuring the dignity of the individual and the unity and integrity of the Nation;
        </p>

        <p>{content[language].constitution}</p>
      </div>

      {/* Modals */}
      {modal === 'sovereign' && <Modal title={language === 'english' ? 'Sovereign' : 'सार्वभौमिक'} content={content[language].sovereign} closeModal={closeModal} />}
      {modal === 'socialist' && <Modal title={language === 'english' ? 'Socialist' : 'समाजवादी'} content={content[language].socialist} closeModal={closeModal} />}
      {modal === 'secular' && <Modal title={language === 'english' ? 'Secular' : 'धर्मनिरपेक्ष'} content={content[language].secular} closeModal={closeModal} />}
      {modal === 'democratic' && <Modal title={language === 'english' ? 'Democratic' : 'लोकतांत्रिक'} content={content[language].democratic} closeModal={closeModal} />}
      {modal === 'republic' && <Modal title={language === 'english' ? 'Republic' : 'गणराज्य'} content={content[language].republic} closeModal={closeModal} />}

      {/* Video Button */}
      <div className="btn">
        <button>
          {/* {/* /* <a href={video}>{content[language].button}</a> */ }
          {/* Add video here,after adding it into assets folder inside my-react-app */}
          <a>{content[language].button}</a>
          {/* comment this a once exexute above one */}
        </button>
      </div>
    </div>
  );
}

function Modal({ title, content, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css'; // Ensure the CSS is linked here
// import video from './assets/video.mp4';

// function App() {
//   const [modal, setModal] = useState(null);
//   const [language, setLanguage] = useState('english'); // Track selected language

//   const openModal = (modalId) => {
//     setModal(modalId);
//   };

//   const closeModal = () => {
//     setModal(null);
//   };

//   // Texts in English and Hindi
//   const content = {
//     english: {
//       heading: 'Preamble of the Constitution of India',
//       preambleText: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a 
//         SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC, REPUBLIC and to secure to all its citizens:
//         JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith, and worship; 
//         EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity 
//         of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twenty-sixth 
//         day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`,
//       button: 'We, the People: An Animated Guide',
//       modals: {
//         sovereign: 'Sovereignty means that India is free from any external control, with the power to legislate, govern, and make decisions independently.',
//         socialist: 'Socialism emphasizes reducing inequality in society and ensuring that wealth is distributed more equally among citizens.',
//         secular: 'Secularism ensures that all religions are treated equally by the state, with no favoritism to any particular religion.',
//         democratic: 'Democracy means that the people have the power to elect their representatives and have a voice in governance.',
//         republic: 'Republic means that the head of the state is elected, not a hereditary monarch.',
//         justice: 'JUSTICE, social, economic and political;',
//         liberty: 'LIBERTY of thought, expression, belief, faith, and worship;',
//         equality: 'EQUALITY of status and of opportunity;',
//         fraternity: 'FRATERNITY, assuring the dignity of the individual and the unity and integrity of the Nation;',
//       },
//     },
//     hindi: {
//       heading: 'भारत के संविधान की प्रस्तावना',
//       preambleText: `हम, भारत के लोग, भारत को एक 
//         सार्वभौमिक, समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक, गणराज्य बनाने के लिए तथा इसके समस्त नागरिकों को:
//         न्याय, सामाजिक, आर्थिक और राजनीतिक; विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता;
//         स्थिति और अवसर की समानता; और उनमें व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता सुनिश्चित करते हुए
//         बंधुत्व बढ़ाने के लिए, दृढ़ संकल्प होकर अपनी संविधान सभा में आज दिनांक 26 नवंबर, 1949 को इस संविधान को 
//         अंगीकृत, अधिनियमित और आत्मार्पित करते हैं।`,
//       button: 'हम, भारत के लोग: एक एनिमेटेड मार्गदर्शिका',
//       modals: {
//         sovereign: 'सार्वभौमिकता का अर्थ है कि भारत किसी बाहरी नियंत्रण से मुक्त है, और स्वतंत्र रूप से कानून, शासन और निर्णय लेने की शक्ति रखता है।',
//         socialist: 'समाजवाद समाज में असमानता को कम करने और नागरिकों के बीच संपत्ति का समान वितरण सुनिश्चित करने पर जोर देता है।',
//         secular: 'धर्मनिरपेक्षता यह सुनिश्चित करती है कि राज्य सभी धर्मों के साथ समान व्यवहार करे, और किसी भी धर्म का पक्ष न ले।',
//         democratic: 'लोकतंत्र का अर्थ है कि लोगों को अपने प्रतिनिधियों का चुनाव करने और शासन में अपनी आवाज रखने की शक्ति है।',
//         republic: 'गणराज्य का अर्थ है कि राज्य का प्रमुख वंशानुगत सम्राट नहीं है, बल्कि वह चुना गया होता है।',
//         justice: 'न्याय, सामाजिक, आर्थिक और राजनीतिक;',
//         liberty: 'स्वतंत्रता, विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की;',
//         equality: 'समानता, स्थिति और अवसर की;',
//         fraternity: 'बंधुत्व, व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता सुनिश्चित करते हुए;',
//       },
//     },
//   };

//   return (
//     <div className="App">
//       {/* Language Toggle Buttons */}
//       <div className="language-switch">
//         <button onClick={() => setLanguage('english')}>English</button>
//         <button onClick={() => setLanguage('hindi')}>Hindi</button>
//       </div>

//       <div className="preamble-container">
//         <h1>{content[language].heading}</h1>
//         <p>
//           {content[language].preambleText.split(/(SOVEREIGN|SOCIALIST|SECULAR|DEMOCRATIC|REPUBLIC|JUSTICE|LIBERTY|EQUALITY|FRATERNITY|सार्वभौमिक|समाजवादी|धर्मनिरपेक्ष|लोकतांत्रिक|गणराज्य|न्याय|स्वतंत्रता|समानता|बंधुत्व)/)
//             .map((part, index) => 
//               content[language].modals[part.toLowerCase()] ? (
//                 <span key={index} className="clickable" onClick={() => openModal(part.toLowerCase())}>
//                   {part}
//                 </span>
//               ) : part
//           )}
//         </p>
//       </div>

//       {/* Modals */}
//       {modal && (
//         <Modal
//           title={modal.toUpperCase()}
//           content={content[language].modals[modal]}
//           closeModal={closeModal}
//         />
//       )}

//       {/* Video Button */}
//       <div className="btn">
//         <button>
//           <a href={video}>{content[language].button}</a>
//         </button>
//       </div>
//     </div>
//   );
// }

// function Modal({ title, content, closeModal }) {
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>
//           &times;
//         </span>
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
