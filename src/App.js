import React from 'react'
import Deeplink from './deeplink'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
  font-family: consolas;
`

class deeplink extends React.Component {
  static async getInitialProps({ store }) {
    return {}
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // 네이버앱으로 테스트
    this.deeplink = Deeplink({
      iTunesLink: 'https://apps.apple.com/kr/app/%EC%9D%B4%EB%AA%A8%ED%8B%B1%EB%B0%95%EC%8A%A4/id1535597509', // ios 앱다운로드 링크
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.emoticbox.store', // android 앱다운로드 링크
      androidPackage: 'com.emoticbox.store',
      useFallback: true,
      fallbackUrl: 'https://www.naver.com'
    });
    
    this.deeplink.redirectToApp(`EmoticboxStoreApp://?referralServiceId=2`);
    // document.location.href = `EmoticboxStoreApp://EmoticonInfo/:emoticonId`;
  }

  render() {
    return (
      <div>
        Emoticbox!
        <Link
          onClick={() =>{
            this.deeplink.redirectToApp(`EmoticboxStoreApp://?referralServiceId=2`);
          }}
        >
          앱 다운로드
        </Link>
        <Link
          onClick={() =>{
            this.deeplink.redirectToApp(`EmoticboxStoreApp://?referralServiceId=2`);
          }}
        >
          앱실행**
        </Link>
      </div>
    )
  }
  //     <div>
  //       <h2>네이버앱</h2>
  //       <Link
  //         onClick={() =>
  //           this.deeplink.redirectToApp(`naversearchapp://default?version=1`)
  //         }
  //       >
  //         naversearchapp://default?version=1
  //       </Link>
  //       <Link
  //         onClick={() =>
  //           this.deeplink.redirectToApp(
  //             `naversearchapp://search?qmenu=voicerecg&version=1`
  //           )
  //         }
  //       >
  //         테스트3
  //       </Link>
  //       <a href="https://link.coupang.com/re/AFFPROMO?lptag=AF5734182&pageKey=75739&traceid=V0-181-a482819dd1faa9e1">Test Click</a>
  //     </div>
  //   )
  // }
}

export default deeplink
// import React from 'react';
// import {Link} from 'react-router-dom';

// const App = () => {
//   let message;
//   if (navigator.userAgent.match(/iPad/i)){
//     message = "ipad";
//   } else if (navigator.userAgent.match(/Tablet/i)){
//     message = "Tablet";
//   } else if (navigator.userAgent.match(/Android/i)){
//     message = "Android";
//   } else if (navigator.userAgent.match(/iPhone|iPod/i)){
//     message = "Iphone";
//   } else {
//     message = "PC";
//   }
//   return (
//     <div className="App">
//         <a href="emoticbox://emoticon">{message}</a>
//     </div>
//   );
// }

// export default App;
