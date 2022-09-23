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

export const MAUIAIR = "Kahului (OGG - Kahului)";
export const LAHAINA = "Lahaina, HI";
export const KAANAPALI = "Ka'anapali, HI";
export const KAPALUA = "Kapalua, HI";
export const KIHEI = "Kihei, HI";
export const WAILEA = "Wailea, HI";

function dateFormater(date) {
  function format(da) {
    return {
      month: da.getMonth() + 1,
      day: da.getDate(),
      year: da.getFullYear(),
    };
  }

  return {
    date1: { ...format(date.startDate), time: date.pickTime },
    date2: { ...format(date.endDate), time: date.dropTime },
  };
}

export function createLink(loc, dateState) {
  const { date1, date2 } = dateFormater(dateState);
  const locationInfo = {
    olon: "",
    olat: "",
    locationLink: "",
  };
  let link = "";
  switch (loc) {
    case MAUIAIR:
      link = `https://www.expedia.com/carsearch?date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&dlat=&dlon=&dpln=4671311&drid1=&loc2=&locn=Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29&olat=20.894489&olon=-156.437168&pickupCode=OGG&rfrr=Homepage&time1=${date1.time}&time2=${date2.time}`;
      break;

    case LAHAINA:
      link = `https://www.expedia.com/carsearch?locn=Lahaina&loc2=&date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&d1=${date1.year}-${date1.month}-${date1.day}&d2=${date2.year}-${date2.month}-${date2.day}&aarpcr=off&vend=&pickupIATACode=OGG&dpln=8499&returnIATACode=&drid1=&time1=${date1.time}&time2=${date2.time}&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage`;

      break;
    case KAANAPALI:
      link = `https://www.expedia.com/carsearch?locn=Kaanapali&loc2=&date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&d1=${date1.year}-${date1.month}-${date1.day}&d2=${date2.year}-${date2.month}-${date2.day}&aarpcr=off&vend=&pickupIATACode=OGG&dpln=800065&returnIATACode=&drid1=&time1=${date1.time}&time2=${date2.time}&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage`;

      break;

    case KAPALUA:
      link = `https://www.expedia.com/carsearch?locn=Kapalua+%28JHM+-+West+Maui%29&loc2=&date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&d1=${date1.year}-${date1.month}-${date1.day}&d2=${date2.year}-${date2.month}-${date2.day}&aarpcr=off&vend=&pickupIATACode=JHM&dpln=6024505&returnIATACode=&drid1=&time1=${date1.time}&time2=${date2.time}&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage`;

      break;

    case KIHEI:
      link = `https://www.expedia.com/carsearch?locn=Kihei&loc2=&date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&d1=${date1.year}-${date1.month}-${date1.day}&d2=${date2.year}-${date2.month}-${date2.day}&aarpcr=off&vend=&pickupIATACode=OGG&dpln=9304&returnIATACode=&drid1=&time1=${date1.time}&time2=${date2.time}&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage`;

      break;

    case WAILEA:
      link = `https://www.expedia.com/carsearch?locn=Wailea&loc2=&date1=${date1.month}%2F${date1.day}%2F${date1.year}&date2=${date2.month}%2F${date2.day}%2F${date2.year}&d1=${date1.year}-${date1.month}-${date1.day}&d2=${date2.year}-${date2.month}-${date2.day}&aarpcr=off&vend=&pickupIATACode=OGG&dpln=7739&returnIATACode=&drid1=&time1=${date1.time}&time2=${date2.time}&olat=&olon=&dlat=&dlon=&dagv=1&subm=1&fdrp=0&ttyp=2&acop=2&rdus=10&rdct=1&styp=4&rfrr=Homepage`;

      break;

    default:
      locationInfo.locationLink =
        '"Kahului%2C%20HI%2C%20United%20States%20of%20America%20%28OGG%29"';
  }

  return link;
}
