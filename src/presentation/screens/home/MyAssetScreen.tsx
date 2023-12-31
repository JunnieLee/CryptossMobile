import {_globalStyles} from '@screens/styles';
import {addComma} from '@utils/index';
import {colors, height, width} from '@utils/globalConfig';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconArrowRight from '@assets/icons/icon_arrow_right.svg';
import {UserProfileHeader} from '@components/headers/UserProfileHeader';
import {MyNftList} from '@assets/images';
import {CoinInfo, NftInfo} from '@utils/index';
import FastImage from 'react-native-fast-image';

export const MyAssetScreen = ({navigation}: {navigation: any}) => {
  const [holdingCoinList, setHoldingCoinList] = useState<CoinInfo[]>([
    {
      coinName: 'USDT',
      coinAmount: 301111,
      imageUrl:
        'https://www.blockchaincenter.net/wp-content/uploads/logos/usdt.png',
    },
    {
      coinName: 'USDC',
      coinAmount: 12013,
      imageUrl:
        'https://www.blockchaincenter.net/wp-content/uploads/logos/usdc.png',
    },
    {
      coinName: 'WBTC',
      coinAmount: 999,
      imageUrl:
        'https://www.blockchaincenter.net/wp-content/uploads/logos/btc.png',
    },
    {
      coinName: 'WETH',
      coinAmount: 5000,
      imageUrl:
        'https://s3.amazonaws.com/token-icons/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
    },
  ]);
  const [showArrow, setShowArrow] = useState(true);

  const showMyApt = () => {
    return (
      <LinearGradient
        colors={['#4CB6C4', '#2ED8A7']}
        start={{x: 0.3, y: 0}} // 0,0
        end={{x: 1, y: 1}}
        style={_styles.holdingAmountOuterContainerStyle}>
        <Text
          style={[
            _styles.subText,
            {position: 'absolute', top: 16 * height, left: 16 * height},
          ]}>
          보유 자산
        </Text>
        <View style={_styles.holdingAmountInnerContainerStyle}>
          <Text style={[_styles.subText, {fontSize: 32 * height}]}>
            {addComma(10000)} APT
          </Text>
          <Text style={[_styles.subText, {lineHeight: 20 * height}]}>
            ({addComma(10000 * 20000)}원)
          </Text>
        </View>
      </LinearGradient>
    );
  };

  const showMyCoins = () => {
    return (
      <View style={_styles.holdingCoinContainer}>
        <Text style={_styles.titleText}>코인</Text>
        <View style={_styles.holdingCoinListWrapper}>
          {holdingCoinList.map((val: CoinInfo, idx) => {
            return (
              <View
                key={val.coinName}
                style={[
                  _styles.coinListElementContainer,
                  idx === 0 && {
                    borderTopWidth: 0,
                  },
                ]}>
                <FastImage
                  source={{uri: val.imageUrl}}
                  style={{
                    width: 50 * height,
                    height: 50 * height,
                    //backgroundColor: colors.gray_3,
                    borderRadius: 50 * height,
                  }}
                />
                <View style={_styles.innerCoinInfoContainer}>
                  <Text style={[_styles.subText, {color: colors.gray_2}]}>
                    {val.coinName}
                  </Text>
                  <Text style={[_styles.subText, {color: 'black'}]}>
                    {addComma(val.coinAmount)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  style={_styles.sendButtonConatiner}>
                  <Text
                    style={[_globalStyles.subMiniText, {color: colors.gray_3}]}>
                    전송
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const showMyNfts = () => {
    return (
      <View
        style={[
          _styles.holdingCoinContainer,
          {
            width: (375 - 40) * width,
          },
        ]}>
        <Text style={_styles.titleText}>NFT</Text>
        <View style={_styles.nftListContainer}>
          {showArrow && (
            <View style={_styles.arrowIconContainer}>
              <IconArrowRight
                width={30 * height}
                height={30 * height}
                fill={colors.gray_1}
              />
            </View>
          )}
          <ScrollView
            onTouchStart={() => {
              setShowArrow(false);
            }}
            onTouchEnd={() => {
              setShowArrow(true);
            }}
            horizontal
            nestedScrollEnabled={true}
            contentContainerStyle={{
              height: 223 * height,
              alignItems: 'center',
            }}>
            {MyNftList.map((imgSrc: any, idx) => {
              return (
                <View
                  key={imgSrc + idx}
                  style={[_styles.nftImageContainer, {overflow: 'hidden'}]}>
                  <FastImage
                    resizeMode="cover" // "contain" // "contain"
                    style={_styles.nftImageStyle}
                    source={imgSrc}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <View style={[_styles.outerContainerStyle, {paddingHorizontal: 0}]}>
      <View style={{marginHorizontal: 20 * width}}>
        <UserProfileHeader hideHoldingAPTAmountDisplay={true} />
      </View>
      <ScrollView contentContainerStyle={_styles.mainContentContainerStyle}>
        {showMyApt()}
        {showMyCoins()}
        {showMyNfts()}
      </ScrollView>
    </View>
  );
};

const _styles = StyleSheet.create({
  arrowIconContainer: {
    position: 'absolute',
    right: -15 * height,
    zIndex: 2,
  },
  nftListContainer: {
    width: (375 - 40) * width,
    height: 223 * height,
    backgroundColor: 'white',
    borderRadius: 20 * height,
    marginTop: 8 * height,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12 * width,
    overflow: 'visible',
  },
  nftImageContainer: {
    width: 130 * height,
    height: 160 * height,
    borderRadius: 8 * height,
    backgroundColor: '#adb3b3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16 * height,
    zIndex: 100,
  },
  nftImageStyle: {
    width: '100%',
    height: 160 * height,
  },
  coinListElementContainer: {
    width: '100%',
    height: 70 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1 * height,
    borderColor: colors.gray_6,
  },
  innerCoinInfoContainer: {
    width: 180 * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10 * width,
  },
  holdingCoinListWrapper: {
    width: (375 - 40) * width,
    backgroundColor: 'white',
    borderRadius: 20 * height,
    marginTop: 8 * height,
    marginBottom: 23 * height,
    paddingLeft: 12 * width,
    paddingRight: 12 * width,
    paddingVertical: 5 * height,
  },
  holdingCoinContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16 * height,
    color: 'white',
  },
  sendButtonConatiner: {
    backgroundColor: colors.gray_6,
    width: 40 * width,
    height: 24 * height,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6 * width,
    borderRadius: 4 * height,
  },
  titleText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20 * height,
    lineHeight: 24 * height,
    color: colors.gray_1,
  },
  holdingAmountOuterContainerStyle: {
    width: (375 - 40) * width,
    height: 134 * height,
    borderRadius: 12 * height,
    padding: 16 * height,
    marginTop: 14 * height,
    marginBottom: 21 * height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  holdingAmountInnerContainerStyle: {
    position: 'absolute',
    top: 46 * height,
    left: 16 * height,
    justifyContent: 'center',
  },
  outerContainerStyle: {
    flex: 1,
    backgroundColor: colors.homeScreenBackgroundColor,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 60 * height,
    paddingHorizontal: 20 * width,
  },
  mainContentContainerStyle: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20 * width,
    paddingBottom: 30 * height,
  },
  footerContainer: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12 * height,
    lineHeight: 16 * height,
    textAlign: 'center',
  },
});
