import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/gifts/home";
import { Search } from "../views/gifts/search";
import { GiftList } from "../views/gifts/list";
import { Catalog } from "../views/gifts/catalog";
import GiftsNavigator from "./gifts";
import OnboardingNavigator from "./onboarding";
import { useEffect, useState } from "react";
import { getOnboardingData } from "../store/storage/onboarding";

const StackMain = createNativeStackNavigator();

export default function MainNavigator() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] =
    useState<boolean>(false);
  useEffect(() => {
    updateOnboardingInfo();
    async function updateOnboardingInfo() {
      const completed = await getOnboardingData();
      setHasCompletedOnboarding(completed);
    }
  }, [hasCompletedOnboarding]);
  return <StackMain.Navigator initialRouteName={hasCompletedOnboarding ? 'Gifts' : 'Onboarding'}>
    <StackMain.Screen
      name={"Gifts"}
      component={GiftsNavigator}
      options={{
        headerShown: false,
      }}
    />
    <StackMain.Screen
      name={"Onboarding"}
      component={OnboardingNavigator}
      options={{
        headerShown: false,
      }}
    />
  </StackMain.Navigator>;
}
