import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ============================================
// 1. SANG VETERAN: CLASS COMPONENT
// ============================================
class KartuClass extends Component {
  render() {
    return (
      <View style={styles.cardClass}>
        <Text style={ styles.textWhite}>Halo, saya dari Class Component!</Text>
        <Text style={styles.textSub}>Sintaks saya lebih panjang dan butuh render()</Text>
      </View>
    );
  }
}

// ============================================
// 2. SANG BINTANG BARU: FUNCTIONAL COMPONENT
// ============================================
const KartuFunctional = () => {
  return (
    <View style={styles.cardFunc}>
      <Text style={styles.textWhite}>Halo, saya dari Functional Component!</Text>
      <Text style={styles.textSub}>Sintaks saya ringkas, murni sebuah fungsi biasa</Text>
    </View>
  );
};

// ============================================
// KOMPONEN UTAMA (INDUK)
// ============================================
export default function KartuComponents() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perbandingan Komponen</Text>
      {/* Memanggil kedua komponen di layar */}
      <KartuClass />
      <KartuFunctional />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  cardClass: {
    backgroundColor: '#0056a0', // Biru
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  cardFunc: {
    backgroundColor: '#2E7D32', // Hijau
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textWhite: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSub: {
    color: '#D1E8FF',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  }
});