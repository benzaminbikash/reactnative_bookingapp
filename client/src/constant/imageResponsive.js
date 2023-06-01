import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const scale = SCREEN_WIDTH / 360

export const pixelImage = size => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
