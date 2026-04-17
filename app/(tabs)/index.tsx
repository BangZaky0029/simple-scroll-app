import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Halaman Beranda</Text>
          <Text style={styles.headerSubtitle}>Contoh Implementasi ScrollView 1</Text>
        </View>

        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatar} />
              <View>
                <Text style={styles.cardTitle}>Benda ke-{i + 1}</Text>
                <Text style={styles.cardDesc}>Ini adalah deskripsi untuk item ke-{i+1}</Text>
              </View>
            </View>
            <View style={styles.placeholderImage} />
            <Text style={styles.cardText}>
              ScrollView memungkinkan kita untuk menggulir konten jika melebihi ukuran layar. 
              Ini sangat berguna untuk daftar panjang atau konten dinamis di aplikasi react native kita.
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: StatusBar.currentHeight,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  cardDesc: {
    fontSize: 14,
    color: '#6b7280',
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});
