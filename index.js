// Array containing image links and product data
var products = [
  {
    imageUrl: "https://t4.ftcdn.net/jpg/07/41/01/41/360_F_741014161_o9PTiiWFB2gWrLPiflaQOxB0n6OxcJPB.jpg",
    name:  "laptop gaming",
    price: "DT 3500.99 "
  },
  {
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-8WW2H5L8L1VP-VN900298-AsusTUFF15Gaming-TUF506HEDS74-highlighthero:VP2-859x540",
    name: "tuf gaming laptop",
    price: "DT 2000.99"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/19259/tunisie/small/ecran-gamer-redragon-amber-ii-27-180hz1ms-free-sync-va-led-curved-tunisie.jpg",
    name: "Gaming Monitor",
    price: "DT 299.99"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/21810/tunisie/small/pc-portable-lenovo-loq-15iax9-i5-12450hx-16go-512go-ssd-rtx3050-tunisie.jpg",
    name: "PC Portable - LENOVO LOQ 15IAX9 i5-12450HX 16Go 512Go SSD RTX3050",
    price: "DT 800.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1624008404238.webp&w=256&q=75",
    name: "SPIRIT OF GAMER XPERT H600 | 7.1 | RGB",
    price: "DT 79.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1712403899883.webp&w=256&q=75",
    name: "CASQUE STAR WAVE SW-GB102",
    price: "DT 80.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1727179109663.webp&w=256&q=75",
    name: "CASQUE WHITE SHARK BUTTERFLY WGH-2442W | BLANC",
    price: "DT 59.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1715261653595.webp&w=256&q=75",
    name: "CLAVIER AQIRYS MIRA Blanc Wireless",
    price: "DT 129.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1731763901586.webp&w=256&q=75",
    name: "MARS GAMING MKMINIPRO, HOT-SWAPPABLE RGB MECHANICAL BLUE SWITCH - BLACK - QWERTY",
    price: "DT 45.00"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1613659496534.webp&w=256&q=75",
    name: "SANDBERG RAGESTORM MECH",
    price: "DT 39.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1714727947787.webp&w=640&q=75",
    name: "TAPIS SOURIS GAMING STAR Wave MP301",
    price: "DT 799.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1711112331798.jpg&w=256&q=75",
    name: "TAPIS SOURIS GAMING STAR Wave MP002",
    price: "DT 499.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1649773077593.webp&w=256&q=75",
    name: "MSI MAG CH120I Grey",
    price: "DT 600.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1725528849426.webp&w=256&q=75",
    name: "CHAISE MARS GAMING MGC-ERGO MGCERGOBG VERT",
    price: "DT 750.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1708694997067.webp&w=640&q=75",
    name: "Asus VG279Q3A TUF 27'' FHD IPS | 180Hz-IPS",
    price: "DT 999.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1709571165435.webp&w=256&q=75",
    name: "MSI G2412F 24'' IPS FHD | 180 HZ | 1 MS",
    price: "DT 800.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1737731545109.webp&w=256&q=75",
    name: "Ecran ThinkVision S27i-30 27″ FHD | 100Hz | 4Ms",
    price: "DT 500.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1653670193851.webp&w=640&q=75",
    name: "Volant Logitech G29 Driving Force",
    price: "DT 1200.99"
  },
  {
    imageUrl: "https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1652104714228.webp&w=256&q=75",
    name: "Logitech G Driving Force Shifter",
    price: "DT 88.99"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/17399/tunisie/medium/pc-gamer-qubo-pack-ryzen-5-5600g-radeon-vega-7-graphics-16gb-512-gb-white-tunisie.jpg",
    name: "PC Gamer QUBO PACK - Ryzen 5 5600G - Radeon Vega 7 Graphics - 16Gb - 512 Gb - WHITE",
    price: "DT 1900"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/19264/tunisie/medium/pc-gamer-raptor-pack-ryzen-3-3200g-8gb-250gb-tunisie.jpg",
    name: "PC Gamer RAPTOR PACK - Ryzen 3 3200G - 8Gb - 250Gb",
    price: "DT 1500.99"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/19940/tunisie/home/pc-gamer-qubo-pack-ryzen-5-5500gt-radeon-vega-7-graphics-16gb-512-gb-white-tunisie.jpg",
    name: "PC Gamer QUBO PACK - Ryzen 5 5500GT - Radeon Vega 7 Graphics - 16Gb - 512 Gb - WHITE",
    price: "DT 1435.99"
  },
  {
    imageUrl: "https://www.sbsinformatique.com/20147/tunisie/medium/pc-gamer-back-to-school-ii-pack-ryzen5-4500-rtx-3050-16gb-512-gb-tunisie.jpg",
    name: "PC GAMER BACK TO SCHOOL II PACK - Ryzen5 4500 - RTX 3050 - 16Gb - 512 Gb",
    price: "DT 29.99"
  },
  {
  imageUrl :"https://www.sbsinformatique.com/20042/tunisie/medium/pc-gamer-pack-nextgen-iii-ryzen-5-4600g-rtx-3050-16gb-512-gb-tunisie.jpg",
  name :"PC Gamer Pack NextGen III - Ryzen 5 4600G - RTX 3050 - 16Gb - 512 Gb",
  price : "DT 1435.99"

  }
];




// Function to display products
$(document).ready(function() {
  var cart = []

  function renderProducts(Products) {
    $('#productsContainer').empty();
    for (var i = 0; i < Products.length; i++) {
      var product = Products[i]
      var linkhtml = `
        <div class="product">
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">${product.price} </p>
          <button class="btn" data-id="${i}">buy</button>
        </div>
      `
      $('#productsContainer').append(linkhtml)
    }
  }

  renderProducts(products)

  $('#searchInput').on('input', function() {
    var search = $(this).val().toLowerCase()
    var result = []
    for (var i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase().includes(search)) {
        result.push(products[i])
      }
    }
    renderProducts(result)
  })
})




  
  





