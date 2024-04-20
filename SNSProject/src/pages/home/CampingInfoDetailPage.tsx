import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MyHeader from '../../components/MyHeader';

const { width, height } = Dimensions.get('window');

const CampingInfoDetailPage = () => {
  const params: any = useRoute().params;
  const {
    facltNm,
    addr1,
    facltDivNm,
    mangeDivNm,
    resveCl,
    caravInnerFclty,
    intro,
    induty,
    firstImageUrl,
  } = params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <MyHeader
          title="캠핑장 상세 정보"
          leftIcon={
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.goBack()}>
              <Icon name="long-arrow-alt-left" size={18} />
            </TouchableOpacity>
          }
          // TODO: Image일때, style
          rightIcon={<View style={{ width: 20, height: 20 }}></View>}
        />
      </View>
      <ScrollView style={styles.infoContainer}>
        <View>
          <Image source={{ uri: firstImageUrl }} style={styles.campingImg} />
          <View style={styles.contentContainer}>
            <View style={styles.divNmContainer}>
              <Text style={styles.divNmText}>{facltDivNm}</Text>
              <Text style={styles.divNmText}>{mangeDivNm}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.mainText}>{facltNm}</Text>
              <Text style={styles.resveText}>{resveCl}</Text>
            </View>
            <Text style={styles.addrText}>{addr1}</Text>
            <Text style={styles.mainText}>{caravInnerFclty}</Text>
            <View style={styles.introContainer}>
              <Text style={styles.labelText}>소개 및 안내</Text>
              <Text style={styles.introText}>{intro}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>전화하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF3E9',
  },
  infoContainer: {
    marginBottom: 60,
  },
  contentContainer: {
    paddingHorizontal: 15,
    gap: 9,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  campingImg: {
    width,
    height: width / 2,
  },
  iconButton: {
    backgroundColor: '#eee0da',
    borderRadius: 50,
    padding: 12,
  },
  divNmContainer: {
    marginTop: 39,
    flexDirection: 'row',
    gap: 16,
  },
  divNmText: {
    color: '#FC9D45',
    fontSize: 13,
    fontWeight: '600',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainText: {
    color: '#383838',
    fontSize: 16,
    fontWeight: '600',
  },
  resveText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#919191',
  },
  addrText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#707070',
  },
  labelText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#919191',
    paddingTop: 16,
  },
  introContainer: {
    gap: 9,
  },
  introText: {
    fontSize: 15,
    lineHeight: 22.5,
    fontWeight: '600',
    color: '#383838',
    marginBottom: 24,
  },
  callButton: {
    backgroundColor: '#FDA758',
    borderRadius: 8,
  },
  buttonContainer: {
    paddingVertical: 24,
    paddingHorizontal: 48,
  },
  callButtonText: {
    color: '#573353',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 22,
  },
});

export default CampingInfoDetailPage;
