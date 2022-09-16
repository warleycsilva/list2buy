import AsyncStorage from '@react-native-async-storage/async-storage';
export const setOnboardingData = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('onboarding', value.toString());
  } catch {
    console.error('Failed to set store data (onboarding)');
  }
};
export const getOnboardingData = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem('onboarding');
    return value != null && value === 'true';
  } catch {
    console.error('Failed to get store data (onboarding)');
    return false;
  }
};
