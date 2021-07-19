import React from 'react'
import { RecoilRoot } from 'recoil'
import { StatusBar } from 'expo-status-bar'
import { ApplicationProvider } from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'

// Inject Dependencies
import 'react-native-gesture-handler'

// Internal Dependencies
import Main from './application/main'

export default () => (
  <RecoilRoot>
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Main />
        <StatusBar />
      </ApplicationProvider>
    </NavigationContainer>
  </RecoilRoot>
)
