import { NativeModules } from 'react-native';

const { RNKaKaoSignin } = NativeModules;

const KakaoSignin = {
  signIn() {
    return RNKaKaoSignin.signIn();
  },
  signOut() {
    return RNKaKaoSignin.signOut();
  }
};

export default KakaoSignin;
