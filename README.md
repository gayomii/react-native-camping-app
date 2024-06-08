# camping app

### 프로젝트 목적

React Native와 Open API를 활용하여 캠핑 정보를 조회할 수 있는 앱을 구현

### 오픈 API

- 한국관광공사\_고캠핑 정보 조회서비스 활용
  https://www.data.go.kr/data/15101933/openapi.do#/layer-api-guide

### 기술 스택

사용 언어

- typescript

프레임워크/라이브러리

- React Native

| 라이브러리 명                                         | 설명                                           |
| ----------------------------------------------------- | ---------------------------------------------- |
| react-native-navigation                               | 앱 내 페이지 네비게이션 관리를 위한 라이브러리 |
| react-native-vector-icon                              | 아이콘 사용을 위한 라이브러리                  |
| react-native-modal                                    | article sorting 모달을 구현하기 위해 사용      |
| react-native-firebase/app, react-native-firebase/auth | firebase 로그인 기능을 구현하기 위해 사용      |

### 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜campingApi.ts
 ┣ 📂assets
 ┃ ┣ 📂bottomIcons
 ┃ ┃ ┣ 📜articleIcon.png
 ┃ ┃ ┣ 📜articleIconOff.png
 ┃ ┃ ┣ 📜campingIcon.png
 ┃ ┃ ┣ 📜campingIconOff.png
 ┃ ┃ ┣ 📜communityIcon.png
 ┃ ┃ ┣ 📜communityIconOff.png
 ┃ ┃ ┣ 📜settingsIcon.png
 ┃ ┃ ┗ 📜settingsIconOff.png
 ┃ ┣ 📜Background.png
 ┃ ┣ 📜articleLogoImg.png
 ┃ ┣ 📜bottomMenu.png
 ┃ ┣ 📜dummyArticleImg.png
 ┃ ┣ 📜findPasswordImg.png
 ┃ ┣ 📜loginBackgroundImg.png
 ┃ ┣ 📜profileLogo.png
 ┃ ┣ 📜signUpImg.png
 ┃ ┣ 📜signUpOkImg.png
 ┃ ┗ 📜testPersonImg.png
 ┣ 📂components
 ┃ ┣ 📜ArticleList.tsx
 ┃ ┣ 📜CampingInfo.tsx
 ┃ ┣ 📜CustomBottomTab.tsx
 ┃ ┗ 📜MyHeader.tsx
 ┣ 📂constants
 ┃ ┗ 📜images.ts
 ┣ 📂pages
 ┃ ┣ 📂article
 ┃ ┃ ┣ 📜ArticleDetailPage.tsx
 ┃ ┃ ┗ 📜ArticlePage.tsx
 ┃ ┣ 📂community
 ┃ ┃ ┣ 📜BonusPage.tsx
 ┃ ┃ ┣ 📜CommunityDetailPage.tsx
 ┃ ┃ ┣ 📜CommunityPage.tsx
 ┃ ┃ ┣ 📜NewPostPage.tsx
 ┃ ┃ ┗ 📜ProfileInfoPage.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜CampingInfoDetailPage.tsx
 ┃ ┃ ┗ 📜HomePage.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜LoginPage.tsx
 ┃ ┃ ┣ 📜ResetPasswordPage.tsx
 ┃ ┃ ┗ 📜SignUpPage.tsx
 ┃ ┣ 📂onboarding
 ┃ ┃ ┗ 📜Splash.tsx
 ┃ ┗ 📂setting
 ┃ ┃ ┣ 📜AlarmSettingPage.tsx
 ┃ ┃ ┣ 📜AppInfoPage.tsx
 ┃ ┃ ┗ 📜SettingsPage.tsx
 ┣ 📂types
 ┃ ┗ 📜types.ts
 ┣ 📂utils
 ┃ ┣ 📜getDate.ts
 ┃ ┗ 📜validate.ts
 ┣ 📜auth.ts
 ┗ 📜router.tsx
```

### 주요기능

- 무한 스크롤

스크롤을 아래로 내릴 때마다 다음 10개의 리스트를 조회하는 무한 스크롤 기능 구현

https://github.com/gayomii/react-native-camping-app/assets/52454824/03665023-bc46-4010-93a0-f4c99b6d5ef5

- 스크롤 내렸을 때 헤더 숨기기

UI상 사용자가 스크롤을 내렸을 때 헤더가 고정되어 있으면 보여지는 리스트가 적어 불편함을 느낄 수 있는 부분을 개선하고자 해당 기능을 구현하였다.


https://github.com/gayomii/react-native-camping-app/assets/52454824/1f5d58cd-da5f-466f-b1aa-25ffd989d15e







