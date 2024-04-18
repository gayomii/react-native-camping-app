export type HomeTabParamList = {
  home: undefined;
  campingInfoDetail: CampingInfoProps | undefined;
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
