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
        url: "https://lh3.googleusercontent.com/PDPuh-z5MtFSZHuGqtimADrAJ9XPogHM0fEbqERknXEDqR91zsuC-UNO52u_uam1QUg97ao6zD-Xtn1yZgxUc6L2Hdfn0ctQ6q-rruaMzsWWUBATzr071oOgLlUDOn7eBX6_35ZE-hA=w2400",
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
        url: "https://lh3.googleusercontent.com/2-zq8o3MDlSm2xfCISrXlFTvZrGdflQTiHjtPbJiz9tTvJVICnP-BzDckOYwsDfv94JJRLCdDY9e-GZJGFTP3_JWxuFUkCthORqHAl0DIl_gRMgPlG9abYYuC_OEIZ-z49KbW2Zctbs=w2400",
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
        url: "https://lh3.googleusercontent.com/446t73gfwQ7V7mtEEMb56j1Ot_SW9UkszaW6RXKWD0K_3fJj1ONPTZoFxQit5NUK8bjkNfTn2YYd1r7zy9NSphZVjmu5__gx24pFLS_NtPGSMFl8xkXI9kmVBXEOQmZpX_8rs2VW2Xs=w2400",
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
        url: "https://lh3.googleusercontent.com/pIUUlF2X4Fa-23Qj9eURJEMi43iRWwz0Y_D-aHZl96WPtkSzsxif6uvAyY8pOT4c5aHoA5ShlUijyetUp4SePbOI2YiXIpAk5706j5bvjgFo70tBWyKgtM9RkR5DPksjb2mhHAMSfZY=w2400",
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
        url: "https://lh3.googleusercontent.com/hbhBdH0LyGcDVngovki1DzpqyV5eJo7k8BeorQdqTgqCDa6WnjHew7_uzt5YK6vUex8WDWn-LSo1IvqXGyrtf1anTWRjJgckJl5SOWLEC_Tu11hbY9HSWffkmCvOpMXCuYFiT1YAa9U=w2400",
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
        url: "https://lh3.googleusercontent.com/3E9LW1MryKc4b5YwW3lqyy0r6EDxqScsl-U1vrOULJnV5HuSiine_rA1-wszTi367qnD8h5ZiJanHGBCGc3BsjkU57uP8sOMsbpEMGTI0I1hBMisp5v_QcqFbyWk33nvyY-Hby6CeGk=w2400",
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
        url: "https://lh3.googleusercontent.com/JewDjEojyKAhfB33mv3_LDs8aK0ycHgwPGjEJhycfXQxBVGuGlWjz79mWdM6C_D0u5E1eqosoZqpgFjsd1DMZbUL2eTUx3zXH9cinAoRAPDhkX0OMCa7roiqmPjZ00-4cDIMhzZP_vw=w2400",
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
        url: "https://lh3.googleusercontent.com/0YA0QTdDIpe9tpwhd89_AUC3oFOs9zXdQzKuARyDjCzZ165tqNfnHjdZ85hWUnE7VlXdyUVSr0QlCfYfXFVCzm5fZlVHGJZkgdePwNzSoaBP12V6iJZwlmq6kuwgVZmHkH4K9wxvZp8=w2400",
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
        url: "https://lh3.googleusercontent.com/0TA4RqYpf84J6Sy7fMEch6DwgkxfscaGE4iz_2xA-VSnGThnE5X17lOZ63houcwmGdlLP6aGHj-TWdojTQvPFgXfBiKUTGc0wP7MNgLRj06N0Fx375UlFu0374rev3eIBMgCX5x2Zc8=w2400",
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
        url: "https://lh3.googleusercontent.com/AVwPTev6-nWXlofj8hK6hXb42oWX76zrOun3Edy9JVEnDr-vukP6ReqVfBN68IACPrhye_zP6OJ7ln5wEDmhOEbJrUNfQm4md2BXcH197prM8EhZthfe9mhRy1EGXy1HaMAliJKUy8Q=w2400",
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
        url: "https://lh3.googleusercontent.com/mxd8RTYSqVUnzJWZRKKFQ3t37h0n0xKRc7x98QeLzFnj8CtWKp8IBaRyhoV1pfjKChdkxRkBunNz_KN-rAEyrgTqv2rgLdWaDoDKgQIZbzpTLtV45kOt35ZA7FE0J75nMs6it4C6ClY=w2400",
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
        url: "https://lh3.googleusercontent.com/P1uJcWwMx-wJt-uBTIkv7MgqOeg5Rd5oNASmbstsCVDN3tfur-XE3x3ci0sk7-QzHumhhzmxkUZwRnPSxHVT_gcbH5QZT-5fTWj6EY0i-so2D03xyqZAR8dFUlNpBPEChhWnOo7XGbY=w2400",
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
        url: "https://lh3.googleusercontent.com/f1MOZqubRgbvJD0pfyNjX_p-iq91SEsYz05qhJG19nm6LcecZ4KOIRwJArKBMQI58TTdIsafx48NoZivJDc7UKQBqVFs2yLEGecg0szzWO8mGmSd9IWqQzDmt-FKvUyBoJ_9tQM-_24=w2400",
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
        url: "https://lh3.googleusercontent.com/lDtIXYOxkNJk8eZsOs9WxfEVk_kquqDpAr7AHWQDrc0k0GVi-GtR9rte_dkDG8IUwB1WA3KGx4t_rLNC3nX2YPQuBPNdYhB93N6osC8YQ1e6nOaercrvfDGh88nKobxeZn8Js_ZAzSI=w2400",
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
        url: "https://lh3.googleusercontent.com/JKLgvuagf7zJF1TRZY9EDbhZpomSuiDq-bM3el3ff5405Wo6yAbg_hgw_jcCCdBx0dwZZibj9T_9lOOD2EY5AxaZPKDYWeXK-AJ9pwp8EOHJUgAA2adFZnK1bbdoV8zWx8TKGPMwy9g=w2400",
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
        url: "https://lh3.googleusercontent.com/eqjv59XRkap5NNfpedVk5xv7Q9rRQl52k3BZt1ZgPUBZBbkTD8lraEeYqfF49211d_5qIRIeTQzet7JxuUMFxlju8iPAqC8UK7xOfbebWKJ4fRMQumT4msUbf6macdfsxii7VjZJ_Dw=w2400",
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
        url: "https://lh3.googleusercontent.com/ezzLmJb49oaBhWto8c2CM4hpW2xV4XCvbMEnt7Deh-pyBkucGS-hCm5BzQi-ZzKsmkrheSX86sJnLZ6T6pNPAJSfHErr9z7mIom36Gvs1dHZR2mY7sVvhfK89WPAbkOJ5akLQ5Nk5DI=w2400",
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
        url: "https://lh3.googleusercontent.com/giapzSeISlqU-qB292Y7dwMNJTHRLkygOSk6FsfvFaEnR9b_j-g42zD7S-GKvYLFX7QtvajD2msMeJoPARWtniE8XUSViZdrut-DmxM4hdxH2XCmsJjRqfC1OIX4eloYNih1lr2FDgs=w2400",
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
        url: "https://lh3.googleusercontent.com/6fmpAqlORYzQKmxVn6R008MoqMLm54byDhCRzV4h4S2rwzCUjzcO3UbkowV8HXCKi-nkK_x02MPIqNf7t7_zlnm9M61xeIuk9tsUhDG1e91B606_r81lsOYX9s5VAQUNLh-nKSlbsaw=w2400",
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
        url: "https://lh3.googleusercontent.com/chgL_yFph1t2AUuUc1u5L0lpmy1XQZaskH3jPzWEAuhfODvi-pRy-8unzl8fev75BtgBfowfaiy06Ha1nvHqCJi3euJWkZdXt-3Q6_4z14DY2P7PuCCik7VwRvVeyyrE5hMW8Bo-qnQ=w2400",
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


        
        
             
    // Canada
      const infoCanada = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Canada</p>
        </div>
        `,
        maxWidth: 300
      });
      var CanadaImg = {
        url: "https://lh3.googleusercontent.com/2wRj15YQ3kUkYgQmftXIujpy7KQGBvKKbMwS5D8-B01YXhHWmiJ7cVDeJFYiR-Zw9lpOgQCx1saDbkvma5t5EWgPc-grDvTAe8NhLPTufjE63TIKUrpwX7d38olh3LKQlTMhuqlOUJE=w2400",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(54.485306, -98.679297); //or wherever you want the marker placed
      var Canada = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: CanadaImg
      });
      Canada.addListener("click", () => {
        infoCanada.open(map, Canada);
      });


        
        
       // Tennessee
      const infoTennessee = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <img width="50%" src="https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png">
          <p>Stuff about Tennessee</p>
        </div>
        `,
        maxWidth: 300
      });
      var TennesseeImg = {
        url: "https://lh3.googleusercontent.com/Ck7RPd0GZsd58z6IfRge21sIjxplF334qc07NbJLHY7hGk3sG2QQj4XLgUTQMe1EhGyA4RDrep5qgMLEPYcx6iGbfgnCSvamuHsiE584t48uQkA4Uy37c_5WWK49AEscXZ2dP3wDnKU=w2400",
        scaledSize: new google.maps.Size(50, 50)
      }
      var myLatLng = new google.maps.LatLng(35.941726, -86.967826); //or wherever you want the marker placed
      var Tennessee = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: TennesseeImg
      });
      Tennessee.addListener("click", () => {
        infoTennessee.open(map, Tennessee);
      });




    }
