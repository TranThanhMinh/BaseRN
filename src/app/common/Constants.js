import { Dimensions, Platform, PixelRatio } from "react-native"
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

var settingVer = 1;
var Production = false;
var scale = 2;

export default {
  useAxios: true,
  Version: "1.0.1" + (!Production ? "-TEST" : ""),
  accessToken: 'UB4fu9Z5aWZhksZK8hiV',
  Url_ForgotPass: 'http://52.193.111.99/visitor/password/reset',
  Url_Term: 'http://52.193.111.99/visitor/terms',
  Url_Operating: 'https://www.eneworld.co.jp',
  Production: Production,
  Time: 1543641377,
  Table: {
    Species: "Species",
    Record: "Record",
    Language: "Language",
  },
  ScreenSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  LandscapeMode: Dimensions.get('window').width > Dimensions.get('window').height,
  Regex: {
    Phone: /^[0-9-]{10,14}$/,
    Zip: /\b\d{3}[-]\d{4}\b/,
    // Email: /^[a-zA-Z0-9-_\.]{0,}@[a-zA-Z0-9]{1,}(\.[a-zA-Z0-9]{1,5}){1,3}$/,
    Email: /^[\w-\.\_\+]+@([\w-]+\.)+[\w-]{2,4}$/,
    Password: /^[a-zA-z0-9\s]*$/,
    YearOfBirth: /\D|^0+/g,
    Phone2: /^(((0)([0-9]{1,2}))[-]?(([0-9]{1,4}))[-]?(([0-9]{4})))$/,
    Phone3: /^(((0)([0-9]{1,2}))[-]?(([0-9]{1,4}))[-]?(([0-9]{4,5})))$/,
    Url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
    Hiragana: /^[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]+$/mu,
    // Password2: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W_]){1,})(?!.*\s).{8,100}$/
    Password2: /^(?=.*?[a-z])(?=.*?\d)[a-zA-Z\d!\\\"#$%&\'()*+,\-.\/\:;<=>?@[\]^_`{|}~]{8,100}$/,
    HtmlContent: /(<([^>]+)>)|(&nbsp;)/ig

  },
  Default: {
    Language: {
      label: 'screen.language.ja',
      code: 'en',
      shortCode: 'en',
    },
    Version: 1,
    PageSize: 20,
    SplashTime: 2000,
    ScheduleTime: 60 * 60 * 1000,
    NormalRequest: 90 * 1000,
    BackgroundReqest: 15 * 60 * 1000,
    limitBulkImage: 10,
  },
  Language: [
    {
      label: 'screen.language.ja',
      code: 'ja',
      shortCode: 'ja',
    },
    {
      label: 'screen.language.vi',
      code: 'vi',
      shortCode: 'vi',
    },
    {
      label: 'screen.language.en',
      code: 'en',
      shortCode: 'en',
    },
    {
      label: 'screen.language.zhs',
      code: 'zhs',
      shortCode: 'zhs',
    },
    {
      label: 'screen.language.zht',
      code: 'zht',
      shortCode: 'zht',
    }
  ],
  Token: {
    COMPANY_SUPPORT: 10,
    WATCH_VIDEO: 20,
    PROBLEM_REPORT: 50,
    REVIEW: 30,
    BOOTH_VISIT: 40,
    REFERRAL_INCENTIVE: 60,
    ANSWER_QUESTIONNAIRE: 70,
    OTHER: 90
  },
  Setting: {
    balance: 'balance',
    invite: 'invite',
    sendEmail: 'sendEmail',
    sendTelegram: 'sendTelegram',
    sendSms: 'sendSms',
    language: 'language',
    theme: 'theme',
    wiki: 'wiki',
    rateUs: 'rateUs',
    joinUs: 'joinUs',
    contactUs: 'contactUs',
  },
  ObservationStatus: {
    NotReady: 0,
    Ready: 1,
    Failed: 2,
    Done: 3,
  },
  Screen: {
    Splash: 'Splash',
    Login: 'Login',
    Home: 'Home',
    AddPair: 'AddPair',
    SearchPair: 'SearchPair',
    Balance: 'Balance',
    Registration: 'Registration',
    ForgotPassword: 'ForgotPassword',
    ResendEmail: 'ResendEmail',
    Terms: 'Terms',
    Notice: 'Notice',
    ChangePassword: 'ChangePassword',
    Profile: 'Profile',
    Privacy: 'Privacy',
    SearchCompany: 'SearchCompany',
    Setting: 'Setting',
    Welcome: 'Welcome',
    TokenHistory: 'TokenHistory',
    Alert: 'Alert',
    WatchList: 'WatchList',
    AlertConfig: 'AlertConfig',
    PairDetail: 'PairDetail',
    AlertView: 'AlertView',
    AlertRegister: 'AlertRegister',
    AlertHistory: 'AlertHistory',
    Register:'Register',
    ForgotPassWord:'ForgotPassWord',
    Website:'Website',
    TransactionHistory:'TransactionHistory',
  　 AboutCoins:'AboutCoins',
  Premium:'Premium'
  },

  FontFamily: Platform.OS == 'ios' ? 'Myriad Pro' : 'Myriad Pro Condensed',

  FontSize: {
    superTiny: 5 + PixelRatio.get() + scale,
    tiny: 7 + PixelRatio.get() + scale,
    small: 9 + PixelRatio.get() + scale,
    medium: 11 + PixelRatio.get() + scale,
    big: 15 + PixelRatio.get() + scale,
    large: 17 + PixelRatio.get() + scale,
    super: 20 + PixelRatio.get() + scale,
    legend: 24 + PixelRatio.get() + scale,
  },
  Store: {
    FirstLaunch: '@Visa:FirstLaunch' + settingVer,
    User: '@Visa:User' + settingVer,
    Version: '@Visa:Version' + settingVer,
    Session: '@Visa:Session' + settingVer,
    Master: '@Visa:Master' + settingVer,
    UUID: '@Visa:UUID' + settingVer,
    AppLang: '@Visa:AppLang' + settingVer,
    AppDataVersion: '@Visa:AppDataVersion' + settingVer,
    AccessToken: '@Visa:accessToken' + settingVer,
    RefreshToken: '@Visa:refreshToken' + settingVer,
    LastSendLog: '@Visa:lastSendLog' + settingVer,
    Info: '@Visa:info' + settingVer,
    Settings: '@Visa:settings' + settingVer,
    VersionConfig: '@Visa:VersionConfig' + settingVer,
    WelcomeShow: '@Netex:showWelcome' + settingVer,
    LastTime: '@Visa:lastTime' + settingVer,
    Theme: '@Visa:theme' + settingVer,
    IsLogin: '@Visa:isLogin' + settingVer,
    CheckIn: '@Visa:CheckIn' + settingVer,
  },
  Event: {
    ReceiveNotification: "ReceiveNotification",
    ToggleSideMenu: "ToggleSideMenu",
    ChangeScreen: "ChangeScreen",
    SyncCompleted: "SyncCompleted",
    LoadLanguage: "LoadLanguage",
    Logout: "Logout",
    PushScreen: "PushScreen",
    CloseMenu: "CloseMenu",
    ReloadManageBox: "ReloadManageBox",
    CloseSideMenu: "CloseSideMenu",
    OpenSideMenu: "OpenSideMenu",
    ForgroundState: "ForgroundState",
    BackgroundState: "BackgroundState",
    NetworkState: "NetworkState",
    SocketConnect: 'SocketConnect',
    ChangeHomeTab: 'ChangeHomeTab',
    TabbarIndex: 'TabbarIndex',
    ReloadAlertChannel: 'ReloadAlertChannel',
    ReloadAlertHistory: 'ReloadAlertHistory',
    ReloadStrategyList: 'ReloadStrategyList',
    ReloadTechnical: 'ReloadTechnical'
  },
  Settings: {
    recordLocationSetting: '@VisaSetting:recordLocationSetting',
    gpsStatusSetting: '@VisaSetting:gpsStatusSetting',
    huntModeSetting: '@VisaSetting:huntModeSetting',
    scientificnamedefaultSetting: "@VisaSetting:scientificnamedefaultSetting",
    neverAlertNotReadySetting: "@VisaSetting:neverAlertNotReadySetting",
    quickStartModeSetting: "@VisaSetting:quickStartMode",
    bulkFirstSetting: "@VisaSetting:bulkFirstSetting",
  },
  Role: {
    VISITOR: 'App\\Visitor',
    ADMIN: 'App\\Admin',
    EXHIBITOR: 'App\\Exhibitor'
  },
  ExchangeState: {
    unsent: 0,
    sent: 1,
    exchange: 2,
    notFunction: 99
  },
  Api: {
    Limit: 10,
    StatusCode: {
      SUCCESS: 200,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401
    }
  },
  SocketChannel: 'private-event.visitor.',
  SocketEvent: 'PrivateWebsocketEventNotification',
  Groups: [
    {
      id: '',
      group_name: "すべての名刺",
      cnt: 0
    },
    {
      id: 'notgrp',
      group_name: "未分類",
      cnt: 0
    },
  ],
  StatusProject: {
    UNAPPLIED: 0, // 未申請
    WAIT_APPLY: 10, // 審査中
    APPLYED: 20, // 承認済み
    REJECTED: 90, // 申請却下
    END: 90
  },
  StyleQuestionnaire: {
    INPUT: 1,
    RADIO: 2,
    CHECK_BOX: 3
  },
  KeySystemConfig: {
    PROFILE_INPUT_FOLLOW_CYCLE: 'PROFILE_INPUT_FOLLOW_CYCLE'
  },
  Exchange: {
    binance: 'BINANCE',
    bitmex: 'BITMEX'
  },
  SpecialCharacter: [
    {
      value: `!`,
      title: 'screen.special.character.exclamation_point'
    },
    {
      value: `"`,
      title: 'screen.special.character.double_quotes'
    },
    {
      value: `#`,
      title: 'screen.special.character.number_sign'
    },
    {
      value: `$`,
      title: 'screen.special.character.dollar_sign'
    },
    {
      value: `%`,
      title: 'screen.special.character.percent'
    },
    {
      value: `&`,
      title: 'screen.special.character.ampersand'
    },
    {
      value: `'`,
      title: 'screen.special.character.apostrophe'
    },
    {
      value: `(`,
      title: 'screen.special.character.left_bracket'
    },
    {
      value: `)`,
      title: 'screen.special.character.right_bracket'
    },
    {
      value: `*`,
      title: 'screen.special.character.asterisk'
    },
    {
      value: `+`,
      title: 'screen.special.character.plus_sign'
    },
    {
      value: `,`,
      title: 'screen.special.character.comma'
    },
    {
      value: `-`,
      title: 'screen.special.character.hyphen'
    },
    {
      value: `.`,
      title: 'screen.special.character.period'
    },
    {
      value: `/`,
      title: 'screen.special.character.diagonal_line'
    },
    {
      value: `:`,
      title: 'screen.special.character.colon'
    },
    {
      value: `;`,
      title: 'screen.special.character.semicolon'
    },
    {
      value: `<`,
      title: 'screen.special.character.inequality_sign_smaller'
    },
    {
      value: `=`,
      title: 'screen.special.character.equal_sign'
    },
    {
      value: `>`,
      title: 'screen.special.character.inequality_sign_larger'
    },
    {
      value: `?`,
      title: 'screen.special.character.question_mark'
    },
    {
      value: `@`,
      title: 'screen.special.character.at_sign'
    },
    {
      value: `[`,
      title: 'screen.special.character.left_bracket_rec'
    },
    {
      value: "",
      title: 'screen.special.character.yen_sign',
      special: true
    },
    {
      value: `]`,
      title: 'screen.special.character.right_bracket_rec'
    },
    {
      value: `^`,
      title: 'screen.special.character.caret'
    },
    {
      value: `_`,
      title: 'screen.special.character.underline'
    },
    {
      value: "`",
      title: 'screen.special.character.grave_accent'
    },
    {
      value: `{`,
      title: 'screen.special.character.left_middle_parenthesis'
    },
    {
      value: `|`,
      title: 'screen.special.character.vertical_line'
    },
    {
      value: `}`,
      title: 'screen.special.character.right_middle_parenthesis'
    },
    {
      value: `~`,
      title: 'screen.special.character.tilde'
    },
  ]
}
