    var map;
    var infoWindow;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 21.340627, lng: -32.729438},
        gestureHandling: 'greedy',
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: false
      });

      google.maps.event.addListener(map, "click", function(event) {
        infoMorocco.close();
        infoSevilla.close();
        infoZan.close();
        infoTan.close();
        infoNewYork.close();
        infoFlorida.close();
        infoGeo.close();
        infoSouth.close();
        infoNC.close();
        infoVA.close();
        infoWY.close();
        infoCO.close();
        infoNM.close();
        infoUT.close();
        infoAZ.close();
        infoCali.close();
        infoWas.close();
        infoOregon.close();
        infoSD.close();
        infoHawaii.close();
      });


      // Morocco
      const infoMorocco = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://lh3.googleusercontent.com/PDPuh-z5MtFSZHuGqtimADrAJ9XPogHM0fEbqERknXEDqR91zsuC-UNO52u_uam1QUg97ao6zD-Xtn1yZgxUc6L2Hdfn0ctQ6q-rruaMzsWWUBATzr071oOgLlUDOn7eBX6_35ZE-hA=w2400">
          <p>Stuff about morocco</p>
        </div>
        `,
        maxWidth: 300
      });
      var moroccoImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(32.116999, -6.212934); //or wherever you want the marker placed
      var morocco = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: moroccoImg
      });
      morocco.addListener("click", () => {
        infoMorocco.open(map, morocco);
      });



      // Sevilla
      const infoSevilla = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://lh3.googleusercontent.com/2-zq8o3MDlSm2xfCISrXlFTvZrGdflQTiHjtPbJiz9tTvJVICnP-BzDckOYwsDfv94JJRLCdDY9e-GZJGFTP3_JWxuFUkCthORqHAl0DIl_gRMgPlG9abYYuC_OEIZ-z49KbW2Zctbs=w2400">
          <p>Stuff about sevilla</p>
        </div>
        `,
        maxWidth: 300
      });
      var sevillaImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(40.256059, -3.529208); //or wherever you want the marker placed
      var sevilla = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: sevillaImg
      });
      sevilla.addListener("click", () => {
        infoSevilla.open(map, sevilla);
      });



      // Zanzibar
      const infoZan = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Zanzibar</p>
        </div>
        `,
        maxWidth: 300
      });
      var zanImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(-6.111885, 39.324416); //or wherever you want the marker placed
      var zan = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: zanImg
      });
      zan.addListener("click", () => {
        infoZan.open(map, zan);
      });


      // Tanzania
      const infoTan = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Tanzania</p>
        </div>
        `,
        maxWidth: 300
      });
      var tanImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(-6.747360, 34.783221); //or wherever you want the marker placed
      var tan = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: tanImg
      });
      tan.addListener("click", () => {
        infoTan.open(map, tan);
      });


      // New York
      const infoNewYork = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about New York</p>
        </div>
        `,
        maxWidth: 300
      });
      var newyorkImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(42.807471, -75.958392); //or wherever you want the marker placed
      var newyork = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: newyorkImg
      });
      newyork.addListener("click", () => {
        infoNewYork.open(map, newyork);
      });



      // Florida
      const infoFlorida = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Florida</p>
        </div>
        `,
        maxWidth: 300
      });
      var floridaImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(28.29021, -81.788331); //or wherever you want the marker placed
      var florida = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: floridaImg
      });
      florida.addListener("click", () => {
        infoFlorida.open(map, florida);
      });



      // Georgia
      const infoGeo = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about georgia</p>
        </div>
        `,
        maxWidth: 300
      });
      var geoImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(32.526291, -83.401837); //or wherever you want the marker placed
      var georgia = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: geoImg
      });
      georgia.addListener("click", () => {
        infoGeo.open(map, georgia);
      });



      // South Carolina
      const infoSouth = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about south carolina yee yee</p>
        </div>
        `,
        maxWidth: 300
      });
      var southImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(33.789399, -80.561299); //or wherever you want the marker placed
      var south = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: southImg
      });
      south.addListener("click", () => {
        infoSouth.open(map, south);
      });


      // North Carolina
      const infoNC = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about nc</p>
        </div>
        `,
        maxWidth: 300
      });
      var ncImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(35.462047, -78.802503); //or wherever you want the marker placed
      var nc = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: ncImg
      });
      nc.addListener("click", () => {
        infoNC.open(map, nc);
      });



      // Virginia
      const infoVA = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about va</p>
        </div>
        `,
        maxWidth: 300
      });
      var vaImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(37.312589, -78.467159); //or wherever you want the marker placed
      var va = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: vaImg
      });
      va.addListener("click", () => {
        infoVA.open(map, va);
      });



      // Wyoming
      const infoWY = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about wy</p>
        </div>
        `,
        maxWidth: 300
      });
      var wyImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(42.860654, -107.642928); //or wherever you want the marker placed
      var wy = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: wyImg
      });
      wy.addListener("click", () => {
        infoWY.open(map, wy);
      });



      // Colorado
      const infoCO = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about colorado</p>
        </div>
        `,
        maxWidth: 300
      });
      var coImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(38.426616, -105.764506); //or wherever you want the marker placed
      var co = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: coImg
      });
      co.addListener("click", () => {
        infoCO.open(map, co);
      });


      // New Mexico
      const infoNM = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about new mexico</p>
        </div>
        `,
        maxWidth: 300
      });
      var nmImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(33.850678, -106.174570); //or wherever you want the marker placed
      var nm = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: nmImg
      });
      nm.addListener("click", () => {
        infoNM.open(map, nm);
      });


      // Utah
      const infoUT = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about mormon land</p>
        </div>
        `,
        maxWidth: 300
      });
      var utIMG = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(38.928575, -111.815590); //or wherever you want the marker placed
      var ut = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: utIMG
      });
      ut.addListener("click", () => {
        infoUT.open(map, ut);
      });



      // Arizona
      const infoAZ = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about arizona</p>
        </div>
        `,
        maxWidth: 300
      });
      var azImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(34.049039, -111.741706); //or wherever you want the marker placed
      var az = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: azImg
      });
      az.addListener("click", () => {
        infoAZ.open(map, az);
      });



      // Cali
      const infoCali = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about cali</p>
        </div>
        `,
        maxWidth: 300
      });
      var caliImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(36.362943, -119.771445); //or wherever you want the marker placed
      var cali = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: caliImg
      });
      cali.addListener("click", () => {
        infoCali.open(map, cali);
      });


      // Washington
      const infoWas = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about washington</p>
        </div>
        `,
        maxWidth: 300
      });
      var wasImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(47.210765, -119.998775); //or wherever you want the marker placed
      var was = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: wasImg
      });
      was.addListener("click", () => {
        infoWas.open(map, was);
      });



      // Oregon
      const infoOregon = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about oregon</p>
        </div>
        `,
        maxWidth: 300
      });
      var oregonImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(43.709256, -120.665154); //or wherever you want the marker placed
      var oregon = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: oregonImg
      });
      oregon.addListener("click", () => {
        infoOregon.open(map, oregon);
      });



      // South Dakota
      const infoSD = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about South Dakota</p>
        </div>
        `,
        maxWidth: 300
      });
      var sdImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(44.346214, -100.325449); //or wherever you want the marker placed
      var sd = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: sdImg
      });
      sd.addListener("click", () => {
        infoSD.open(map, sd);
      });



        
    // Hawaii
      const infoHawaii = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Hawaii</p>
        </div>
        `,
        maxWidth: 300
      });
      var HawaiiImg = {
        url: "https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(20.783235, -156.337735); //or wherever you want the marker placed
      var Hawaii = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: HawaiiImg
      });
      Hawaii.addListener("click", () => {
        infoHawaii.open(map, Hawaii);
      });



    }
