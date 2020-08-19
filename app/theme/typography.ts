import { Platform } from 'react-native'
import { initFonts } from './fonts/index'

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font.  Used in most places.
   */

  primary: Platform.select({ ios: 'Lato', android: 'Lato' }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: 'Lato', android: 'Lato' }),
}
