import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import CountCard from "../components/CountCard";

const Ranking = (props) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <CountCard
          title="Island Rank"
          value="1"
          card={styles.card}
          text={styles.text}
          valueStyle={styles.value}
        />
        <CountCard
          title="World Rank"
          value="401-500"
          card={styles.card}
          text={styles.text}
          valueStyle={styles.value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: "45%",
    borderColor: Colors.pink,
    borderWidth: 1,
  },
  text: {
    color: Colors.pink,

    textAlign: "center",
  },
  value: {
    color: Colors.bottomBar,
    fontSize: 25,
    textAlign: "center",
  },
});

export default Ranking;
