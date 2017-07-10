import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { SelfieScreen, RankingScreen, UserModalScreen } from '~/screens';
import colors from '~/config/colors';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.tabBarBorder,
  },
  headerTitleStyle: {
    fontSize: 17,
    fontFamily: 'open-sans-bold',
  },
};

const tabBarOptions = {
  activeTintColor: colors.secondary,
  inactiveTintColor: colors.tabBar,
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarComponent: TabBarBottom,
  labelStyle: {
    fontFamily: 'open-sans',
    fontSize: 12,
  },
  style: {
    backgroundColor: colors.primary,
    height: 49,
    borderTopWidth: 1,
    borderTopColor: colors.tabBarBorder,
  },
};

const TabLayout = TabNavigator(
  {
    Selfie: {
      screen: SelfieScreen,
    },
    Ranking: {
      screen: RankingScreen,
    },
  },
  { initialRouteName: 'Selfie', tabBarOptions, navigationOptions }
);

export default StackNavigator(
  {
    TabLayout: { screen: TabLayout },
    UserModal: { screen: UserModalScreen },
  },
  { mode: 'modal', navigationOptions }
);
