import { SERVICE_KEY } from '../../security/openAPIKey';

const BASE_URL = `https://apis.data.go.kr/B551011/GoCamping`;

export const getCampingList = async ({ pageNo = 1 }: { pageNo: number }) => {
  const params = {
    MobileOS: 'IOS',
    MobileApp: 'SNSProject',
    serviceKey: SERVICE_KEY,
    _type: 'json',
    pageNo: `${pageNo}`,
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/basedList?${queryString}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};
