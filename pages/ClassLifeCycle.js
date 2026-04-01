import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

// Komponen Anak : timer (punya umur/lifecycle)
class TimerLifeCycle extends Component {
    // FASE 0 : INISIALISASI
    constructor(props) {
        super(props);
        this.state = {
            detik: 0
        }
        console.log("0.[CONSTRUKTOR] Memori disiapkan untuk anak");
    }   

    // FASE 1 : LAHIR (MOUNTING)
    componentDidMount() {
        console.log("1. [MOUNTING] Anak Lahir! Timer mulai berjalan.");
        
        // Jalankan timer tiap 1 detik (1000ms)
        this.interval = setInterval(() => {
            this.setState(state => ({ detik: this.state.detik + 1 }));
            
            // TAMBAHKAN LOG DI SINI UNTUK DEMO MEMORY LEAK!
            console.log(`🔥 [BACKGROUND TIMER] Berjalan: ${this.state.detik} detik`);
        }, 1000);
    }

    // FASE 2 : TUMBUH/UPDATE (Updating)
    componentDidUpdate(prevProps, prevState) {
        console.log(`2. [UPDATING] Waktu bertambah: ${prevState.detik} -> ${this.state.detik} detik`);
    }

    // FASE 3 : MATI (Unmounting)
    componentWillUnmount() {
        console.log("3. [UNMOUNTING] Anak Mati! Timer dimatikan (Cleanup).");
        // BERSIH-BERSIH MEMORI
        clearInterval(this.interval);
    }

    render() {
        return (
            <View style={styles.timerBox}>
                <Text style={styles.timerText}>{this.state.detik}</Text>
                <Text>Detik Berjalan</Text>
            </View>
        );
    }
}
// ============================================
// KOMPONEN UTAMA: INDUK PENGENDALI
// ============================================
export default class App extends Component {
    state = { tampilkanTimer: false };

    toggleTimer = () => {
        this.setState({ tampilkanTimer: !this.state.tampilkanTimer });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Demo Lifecycle Komponen</Text>
                
                <View style={styles.content}>
                    {/* CONDITIONAL RENDERING: Menentukan anak lahir atau mati */}
                    {this.state.tampilkanTimer ? (
                        <TimerLifeCycle />
                    ) : (
                        <Text style={styles.infoText}>Komponen Anak Belum Lahir</Text>
                    )}
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button
                        title={this.state.tampilkanTimer ? "Hancurkan Komponen (Unmount)" : "Lahirkan Komponen (Mount)"}
                        color={this.state.tampilkanTimer ? "#D32F2F" : "#0056A0"}
                        onPress={this.toggleTimer}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    content: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    timerBox: {
        backgroundColor: '#FFF',
        padding: 40,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        minWidth: 200,
        minHeight: 150,
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2E7D32',
    },
    infoText: {
        fontSize: 16,
        color: '#888',
        fontStyle: 'italic',
    },
    buttonContainer: {
        marginTop: 40,
        width: '80%',
    }
});