import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import styles from './Styles/LoadingIndicatorStyles'

export default class LoadingIndicator extends React.Component {

    render() {
        return (
            <View style={styles.loadingContainer}>
                <View style={styles.loadingIntrisics}>
                    <ActivityIndicator color='white' />
                    <Text style={styles.loadingText}>Carregando</Text>
                </View>
            </View>
        )
    }
}