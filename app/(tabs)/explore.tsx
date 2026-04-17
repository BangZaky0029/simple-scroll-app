import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Halaman Jelajahi</Text>
        <Text style={styles.headerSubtitle}>Scroll Horizontal & Vertical</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kategori Terpopuler</Text>
          {/* Horizontal ScrollView */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {['Pendidikan', 'Teknologi', 'Kesehatan', 'Olahraga', 'Seni', 'Hiburan'].map((kategori, idx) => (
              <TouchableOpacity key={idx} style={styles.categoryChip}>
                <Text style={styles.categoryText}>{kategori}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rekomendasi Untukmu</Text>
          {/* Vertical items in ScrollView */}
          {Array.from({ length: 8 }).map((_, i) => (
            <View key={i} style={styles.recommendationCard}>
              <View style={styles.recommendationImage} />
              <View style={styles.recommendationInfo}>
                <Text style={styles.recommendationTitle}>Artikel Menarik {i + 1}</Text>
                <Text style={styles.recommendationDesc}>Pelajari lebih lanjut tentang topik menarik ini untuk memperluas wawasanmu.</Text>
                <TouchableOpacity style={styles.readButton}>
                  <Text style={styles.readButtonText}>Baca Sekarang</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginLeft: 20,
    marginBottom: 12,
  },
  horizontalScroll: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  categoryChip: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  recommendationCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  recommendationImage: {
    width: 80,
    height: 80,
    backgroundColor: '#cbd5e1',
    borderRadius: 12,
    marginRight: 16,
  },
  recommendationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 4,
  },
  recommendationDesc: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  readButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  readButtonText: {
    fontSize: 12,
    color: '#0f172a',
    fontWeight: '600',
  },
});
