import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import AppImages from '../../../assets/images';
import styles from './styles';
import GS from '../../../utils/styles';
import SafeAreaView from 'react-native-safe-area-view';

interface ToolbarProps {
  isExtraSpace?: boolean;
  isRightButton?: boolean;
  isLeftButton?: boolean;
  title?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onRightClickListener?: () => void;
  onLeftClickListener?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = props => {
  const {
    isExtraSpace,
    isLeftButton,
    title,
    leftIcon,
    rightIcon,
    isRightButton,
    onLeftClickListener,
    onRightClickListener,
  } = props;
  return (
    <SafeAreaView
      forceInset={{top: 'always', bottom: 'never'}}
      style={styles.saContainer}>
      <View style={styles.vToolbarContainer}>
        <Pressable
          style={styles.pImageContainer}
          onPress={isLeftButton ? onLeftClickListener : null}>
          {isLeftButton ? leftIcon : null}
        </Pressable>
        <Text style={[GS.text_white_medium, styles.tTitle]}>{title}</Text>
        <Pressable
          style={styles.pImageContainer}
          onPress={isRightButton ? onRightClickListener : null}>
          {isRightButton ? rightIcon : null}
        </Pressable>
      </View>
      {isExtraSpace ? <View style={styles.vExtraSpace} /> : null}
    </SafeAreaView>
  );
};
Toolbar.defaultProps = {
  leftIcon: <View />,
};
export default Toolbar;
