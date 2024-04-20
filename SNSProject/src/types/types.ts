import { ImageSourcePropType } from 'react-native';

export type HomeTabParamList = {
  home: undefined;
  campingInfoDetail: CampingInfoProps | undefined;
};

export type ArticleTabParamList = {
  articleList: undefined;
  articleDetail: ArticleProps | undefined;
};

export type CampingInfoProps = {
  facltNm?: string;
  addr1?: string;
  facltDivNm?: string;
  mangeDivNm?: string;
  resveCl?: string;
  caravInnerFclty?: string;
  intro?: string;
  induty?: string;
  firstImageUrl?: string;
};

export type ArticleProps = {
  contentId: number;
  title: string;
  contents: string;
  articleImg: ImageSourcePropType;
  createdAt: number;
};
