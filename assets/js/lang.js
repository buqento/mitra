/**
* Template Name: Tempo - v2.1.0
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";
  const langData = [
    {
      name: "id",
      hero: {
        welcome: "Selamat Datang",
        serve: "KAMI MELAYANI DENGAN SANGAT BERDEDIKASI",
        provide: "Kami menyediakan layanan terbaik dalam logistik transportasi, menyediakan kantor kontainer, pergudangan dan dokumen ekspor - impor bea cukai.",
        get_started: "Mulai"
      },
      about: {
        title: "Tentang",
        head_text: "Visi Kami",
        opening_text: "Jadilah perusahaan garis depan pertama yang memenuhi kebutuhan pelanggan kami.",
        mission: {
          title: "Misi",
          mission_1: "Untuk menawarkan produk pelanggan kami berdasarkan standar dan anggaran.",
          mission_2: "Untuk menjaga hubungan dengan kualitas dan nilai yang unggul dengan pelanggan dan pemangku kepentingan.",
          mission_3: "Untuk menjaga rasa saling percaya antara perusahaan kami dan pelanggan kami yang berharga.",
        },
        integrity: {
          title: "Integritas",
          paragraph: "Kami percaya bahwa menciptakan keamanan, lingkungan yang menyenangkan, dan kepuasan pelanggan bagi pelanggan dan pemangku kepentingan kami sebagai salah satu tujuan kami. Berdasarkan pengalaman yang kami miliki, kami telah mengirimkan kargo kami ke banyak tujuan di Indonesia."
        }
      },
      services: {
        title: "layanan",
        head_text: "Kami menawarkan Layanan yang luar biasa",
        opening_text: "Kami percaya bahwa kepuasan pelanggan adalah kunci kesuksesan bisnis. Kami memahami bahwa mengetahui pelanggan kami dan kebutuhan mereka akan membantu memberikan layanan terbaik bagi mereka."
      },
      team: {
        title: "tim",
        head_text: "Tim Pekerja Keras Kami",
        opening_text: "Kami bangga melayani Anda."
      },
      contact: {
        title: "kontak",
        head_text: "Hubungi Kami"
      }
    },
    {
      name: "en",
      hero: {
        welcome: "Welcome to",
        serve: "WE SERVE WITH HIGHLY DEDICATED",
        provide: "We are providing with the best service in transportation logistics, providing container office, warehousing and customs clearance export - import documents.",
        get_started: "Get Started"
      },
      about: {
        title: "About",
        head_text: "Our Vision",
        opening_text: "Be the first front liner company to satisfy the needs of our customers.",
        mission: {
          title: "Mission",
          mission_1: "To offer our customer’s product based on standard and budget.",
          mission_2: "To keep relationship with superior quality and values with the customers and stakeholders.",
          mission_3: "To maintain the mutual trust between our company and our valued customers.",
        },
        integrity: {
          title: "Integrity",
          paragraph: "We believe that creating a safety, enjoyable environment and customer satisfaction of our customers and stakeholders as one of our goals. Based on the experiences we had, we have delivered our cargo to many destinations in Indonesia."
        }
      },
      services: {
        title: "services",
        head_text: "We do offer awesome Services",
        opening_text: "We believe that customer satisfaction is a key to business success. We understand that knowing our customers and their needs will help providing them with the best service."
      },
      team: {
        title: "team",
        head_text: "Our Hardworking Team",
        opening_text: "We're proud to serve You."
      },
      contact: {
        title: "contact",
        head_text: "Contact Us"
      }
    }
  ]

  $("#hero").click(function (e) {
    $("#hero-welcome").text(langData[0].hero.welcome)
    $("#hero-serve").text(langData[0].hero.serve)
    $("#hero-provide").text(langData[0].hero.provide)
    $("#hero-get-started").text(langData[0].hero.get_started)

    // about
    $("#about-title").text(langData[0].about.title)
    $("#about-head-text").text(langData[0].about.head_text)
    $("#about-opening-text").text(langData[0].about.opening_text)
  });


})(jQuery);