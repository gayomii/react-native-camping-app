import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeTabParamList, CampingInfoProps } from '../types/types';

const { width, height } = Dimensions.get('window');

const CampingInfo = ({
  facltNm,
  addr1,
  facltDivNm,
  mangeDivNm,
  resveCl,
  caravInnerFclty,
  intro,
  induty,
  firstImageUrl,
}: CampingInfoProps) => {
  const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('campingInfoDetail', {
          facltNm,
          addr1,
          facltDivNm,
          mangeDivNm,
          resveCl,
          caravInnerFclty,
          intro,
          induty,
          firstImageUrl,
        });
      }}
      style={styles.wrapper}>
      {firstImageUrl && (
        <>
          <Image source={{ uri: firstImageUrl }} style={styles.campingImg} />
          <View style={styles.indutyContainer}>
            {induty.split(',').map(item => (
              <View style={styles.indutyTextBox}>
                <Text style={styles.indutyText}>{item}</Text>
              </View>
            ))}
          </View>
        </>
      )}

      <View style={styles.divNmContainer}>
        <Text style={styles.divNmText}>{facltDivNm}</Text>
        <Text style={styles.divNmText}>{mangeDivNm}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{facltNm}</Text>
      </View>
      <View style={styles.subInfoContainer}>
        <Text style={styles.addrText}>{addr1}</Text>
        <Text style={styles.resveText}>{resveCl}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  campingImg: {
    height: width / 2,
    borderRadius: 4,
    marginBottom: 8,
  },
  indutyContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 20,
    left: 20,
    flexDirection: 'row',
    gap: 10,
  },
  indutyTextBox: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#FC9D45',
  },
  indutyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  divNmContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  divNmText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#919191',
  },
  nameContainer: {
    marginBottom: 35,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#545454',
  },
  subInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addrText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#707070',
  },
  resveText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FC9D45',
  },
});

export default CampingInfo;
