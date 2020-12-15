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
          <p>Tanzania</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/pIUUlF2X4Fa-23Qj9eURJEMi43iRWwz0Y_D-aHZl96WPtkSzsxif6uvAyY8pOT4c5aHoA5ShlUijyetUp4SePbOI2YiXIpAk5706j5bvjgFo70tBWyKgtM9RkR5DPksjb2mhHAMSfZY=w2400">
          <video width="100%" controls>
            <source src="video2.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
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
          <p>North Carolina</p>          
          <img width="100%" src="https://lh3.googleusercontent.com/0TA4RqYpf84J6Sy7fMEch6DwgkxfscaGE4iz_2xA-VSnGThnE5X17lOZ63houcwmGdlLP6aGHj-TWdojTQvPFgXfBiKUTGc0wP7MNgLRj06N0Fx375UlFu0374rev3eIBMgCX5x2Zc8=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/kIlnHRRoDjt3o855V1fZLbR_LKfVqcWJddAAmPeEEfW6piBb5Ltc_QUvfCNe-ndMoYvY0eQrZznJ4GbiOnhUCt4i7fgdOvdDbUvIdxNxvINPnW65qfBGSUNq4zs6WkQJ2HT9kRqYpEc=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/jWM2043mV_17uiMZFzWO0YqpubfCArNBm1QuF6P_iHN2Qx003GUAkD2A69vX6wBjpht79-5UqU7EttvfZOt-GB_h_ZarfdLoiKV0cPBO7MK04e6qi3rT7koqQVu8xj4-ltroGrNF2tQ=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/iaO3SCrYxSxHcJ2mfJkTeTa22BxnR_uNUfMik903wjhEoRl_mI77SZ7DkcXFWoGl-xe3IBQ_Thg5EKlf1Y6m0SuAQY661JVtrYiqo9G7o3irlij-W4GXtzmWupY7gHG1SSvxkUBNF4E=w2400">
        </div>
        `,
        maxWidth: 500
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
          <p>Virginia</p>
          <img width="100%" src="https://lh3.googleusercontent.com/2Fz6Fn5zq_hh75oNLsyNqyGSHzPopHojN77Eu6GImw_3bb4JteONR_K8lnCY2nRbZQV9RD7ACVYvTHEEoW6oGt2GNkAVXzsGdHl1XI9JWwr9ojo3N7t5mYgqaux8lESdvi4mJTti4Ok=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/E_0NfcPLd80cqX5FX6FuRtQND0vMHvlgqNO4TChzRv2PjZCaLHwE4xbcXR10JLV6lyoMOI5UxkJx_8P3TN6cYcgmvL-CzCguP34Itw-bNpwgBL6x2JCMd-rfPwgIZLYx3Q7wmUmXByw=w2400">
          <img width="100%" src="https://lh3.googleusercontent.com/pTNeHaoltV7aEh45nwxzYGn0JFF3lvwcdm3PegX0hJzTXmR-AEKQ9-QiYKt7W6MZo1DrwRh9EqoeubHJ5NHMnlUPg0qyuWfIOr2VTIk24zUR7ORdY34lFK2YhJ0iJYR13KCTK60qnAE=w2400">
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
          <video width="100%" controls>
            <source src="video1.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
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
