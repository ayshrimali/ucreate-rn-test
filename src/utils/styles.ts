import colors from "./colors"
import styleconfig from '../utils/styleconfig'
import { size } from "./size"
import { TextStyle } from "react-native"

interface styeleProps {
    
    text_light_black_semibold: TextStyle,
    text_light_black_bold: TextStyle,
    text_light_black_medium: TextStyle,
    text_light_black_regular: TextStyle,
    text_white_semibold: TextStyle,
    text_white_bold: TextStyle,
    text_white_medium: TextStyle,
    text_white_regular: TextStyle,
}

const CS: styeleProps = {
    text_light_black_semibold: {
        color: colors.light_black,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_light_black_bold: {
        color: colors.light_black,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_light_black_medium: {
        color: colors.light_black,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_light_black_regular: {
        color: colors.light_black,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },
    text_white_semibold: {
        color: colors.white,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_white_bold: {
        color: colors.white,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_white_medium: {
        color: colors.white,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_white_regular: {
        color: colors.white,
        fontSize: size._8,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },
}
export default CS