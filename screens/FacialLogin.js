async function recognizeFace(photoUri) {
  setLoading(true);
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: photoUri,
      name: 'photo.jpg',
      type: 'image/jpeg'
    });

    const res = await fetch('https://52ve8mm1q0ra.share.zrok.io/recognize', {
      method: 'POST',
      headers: { 'skip_zrok_interstitial': 'true' },
      body: formData
    });

    const data = await res.json();
    if (res.ok) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', data.message || 'No se reconoció el rostro');
    }
  } catch (error) {
    Alert.alert('Error de red', error.message);
  } finally {
    setLoading(false);
  }
}
