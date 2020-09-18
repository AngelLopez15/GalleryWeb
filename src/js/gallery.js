document.getElementById('gallery') && new Macy({
  container: '#gallery',
  trueOrder: false,
  waitForImages: false,
  useOwnImageLoader:false,
  mobileFirst:true,
  columns: 1,
  margin: {
    y:15,
    x:15
  },
  breakAt: {
    1200: 5,
    940: 3,
    520: 1
  }
});
