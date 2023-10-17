import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TitleText from '../../components/TitleText/TitleText';
import {Image} from 'react-native';
import style from './style';
import InputSearch from '../../components/InputSearch/InputSearch';
import globalStyle from '../../assets/styles/globalStyle';
import Category from '../../components/Category/Category';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ProductList from '../../components/ProductList/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {fetchCategoryList} from '../../redux/reducers/Category';
import {fetchDonationList} from '../../redux/reducers/Donation';
import {fetchProfileInfo} from '../../redux/reducers/Profile';
const DataProduct = [
  {
    id: 1,
    title: 'Enviorment',
    url: 'https://m.media-amazon.com/images/I/81zX8MmRxKL._AC_UF1000,1000_QL80_.jpg',
    name: 'Tree Cactus Limit',
    amount: '44.00',
  },
  {
    id: 2,
    title: 'Enviorment1',
    url: 'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    name: 'Tree Cactus Limit',
    amount: '44.00',
  },
  {
    id: 3,
    title: 'Enviorment2',
    url: 'https://images.unsplash.com/photo-1551888419-7b7a520fe0ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    name: 'Tree Cactus Limit',
    amount: '44.00',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryList());
    dispatch(fetchProfileInfo());
  }, []);

  const categoryData = useSelector(state => state.category.data);
  const profileData = useSelector(state => state.profile.data);
  console.log(profileData);
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <ScrollView>
        <View>
          <Text style={style.greetingText}>Hello,</Text>
          <View style={style.mainContainer}>
            <View style={style.ProfileName}>
              <TitleText
                title={[
                  profileData && profileData.data.firstname,
                  ' ',
                  profileData && profileData.data.lastname,
                  '👋',
                ]}
                fontColor="#022150"
                titelFontSize={24}
                fontWeight="600"
              />
            </View>
            <Image
              source={{
                uri: [profileData && profileData.profilePic],
              }}
              style={style.profileImage}
            />
          </View>
        </View>
        <View style={style.search}>
          <InputSearch />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            style={style.highlightedImage}
          />
        </Pressable>
        <View style={style.categoryTitle}>
          <TitleText
            title="Select Category"
            titelFontSize={18}
            fontColor="#022150"
            fontWeight="600"
          />
        </View>
        <View>
          <FlatList
            style={style.categoryContainer}
            data={categoryData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item}) => (
              <Category title={item.category} type={1} categoryId={item.id} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View />
        <View style={style.list}>
          {DataProduct.map(value => (
            <View key={value.id} style={style.singleItem}>
              <ProductList
                title={value.title}
                productId={value.id}
                url={value.url}
                name={value.name}
                amount={value.amount}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
