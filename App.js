import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
// import {
//   Table,
//   TableWrapper,
//   Row,
//   Rows,
//   Col,
//   Cols,
//   Cell,
// } from "react-native-table-component";
import { DataTable } from "react-native-paper";

export default function App() {
  const [alimento, setAlimento] = useState(null);

  fetch("https://api.nutriadviser.net/alimentos/12")
    .then((response) => response.json())
    .then((json) => {
      setAlimento(json.nombre);
    });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://api.nutriadviser.net/alimentos");
    const data = await resp.json();
    console.log(data[0]);
    setData(data[0].nombre);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading..</Text>}
      {data && (
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Energia</DataTable.Title>
            <DataTable.Title>Protehinasa</DataTable.Title>
            <DataTable.Title>Grasas</DataTable.Title>
            <DataTable.Title>Carbohidratos</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Radhika</DataTable.Cell>
            <DataTable.Cell>Dosa</DataTable.Cell>
            <DataTable.Cell>23</DataTable.Cell>
            <DataTable.Cell>23</DataTable.Cell>
            <DataTable.Cell>23</DataTable.Cell>
            <DataTable.Cell>23</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Krishna</DataTable.Cell>
            <DataTable.Cell>Uttapam</DataTable.Cell>
            <DataTable.Cell>26</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Vanshika</DataTable.Cell>
            <DataTable.Cell>Brownie</DataTable.Cell>
            <DataTable.Cell>20</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Teena</DataTable.Cell>
            <DataTable.Cell>Pizza</DataTable.Cell>
            <DataTable.Cell>24</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    overflow: "scroll",
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
