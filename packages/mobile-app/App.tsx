import React from 'react'
import { RecoilRoot } from 'recoil'
import { StatusBar } from 'expo-status-bar'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'

// Inject Dependencies
import 'react-native-gesture-handler'

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">HOME</Text>
  </Layout>
)

export default () => (
  <RecoilRoot>
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
        <StatusBar />
      </ApplicationProvider>
    </NavigationContainer>
  </RecoilRoot>
)
