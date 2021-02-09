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
        welcome: "Selamat Datang di",
        serve: "Melayani dengan sepenuh hati",
        provide: "Kami menyediakan layanan terbaik transportasi logistik, penanganan kargo, pergudangan dan kepengurusan dokumen ekspor – impor.",
        get_started: "Mulai"
      },
      about: {
        title: "Tentang Kami",
        head_text_1: "Visi",
        head_text_2: "kami",
        opening_text: "Menjadi perusahaaan logistik nasional dan terdepan dalam memenuhi kebutuhan pelanggan.",
        mission: {
          title: "Misi",
          mission_1: "Memberikan pelayanan sesuai standar dan budget pelanggan.",
          mission_2: "Menjalin kerjasama dengan mutu terbaik dan saling menguntungkan.",
          mission_3: "Membina kesepahaman dan kemitraan jangka panjang.",
        },
        integrity: {
          title: "Integritas",
          description: "Kami banyak menangani cargo untuk barang-barang proyek, barang-barang industri dan juga barang-barang perdagangan. Barang-barang biasanya kami ambil di pabrik atau di lokasi proyek atau di perusahaan-perusahaan dan gudang-gudang. Kami mengantarnya sampai ke alamat tujuan baik di kota maupun di daerah terpencil seperti lokasi penambangan atau proyek-proyek infrasturktur dan proyek lainya."
        }
      },
      services: {
        title: "layanan",
        head_text_1: "Kami menawarkan",
        head_text_2: "layanan terbaik",
        opening_text: "Kami tim menejemen dari PT Mitratiga Perkasa Abadi atau MPA menyadari bahwa kepuasan pelanggan adalah kunci sukses suatu bisnis/ usaha. Kami memahami dan mengetahui kebutuhan para pelanggan kami, oleh karenanya kami memberikan kepada mereka pelayanan terbaik dalam hal transportasi logistik, penanganan kargo, pergudangan dan kepengurusan dokumen ekspor – impor (customs clearance document)."
      },
      team: {
        title: "Tim kerja",
        head_text_1: "Tim kerja kami",
        head_text_2: "luar biasa",
        opening_text: "Kami bangga melayani Anda."
      },
      contact: {
        title: "kontak",
        head_text_1: "Hubungi",
        head_text_2: "Kami"
      }
    },
    {
      name: "en",
      hero: {
        welcome: "Welcome to",
        serve: "we serve with highly dedicated",
        provide: "We are providing with the best service in transportation logistics, providing container office, warehousing and customs clearance export - import documents.",
        get_started: "Get Started"
      },
      about: {
        title: "About",
        head_text_1: "Our",
        head_text_2: "Vision",
        opening_text: "Be the first front liner company to satisfy the needs of our customers.",
        mission: {
          title: "Mission",
          mission_1: "To offer our customer’s product based on standard and budget.",
          mission_2: "To keep relationship with superior quality and values with the customers and stakeholders.",
          mission_3: "To maintain the mutual trust between our company and our valued customers.",
        },
        integrity: {
          title: "Integrity",
          description: "We believe that creating a safety, enjoyable environment and customer satisfaction of our customers and stakeholders as one of our goals. Based on the experiences we had, we have delivered our cargo to many destinations in Indonesia."
        }
      },
      services: {
        title: "services",
        head_text_1: "We do offer awesome",
        head_text_2: "Services",
        opening_text: "We believe that customer satisfaction is a key to business success. We understand that knowing our customers and their needs will help providing them with the best service."
      },
      team: {
        title: "team",
        head_text_1: "Our Hardworking",
        head_text_2: "Team",
        opening_text: "We're proud to serve You."
      },
      contact: {
        title: "contact",
        head_text: "Contact Us"
      }
    }
  ]

  $("#lang").click(function (e) {
    var id = 0
    const lang = $("#lang").text()
    if (lang === "English") {
      id = 1
      $("#lang").text("Bahasa Indonesia")
    } else {
      $("#lang").text("English")
    }
    $("#hero-welcome").text(langData[id].hero.welcome)
    $("#hero-serve").text(langData[id].hero.serve)
    $("#hero-provide").text(langData[id].hero.provide)
    $("#hero-get-started").text(langData[id].hero.get_started)

    // about
    $("#about-title").text(langData[id].about.title)
    $("#about-head-text-1").text(langData[id].about.head_text_1)
    $("#about-head-text-2").text(langData[id].about.head_text_2)
    $("#about-opening-text").text(langData[id].about.opening_text)
    $("#about-mission-title").text(langData[id].about.mission.title)
    $("#about-mission-1").text(langData[id].about.mission.mission_1)
    $("#about-mission-2").text(langData[id].about.mission.mission_2)
    $("#about-mission-3").text(langData[id].about.mission.mission_3)
    $("#about-integrity-title").text(langData[id].about.integrity.title)
    $("#about-integrity-description").text(langData[id].about.integrity.description)

    // services
    $("#services-title").text(langData[id].services.title)
    $("#services-head-text-1").text(langData[id].services.head_text_1)
    $("#services-head-text-2").text(langData[id].services.head_text_2)
    $("#services-opening-text").text(langData[id].services.opening_text)

    // team
    $("#team-title").text(langData[id].team.title)
    $("#team-head-text-1").text(langData[id].team.head_text_1)
    $("#team-head-text-2").text(langData[id].team.head_text_2)
    $("#team-opening-text").text(langData[id].team.opening_text)

    // contact
    $("#contact-title").text(langData[id].contact.title)
    $("#contact-head-text-1").text(langData[id].contact.head_text_1)
    $("#contact-head-text-2").text(langData[id].contact.head_text_2)

  });


})(jQuery);