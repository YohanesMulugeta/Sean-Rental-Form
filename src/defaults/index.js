/*
Maui Airport (OGG - Kahului) Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29
Lahaina, HI Lahaina%2C%20Hawaii%2C%20United%20States%20of%20America
Ka'anapali, HI Kaanapali%2C%20Hawaii%2C%20United%20States%20of%20America
Kapalua, HI Kapalua%2C%20Hawaii%2C%20United%20States%20of%20America
Kihei, HI Kihei%2C%20Hawaii%2C%20United%20States%20of%20America
Wailea, HI Wailea%2C%20Hawaii%2C%20United%20States%20of%20America

https://www.expedia.com/carsearch?locn=Lahaina&loc2=&date1=10%2F5%2F2022&date2=10%2F6%2F2022&d1=2022-10-05&d2=2022-10-06&aarpcr=off&vend=&pickupIATACode=OGG&dpln=8499&returnIATACode=&drid1=&time1=1030AM&time2=1030AM&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage


Air lines
https://www.expedia.com/carsearch?date1=10%2F14%2F2022&date2=10%2F21%2F2022&dlat=&dlon=&dpln=4671311&drid1=&loc2=&locn=Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29&olat=20.894489&olon=-156.437168&pickupCode=OGG&rfrr=Homepage&time1=1030AM&time2=1030AM

expedia.com/carsearch?aarpcr=off&acop=2&d1=2022-10-05&d2=2022-10-06&dagv=1&date1=10%2F5%2F2022&date2=10%2F6%2F2022&dlat=&dlon=&dpln=8499&drid1=&fdrp=0&loc2=&locn=Lahaina&olat=&olon=&pickupIATACode=OGG&rdct=1&rdus=10&returnIATACode=&rfrr=Homepage&styp=4&subm=1&time1=1030AM&time2=1030AM&ttyp=2&vend=
 */

export const MAUIAIR = "mauiair";
export const LAHAINA = "lahiana";
export const KAANAPALI = "kaanapali";
export const KAPALUA = "kapalua";
export const KIHEI = "kihei";
export const WAILEA = "wailea";

export function createLink(loc, date1, date2) {
  const locationInfo = {
    olon: "",
    olat: "",
    locationLink: "",
  };
  switch (loc) {
    case MAUIAIR:
      locationInfo.locationLink =
        "Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29";
      locationInfo.olon = "-156.437168&";
      locationInfo.olat = "20.894489";

      break;

    case LAHAINA:
      locationInfo.locationLink =
        "Lahaina%2C%20Hawaii%2C%20United%20States%20of%20America";

      break;
    case KAANAPALI:
      locationInfo.locationLink =
        "Kaanapali%2C%20Hawaii%2C%20United%20States%20of%20America";

      break;

    case KAPALUA:
      locationInfo.locationLink =
        "Kapalua%2C%20Hawaii%2C%20United%20States%20of%20America";

      break;

    case KIHEI:
      locationInfo.locationLink =
        "Kihei%2C%20Hawaii%2C%20United%20States%20of%20America";

      break;

    case WAILEA:
      locationInfo.locationLink =
        "Wailea%2C%20Hawaii%2C%20United%20States%20of%20America";

      break;

    default:
      locationInfo.locationLink =
        '"Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29"';
  }
  const template = `https://www.expedia.com/carsearch?date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&dlat=&dlon=&dpln=4671311&drid1=&loc2=&locn=${locationInfo.locationLink}%29&olat=${locationInfo.olat}&olon=${locationInfo.olon}pickupCode=OGG&rfrr=Homepage&time1=1030AM&time2=1030AM`;

  return template;
}
