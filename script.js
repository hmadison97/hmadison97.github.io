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
        infoCanada.close();
        infoTennesee.close();
        infoChicago.close();
        infoWV.close();        
      });


      // Morocco
      const infoMorocco = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <p>Chefchaouen and Fes, Morocco</p>
          <img width="100%" src="https://lh3.googleusercontent.com/PDPuh-z5MtFSZHuGqtimADrAJ9XPogHM0fEbqERknXEDqR91zsuC-UNO52u_uam1QUg97ao6zD-Xtn1yZgxUc6L2Hdfn0ctQ6q-rruaMzsWWUBATzr071oOgLlUDOn7eBX6_35ZE-hA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/pH2iNFfSbEI-QrVXJ1Jgmn4Us6n_Ro4k70D_tbrlfnWpWp5H1IPLviPErns8hYbULRZv0_IJ_YiH_ExpnSkmG92eWsjVZNX39nABim-y1XBmGlWq9j6rj9sHsiiW9Ik7JXSzCV7biPM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/8nijSMQ0xQkrPgtYTAHcul5FOHXpaixIoWudlv3gNueNakh3vfH8OJElzNGnXIAkxswk21nJihJHWgd2nU28U1UibQlu0SfYJLZpOYqwmSVTjQm8JhVVOYqbKYYd1yy1MQ0C0jUvgSc=w2400">        
          <img width="100%" src="https://lh3.googleusercontent.com/b5s1900I-nf2qm8I2PjHho8OMRsLgojKOVzR4gzCbp_mM1gk8GB6L5M7V3k6rYlPfL7lEaYPwjg-u09AUKVOH3Zs4qdOjJp3p81EAVqRkS7fIUhlmPiztiI-P5OAhRHAhKGx08a8avY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/ORo9eLtz_34Fj7cjLNuAV6V_qn4mqKb9emFRjDGwgdTZowyxLNB5L2de2cfQXnO5LEq0Mv6OTNkYW18ELTYn3wayoyJ050IYBO_Ueausx6X6eZ3LG7zwrAig1qr2NxqA7bqTpk7SVXA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/shvInzBGa8uLcVaUpzlK_ulVsgj7XyGz-qrYXofL_BttTzAj7WjxeoTNJO1EzpzjBy67rck-J4oXNJi0g_SJOTirDDi2gnEB5KfHOrOq3Y16E3e_e4aI46othqfBi09_NUymJezf0m0=w2400">        
          <img width="100%" src="https://lh3.googleusercontent.com/HK6BjnRThKQsz9ODIQt8EpUMVd4su6zkOXRg_m8HAjzZfhv2-nwWbqgPPWTgngzTbCi2zTux6VK9Z-I1lceFFTunQdkh8Hc4zTRBlhNnkwEm8MOP79ClTs1qFaZXS3Kf9dP_zNSy3nk=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/VOCLrJOS2nPwwE2gtvRJa_6Lf0qwzUbzPhJyJjPrb-J8NOBWVTd-a9f7GMqVqMYJ9-mex8mgc9UZ63StUon0efdeQsY6uPDu1CcmFUKwmHkmF47BLAwcxq6NtfF78o3P8nqcOCy4WB8=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var moroccoImg = {
        url: "https://lh3.googleusercontent.com/PDPuh-z5MtFSZHuGqtimADrAJ9XPogHM0fEbqERknXEDqR91zsuC-UNO52u_uam1QUg97ao6zD-Xtn1yZgxUc6L2Hdfn0ctQ6q-rruaMzsWWUBATzr071oOgLlUDOn7eBX6_35ZE-hA=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Sevilla, Spain</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/2-zq8o3MDlSm2xfCISrXlFTvZrGdflQTiHjtPbJiz9tTvJVICnP-BzDckOYwsDfv94JJRLCdDY9e-GZJGFTP3_JWxuFUkCthORqHAl0DIl_gRMgPlG9abYYuC_OEIZ-z49KbW2Zctbs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/cNBAOk6YLxQJsSyiWDdJ99giRAylF0M7liOeC5h_ToEV5kL1Y6EVJtCU-FLpguJEfNOyr685Hf1zho7PIcH7MQ7Jyi-Hq5e2pXIWPNqOtrQZKZ356vHwzAowBAxop4Av39lpBsDoV0s=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/vJRAhDcE07cMIqy7isEA5xUHYGRWEMusJsT3fahfIao_50gHbcIsT_HnFVkkJcCcwlf64lXljQEpuwQ_T23QMkohalb6ZTc1TPpR1gAtPVln-zSDgooahXsoH4XD-cFbml0u8mSSBqA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/JklEv9SLkcIOJuvP5pGDgcfjQGvJOw28ay4ORjfWsHoeqOdlEEY11U4rNkB7C7mMw8QwS7O1IvFaRB-NNXBDnnBA4qRoFRohpX5obN18UBUemSg1FUvJDJANWilouUXBHmgg9B1chUE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/5Valh-dXdaF8EA25ukSltZ7pS32cHikspY4ubVUFlZ9lEKz9X109rG1_R7v-M1o0chcirYvL3fxQ8J2D1BA6j9fV1sBAdppKpsWgFOmwp6nvK9TNk-9GFZR_rAQzNiiPVcMvAcj_nMs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/34KalCDfYJlk02auJWrrW2ByA0f3Itlape6IJza_4DQa5Tcz5Rr8e1sUv-D-xEPhLZT6xAlVteUw5_ut8IWPZ3wMaqgKB3_2iN9B5eygJGo-UboLXhcU2Fp1qXibXlW6jeyThsB7Rmw=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/ALLl_EPKTJ2Gai3nsf5aLyaE2mZTh3wjQX4saRDRQSX03kagRt-YMGMLawhY5SyfArxTnlohnVaQdQVFPeu7mN35Ai-wAQ4fk6wGPa7BkzKznmEajc1S2ZMuqqjhojU4UQe6sYua_KA=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var sevillaImg = {
        url: "https://lh3.googleusercontent.com/2-zq8o3MDlSm2xfCISrXlFTvZrGdflQTiHjtPbJiz9tTvJVICnP-BzDckOYwsDfv94JJRLCdDY9e-GZJGFTP3_JWxuFUkCthORqHAl0DIl_gRMgPlG9abYYuC_OEIZ-z49KbW2Zctbs=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Zanzibar</p>        
          <img width="100%" src="https://lh3.googleusercontent.com/446t73gfwQ7V7mtEEMb56j1Ot_SW9UkszaW6RXKWD0K_3fJj1ONPTZoFxQit5NUK8bjkNfTn2YYd1r7zy9NSphZVjmu5__gx24pFLS_NtPGSMFl8xkXI9kmVBXEOQmZpX_8rs2VW2Xs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/0AtRg0ogSy0SudckzwvIRncUEQ1sJNX6kNipE4Ept9bzoE0kVamEKEdYyTsmIU6HQE1GjJ_3N2Eve-OYjl8Q46pkN3wm4v3IjGIWoxCb3IPqNranzvmyQGrgnZZ172wxbNkAUVvlAlU=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Q_EMPkYbu05qk0Ev_B0F--ARm0XpPgswVQqb4MfZfjM9tzHiuGKQgPdHFlmLL8E21S0uubC2obm7gyMaNFLcr-onc3KpvBo06DQB9jezW_Wu1-TDEr39Y2BS0oWATaQFVSjACXcr7wU=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/86P4gw87hBobv8ZP75mGQdhy-Be-qS3LK6kaL5OKyzxkWRPZ0usjc2khvKngndC6wjgqfyRlgSQhbAWsEswU64-AxtSHTdaBCfrTAEAuE8T5KNEP4ywu_URW5N_gcYFnXnFh2v34g2g=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/xMLcOxr7e2OQph_770EQSQ-XZde58aeCPcEn13ktCo_-oiY3n3Ia-7iQigYKxZg5h-SLK6gKPbITAPO6YpiC_fM9jHzIWWZIf4dymDhnc1P8LQhawk3NlC5rtFxROTjSYwKSTHc0ju0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/vsv2LFTfrK5_YRTOpaWfFhOHLVzgxDNLocLCzZs3gjqoza7nzCr_ts3c8fc_-gR4zEqLmMY4bF-Ixu2yIAePcZaktbrnGtvk8aqLjXQEqqfn_rx9iJ7ILhEvwohXhe5R563wcw8XvbI=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/qsu0KCNgW8CLStSYiy8___OqRAN3UniP42RMJzRDZij1nkLEkPH1fOiM8WR_6AewedQtkbl4AXVG0AJp2nlmcN-QMQZG99HL23qCMkyCEvq3LzKPBH9FfYCF5aH3APuwBgKP9WFeDq0=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var zanImg = {
        url: "https://lh3.googleusercontent.com/446t73gfwQ7V7mtEEMb56j1Ot_SW9UkszaW6RXKWD0K_3fJj1ONPTZoFxQit5NUK8bjkNfTn2YYd1r7zy9NSphZVjmu5__gx24pFLS_NtPGSMFl8xkXI9kmVBXEOQmZpX_8rs2VW2Xs=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Tanzania</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/pIUUlF2X4Fa-23Qj9eURJEMi43iRWwz0Y_D-aHZl96WPtkSzsxif6uvAyY8pOT4c5aHoA5ShlUijyetUp4SePbOI2YiXIpAk5706j5bvjgFo70tBWyKgtM9RkR5DPksjb2mhHAMSfZY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/CeldpegLbbsDRdikIrUIrHFN46VA6eqa1wckWBDQMmYU3CGmY2iw4zFLSrkXW6NSUY37YNfHnrDQFGgMYjJju3jGo_iJYfmZiEGdFYdz4-_IstMIOr_d6Ey1nKXXsW1nDII-wbKEa-I=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/qmZmHhw_9ERDZ6Kh-LviK8LE4nkG9-siZDWbd0d7GGy0FxfhJ58DLhD8mnOsa1gGo-Bi_NjyoLLiOBu8CDlKIK_4oSc0vqpyP_QF7nOKdavYFkrSKnDdd8nN_i-W3FPMK1nWVKrYdnA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/LBCEwYag7DFfB2kWM21wqoZNcoa9gsbNVkByvIoTFLMtsF4XnrcXtwwuc59rsqyzexKRmQ8Nim2766Ig09CDn4Poz75vc99rrhTcrOneNPeHElyM6y-cZ1OY-GtJT3arRAwuI_EkHN4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Fq2B9eYcewgPQenvKx6Ky3yxTjDaMPKRgkvB1cuJR_KxvUaCjqyth7KGkncWNx3MGRFaJoiEMinsjZLZUlt_eMy-pe8J_3d5QmdL_SguaiSnGTfQaFZ3X74W6KaZl5qAv-1UP9o2eJM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/-ICHv58Uv2ka22_CX8eRK_bpfYl8nNbhsv1fIS69XxXWXiFatImjCr2Q_99b-peKLwlVWvjpRzDM4oBaGG8_yxEcfbxoPF04heKbVHzopDu2YZzqRyHt2ZXe-jziqQdOQWn4O9M_Img=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/l31wNhXsDJlgWpWMGZq-URuKSbVG9XklGwMJOgjUzjgr6h5qh0IImPRu2_9HV1jAs-VjrrHspwXAy7EfmvDmT3ULzjT5IPu5dd5WoT0LrfEuPD8WE6T_UagRxI6IJyY94z5zYMNb7lU=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/LoBoFX05TdkFWE2jUSqlr1DGBIlZRcM2k0IicdIbrvkxcbwfKMLo51ZhD5hJskLDW7XAKIoGFyUYpgWtLPAgi9RTB0l-Ah4Y56ab21Px6Ko8II-PLZNgP4ict5MLfNnUbsiDek2D754=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/WozwEc6mqwOv26UG8zAGyCAba133JZp7E9Liur660iGTP2GihR7dy90lPUC_dO_TKt4bh9o4NK6qj1UIgGEzaSf0KHTdP1QWEZd0NcrllqBsQLXt5oG0P_E0iPT4CyoAeOMH-LHoec4=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var tanImg = {
        url: "https://lh3.googleusercontent.com/pIUUlF2X4Fa-23Qj9eURJEMi43iRWwz0Y_D-aHZl96WPtkSzsxif6uvAyY8pOT4c5aHoA5ShlUijyetUp4SePbOI2YiXIpAk5706j5bvjgFo70tBWyKgtM9RkR5DPksjb2mhHAMSfZY=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>New York</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/yGljbmfWPEh_UVHF3JhphL-IbAGe2ih8KFhuZRCJsbVg7-__BBJbizRQKxidOGmdXfyAwb3KmB-GeUOQO17blkt03KNAVIAdwRFt8h6UFFHZ6_v5GPxgW9cNiC82joMFcXfsQnPNEOc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/nkahaOFTgyK3Q-TR0U8bzta7JSJJ2c6KwqhXbe9bZU50wKO6XNKV3dP1kg5mkaaGAh98Hi3PrTm5xvWt40gvN34PpIUwwLAx-0LoZQ7U1HieAXbNfK5eB-Q9o1JUO6e4VXP4zVlF9Z8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/u1R5qxtB46i9iS7gZO7Gdc_CGzWFtjgEZviCzpuoBIf8f_KIR3XsJKSG-4ypssgP7HMzAGh3fh9xFmAH3MH2UbZD3oTkFralnUgnaZ-eumCS2vPHS1ykeIYkKIFwzChN0CHng8cjJCs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Thv8s5zwJJZmfQ6PWt2-F6uBw96xoLEHjZdO7aWPL7ieKn5UP1GwDGVp7pVFawMJyXW4GdKzCy3YdIBvO1QqCyKTPdPkyr7qwB67s5uNMG3yQJnPKW3O6-EvwvupOxeZB8jpXPk4a3I=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/lYuae1xNsBl-1pTl9X1Jc1F7ico6eCdxtjl_BusabmgrpA-XKmxpp3lBruHqDLRTIcEnyDPE6fy3_2wzt7BI6onL5bFL9rQ7-opL6F6c0IK9_o8Mke6AwXHCUNentO5PflnDkZytP1M=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/RTkOgq-DG8HzkP1fpYm-svW14uMKckBYlZ4ss5TP3nT8vUk4w9Bvxs2nY2ZPaXfS5PHhBvPsDXp5p_lvZdGruoQ_h1Gj9KwaAFvWUEvPY9lzqaxk7kHx1dpP5do_QMr0ttE01LWDqFE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Eo5D6PW0DJcYLUerx7JTG0bDsIaQVmw7zXLILNp1XI9EXOiWEW44BB63HNj5gnS82vn-azXOoP09EMlitQp2H6ukqw8W1yjoU-T6ASHVijkio60kteDnDXxi1fB6BUw-P70i0PmMxX4=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var newyorkImg = {
        url: "https://lh3.googleusercontent.com/PJIQJ6ovH2eII7IjceaLKEfoO5pdpCkhh_yeHWuidkLmAd061lQgVuveB71UIQTupoU6cc2Y64zeQw8yFhsN5vA1oVBHy_xq0vDwb5jtdTA8ahBraerXYKDhJTOdtA3zqc2f2VIKxTA=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Florida</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/3E9LW1MryKc4b5YwW3lqyy0r6EDxqScsl-U1vrOULJnV5HuSiine_rA1-wszTi367qnD8h5ZiJanHGBCGc3BsjkU57uP8sOMsbpEMGTI0I1hBMisp5v_QcqFbyWk33nvyY-Hby6CeGk=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/hnwwsRLrQUiwyukpsM5Jx6T-1u5dW4tzHwvZnzzTOzANcpVTWPReM6OlVkDbDUOtiwqscsgT7acae8ef1vsFjKGrfkSy3V4LyUOU9DFTIdf6HqA0BRtE9cOpWZg_jHhACTWp8_Z5pTc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/h7-LXMFaamXQwLLfwgKeWIGhkfsUNpeeKm5YOshksgEy-bdKcFL7DaJZDObUUYStOy3kL84oqlN3HfAZRLQMjBIbNz73j685wsm7QyX1LUEJzNbByh1BAWvuqZb94vZ29hKK9Yx1YP8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/oY_EIWDm3YLIkE9rXgjV6QQoD7UkpFmpcvsYkAwrQjSLSgsg6Ssv1bvCPEYn1EtK0z2C2wzRnMtEAY8gJhiMCRcKlMbGtVZYBqU6Vzooo9VJpeN-pkUkJ7i-_qYtK-KNXCGiu_0RwH0=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var floridaImg = {
        url: "https://lh3.googleusercontent.com/3E9LW1MryKc4b5YwW3lqyy0r6EDxqScsl-U1vrOULJnV5HuSiine_rA1-wszTi367qnD8h5ZiJanHGBCGc3BsjkU57uP8sOMsbpEMGTI0I1hBMisp5v_QcqFbyWk33nvyY-Hby6CeGk=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Georgia</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/dV_ZNGRWnDlayaM9di8qe4bOQL6ADjc6ruumiFg7ZsSzjNMxc-eDlFx_hYqHrJDKkiDc_-3jkmBfz2H-yoL_Y2-Fi1mw63qPto0bEKpk9mm4tcBKoWsHhBv-q_t5eOrk3ORBSjzQ43A=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/kpOSMKE9P30R8lbgudnmw611PYZdfkFiPSpiaaiJMg7f3KJyJU4HFVnQ-lJ4LSGitWza7x6w_UfpXt-dcHEYB9bMpcnRZFwVnGN306BXsjuDpuACcfoms8AtWbmIYuZMYQJeRSbygV8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/CdYhZdDqe20SD7lyMXo6QXHvZLtx8n3j2sMpA7Tb0I9wkgjS2kVtuFv9dFX485IPv5h4iBt_mwRSjKbbHzk9fFzXlyTMATeMDnoUZM25bmPPESq-xQfsfkCsb7UYL2dsfPBlyGOPCEo=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var geoImg = {
        url: "https://lh3.googleusercontent.com/JewDjEojyKAhfB33mv3_LDs8aK0ycHgwPGjEJhycfXQxBVGuGlWjz79mWdM6C_D0u5E1eqosoZqpgFjsd1DMZbUL2eTUx3zXH9cinAoRAPDhkX0OMCa7roiqmPjZ00-4cDIMhzZP_vw=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>South Carolina</p>
          <img width="100%" src="https://lh3.googleusercontent.com/0YA0QTdDIpe9tpwhd89_AUC3oFOs9zXdQzKuARyDjCzZ165tqNfnHjdZ85hWUnE7VlXdyUVSr0QlCfYfXFVCzm5fZlVHGJZkgdePwNzSoaBP12V6iJZwlmq6kuwgVZmHkH4K9wxvZp8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/4zh1caON23VroK6mnO7nMv9CET34wiqeY-krtJOGMjelXJyj5Dbv9FhxLBIEBWZV4SxS3eEDEbcz112CE20D4Bkv0mCgJxBniooAav8Som6TeT4pXQNFK4fOlX7FE0hjOEzu64koJ-4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/SzHJBiNNjmQratBsEC1smzdVoWrutcs-3NIPKqi2g9gpE_SN6EAHSfDXdo4ndYJq2XWtigqj78FvmdtFK0wzI6vBec7MCpeR3gQ0e4bwsgmdnl8tqnPdOjp_KMYju1byU0R8lGsAOd0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Z-UUgNzXDegJJnHRzklcjBx72oJ8xRdE7ghoMLyJ_GiwWjF0okKrPEkoi-VeWbVSpo__Y4ZN_6GCbptGvyvxcvXbI_TYIUt5xgO1qhf8lvMrmGFLcu4DpNyK4iMhOQFowPImhkZBppo=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/nb5IglrCJPROOSRkiAFWDPFhTxUp6v9nIC2Ew60zfpXrZxuoVr9YUIS0vtEQs8bEFKO1cuRhbkydSz0MHAqXRK6WRKcIOlvlQkKbEZJiNxtfwCgujl64ROAJxlXAWWHtSGxzvVs-pTk=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var southImg = {
        url: "https://lh3.googleusercontent.com/0YA0QTdDIpe9tpwhd89_AUC3oFOs9zXdQzKuARyDjCzZ165tqNfnHjdZ85hWUnE7VlXdyUVSr0QlCfYfXFVCzm5fZlVHGJZkgdePwNzSoaBP12V6iJZwlmq6kuwgVZmHkH4K9wxvZp8=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>North Carolina</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/0TA4RqYpf84J6Sy7fMEch6DwgkxfscaGE4iz_2xA-VSnGThnE5X17lOZ63houcwmGdlLP6aGHj-TWdojTQvPFgXfBiKUTGc0wP7MNgLRj06N0Fx375UlFu0374rev3eIBMgCX5x2Zc8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/kIlnHRRoDjt3o855V1fZLbR_LKfVqcWJddAAmPeEEfW6piBb5Ltc_QUvfCNe-ndMoYvY0eQrZznJ4GbiOnhUCt4i7fgdOvdDbUvIdxNxvINPnW65qfBGSUNq4zs6WkQJ2HT9kRqYpEc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/jWM2043mV_17uiMZFzWO0YqpubfCArNBm1QuF6P_iHN2Qx003GUAkD2A69vX6wBjpht79-5UqU7EttvfZOt-GB_h_ZarfdLoiKV0cPBO7MK04e6qi3rT7koqQVu8xj4-ltroGrNF2tQ=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/v746ZED_0gw2_Z0fbSA3fhUYs4K423iEagYmtgIK-emMf_5qgAP2jiRlVkrLicQRi0tPKNmJNS9KYixXN55OjKivP8F3Ia4awV70hsGmLL2oht9sbcLugv90tMGQYQkbzNvJ3I5vAKI=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/iaO3SCrYxSxHcJ2mfJkTeTa22BxnR_uNUfMik903wjhEoRl_mI77SZ7DkcXFWoGl-xe3IBQ_Thg5EKlf1Y6m0SuAQY661JVtrYiqo9G7o3irlij-W4GXtzmWupY7gHG1SSvxkUBNF4E=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var ncImg = {
        url: "https://lh3.googleusercontent.com/0TA4RqYpf84J6Sy7fMEch6DwgkxfscaGE4iz_2xA-VSnGThnE5X17lOZ63houcwmGdlLP6aGHj-TWdojTQvPFgXfBiKUTGc0wP7MNgLRj06N0Fx375UlFu0374rev3eIBMgCX5x2Zc8=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Virginia</p>
          <img width="100%" src="https://lh3.googleusercontent.com/AVwPTev6-nWXlofj8hK6hXb42oWX76zrOun3Edy9JVEnDr-vukP6ReqVfBN68IACPrhye_zP6OJ7ln5wEDmhOEbJrUNfQm4md2BXcH197prM8EhZthfe9mhRy1EGXy1HaMAliJKUy8Q=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/E_0NfcPLd80cqX5FX6FuRtQND0vMHvlgqNO4TChzRv2PjZCaLHwE4xbcXR10JLV6lyoMOI5UxkJx_8P3TN6cYcgmvL-CzCguP34Itw-bNpwgBL6x2JCMd-rfPwgIZLYx3Q7wmUmXByw=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/cHml9i6a0IOBDsRXjQhnzq1SU7Vo-x-vYWE2qU_I6NixxfHm5ERkR5bHF_Aw51zw-gvKSihee2EQhwmNAgkOoEOm34bFeZST51geEiIq3gzfqUFQhmHtKWZ8I592OwA4o_lhST0LBSU=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/xGc6sRsHt4GLELRJbCxl6fSpzqff7vA_kv12HNzjfR35jWKczdYk13MCScI3mU8xJxRptCfjdAETJRYOHUZUOAJLf3r2-egMVAbeeetQAoXqbUKDOrM6bGzUb9HBB-cbweCU7T5KDwI=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/YM-AhXipOuzxDJFpEMOAth82q70xeh8CRgtFemv4RwxWwTdhFTkzGKvJzkljpItakoIizzUCPI2Nk2TX4RHPfSHA7FW-NPUtsRZNrSAIqpnwr1mGviS8viNhiQmPCzOOUXRrHNB6UPQ=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/0n_vrxoJEjp2UDjGeIwIC2wtGmKdBkzKgoyyCGgfycNojO7RFA6ODQITUThKEokJBo20YZhPDuGEpZ0eN0opzTjLcj4kZ0cWheBawaxgUDFflOGvUouMigkUdXKy9G5MFelle16cvko=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/nOfSQ4rKmbj7fs4eE8zeV3WJyb13CkIfsQy123m8zz-c6WdXrl_2pFaLfkdNA-A0lr_LmcTl_ZHtlTs01Dwqhk1pUVTRs9LgGZWHntD6mM05JKugqtIdKE7v11i84LVIn7Aw48LRxi8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/WvHIVfxa9XXvyhz4oZ4An7WPGbjzwfGh4uNR0ieRgyIWhDrtIDsdCAh1FRPXYdOqafcoaB_YwlUDXUnYDofwfHLofivJ03_-HsBPAWBExX0UewJh007LchPPNiQvDThavUKQlB95yOs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/wYVNOKBQOtkNNZWeh6YcA4b3haZ1yE_ZCdH5Jn83cMI-bFqtcTACjwOiJ10ZXDkuZYX9IpsuxGOlpY2GXEi1p1FWFaCx084gvsGutMMkUJgKBKL87ykGna2PnLOp0g1JVnaCKQxfsFo=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/fiJQqAiBet8d0YMGKiLZFnJWRGibSJQcbNRFAMfH_qjdGuvYKhk8g3dzDDDCA6OB-R-qskyqiFYcOAetL_g4w9_WH-t0zey-nb_UEvCxLh52JguBexCBNN0dvSyFKlwMrAU3o1y5bQM=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var vaImg = {
        url: "https://lh3.googleusercontent.com/AVwPTev6-nWXlofj8hK6hXb42oWX76zrOun3Edy9JVEnDr-vukP6ReqVfBN68IACPrhye_zP6OJ7ln5wEDmhOEbJrUNfQm4md2BXcH197prM8EhZthfe9mhRy1EGXy1HaMAliJKUy8Q=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Wyoming</p>         
          <img width="100%" src="https://lh3.googleusercontent.com/mxd8RTYSqVUnzJWZRKKFQ3t37h0n0xKRc7x98QeLzFnj8CtWKp8IBaRyhoV1pfjKChdkxRkBunNz_KN-rAEyrgTqv2rgLdWaDoDKgQIZbzpTLtV45kOt35ZA7FE0J75nMs6it4C6ClY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/_dlh99AD5wUTkmk_wNY1CA7qWO_29XGDLSdyiEw9WTpnB6Wq4M3yhxg_1lYL77h1xHeOxvdH6Nj4Z8tPB9Tl9VFXiX7b7JYAVyS71AUH-jcTbKOIcRL_anz9CB1emrY0-zLC-FlmFO4=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var wyImg = {
        url: "https://lh3.googleusercontent.com/mxd8RTYSqVUnzJWZRKKFQ3t37h0n0xKRc7x98QeLzFnj8CtWKp8IBaRyhoV1pfjKChdkxRkBunNz_KN-rAEyrgTqv2rgLdWaDoDKgQIZbzpTLtV45kOt35ZA7FE0J75nMs6it4C6ClY=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Colorado</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/x1MXLY8NcKeXoMBgjSSMiKg2CCI7a9AzGvtIyjBrrtZzy2FXrGJaapKpVoDOHAvJsM4K87oIYe8Tj3mnYUV9U-D0leI9oo44TTru2n_vttp5igOCUNtHRRRdTO4igttmU5ju9JLk7To=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/O3yxuhu4-aALEXz9xXx6PRqVsIQ79jctthPdT4bYxfuO4V1wiOj4L6SbNZ7Xkhps-BkxPvCsuTrZ1DWLUmHyeE_jqvxz_HB9kyOdUCyGBpk2aFN-FOQUqoEjXf2cjQb_BlVtOxSV5eA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/YzddRwfoAjJn7dTW7-jnjyTVVbAMMSE5eEojYP2SPJSz5k2WL2Q9b9nDFaOGZWhcRW94HThjMxq0TcelYdr53g1UPUAC-7twaGBDoqZhZq-Erazvd7ftxdrsqB3C0bJgX8mEjjVU3PY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/0luP9e5Od_vUUVRtpy_asEabDLE0um5J3jxic59uu75gy64qEHrpxtKANEoiPmflY_kXut2YtkDJb9KX2H-0mDvHpYCSyXJcfyPSOI-CrPLl6c2r3SpWjCOnzjfvtFkSpgIQjP-I6hU=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/EcvVDs5hm-F-3twUT83UP-cU6H924gb832wHPs5zOH1Xme23r_GX22wlF7BjCFIxOH9uapicmLU4LuAyFK36oGMmII3jLxFldkXdYneMbXqYfLL71_3YyJ7VQFpE_9EL_OMC8K-XBt4=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var coImg = {
        url: "https://lh3.googleusercontent.com/P1uJcWwMx-wJt-uBTIkv7MgqOeg5Rd5oNASmbstsCVDN3tfur-XE3x3ci0sk7-QzHumhhzmxkUZwRnPSxHVT_gcbH5QZT-5fTWj6EY0i-so2D03xyqZAR8dFUlNpBPEChhWnOo7XGbY=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
           <p>Taos, New Mexico</p>         
          <img width="100%" src="https://lh3.googleusercontent.com/f1MOZqubRgbvJD0pfyNjX_p-iq91SEsYz05qhJG19nm6LcecZ4KOIRwJArKBMQI58TTdIsafx48NoZivJDc7UKQBqVFs2yLEGecg0szzWO8mGmSd9IWqQzDmt-FKvUyBoJ_9tQM-_24=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/_ZpoQiyN7MEnKFQUccgeWKniIOmRV8Px845G_f_KEalECWQKj5JKQz6q3TVhrFNrahp5wZkD05k_Pr8DrsrbnD6sY8oehE2Ow3GLMKV8L-NtZW7VhH5zTpZCI2kZdAWIwgigiWxdFUM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/wO2nCCxnwrtIo3NgdcaA8FbUe7KRg7DKYO6bw8pNJnlCZ7woujeCf-oOt4UZXCwnIUNZe8Lb_1LcMD-bGAl0GxVqXsGTMmPOzAqsX4K_bai2_0CaSCUBp1sYxZf_-EfgZvMiAi1JXL0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/medru_jL0ZCweoGbz-wuR0Dz9lZcmSppHHfIuefTe--aXvBJmWp5J-ZLIhtR2MEfm1hXZtEcyTe29J6j9O33MsZx4agX1p6TjDaUIONVspsh2a0nIXyS4OKqBpMruFdXZI77xuqXeEE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/zsg7sGQK7_I2BM6-53azOboXKJne2GxxdZ_nAhtQ8oaFfziGC6zQaX3QR3_9q6lGyagUofhBu5OlL16GxKP1xSVlHiTJ-dl-ZZbZ27W7zXWzKmbYir-JPDJVxKSyKw-DTZeBAk9gT9w=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/hco55p7PEwAYonEk1yADE9H8THcL4ujXpmm3kiNn3YhFQwNKPato9DSfx1Kajzkdup8gMPauslgTDbpEfX-rEef-svMtW6o--WdvtAihqOPPN-cNKYGdPKeTw6B7O9usmOd7QTc01Pc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/96SwLmYcogaWHyWUilqr3AuEvMQXm-BybCuM0Q1tRvmjA0epRnLis_OldVwasoGZaig3ifd0F3XVfVeLYbahhVRh8Ylo-DOw0SsBelrC2dRcpCH8AMmof9LQwr1Qh7tWx-u2nSGL4qM=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var nmImg = {
        url: "https://lh3.googleusercontent.com/f1MOZqubRgbvJD0pfyNjX_p-iq91SEsYz05qhJG19nm6LcecZ4KOIRwJArKBMQI58TTdIsafx48NoZivJDc7UKQBqVFs2yLEGecg0szzWO8mGmSd9IWqQzDmt-FKvUyBoJ_9tQM-_24=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Utah</p>       
          <img width="100%" src="https://lh3.googleusercontent.com/nZcWF5pmE4gcE9rRsVSUr8QUfweis-cikwMXIaxpRiFzwrIznHSTJ7th-xnSADuULAb5_Fi4kMuh0_aK9I85Pjn429bPE9TQ0aB-cuj_s1tmr_i1FgUSI_fxnzDvYLIGJggK4JQmPBc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/NylH-254kLeM6afi6kt5sSLU1PD2T1_Fn4ST2XgFNp1bwjHEemnwegkmzmE1VuFva9yDmxL6hacOC64sw1fu91SEMOWGi5_Z78Yk_xzQEMQFJul5-2LXY2-ADWbDgb56oQxtYmr72Cg=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/DR8sA0Uv22FFpAdNJxtWukg0EDasGI-J7thm_iVLavniBpX3oa84t21E97XphTgGofBtGTIMIEm8_04fMEC2w2uqv7EVRChUxdHNLCAtSy0bqBR7fTe8N2HW0bX5Cipli2nBC-iHfzQ=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/HlFldZ1F1BPx5f0cN4agFOsSaSR3kK2tt42Bk1BQ5CCfTeWiyhSueZmT-jJM-OOcgFgwI5wBb350T4HfcZ-uZQkPIRb_0I_cMKwJXG9LgNvBMHTFS8Vuock71DPfMKjoScfHcNT0z0U=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/eATVNo-JffhxE_-nLytvt7mc8D3FsDDzUWoX-hQYgWGSKlzYf65klDvQgorn4c7o00FKRLS4DoN5LCV11wSCXVAs3VVvoQSQ2k47b9fAPk4e_hF4jnLX-YGxdWAR9OH8sTWwx_w4uCY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/tEm3WyCbJoucD0_nst9TzZsgbckCbmdfdjn4ozX7pWfq3qAZ7qFfzi8NSBl1_8gE_ZCeLMNaexsGJu0vZL_kR22zAIpPF0hylwRy63rM-sWjY1x7xWimIBam1LqyZhWS1VrGw1CXUE8=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var utIMG = {
        url: "https://lh3.googleusercontent.com/lDtIXYOxkNJk8eZsOs9WxfEVk_kquqDpAr7AHWQDrc0k0GVi-GtR9rte_dkDG8IUwB1WA3KGx4t_rLNC3nX2YPQuBPNdYhB93N6osC8YQ1e6nOaercrvfDGh88nKobxeZn8Js_ZAzSI=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Arizona</p>
          <img width="100%" src="https://lh3.googleusercontent.com/qf7vTrZjUtHDnKTBASud0qdnCU6tcbY1RE6a0Zt5YKKrRJ9nbqu_mezinxNuCb6A7PlJFSIxfc8ykNEbpIp2rsohM62o5U7u7HAiHxBSuPm7b_vv0RwKoGjh37zGwnH4om-piQadz0A=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/aKZ5ikLsmvse6HhRDIGO7Oe7yWlgfKpgggsJMTwCBiMmek66Ko7kyAlZLjXZ6mfLRu5yaJhY_zomBiDRu2dyvZi7SxlBKTifUV7QVBJeGFNodHxxeL22RXuk1VNPK4VvBXs8iR4dcqc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/d2Xv42F2l3rVq1cueUfIkjNyuqfS6fEcGSHji9-IOJNu7F0nhiA4GimviOJQBE2SENAmNz2h6-NFckoCAy2ImcuSVwxEA9EfP82kGuFkkYIHPwM6-OXsLcJjvvYBDsmoGebt-quDQSc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/SrcUwB_GgIj8g8csBsni-ow45vqmgfixtaIbxIaUAtvINiszhNmc2DeF8RzVTWZlqqZUlG-vlcpWbyddj3NW2JHyT2_ySGmfqg2aLc2thxoYwXF2KdZdBNJeF_ZSov6K6ZHMctVu8Yo=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/DxAH52lX-ui63n19ZdImvgZsMxk3tA3wV9flJWQN45W5YpV25PxA_mNRdpNrb59QJJj1ATTw9vWF1p31q5NaghV8pyjzkPRL7JpSx4T6dZL3ZSdcSDrLpKilQTVeW3t4rPQzDsW7heg=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/pBsDDTdoRs4WZ7K7pXtcCGL_POj3ylFO57WGiRsApKF2jjeHBH8jlyvVTFGwnHNp2xdKWol5cwhoJvTzeofUklMZ8VrVfHrVRVMUovZuQljvohWp7Sp1FJ7wCYks2FFi5AO2smopDb0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/XBsFIHETRGx0XAqletfoZ3xCzDyRNJJWkEy7-nIDrebbHCeqTqZOdo0DBr5mRXrcZzlNtpGQIEwlsHuwV4nhpAJeHJYInUoznV0BQ1EOvnkkHKSeaweN8n2UPVwNHMjO20hlvVZZU1o=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var azImg = {
        url: "https://lh3.googleusercontent.com/JKLgvuagf7zJF1TRZY9EDbhZpomSuiDq-bM3el3ff5405Wo6yAbg_hgw_jcCCdBx0dwZZibj9T_9lOOD2EY5AxaZPKDYWeXK-AJ9pwp8EOHJUgAA2adFZnK1bbdoV8zWx8TKGPMwy9g=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>California</p>
          <img width="100%" src="https://lh3.googleusercontent.com/uHYjvbuk1Hn5Fzuk6MfD4TU7wy_joHL9tjPqJm1pfUiTzie68QaSZfXNFBWmFhnl8av4WSF3Q3AkQ7DONys3qnceUqMiBwpnYHofYZaOIxe5hdZTBk4fasdxGPGB2theoQ_QIP1xskc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/6iq5EWH8feiVogC-PEMypMqGCBSvxZdKAs0SCz_6bmMrcnnqBVft5tA36wNSTpqTvUtAHrPKbouOX6GZvrvrVn-L1mvFC_wAe1n3KCTbDZdEJPruRBXXC3vXQHu3jltDaFkg5QZ7KIo=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/d6w8rhlJGDnho4JBb8xwtHO7KbPPEEgSI3ocu10FB3lWhdSLhmom6LhK8h7nK8T0qrHsVX31HUmeB6GBWLuv4nrd2tWD2AqGAbC0IsOP7_1K9vs0GTo4VfNHFheefJThRALwxCuAbWY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/slwgGIzjOC8ZV34FuQ7w9jYl3EbqsKuJGX2RiYArlqQmJGGJxTvX0DjdT9XvzMM2EIVU8l7qE-BD1aMT6v5ZMJiwd8YIwNukJR7V2oMX0KzonDOt6iFTjoatjDP6ayfs1gy5xtUHYgg=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/h6LxABmU1xERB6WyJpM8JS91XzGRtPaufduIp5MrRZWhc6rAEAvp4T-pNLUSQCv7LfmoXRD607w7-D1aIVV7pKEGwIXPK8_8PLiOa72HqVtM38_0Syov5jWSTUr3nM2ZYabUrg1oINE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/0oPlMSBSHnQ6DTJsYZnmpGtmOXRt43wP2A_pbHLlx8du68hx01T02UQ3B2nJVRSgMwaKJXIseg-JFRnMY3y0jnEr8eC8DtQLauVTUtO1qcpyHnK0vegkrBlw1sFmCrIVhBlghunMtT4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/UnCHK52gWCh7RGxyROUIrzdsarcNkRuaQGLURKHNyMDspxUAE2TKgwTeADsjUtT8a8bOsgyzM3d5vfUEVSQpVoc17rhJzwYphhw5iaQWTxXUVaTKVnCwwn_RFtmucIl0B2srTnHvqYQ=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/e-TgNDGLFklX7MWUZLMnmepjvZa1-mx3U-cgnHv9kVVjzkebpojlBGRRk_YsvWLMK3iM_E9hrvSHb8KyQSoiQy1dBE4aLHUEXDlAGWr4mTsCcwtGRxTwmttTS57bf7KLB_g79Myqra4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/vLom11FbZh1aJjPn562jc42OxTGqcdd1N3OqtuQPDwnqaXrgq1cfaGeYH553EE00MmhJUCISmcz2MsQAhngE95ucjQp4OukMH2p5W12Klw0Wc5qRK02u9xZU3F2fIHa33rDfv7RHk88=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var caliImg = {
        url: "https://lh3.googleusercontent.com/eqjv59XRkap5NNfpedVk5xv7Q9rRQl52k3BZt1ZgPUBZBbkTD8lraEeYqfF49211d_5qIRIeTQzet7JxuUMFxlju8iPAqC8UK7xOfbebWKJ4fRMQumT4msUbf6macdfsxii7VjZJ_Dw=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Washington</p>
          <img width="100%" src="https://lh3.googleusercontent.com/xZGKfvtr8KNdpKQUNHgMQn2r-HziirsadVHjHKDtH2uPLG-Ygqv3yvdnyRR1R1tWt4G825JVFVmfRBqSJi0ePr7kDTiTOOYCzIzKFiOWdRm2I35HPFHaWWD7Pqe-QVV84uiAgR2hBa0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/9W08iKFAplUVv95Y7A3iCGLgNIoNU9HG3XW1d-G-XmfSh73rdumQVHpm7s0xfSD_FMDlwygOL-9U07bpzch65Hmx_-17S5WMmF7N1I5BQUV6dHKsCAVm6zB85eDxlTunFokHApcx2lM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/pTlDRd3Knxr97guBwt_moonmjF9EEDJzO3Swf9CqmX6ZuYCYi1JkbLQKBWoO0IgJ3FyJQr5c-GOugD3af6hls9k5xR8VsVd6LldutRstx_L7DbRGJrMsSW9L-NONRYJ7ON5A7EqyoE4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/5D8MfNDGsjpxAPBBiui-ICxFVsYTROCtxnD3eUZbJCWvEiX8DxLwe00vVMooaenraVnaKf-3uUX8VAmdkkuVbcSlrKDePFofazCIcw4CXfHYAP4hmTNiTe5VbHnnsa5is7CX2SeswUE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/NxSChak7Ygv-1STdYFyY5fKziA4z3v8iF9tv5tieGm1lgNGpFiqL1uYeUrE7ZG97BEZsQh50At8C4ujtXBJGXiot7OY_LqWiawBYj0zL3bA7aIHQ1qTpFRAA-vRhMtY86LvF4I6rH2c=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/XoNOcVgXvZJ9Y60rgvwLPu80gnSvoBUKUjJ-fHwKJfQQglsfX7wbAPZW-FpTyM_Rv7yyhd0TrYbuR1dW79zdqSLRjrvNAUw1-SlMvo52a08U3qTUrfngYeRZdOz6LamFqYFo1ebW6E4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/0EfUDXy8O5FImHHmdjXrfdFvExjEMpzpcTEm8VmubkdzgFTLafhCCDQ7_f_XtOndzxlCQxnjQc20iowYEQ-mrKMH5uHXNcQWakc0QZVcoKd35fOEor2Tg8a-z79ASX7gWX6rRJleQoA=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/EXHV1zSZKtRQiJawXVcKUy2QmWAl9qiEA2O9HKPyAOi5JzgSIiWKd0u9C5jILns4-R_1kmiYQeOLfJzVvOWO_vYYoAS0zKgV0ok0OaZqlx0Kl4tkqfiaKCTUlKGzIwefxLnta0q9kcY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/mVPc96gOdYPaTXmDZeu0IXYYNzxjp0j_6070ch2IZ7-HbuAFzITayDEirt-y_pUpfMFnn2AgPzA2OB5PgP-r5Wcy8ce99bmwqscm3cE4zBGspE8FmKeTw3DLbYUg4C6Q7FNv6RDbtPM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/z_IHjRjgxTNq_p0GLN-zEd2Ck0Q7HARs-1om-7IPhiWkVrzcl4MbkXvC44PHPL3PyRT1OvAnEwa7kRuS-o8HgMJxrTfRZJGQ_09TGeiU466EGNyIat-3IfrcmMwAnFY2Tw426I8VFRo=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/KNQlJodAH_PNAFYiW3saOxO5BGRjEbgbmtOpnq29Gh-i7vRriYifKuJ-2eCQoh8GtNuncnjxR0cHLFKPKLF-sRTyjlqGuZBq3n4YW31Z3KBf4nCGcyUdT1s18S05xsJa4BGmo7k0gg0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/AxgXip7A_gM_4QEGwy4sj1jd1bNHvqcMk6OSukgkH2f_23WBLyEPfX4FuRyGG4hxQAgMxKOxC-NA4_TZ_dh39kLRO7Jus9WTaqDTtQVvSpVPiovNBE7wESBW3jvbzpNScYff0Kiu1T0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/EBd7CYQblt2j39QMsjmvs9IyLzZL78Q43Tnsx8FF1cV3W-0_T2GRg7RXMUqXGTLAgtLqBGSpDpRxdgSXbqm4uGfJVLorzEiviJCpiwzhRF5zsIZQAWAVYmvstCTKNyCZUXRpOZzz93k=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/qdTRPnUpem7x-umoi7-z_b1M2SyXYrDIqVrbxpkLsuWgheRQCKtSgzgwUk9VmYL4YbK4fDhrLd91Hov-rGwlBBcbh-ORDkbplu6siEyfIPAYuP0t5BjjtvO0bIzedG6_TM_fOVAuirc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/rjswziJTpK9crWQeCOp2PDLP2mqbYb7VuUUVSi_teLjmOJppLhj8TI1nx2ZXkGhGMaB13DMQSqrqzOqiwZztWQVkyHZc_r1fy9zkNbzNA-WS1Ovbqk4mjX6mdD5O60T_pkK_L3WBkk0=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var wasImg = {
        url: "https://lh3.googleusercontent.com/ezzLmJb49oaBhWto8c2CM4hpW2xV4XCvbMEnt7Deh-pyBkucGS-hCm5BzQi-ZzKsmkrheSX86sJnLZ6T6pNPAJSfHErr9z7mIom36Gvs1dHZR2mY7sVvhfK89WPAbkOJ5akLQ5Nk5DI=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Oregon</p>
          <img width="100%" src="https://lh3.googleusercontent.com/gsX_TqcQ2NAV3dNNC-tzcUWq_wdGovzjPlL-uR8POLvKKTL4vQjyxgRymj6ByuCo0OshVQ73veAnoUeMg8wtbnUVGlkuABuHKHDBJPURga4qoy6BKn-4-QuPWRtO-U7cuoOo8tPLgjE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/DDaF_NQnW2l9WFRCoZd-LL3g6kl0HQo8OQgeb67hnxnzcoHRgO9ZWIfq_tfVGehGZRXV9dRK6pYf_ONvziNTUFMlFFmGeTOvOmTW3vnSZzDZG9pGAsnFOcxc3RjAwx3oL-OKy32Qffs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/DDaF_NQnW2l9WFRCoZd-LL3g6kl0HQo8OQgeb67hnxnzcoHRgO9ZWIfq_tfVGehGZRXV9dRK6pYf_ONvziNTUFMlFFmGeTOvOmTW3vnSZzDZG9pGAsnFOcxc3RjAwx3oL-OKy32Qffs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/w0I95i7hDc3G2u_Os_nVfZeSyM89AeHD7mEpTvDb_58LhPA1IdsveeqX-IMbDRhJBWbWrlO9sUq0Go6ODvtkCAFgb7a-D5CqnLuLWrsAYidhFYxa55F2X9oXWpj57OJJeLOayWuWH1E=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/Ok2fDsGF1nUd2dLYDK57FuA7UH1liGttaGgSatJ_m-PS6qKMG5yFmep2JkwIO2YJUE3a_cRFwvaIHcTwImb4jahBaF8-nRbtFlwSQUdeUkrDj2ZOZalbzingMKlgjTi_nU7Kx48q9pk=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/f1qUBpwHlhXoYL2iNszu36HKc9Orei6tjSi6PiIhYXhFTWkNdIIeMRfB9G0E_-ex2TIS791t59n2ZCbKleBfwXSumBNv-kSm_P9W9J7i1YsDm69IJ5WCxVwZnZ_UmocPUZ39DM_MvM8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/wuj30fAmBHrWiHjWrFjpo9rZFjzCJV3tjV2QO6qeWGs0y93nHa1hzFal0184s2fy_mtiOSXVVcVAFNik8aRZyzdyZb9uB0dxqNwGcuv3xW-F-wLcoL_it6ReD2hCKmGV6eY165BCHL4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/uust7w3zM4D2uD_lqTab5aUUR0R5BG_pUMXWBY6J6rgcUCQv0L3Nz-fKprb6uesSD5laoPVGSgxzITX93ud7FgmBWRvPd9HFWpC40sjfEd7LBFcwUC8hs1Wty04DoIQ9F_bpITBkePI=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var oregonImg = {
        url: "https://lh3.googleusercontent.com/giapzSeISlqU-qB292Y7dwMNJTHRLkygOSk6FsfvFaEnR9b_j-g42zD7S-GKvYLFX7QtvajD2msMeJoPARWtniE8XUSViZdrut-DmxM4hdxH2XCmsJjRqfC1OIX4eloYNih1lr2FDgs=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>South Dakota</p>
          <img width="100%" src="https://lh3.googleusercontent.com/JJu_aG0OgYUHZAur-YKL3ilEZIdS2PgqJu1v3NYRRR8WdvhWAjDMs6x7P0w4HPyd_bHtj4iiSRcZq4cgasB6uFGeDD-HffwINPuJMzC-P0yDYSxTPcoRmdSmB00LVNZPNyTPia1u6e0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/GpIYvQdmuCCGVb0jqLsndeI9R67RcdDlh3KyGlfPGMFCC3yOd3u9CVwk8NcWT0s2hKIp-RgApQChWFBzovbd8QKFpXBOPJfQfTQtonBf8xrxY4LV91S3g8tdWHMHUiL6yKcW9fD_86M=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var sdImg = {
        url: "https://lh3.googleusercontent.com/6fmpAqlORYzQKmxVn6R008MoqMLm54byDhCRzV4h4S2rwzCUjzcO3UbkowV8HXCKi-nkK_x02MPIqNf7t7_zlnm9M61xeIuk9tsUhDG1e91B606_r81lsOYX9s5VAQUNLh-nKSlbsaw=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Hawaii</p>
          <img width="100%" src="https://lh3.googleusercontent.com/8f-YqFclQuHGYQav9nT56sM3aBf1OqCnFpmTkU4leZH9fkg2sTHeIRLavX1WqYjb8Y0UDDJYsSt4dw2ZdrgaNIpcV7jmf3SuOcVdEn8ZamGLfepecso3c9bOqrsRQbQH69c46Hzi3Bs=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/rmzSjbGXeaS2kT4FhUlY9QOuJPG9w6nm2V98oDDgA35d71Csl5XDgITkMROX6AHseysvPrCgbaPqufI6YEN2yI2sgKjTSNxn1cJwMQUSH7BGZTDJNBr69UXHhCXZpfkoKOUVtzuOJ9g=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/_tELI7SrrQVWtAJON8lcGa8hIyVI6M7DzpM1CzA9uxzy3y31DzAhFVehqP5o_LWQb6ezxs9p0tlH6A3YWOJeOiwwu73mqIthiQ9EJ-BNMU-U0iAiMSte3wkYK-fcRPCEx0ZDGz5rOXI=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/xPndNtnischzM2ysUFcQZ3V9URZi8VNAXsEWFJIuOKDDtfdnJdGkemmS9PINiBphyxruvTbMfbozPppWTq6Baph31o5kGfEv3rpNRre_oCEqJjlyXB0SjxSdHHgyun7R8OdQ-SRW8u4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/qHVnmXK8kHsjjsR5KFFq6k0DTiLorlB7xAq5NLeZvy0-RJopTxjfyGLKTYRidewldK_3vOzpG5pp_Np7epC36JGOCPcP8CzNWunjxHPIMEvJIiS0ga91PGHTM19kSis_D2JOFTDr66o=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/akso1-9MHh3FrKnBGXzN4_hLARlmvn4hAakD9QZCKgGrAEZCeAUjtNBZeeS8GQBo8LZl20mogqHbsM0J0Dvw8OtbvkxN81BZmOlB0WO-TELhNATk5qe_-Qpdj9YcVHi6uXTF4iUWhjw=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var HawaiiImg = {
        url: "https://lh3.googleusercontent.com/chgL_yFph1t2AUuUc1u5L0lpmy1XQZaskH3jPzWEAuhfODvi-pRy-8unzl8fev75BtgBfowfaiy06Ha1nvHqCJi3euJWkZdXt-3Q6_4z14DY2P7PuCCik7VwRvVeyyrE5hMW8Bo-qnQ=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Oh Canada!</p>
          <img width="100%" src="https://lh3.googleusercontent.com/7h9Kwv50DRvM4HEPqz722OOXO0cyYbt6pSlUkxGWSu0XfSACVS4LpBJfWoUdP9khOJQVRNlilWWflYTJnI4QuZOaYhRPgAzYK9lJ8Au53rdczc6cFPFp0HZPDhbX1uSr6qPY5AdhDzI=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/8uk286kDm7lPhg-DWbG7eR2_vmec6iwjQMu2X8iCgA7oXSPaABfTQaihOzKSTCIE-e1rqgAkxGK6CXcVrQkv4liTYkPGBGl0offVgEtQeBrJcUds8yXRWHrSBFsJWXGUg4JFC0iaU5U=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/ZmWjxPvSoRA_OCkfhKIrpDpfgnXInSgK4EzIB567RFd4emyTUXXVxx9OJa5K38cyFCEk7jJmz7hUrQOi2U29B_N1DVZ3gz4M8IFjNcQumgLh88QGz97esJnxOoCXvgYXHdLsxZzekj8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/diDjeFRlMU-p5BvqIVeunG8HLLTQjcr6P-HrFxSqukL-b5wGm-HwHXmii_S1E1uh4yvspepGSg-qFxB3Hq88uq6wGQWPqpU5EKlpUuafWJ6qyX1hecOiAzrWXH7XpWwqacAYJfLsnJs=w2400">
          <p>(Shouldn't have gone chasing waterfalls!)</p>
        </div>
        `,
        maxWidth: 500
      });
      var CanadaImg = {
        url: "https://lh3.googleusercontent.com/2wRj15YQ3kUkYgQmftXIujpy7KQGBvKKbMwS5D8-B01YXhHWmiJ7cVDeJFYiR-Zw9lpOgQCx1saDbkvma5t5EWgPc-grDvTAe8NhLPTufjE63TIKUrpwX7d38olh3LKQlTMhuqlOUJE=w2400",
        scaledSize: new google.maps.Size(70, 70)
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
          <p>Tennessee</p>
          <img width="100%" src="https://lh3.googleusercontent.com/QpK5uy8D1l8EsufHSf52BiQI-FuWGUQ0Wf504mrx84d0BbWvd-ElRApQk1THAAq3kuSYFMtOekbm1nWaUDHT_m0CcERMt4xHzimuhgg5RYatonjzNEmN1J_LkA6ZSCYQVTc7SjvtR3M=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/082rpm3S2TctiF-jYeIpn9lGTQmTPeDd23uuCD7LHY5sn8enf_KXE-c4fgjmvBubi74kBPUppWsHGZCDFsl4YZ7UYyRm6X9IunYFkMKzsWs6fAYl0HeA8YkziTYibwmuJw9qmpYIsx8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/WdM76kcv2ILkF6ZX7mq21ZO1yd40lym8YgRagn3WotCLRT6f4pqRWNf5DVg7dMGMcjXk-lwG5XOp-YwRIAGGRJ3MPjCQyGIWovsQIeMIm_pRVIISVap2R4-p6fGsxP7eClkKoMk-vCw=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/PKbbPiuVdPItts_5Ksny-GiymNjsUlB4xrtXQ5oItIYr28LqN-wY1jhs-E-fKiCGHA9Sw643dUzkoU2eYMdbEh685wLqwocD1X3_vrLg1HfcwXRGukNWkqt1LtbnT5mbq7zaIuIg2mE=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var TennesseeImg = {
        url: "https://lh3.googleusercontent.com/Ck7RPd0GZsd58z6IfRge21sIjxplF334qc07NbJLHY7hGk3sG2QQj4XLgUTQMe1EhGyA4RDrep5qgMLEPYcx6iGbfgnCSvamuHsiE584t48uQkA4Uy37c_5WWK49AEscXZ2dP3wDnKU=w2400",
        scaledSize: new google.maps.Size(70, 70)
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


        
        
        // Chicago
      const infoChicago = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <p>Chicago, Illinois</p>
          <img width="100%" src="https://lh3.googleusercontent.com/NTxVQnjP53DeEVYnw_n96mrnXgFwhczzvOduINVoxl8QZy2ZhDaPPMMDnyBtEmZw7JMbbaGyXuPcMNyIsiG6Js8TEY6gAksc28fsk_y_0rI2k2bQeaG2-rFaUG2RD1V7eDR3iuiqjJ4=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/D_MsTJ6lUYiEAhJ88zq6lg6E5wGN2fmoKezEt26gF-a89be8txVmR_UKYIQSgP_kelNIHKTb1Ews9eTR9wveYn4frSIPISGCSQ3gkjfNT4MxYKiZBspxM4wwRp-Hue0jjhw1WposHzc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/5ihzKoP5RX2pa4wXJbHO9pIcrKHAmYw-twUDo7H05iMQzdlSEr_X-o6d9KmPVxdd2JjUyK1WJN5CFIpTBZ3XYcSWCxfe6y8lIPdNJggU2N1A7pzFcP72XoYAYvsJfegHMTXUJmosW74=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var ChicagoImg = {
        url: "https://lh3.googleusercontent.com/NTxVQnjP53DeEVYnw_n96mrnXgFwhczzvOduINVoxl8QZy2ZhDaPPMMDnyBtEmZw7JMbbaGyXuPcMNyIsiG6Js8TEY6gAksc28fsk_y_0rI2k2bQeaG2-rFaUG2RD1V7eDR3iuiqjJ4=w2400",
        scaledSize: new google.maps.Size(70, 70)
      }
      var myLatLng = new google.maps.LatLng(41.828338, -87.645909); //or wherever you want the marker placed
      var Chicago = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: ChicagoImg
      });
      Chicago.addListener("click", () => {
        infoChicago.open(map, Chicago);
      });



        // WV
      const infoWV = new google.maps.InfoWindow({
        content: `
        <div style="margin: auto; text-align: center">
          <p>West Virginia</p>
          <img width="100%" src="https://lh3.googleusercontent.com/pTNeHaoltV7aEh45nwxzYGn0JFF3lvwcdm3PegX0hJzTXmR-AEKQ9-QiYKt7W6MZo1DrwRh9EqoeubHJ5NHMnlUPg0qyuWfIOr2VTIk24zUR7ORdY34lFK2YhJ0iJYR13KCTK60qnAE=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/RS1wq98xLDV72uBnq5lHU8wkxA7Mmb9BQ8XirtqmGE1F6LITHBtbhLBq_SWyzpqLq3FAmoeWj9-Z2ZgSupTbe_f7rQrQBG-PXxwrgORrH9ituuMfsAKhkVZC_lzzUoaMaW-V7-DjSyY=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/ILgO-H_oWOv2slF97L0z0VkhmROBnOwizbohxhtX0MCm7nwzheLY73W6XUrwcsKoJEPZWLT7fOGwzo8QvCP1V27jlO9ZivbQSJrSZK3PhdrAX1CwreZzijFmp6fjWkY53mDnkcc3tE0=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/AwWAF0-chPC4YMNXRAo6khT1D50NO_veLo_uGsssaBVjYx9ag_rA2oksYdajdqeMfygN4d0h8TDGiF1wB28x5eG6aJEB2GKvffnGPjTNulGOJlxkGB8KUHrItCiK6j7Ifx-rmZNnNMM=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/eOg9idz7errZaQy7midhrhCXUPSFszO8a04zQrIafVGYz3aqDOLsZvZ7IX0mpgz6Bvl_GWDPcxoJwD59_9t42uDoMdQ_dgH7pTMGDdRgKepFPurxMVuY3uN9oI9mIpCHRmbdWTStABY=w2400">
        </div>
        `,
        maxWidth: 500
      });
      var WVImg = {
        url: "https://lh3.googleusercontent.com/ed6jH2FFmnHzbS-Wbq4_QJXmhXu23PpxkWFp_XhNbfO78WtdoSuVbQgzR7qtZZ4qJ75ESJ9MIu_QMfYz0Cy8boGP3zG6KeIuu_WI6hwTdKwqD2in6uCpwL-N0G-jTqazeyxsgIGG71c=w2400",
        scaledSize: new google.maps.Size(70, 70)
      }
      var myLatLng = new google.maps.LatLng(38.673752, -81.169602); //or wherever you want the marker placed
      var WV = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: WVImg
      });
      WV.addListener("click", () => {
        infoWV.open(map, Chicago);
      });


        
    }
