export type Tag = "Park" | "Outdoor" | "Cave" | "Historical" | "Indoor" | "Museum" | "Indoor" | "Science Center" | "Amusement" | "Ice Skating" | "Trampoline" | "Art" | "Dining" | "Lodging" | "Mall" | "Game Center" | "Golf"

interface DatasetType {
  address: string,
  image: string,
  lang: string,
  long: string,
  name: string,
  tags: Tag[],
  url: string
}

export const dataset: DatasetType[] = [{
  address: "6700 Azalea Garden Rd, Norfolk, VA 23518",
  image: "https://norfolkbotanicalgarden.org/wp-content/uploads/2017/04/13-perennial-b-hr.jpg",
  lang: "",
  long: "",
  name: "The Norfolk Botanical Gardens",
  tags: ["Park", "Outdoor"],
  url: "https://norfolkbotanicalgarden.org/"
}, {
  address: "3500 Granby St, Norfolk, VA 23504",
  image: "https://virginiazoo.org/wp-content/themes/vazoo/template-parts/header/Virginia-Zoo-logo-300p.png",
  lang: "",
  long: "",
  name: "Norfolk Zoo",
  tags: ["Park", "Outdoor"],
  url: "https://virginiazoo.org/"
}, {
  address: "21073 Skyline Drive, Front Royal, Virginia 22630",
  image: "https://www.nps.gov/shen/planyourvisit/images/20180807_SwiftRunEntrance_SNP5236_mo_3.jpg?maxwidth=1200&amp;maxheight=1200&amp;autorotate=false",
  lang: "",
  long: "",
  name: "Shenandoah National Park",
  tags: ["Park", "Cave", "Outdoor"],
  url: "https://www.nps.gov/shen/index.htm"
}, {
  address: "3200 Mount Vernon Memorial Hwy, Mt Vernon, VA 22121",
  image: "https://mtv-main-assets.mountvernon.org/files/callout/card-full/image/dsc00033.jpg",
  lang: "",
  long: "",
  name: "Mount Vernon",
  tags: ["Historical", "Museum"],
  url: "https://www.mountvernon.org/"
}, {
  address: "1 Busch Gardens Blvd, Williamsburg, VA 23185",
  image: "https://seaworld.com/williamsburg/-/media/busch-gardens-williamsburg/images/logos/busch-gardens-williamsburg-logo-outlined.ashx?version=1_202012235536&amp;la=en&amp;hash=355C60FEF829D5ED5EA0B1394C7F54880FCA6F6C",
  lang: "",
  long: "",
  name: "Busch Gardens",
  tags: ["Amusement", "Park", "Outdoor", "Dining"],
  url: "https://buschgardens.com/williamsburg/"
}, {
  address: "101 Visitor Center Dr, Williamsburg, VA 23185",
  image: "https://www.dailypress.com/resizer/hyeXiK6hZeyUsCSXBC4zMt__MN0=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/CKYPR45675GYHJ2X4DO4MDLXHM.jpg",
  lang: "",
  long: "",
  name: "Colonial Williamsburg",
  tags: ["Historical", "Outdoor"],
  url: "https://www.colonialwilliamsburg.org/"
}, {
  address: "931 Thomas Jefferson Pkwy, Charlottesville, VA 22902",
  image: "https://monticello-www.s3.amazonaws.com/images/footer-lg.jpg",
  lang: "",
  long: "",
  name: "Monticello",
  tags: ["Historical", "Museum", "Outdoor"],
  url: "https://www.monticello.org/"
}, {
  address: "101 Cave Hill Rd, Luray, VA 22835",
  image: "https://luraycaverns.com/wp-content/uploads/2018/07/luray-caverns-giants.jpg",
  lang: "",
  long: "",
  name: "Luray Caverns",
  tags: ["Cave", "Museum"],
  url: "https://luraycaverns.com/"
}, {
  address: "200 N Arthur Ashe Blvd, Richmond, VA 23220",
  image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/virginia/E201410_0402_1b8e0fd6-5056-a36a-0714fcaef4db8f57.jpg",
  lang: "",
  long: "",
  name: "Virginia Museum of Fine Arts",
  tags: ["Museum", "Indoor"],
  url: "http://www.vmfa.museum/"
}, {
  address: "1368 Colonial Parkway, Jamestown, Virginia",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/1639_Jamestown_Church_%282883847775%29.jpg/250px-1639_Jamestown_Church_%282883847775%29.jpg",
  lang: "",
  long: "",
  name: "Jamestown",
  tags: ["Outdoor", "Historical", "Park"],
  url: "https://historicjamestowne.org/"
}, {
  address: "301 Main Street, Yorktown, VA 23690",
  image: "https://www.visityorktown.org/ImageRepository/Document?documentID=816",
  lang: "",
  long: "",
  name: "Yorktown",
  tags: ["Museum", "Outdoor"],
  url: "https://www.visityorktown.org/"
}, {
  address: "15 Appledore Lane, Natural Bridge, VA 24578",
  image: "https://www.dcr.virginia.gov/state-parks/image/data/nb-image-01.jpg",
  lang: "",
  long: "",
  name: "Natural Bridge of Virginia",
  tags: ["Park", "Outdoor"],
  url: "https://www.dcr.virginia.gov/state-parks/natural-bridge"
}, {
  address: "717 General Booth Blvd, Virginia Beach, VA 23451",
  image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_907,q_75,w_1100/v1/clients/virginiabeachva/RED_SEA05_f9b991e2-61d9-4293-bd54-437651ff1a30.jpg",
  lang: "",
  long: "",
  name: "Virginia Aquarium &amp; Marine Science Center",
  tags: ["Museum", "Outdoor", "Indoor"],
  url: "https://www.virginiaaquarium.com/"
}, {
  address: "801 General Booth Blvd, Virginia Beach, VA 23451",
  image: "https://30zhnx2odhzl2kels211p0eu-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/virginia-logo-200x58.png",
  lang: "",
  long: "",
  name: "Adventure Park",
  tags: ["Outdoor", "Amusement"],
  url: "https://myadventurepark.com/location/virginia-beach-va/"
}, {
  address: "2500 W Broad St, Richmond, VA 23220",
  image: "https://smv.org/static/images/logo.png",
  lang: "",
  long: "",
  name: "Richmond Science Center",
  tags: ["Museum", "Science Center"],
  url: "https://smv.org/"
}, {
  address: "677 Craghead St, Danville, VA 24541",
  image: "https://dsc.smv.org/static/images/logo.png",
  lang: "",
  long: "",
  name: "Danville Science Center",
  tags: ["Science Center", "Indoor"],
  url: "https://dsc.smv.org/"
}, {
  address: "2200 Parks Ave, Virginia Beach, VA 23451",
  image: "https://images.ctfassets.net/mcewm80m4225/3VozPM0ZQa14xh4EAUEZup/3fb09606252fb0be70071ce56f9d69b7/55Agnes_Grochulska_ARCHETYPES_3_20x26_inches_oil_on_canvas.jpg?w=1499&amp;h=2008&amp;q=50&amp;fm=webp",
  lang: "",
  long: "",
  name: "Virginia Museum of Contemperary Art",
  tags: ["Museum", "Art", "Indoor"],
  url: "https://virginiamoca.org/"
}, {
  address: "1822 Resort Drive, McGaheysville, VA 22840",
  image: "https://www.massresort.com/upload/cache/home_gallery.image/xs/homegallery_water_park-observation-web__1.jpg",
  lang: "",
  long: "",
  name: "Massanutten Resort",
  tags: ["Outdoor", "Park", "Amusement", "Lodging", "Dining"],
  url: "https://www.massresort.com/"
}, {
  address: "9826 Midlothian Turnpike, North Chesterfield, 23235 ",
  image: "https://d2nuhorlnps36p.cloudfront.net/hotels/47077/47077_040_Exterior.jpg",
  lang: "",
  long: "",
  name: "Best Western Plus Governors Inn",
  tags: ["Lodging", "Dining"],
  url: "https://www.bestwestern.com/en_US/book/hotels-in-north-chesterfield/best-western-plus-governor-s-inn/propertyCode.47077.html"
}, {
  address: "2000 Morton Dr, Charlottesville, VA 22903",
  image: "https://englishinncharlottesville.com/assets/images/header_images/English-Inn-Header.jpg",
  lang: "",
  long: "",
  name: "English Inn",
  tags: ["Lodging", "Dining"],
  url: "https://englishinncharlottesville.com/"
}, {
  address: "229 Safari Ln, Natural Bridge, VA 24578",
  image: "https://www.virginiasafaripark.com/resources/themes/gbzoo/assets/images/vsp-logo.png",
  lang: "",
  long: "",
  name: "Virginia Safari Park",
  tags: ["Outdoor", "Park", "Amusement"],
  url: "https://www.virginiasafaripark.com/"
}, {
  address: "1113 Atlantic Ave, Virginia Beach, VA 23451",
  image: "http://awhm.org/wp-content/uploads/thegem-logos/logo_505e641b3b7aa720850fbc71486e86fe_1x.png",
  lang: "",
  long: "",
  name: "Atlantic Windfowl Heritage Museum",
  tags: ["Museum", "Indoor"],
  url: "https://awhm.org/"
}, {
  address: "Arlington National Cemetery, Arlington, VA 22211",
  image: "https://www.arlingtoncemetery.mil/portals/0/ANC_logo_new.png",
  lang: "",
  long: "",
  name: "Arlington National Cemetery",
  tags: ["Outdoor", "Park"],
  url: "https://www.arlingtoncemetery.mil"
}, {
  address: "1341 Princess Anne Rd, Virginia Beach, VA 23457",
  image: "https://militaryaviationmuseum.org/wp-content/uploads/2018/04/MAM-HeaderLogosmall.png",
  lang: "",
  long: "",
  name: "Military Aviation Museum",
  tags: ["Museum", "Indoor"],
  url: "https://militaryaviationmuseum.org/"
}, {
  address: "780 University Blvd, Harrisonburg, VA 22807",
  image: "https://fblacompetition2022.danieltomov.repl.co/static/Arboretum.png",
  lang: "",
  long: "",
  name: "Edith J. Carrier Arboretum",
  tags: ["Park", "Outdoor"],
  url: "https://www.jmu.edu/arboretum/index.shtml"
}, {
  address: "6511 Sudley Rd, Manassas, VA 20109",
  image: "https://www.nps.gov/common/uploads/grid_builder/mana/crop16_9/4FA88427-D9D3-3DF5-7D5191BA361F3467.jpg?width=465&amp;quality=90&amp;mode=crop",
  lang: "",
  long: "",
  name: "Manassas National Battlefield Park",
  tags: ["Outdoor", "Park", "Historical", "Museum"],
  url: "https://www.nps.gov/mana/index.htm"
}, {
  address: "100 Museum Dr, Newport News, VA 23606",
  image: "https://www.marinersmuseum.org/wp-content/themes/mariners2015/images/logo.png",
  lang: "",
  long: "",
  name: "The Mariner’s Museum and Park",
  tags: ["Museum"],
  url: "https://www.marinersmuseum.org/"
}, {
  address: "E Main St, Charlottesville, VA 22902",
  image: "",
  lang: "",
  long: "",
  name: "Charlottesville Historic Downtown Mall",
  tags: ["Outdoor", "Mall"],
  url: "https://www.downtowncharlottesville.com/"
}, {
  address: "101 Callahan Dr, Alexandria, VA 22301",
  image: "https://cdn.shopify.com/s/files/1/1268/2219/t/4/assets/slideshow_1_2048x2048.jpg?v=12699985927918733577",
  lang: "",
  long: "",
  name: "George Washington Masonic National Memorial",
  tags: ["Museum", "Historical"],
  url: "https://gwmemorial.org/"
}, {
  address: "1914 E Main Street, Richmond, VA 23223",
  image: "https://poemuseum.org/wp-content/uploads/youngPoe-768x895.png",
  lang: "",
  long: "",
  name: "Edgar Allan Poe Museum",
  tags: ["Museum", "Historical"],
  url: "https://poemuseum.org/"
}, {
  address: "1700 Hampton St, Richmond, VA 23220",
  image: "https://maymont.org/wp-content/uploads/2019/09/maymont-logo-768x186.png.webp",
  lang: "",
  long: "",
  name: "Maymont Park",
  tags: ["Park", "Outdoor"],
  url: "https://maymont.org/"
}, {
  address: "5781 S Lee Hwy, Natural Bridge, VA 24578",
  image: "https://static.wixstatic.com/media/64d161_c75f7fc07ebf4f0ebdf85497d9f8e70f~mv2.jpg/v1/fill/w_285,h_268,al_c,q_80,usm_0.66_1.00_0.01/64d161_c75f7fc07ebf4f0ebdf85497d9f8e70f~mv2.webp",
  lang: "",
  long: "",
  name: "Dinosaur Kingdom II",
  tags: ["Park", "Outdoor"],
  url: "https://www.dinosaurkingdomii.com/"
}, {
  address: "",
  image: "",
  lang: "",
  long: "",
  name: "",
  tags: [],
  url: ""
}, {
  address: "1 Waterside Dr, Norfolk, VA 23510",
  image: "https://nauticus.org/wp-content/uploads/2019/02/Nauticus-logo-white-1.png",
  lang: "",
  long: "",
  name: "Nauticus",
  tags: ["Museum", "Historical", "Indoor"],
  url: "https://nauticus.org/"
}, {
  address: "524 J Clyde Morris Blvd, Newport News, VA 23601",
  image: "https://thevlm.org/wp-content/uploads/logo.png",
  lang: "",
  long: "",
  name: "Virginia Living Museum",
  tags: ["Museum", "Outdoor", "Park"],
  url: "https://thevlm.org/"
}, {
  address: "549 E Rochambeau Dr, Williamsburg, VA 23188",
  image: "https://cdn1.greatwolf.com/content/gwl-logo.png",
  lang: "",
  long: "",
  name: "Great Wolf Lodge",
  tags: ["Lodging", "Amusement", "Indoor", "Dining", "Game Center"],
  url: "https://www.greatwolf.com/williamsburg"
}, {
  address: "849 General Booth Blvd, Virginia Beach, VA 23451",
  image: "https://www.oceanbreezewaterpark.com/sites/oceanbreeze2/templates/default/images/logo.svg",
  lang: "",
  long: "",
  name: "Ocean Breeze Waterpark",
  tags: ["Amusement", "Outdoor", "Dining"],
  url: "https://www.oceanbreezewaterpark.com/"
}, {
  address: "700 S Birdneck Rd, Virginia Beach, VA 23451",
  image: "https://vbmotorworld.com/wp-content/themes/yootheme/cache/logo-a6042702.png",
  lang: "",
  long: "",
  name: "Motor World",
  tags: ["Amusement", "Outdoor"],
  url: "https://vbmotorworld.com/"
}, {
  address: "4621 Columbus St #100, Virginia Beach, VA 23462",
  image: "https://www.apexentertainment.com/virginia-beach/wp-content/uploads/2019/11/apex-entertainment-logo-new.svg",
  lang: "",
  long: "",
  name: "APEX Entertainment",
  tags: ["Amusement", "Game Center", "Indoor"],
  url: "https://www.apexentertainment.com/virginia-beach/"
}, {
  address: "825 Greenbrier Cir P, Chesapeake, VA 23320",
  image: "https://defy.com/wp-content/themes/storefront-child-theme-master/assets/images/defy/defy-logo-large.png",
  lang: "",
  long: "",
  name: "DEFY Chesapeake",
  tags: ["Trampoline", "Amusement", "Indoor"],
  url: "https://defy.com/locations/defy-chesapeake/"
}, {
  address: "1410 Central Park Blvd, Fredericksburg, VA 22401",
  image: "",
  lang: "",
  long: "",
  name: "Skyzone Fredricksburg",
  tags: ["Amusement", "Trampoline", "Indoor"],
  url: "https://www.skyzone.com/fredericksburg"
}, {
  address: "21595 Smith Switch Rd, Ashburn, VA 20147",
  image: "https://cdn4.sportngin.com/attachments/logo_graphic/8850/1527/logo_touch_icon_size_120.png",
  lang: "",
  long: "",
  name: "Ashburn Ice House",
  tags: ["Ice Skating", "Indoor"],
  url: "https://www.ashburnice.com/"
}, {
  address: "176 Water Country Pkwy, Williamsburg, VA 23185",
  image: "https://watercountryusa.com/-/media/busch-gardens-williamsburg/images/logos/water-country-usa-logo.ashx?version=1_201903222037&amp;h=60&amp;w=100&amp;la=en&amp;hash=CECEE958ABB130440F805C730C21DA039131416B",
  lang: "",
  long: "",
  name: "Water Country USA",
  tags: ["Amusement", "Outdoor", "Dining"],
  url: "https://watercountryusa.com/"
}, {
  address: "1800 Lakeside Avenu, Richmond, Virginia 23228",
  image: "",
  lang: "",
  long: "",
  name: "Lewis Ginter Botanical Garden",
  tags: ["Park", "Outdoor"],
  url: "https://www.lewisginter.org/"
}, {
  address: "14390 Air and Space Museum Pkwy, Alexandria, VA 20151",
  image: "https://airandspace.si.edu/themes/nasm_theme/favicon.ico",
  lang: "",
  long: "",
  name: "Steven F. Udvar-Hazy Center",
  tags: ["Indoor", "Museum"],
  url: "https://airandspace.si.edu/udvar-hazy-center"
}, {
  address: "5537 Centerville Rd, Williamsburg, VA 23188",
  image: "https://www.goape.com/wp-content/uploads/2019/07/goape-staging.png",
  lang: "",
  long: "",
  name: "Go Ape! Williamsburg",
  tags: ["Outdoor", "Amusement", "Park"],
  url: "https://www.goape.com/location/virginia-williamsburg/"
}, {
  address: "5444 Greenwich Rd, Virginia Beach, VA 23462",
  image: "https://s3.topgolf.com/theme/logos/logo-TEG-short-filled-white.svg?resize.width=319&amp;amp;resize.height=86&amp;amp;resize.method=cover",
  lang: "",
  long: "",
  name: "Top Golf",
  tags: ["Outdoor", "Golf"],
  url: "https://topgolf.com/us/virginia-beach/"
}, {
  address: "213 25th St, Virginia Beach, VA 23451",
  image: "http://www.kingneptunesminigolf.com/gallery/course.jpg",
  lang: "",
  long: "",
  name: "King Neptune's Golf",
  tags: ["Indoor", "Golf"],
  url: "http://www.kingneptunesminigolf.com/"
}, {
  address: "1198 George Washington Memorial Pkwy, Alexandria, VA 22314",
  image: "",
  lang: "",
  long: "",
  name: "Mount Vernon Trail",
  tags: ["Outdoor", "Park"],
  url: "https://www.nps.gov/gwmp/planyourvisit/mtvernontrail.htm"
}, {
  address: "601 N Manchester St, Arlington, VA 22203",
  image: "",
  lang: "",
  long: "",
  name: "Bluemont Park",
  tags: ["Park", "Outdoor"],
  url: "https://www.arlingtonva.us/Government/Departments/Parks-Recreation/Locations/Parks/Bluemont-Park"
}, {
  address: "20315 Commonwealth Center Dr, Ashburn, VA 20147",
  image: "",
  lang: "",
  long: "",
  name: "iFLY Indoor Skydiving - Loudoun",
  tags: ["Indoor", "Amusement"],
  url: "https://www.iflyworld.com/loudoun/"
}, {
  address: "20356 Commonwealth Center Dr, Ashburn, VA 20147",
  image: "",
  lang: "",
  long: "",
  name: "Topgolf Loudoun",
  tags: ["Golf", "Outdoor"],
  url: "https://topgolf.com/us/loudoun/"
}]