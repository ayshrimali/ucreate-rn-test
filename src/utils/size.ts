import { Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const FindSize = (size: number) => {
    return parseFloat(JSON.stringify(2 * size * width / 375))
};

export const size = {
    // Font Sizes
    _12_5: FindSize(12.5),
    _11: FindSize(11),
    _12: FindSize(12),
    _13: FindSize(13),
    _14: FindSize(14),
    _9: FindSize(9),
    _9_5:FindSize(9.5),
    _10: FindSize(10),
    _8_5: FindSize(8.5),
    _8: FindSize(8),
    _7_5: FindSize(7.5),
    _7: FindSize(7),
    _6_5: FindSize(6.5),
    _6: FindSize(6),
    _5: FindSize(5),

    // Other Sizes
    _15: FindSize(15),
    _16: FindSize(16),
    _17: FindSize(17),
    _20: FindSize(20),
    _24: FindSize(24),
    _28: FindSize(28),
    _32: FindSize(32),
    _40: FindSize(40),
    _50: FindSize(50),
    FindSize
}