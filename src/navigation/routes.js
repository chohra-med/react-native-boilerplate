export default {
  WELCOME: 'Welcome',
  LOGIN: 'Login',
  SIGN_UP: 'SignUp',
  LOGIN_PHONE: 'Login_Phone',
  LOGIN_CODE: 'Login_Code',
  HOME: 'Home',
  CATEGORY: 'Category',
  SUBCATEGORY: 'SubCategory',
  SHOP: 'Shop',
  PRODUCT: 'Product',
  NOTIFICATIONS: 'NOTIFICATIONS',
  // Containers
  AUTH: 'Auth', // Stack [LOGIN, SIGN_UP]
  TWO_FACTOR_AUTH: 'TwoFactorAuth', // Stack [LOGIN_PHONE, LOGIN_CODE]
  DISCOVERING: 'Discovering', // Stack [HOME,CATEGORY,SUBCATEGORY,SHOP,PRODUCT,NOTIFICATIONS]
  APP_INSIDE: 'AppInside', // Drawer [Discovering, ... account ...]
  APP: 'App', // (not referenced) switch [WELCOME, AUTH,TWO_FACTOR_AUTH,APP_INSIDE]
};
