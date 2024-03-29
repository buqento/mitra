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
      nav: {
        home: "Beranda",
        about: "Tentang Kami",
        services: "Layanan",
        team: "Tim Kerja",
        contact: "Kontak"
      },
      hero: {
        welcome: "Selamat Datang di",
        serve: "Melayani dengan sepenuh hati",
        provide: "Kami menyediakan layanan terbaik dalam transportasi logistik, modifikasi kontainer, pergudangan, dan konsultan lingkungan.",
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
          description: "Kami yakin bahwa dengan menciptakan kondisi yang aman, menyenangkan dan memuaskan bagi pelanggan merupakan tujuan kami. Berdasarkan pengalaman yang kami miliki, kami menyelesaikan pekerjaan dengan baik dan tepat waktu."
        }
      },
      services: {
        title: "layanan",
        head_text_1: "Kami menawarkan",
        head_text_2: "layanan terbaik",
        opening_text: "Kami tim menejemen dari PT Mitratiga Perkasa Abadi atau MPA menyadari bahwa kepuasan pelanggan adalah kunci sukses suatu bisnis/ usaha. Kami memahami dan mengetahui kebutuhan para pelanggan kami, oleh karenanya kami memberikan kepada mereka pelayanan terbaik dalam hal transportasi logistik, penanganan kargo, pergudangan dan kepengurusan dokumen ekspor – impor (customs clearance document).",
        box: {
          services_logistics_cargo: "Logistik & Kargo",
          services_container_office: "Peti Kemas Multiguna",
          services_warehousing: "Pergudangan",
          services_customs_clearance: "Bea-Cukai"
        }
      },
      team: {
        title: "Tim kerja",
        head_text_1: "Tim kerja kami",
        head_text_2: "luar biasa",
        opening_text: "Kami bangga melayani Anda.",
        member: {
          director: "Direktur",
          marketing: "Kabag. Promosi dan Pemasaran",
          operation: "Kabag. Operasianal",
          accountant: "Kabag. Keuangan",
          health: "Kabag. Kesehatan dan Keselamatan Kerja (K3)",
          general: "Kabag. Umum dan Humas",
          call: "Kabag. Pelayanan Pelanggan"
        }
      },
      contact: {
        title: "kontak",
        head_text_1: "Hubungi",
        head_text_2: "Kami",
        office: "Kantor",
        workshop: "Lokakarya",
        call: "Telepon"
      }
    },
    {
      name: "en",
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        team: "Team",
        contact: "Contact"
      },
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
        opening_text: "We believe that customer satisfaction is a key to business success. We understand that knowing our customers and their needs will help providing them with the best service.",
        box: {
          services_logistics_cargo: "Logistics & Cargo",
          services_container_office: "Container Office",
          services_warehousing: "Warehousing",
          services_customs_clearance: "Customs Clearance"
        }
      },
      team: {
        title: "team",
        head_text_1: "Our Hardworking",
        head_text_2: "Team",
        opening_text: "We're proud to serve You.",
        member: {
          director: "Director",
          marketing: "Marketing and Promotion Manager",
          operation: "Operation Manager",
          accountant: "Accountant Manager",
          health: "Health and Safety Manager",
          general: "General Affair and Public Relations Manager",
          call: "Call Center Manager"
        }
      },
      contact: {
        title: "contact",
        head_text: "Contact Us",
        office: "Office",
        workshop: "Workshop",
        call: "Call"
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

    // nav
    $("#nav-home").text(langData[id].nav.home)
    $("#nav-about").text(langData[id].nav.about)
    $("#nav-services").text(langData[id].nav.services)
    $("#nav-team").text(langData[id].nav.team)
    $("#nav-contact").text(langData[id].nav.contact)

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
    $("#services-logistics-cargo").text(langData[id].services.box.services_logistics_cargo)
    $("#services-container-office").text(langData[id].services.box.services_container_office)
    $("#services-warehousing").text(langData[id].services.box.services_warehousing)
    $("#services-customs-clearance").text(langData[id].services.box.services_customs_clearance)

    // team
    $("#team-title").text(langData[id].team.title)
    $("#team-head-text-1").text(langData[id].team.head_text_1)
    $("#team-head-text-2").text(langData[id].team.head_text_2)
    $("#team-opening-text").text(langData[id].team.opening_text)
    $("#member-director").text(langData[id].team.member.director)
    $("#member-marketing").text(langData[id].team.member.marketing)
    $("#member-operation").text(langData[id].team.member.operation)
    $("#member-accountant").text(langData[id].team.member.accountant)
    $("#member-health").text(langData[id].team.member.health)
    $("#member-general").text(langData[id].team.member.general)
    $("#member-call").text(langData[id].team.member.call)

    // contact
    $("#contact-title").text(langData[id].contact.title)
    $("#contact-head-text-1").text(langData[id].contact.head_text_1)
    $("#contact-head-text-2").text(langData[id].contact.head_text_2)
    $("#contact-office").text(langData[id].contact.office)
    $("#contact-workshop").text(langData[id].contact.workshop)
    $("#contact-call").text(langData[id].contact.call)

  });


})(jQuery);