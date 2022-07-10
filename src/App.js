import './App.css';
import { useState } from "react";
import HomeComponent from './components/content/Home/home.component';
import AboutComponent from './components/content/About/about.component';
import ContactComponent from './components/content/Contact/contact.component';
import video1 from './images/video1.mp4'
function App() {
  // const [blogs, setBlogs] = useState()
  const navbarInfo = [{ name: 'HOME' }, { name: 'About' }, { name: ' Contact info' }]
  const intellectualPropertys = [
    {
      heading: 'Blog 1',
      id: '1',
      content: "lorem ajdoij sjda ashdk ashdkja shdkan ashksand sdhaidn jashdli ashdjas asjhdla ahsdnka sadidn ashdlkask ansjdnas ksldas bsadb sahdasj hsadasjnl sdhlan daishj, kjaslid",
      author: "Vansh"
    },
    {
      heading: 'Blog 2',
      id: '2',
      content: "lorem ajdoij sjda ashdk ashdkja shdkan ashksand sdhaidn jashdli ashdjas asjhdla ahsdnka sadidn ashdlkask ansjdnas ksldas bsadb sahdasj hsadasjnl sdhlan daishj, kjaslid",
      author: "Vansh"
    },
    {
      heading: 'Blog 3',
      id: '3',
      content: "lorem ajdoij sjda ashdk ashdkja shdkan ashksand sdhaidn jashdli ashdjas asjhdla ahsdnka sadidn ashdlkask ansjdnas ksldas bsadb sahdasj hsadasjnl sdhlan daishj, kjaslid",
      author: "Vansh"
    }
  ]
  const aboutInfo =
  {
    appIcon: 'https://robohash.org/20?set=set2',
    aboutHeading: 'प्रलāp',
    aboutInformation: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, error doloribus? Modi omnis explicabo voluptate. Nostrum ipsum rem dolor provident voluptas sint, ea quo nobis tempora. Commodi debitis animi eaque quo, quasi aliquid et, eum saepe quibusdam nisi nesciunt non ipsum ducimus dolorem sequi eius recusandae dignissimos, dolore dicta distinctio quas voluptas. Ad porro explicabo fugiat eligendi temporibus corrupti animi sunt doloremque doloribus, officia voluptatem. Odit placeat, esse quidem labore voluptates reprehenderit eos id reiciendis nesciunt maxime voluptatibus sit suscipit voluptate perspiciatis sapiente fugit. Quidem, consequuntur omnis. Tempora consectetur saepe doloremque soluta quasi deleniti laboriosam? Earum impedit commodi totam consequatur!'
  }

  const [content, setContent] = useState(<HomeComponent property={intellectualPropertys} />)
  return (
    <div className="App">
      <video autoPlay loop muted src={video1} className='navbar__video' />

      <div className='navbar'>
        <h1 className="navbar__heading">प्रलāp</h1>
        <div className="navbar__buttons">
          {
            navbarInfo.map((navIconInfo) => {
              return <div>
                <button
                  className='navbar__icons'
                  onClick={() => {
                    if (navIconInfo.name === 'HOME') {
                      setContent(<HomeComponent property={intellectualPropertys} />)
                    }
                    if (navIconInfo.name === 'About') {
                      setContent(<AboutComponent information={aboutInfo} />)
                    }
                    if (navIconInfo.name === ' Contact info') {
                      setContent(<ContactComponent />)
                    }
                  }}><div className='navbar__button__text'>
                    {navIconInfo.name}
                  </div>
                </button>
              </div>
            })
          }
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default App;
