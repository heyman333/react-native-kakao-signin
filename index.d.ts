declare module "react-native-kakao-signin" {
  class KakaoSignin {
    static signIn: () => Promise<string>;

    static signOut: () => Promise<boolean>;
  }

  export default KakaoSignin;
}
