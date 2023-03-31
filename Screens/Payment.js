import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonPink from "../components/matbutton";

export default function Payment(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.monthlyPlan}>MONTHLY PLAN</Text>
      <Text style={styles.loremIpsum}>
        REGULAR PRICE: 200 PKR{"\n"}OFFER PRICE :{"\t"} 100 PKR
      </Text>
      <MaterialButtonPink
        caption="ACTIVATE PLAN 1"
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      <MaterialButtonPink
        caption="ACTIVATE PLAN 2"
        style={styles.materialButtonPink1}
      ></MaterialButtonPink>
      <Text style={styles.loremIpsum1}>
        REGULAR PRICE: 500 PKR{"\n"}OFFER PRICE :{"\t"} 200 PKR
      </Text>
      <Text style={styles.monthlyPlan1}>3 MONTHS PLAN</Text>
      <Text style={styles.halfYearPlan}>Half Year PLAN</Text>
      <Text style={styles.loremIpsum2}>
        REGULAR PRICE: 1000 PKR{"\n"}OFFER PRICE :{"\t"} 300 PKR
      </Text>
      <MaterialButtonPink
        caption="ACTIVATE PLAN 3"
        style={styles.materialButtonPink2}
      ></MaterialButtonPink>
      <Text style={styles.monthlyPlan3}>12 Months PLAN</Text>
      <Text style={styles.loremIpsum3}>
        REGULAR PRICE: 1500 PKR{"\n"}OFFER PRICE :{"\t"} 500 PKR
      </Text>
      <MaterialButtonPink
        caption="ACTIVATE PLAN 4"
        style={styles.materialButtonPink3}
      ></MaterialButtonPink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  monthlyPlan: {
    fontFamily: "impact-regular",
    color: "rgba(1,32,68,1)",
    fontSize: 20,
    marginTop: 123,
    marginLeft: 94
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 18,
    marginLeft: 71
  },
  materialButtonPink: {
    height: 36,
    width: 119,
    marginTop: 10,
    marginLeft: 106
  },
  materialButtonPink1: {
    height: 36,
    width: 119,
    marginTop: 110,
    marginLeft: 106
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: -89,
    marginLeft: 71
  },
  monthlyPlan1: {
    fontFamily: "impact-regular",
    color: "rgba(1,32,68,1)",
    fontSize: 20,
    marginTop: -75,
    marginLeft: 94
  },
  halfYearPlan: {
    fontFamily: "impact-regular",
    color: "rgba(1,32,68,1)",
    fontSize: 20,
    marginTop: 117,
    marginLeft: 94
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 71
  },
  materialButtonPink2: {
    height: 36,
    width: 119,
    marginTop: 15,
    marginLeft: 108
  },
  monthlyPlan3: {
    fontFamily: "impact-regular",
    color: "rgba(1,32,68,1)",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 94
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 15,
    marginTop: 17,
    marginLeft: 71
  },
  materialButtonPink3: {
    height: 36,
    width: 119,
    marginTop: 23,
    marginLeft: 108
  }
});