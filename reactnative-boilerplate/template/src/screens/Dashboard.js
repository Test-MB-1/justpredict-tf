import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { dashboardAction } from "../redux/actions/dashboardAction";
import { useTheme } from "@react-navigation/native";
import ColorConstants from "../theme/Colors";
import { switchTheme } from "../redux/actions/themeActions";
import Strings from "../utils/Strings";
import FlatlistCardComponent from "../reusableComponents/FlatlistCardComponent";
import NavigationService from "../navigation/NavigationService";
import { normalize } from "../utils/Metrics";

const getGlobalStyles = (props) =>
  StyleSheet.create({
    dashboardContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      marginTop: normalize(5),
      marginBottom: normalize(5),
    },
    dashbaordFlatlistSeparator: {
      height: 0.8,
      width: "100%",
      backgroundColor: "#000",
      marginTop: normalize(10),
      marginBottom: normalize(10),
    },
    dashboardImgMovies: {
      flex: 0.4,
      height: 80,
      borderRadius: 7,
      aspectRatio: 1.0,
      resizeMode: "contain",
      justifyContent: "center",
      marginLeft: normalize(10),
    },
    dashboardTxtMovies: {
      width: "100%",
      textAlignVertical: "center",
      padding: normalize(10),
      color: props.colors.text,
    },
    dashboardRatingMovies: {
      width: "100%",
      margin: normalize(10),
    },
    switchStyle: {
      alignSelf: "center",
      marginVertical: normalize(10),
      marginHorizontal: normalize(10),
    },
    darkModeParent: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    darkModeText: { color: props.colors.text },
  });

function useGlobalStyles() {
  const { colors } = useTheme();
  const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);
  return styles;
}

function Dashboard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardAction(props));
  }, []);

  const currentTheme = useSelector((state) => state.themeReducer.theme);
  const loading = useSelector((state) => state.appReducer.loading);
  const dashboardData = useSelector(
    (state) => state.dashboardReducer.dashboardData
  );
  const dashboardError = useSelector(
    (state) => state.dashboardReducer.dashboardError
  );

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(switchTheme(currentTheme));
  };

  const flatListItemSeparator = () => {
    return <View style={styles.dashbaordFlatlistSeparator} />;
  };

  const renderItem = ({ item, index }) => {
    return (
      <FlatlistCardComponent
        navigateTo={() => NavigationService.navigate("Details", { item: item })}
        item={item}
        color={colors.text}
      />
    );
  };

  const styles = useGlobalStyles();
  return (
    <View>
      <View style={styles.darkModeParent}>
        <Text style={styles.darkModeText}>{Strings.switchThemeText}</Text>
        <Switch
          style={styles.switchStyle}
          trackColor={{
            false: ColorConstants.silverDark,
            true: ColorConstants.skyBlue,
          }}
          thumbColor={ColorConstants.white}
          ios_backgroundColor={ColorConstants.silverDark}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <FlatList
        data={dashboardData !== undefined ? dashboardData : []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={flatListItemSeparator}
      />
    </View>
  );
}

export default Dashboard;
