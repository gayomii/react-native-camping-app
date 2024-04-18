import { SERVICE_KEY } from '../../security/openAPIKey';

const BASE_URL = `https://apis.data.go.kr/B551011/GoCamping`;

export const getCampingList = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/basedList?MobileOS=IOS&MobileApp=SNSProject&serviceKey=${SERVICE_KEY}&_type=json`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};
