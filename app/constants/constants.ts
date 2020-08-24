import { Dimensions, Platform, NativeModules } from 'react-native'

const { StatusBarManager } = NativeModules;

export const BOTTOMTAB_HEIGHT = 50
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT